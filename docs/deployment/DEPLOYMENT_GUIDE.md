# Deployment Guide - B2B Wholesale Distribution Platform

## Overview

This guide covers infrastructure setup, deployment strategies, and operational procedures for the B2B wholesale platform.

---

## Table of Contents
1. [Infrastructure Overview](#infrastructure-overview)
2. [Environment Setup](#environment-setup)
3. [Docker Configuration](#docker-configuration)
4. [Kubernetes Deployment](#kubernetes-deployment)
5. [CI/CD Pipeline](#ci-cd-pipeline)
6. [Monitoring & Logging](#monitoring-logging)
7. [Backup & Recovery](#backup-recovery)
8. [Scaling Strategy](#scaling-strategy)
9. [Security Hardening](#security-hardening)
10. [Troubleshooting](#troubleshooting)

---

## INFRASTRUCTURE OVERVIEW

### Architecture Components

```
┌─────────────────────────────────────────────────────────┐
│                     Cloud Provider (AWS)                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐      ┌──────────────┐               │
│  │ Route 53     │──────│ CloudFront   │               │
│  │ (DNS)        │      │ (CDN)        │               │
│  └──────────────┘      └──────────────┘               │
│                              │                          │
│                              ▼                          │
│  ┌───────────────────────────────────────────┐        │
│  │  Application Load Balancer                │        │
│  └───────────────────────────────────────────┘        │
│                       │                                │
│                       ▼                                │
│  ┌───────────────────────────────────────────┐        │
│  │  EKS Cluster (Kubernetes)                 │        │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  │        │
│  │  │Frontend │  │Backend  │  │Worker   │  │        │
│  │  │Pods     │  │Services │  │Pods     │  │        │
│  │  └─────────┘  └─────────┘  └─────────┘  │        │
│  └───────────────────────────────────────────┘        │
│                       │                                │
│                       ▼                                │
│  ┌──────────────────────────────────────────┐         │
│  │  Data Layer                              │         │
│  │  ┌────────┐ ┌────────┐ ┌────────┐       │         │
│  │  │RDS     │ │ElastiC.│ │S3      │       │         │
│  │  │Postgres│ │Redis   │ │Storage │       │         │
│  │  └────────┘ └────────┘ └────────┘       │         │
│  └──────────────────────────────────────────┘         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### AWS Services Used

- **Route 53**: DNS management
- **CloudFront**: CDN for static assets
- **ALB**: Application Load Balancer
- **EKS**: Kubernetes cluster
- **RDS**: PostgreSQL database
- **ElastiCache**: Redis for caching
- **S3**: Object storage
- **ECR**: Docker container registry
- **CloudWatch**: Monitoring and logging
- **Secrets Manager**: Secure credentials storage
- **VPC**: Network isolation
- **IAM**: Access management

---

## ENVIRONMENT SETUP

### Environments

We maintain four environments:

1. **Development** (Local)
   - Purpose: Local development
   - Infrastructure: Docker Compose
   - Database: Local PostgreSQL

2. **Staging** (staging.b2bplatform.com)
   - Purpose: Testing and QA
   - Infrastructure: Kubernetes (smaller cluster)
   - Database: RDS PostgreSQL (smaller instance)

3. **Production** (b2bplatform.com)
   - Purpose: Live platform
   - Infrastructure: Kubernetes (full cluster)
   - Database: RDS PostgreSQL (multi-AZ)

4. **DR** (Disaster Recovery)
   - Purpose: Backup region
   - Infrastructure: Standby cluster
   - Database: Read replica + backups

### Environment Variables

**Backend (.env)**:
```bash
# Application
NODE_ENV=production
APP_URL=https://b2bplatform.com
API_URL=https://api.b2bplatform.com
PORT=3000

# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname
DATABASE_POOL_SIZE=20

# Redis
REDIS_URL=redis://redis-host:6379
REDIS_TTL=3600

# Authentication
JWT_SECRET=your-secret-key
JWT_EXPIRY=3600
REFRESH_TOKEN_EXPIRY=604800

# AWS
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
S3_BUCKET=b2b-platform-assets

# Payment
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user
SMTP_PASS=pass

# Monitoring
SENTRY_DSN=https://...

# Feature Flags
ENABLE_NEW_CHECKOUT=true
```

**Frontend (.env.production)**:
```bash
NEXT_PUBLIC_API_URL=https://api.b2bplatform.com
NEXT_PUBLIC_CDN_URL=https://cdn.b2bplatform.com
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
NEXT_PUBLIC_GOOGLE_ANALYTICS=GA-XXXXXXX
```

---

## DOCKER CONFIGURATION

### Dockerfile (Backend - Node.js)

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

USER nodejs

EXPOSE 3000

CMD ["node", "dist/main.js"]
```

### Dockerfile (Frontend - Next.js)

```dockerfile
# Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
```

### Docker Compose (Development)

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: b2b_platform
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.dev
    ports:
      - "3001:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/b2b_platform
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis
    volumes:
      - ./backend:/app
      - /app/node_modules

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:3001/api
    depends_on:
      - backend
    volumes:
      - ./frontend:/app
      - /app/node_modules

volumes:
  postgres_data:
  redis_data:
```

---

## KUBERNETES DEPLOYMENT

### Namespace

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: b2b-platform
```

### Backend Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
  namespace: b2b-platform
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: backend
        image: <ECR_REPO>/backend:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: backend-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: backend-secrets
              key: redis-url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: backend-service
  namespace: b2b-platform
spec:
  selector:
    app: backend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP
```

### Frontend Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  namespace: b2b-platform
spec:
  replicas: 3
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: frontend
        image: <ECR_REPO>/frontend:latest
        ports:
        - containerPort: 3000
        env:
        - name: NEXT_PUBLIC_API_URL
          value: "https://api.b2bplatform.com"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: frontend-service
  namespace: b2b-platform
spec:
  selector:
    app: frontend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP
```

### Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: platform-ingress
  namespace: b2b-platform
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/certificate-arn: <ACM_CERT_ARN>
    alb.ingress.kubernetes.io/ssl-redirect: '443'
spec:
  rules:
  - host: b2bplatform.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80
  - host: api.b2bplatform.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: backend-service
            port:
              number: 80
```

### HorizontalPodAutoscaler

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-hpa
  namespace: b2b-platform
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

---

## CI CD PIPELINE

### GitHub Actions Workflow

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Run linter
        run: npm run lint
        
      - name: Type check
        run: npm run type-check

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
          
      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1
        
      - name: Build and push Docker image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          ECR_REPOSITORY: b2b-backend
          IMAGE_TAG: ${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
          docker tag $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPOSITORY:latest
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
          
      - name: Update kubeconfig
        run: |
          aws eks update-kubeconfig --name b2b-platform-cluster --region us-east-1
          
      - name: Deploy to Kubernetes
        run: |
          kubectl apply -f k8s/
          kubectl rollout status deployment/backend -n b2b-platform
          kubectl rollout status deployment/frontend -n b2b-platform
          
      - name: Verify deployment
        run: |
          kubectl get pods -n b2b-platform
          kubectl get services -n b2b-platform
```

---

## MONITORING & LOGGING

### Prometheus Configuration

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
  namespace: monitoring
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    
    scrape_configs:
      - job_name: 'kubernetes-pods'
        kubernetes_sd_configs:
          - role: pod
        relabel_configs:
          - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
            action: keep
            regex: true
```

### Grafana Dashboards

**Key Metrics to Monitor**:
- Request rate (requests/second)
- Error rate (errors/second)
- Response time (p50, p95, p99)
- Database query performance
- API endpoint performance
- Resource utilization (CPU, Memory)
- Active users
- Transaction volume

### ELK Stack (Logging)

```yaml
# Filebeat configuration
filebeat.inputs:
  - type: container
    paths:
      - '/var/lib/docker/containers/*/*.log'

processors:
  - add_kubernetes_metadata:
      host: ${NODE_NAME}
      matchers:
        - logs_path:
            logs_path: "/var/lib/docker/containers/"

output.elasticsearch:
  hosts: ["${ELASTICSEARCH_HOST}:9200"]
  indices:
    - index: "b2b-platform-%{+yyyy.MM.dd}"
```

### Alerts

```yaml
# AlertManager configuration
groups:
  - name: platform-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
        for: 5m
        annotations:
          summary: "High error rate detected"
          
      - alert: HighResponseTime
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
        for: 5m
        annotations:
          summary: "95th percentile response time > 1s"
          
      - alert: DatabaseDown
        expr: up{job="postgres"} == 0
        for: 1m
        annotations:
          summary: "PostgreSQL database is down"
```

---

## BACKUP & RECOVERY

### Database Backup Strategy

**Automated Backups (RDS)**:
```
- Daily automated snapshots
- 30-day retention
- Cross-region replication
- Point-in-time recovery (5-minute granularity)
```

**Manual Backups**:
```bash
# Manual backup script
pg_dump -h <RDS_ENDPOINT> -U <USER> -d b2b_platform > backup_$(date +%Y%m%d).sql

# Upload to S3
aws s3 cp backup_$(date +%Y%m%d).sql s3://b2b-backups/database/
```

### S3 Backup

- Versioning enabled
- Cross-region replication
- Glacier archival after 90 days

### Recovery Procedures

**Database Recovery**:
```bash
# Restore from snapshot
aws rds restore-db-instance-from-db-snapshot \
  --db-instance-identifier b2b-platform-restored \
  --db-snapshot-identifier snapshot-id

# Point-in-time restore
aws rds restore-db-instance-to-point-in-time \
  --source-db-instance-identifier b2b-platform \
  --target-db-instance-identifier b2b-platform-restored \
  --restore-time 2024-01-01T12:00:00Z
```

**Application Recovery**:
```bash
# Rollback deployment
kubectl rollout undo deployment/backend -n b2b-platform

# Or deploy specific version
kubectl set image deployment/backend backend=<ECR_REPO>/backend:v1.2.3 -n b2b-platform
```

---

## SCALING STRATEGY

### Vertical Scaling

**Database**:
- Monitor RDS metrics
- Upgrade instance type as needed
- Scale storage independently

**Application**:
- Adjust pod resource limits
- Update HPA thresholds

### Horizontal Scaling

**Auto-scaling Rules**:
```yaml
# Scale based on CPU
- type: Resource
  resource:
    name: cpu
    target:
      type: Utilization
      averageUtilization: 70

# Scale based on memory
- type: Resource
  resource:
    name: memory
    target:
      type: Utilization
      averageUtilization: 80

# Scale based on custom metrics (requests/sec)
- type: Pods
  pods:
    metric:
      name: http_requests_per_second
    target:
      type: AverageValue
      averageValue: "1000"
```

---

## SECURITY HARDENING

### Network Security

- VPC with private subnets
- Security groups restricting access
- WAF rules for DDoS protection
- SSL/TLS certificates (ACM)

### Application Security

```yaml
# Pod Security Policy
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  runAsUser:
    rule: MustRunAsNonRoot
  fsGroup:
    rule: RunAsAny
  volumes:
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
```

### Secrets Management

```bash
# Store secrets in AWS Secrets Manager
aws secretsmanager create-secret \
  --name b2b-platform/database-url \
  --secret-string "postgresql://..."

# Use External Secrets Operator in K8s
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: backend-secrets
spec:
  secretStoreRef:
    name: aws-secrets-manager
  target:
    name: backend-secrets
  data:
    - secretKey: database-url
      remoteRef:
        key: b2b-platform/database-url
```

---

## TROUBLESHOOTING

### Common Issues

**Pods not starting**:
```bash
# Check pod status
kubectl get pods -n b2b-platform

# View pod logs
kubectl logs <pod-name> -n b2b-platform

# Describe pod for events
kubectl describe pod <pod-name> -n b2b-platform
```

**Database connection issues**:
```bash
# Test connection from pod
kubectl exec -it <pod-name> -n b2b-platform -- \
  psql -h <RDS_ENDPOINT> -U <USER> -d b2b_platform
```

**High memory usage**:
```bash
# Check resource usage
kubectl top pods -n b2b-platform

# Check for memory leaks in application logs
kubectl logs <pod-name> -n b2b-platform | grep -i "memory"
```

---

## Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] Code review approved
- [ ] Security scan completed
- [ ] Database migrations tested
- [ ] Environment variables configured
- [ ] Secrets updated
- [ ] Backup created

### Deployment
- [ ] Deploy to staging first
- [ ] Run smoke tests
- [ ] Monitor error rates
- [ ] Check application logs
- [ ] Verify database connectivity
- [ ] Test critical user flows

### Post-Deployment
- [ ] Monitor metrics for 30 minutes
- [ ] Check error tracking (Sentry)
- [ ] Verify new features working
- [ ] Update documentation
- [ ] Notify team of deployment
- [ ] Schedule post-mortem (if issues)

---

This deployment guide provides a solid foundation for reliably deploying and operating the B2B wholesale platform at scale.
