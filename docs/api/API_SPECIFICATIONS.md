# API Specifications - B2B Wholesale Distribution Platform

## Table of Contents
1. [API Overview](#api-overview)
2. [Authentication](#authentication)
3. [Core Endpoints](#core-endpoints)
4. [Data Models](#data-models)
5. [Error Handling](#error-handling)
6. [Rate Limiting](#rate-limiting)
7. [Webhooks](#webhooks)
8. [Best Practices](#best-practices)

---

## API OVERVIEW

### Base URL
```
Production:  https://api.b2bplatform.com/v1
Staging:     https://api-staging.b2bplatform.com/v1
Development: http://localhost:3000/api/v1
```

### API Versioning
- Version format: `/v{number}` in URL path
- Current version: `v1`
- Deprecated versions supported for 12 months

### Supported Formats
- **Request**: JSON (`application/json`)
- **Response**: JSON (`application/json`)
- **File Upload**: `multipart/form-data`

### HTTP Methods
- `GET` - Retrieve resources
- `POST` - Create resources
- `PUT` - Update resources (full)
- `PATCH` - Update resources (partial)
- `DELETE` - Delete resources

---

## AUTHENTICATION

### Authentication Methods

#### JWT Bearer Token
```http
Authorization: Bearer {access_token}
```

#### API Key (for service-to-service)
```http
X-API-Key: {api_key}
```

### Authentication Endpoints

#### POST /auth/register
Register a new user.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "firstName": "John",
  "lastName": "Doe",
  "userType": "manufacturer" | "retailer",
  "companyName": "Acme Corp"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "email": "user@example.com",
    "userType": "manufacturer",
    "emailVerified": false
  },
  "message": "Registration successful. Please verify your email."
}
```

---

#### POST /auth/login
Login and receive access token.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600,
    "tokenType": "Bearer",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "role": "manufacturer",
      "permissions": ["product:create", "order:read"]
    }
  }
}
```

---

#### POST /auth/refresh-token
Refresh access token using refresh token.

**Request Body**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "new_access_token",
    "expiresIn": 3600
  }
}
```

---

## CORE ENDPOINTS

### 3.1 Products API

#### GET /products
List products with filtering and pagination.

**Query Parameters**:
```
?page=1
&limit=20
&category=electronics
&minPrice=10
&maxPrice=100
&manufacturerId=uuid
&search=laptop
&sortBy=price
&sortOrder=asc
&status=active
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": "uuid",
        "sku": "PROD-001",
        "name": "Product Name",
        "slug": "product-name",
        "category": {
          "id": "uuid",
          "name": "Electronics"
        },
        "manufacturer": {
          "id": "uuid",
          "companyName": "Acme Corp",
          "rating": 4.5
        },
        "price": 99.99,
        "currency": "USD",
        "moq": 50,
        "stockQuantity": 1000,
        "mainImage": "https://cdn.example.com/image.jpg",
        "rating": 4.7,
        "totalReviews": 123,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 500,
      "totalPages": 25,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

---

#### GET /products/:id
Get single product details.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "sku": "PROD-001",
    "name": "Product Name",
    "slug": "product-name",
    "shortDescription": "Brief description",
    "fullDescription": "Detailed description",
    "category": {
      "id": "uuid",
      "name": "Electronics",
      "slug": "electronics"
    },
    "manufacturer": {
      "id": "uuid",
      "companyName": "Acme Corp",
      "slug": "acme-corp",
      "location": "China",
      "rating": 4.5,
      "totalReviews": 200,
      "isVerified": true
    },
    "pricing": {
      "basePrice": 99.99,
      "currency": "USD",
      "tiers": [
        {"minQty": 50, "maxQty": 99, "price": 95.00},
        {"minQty": 100, "maxQty": 499, "price": 90.00},
        {"minQty": 500, "maxQty": null, "price": 85.00}
      ]
    },
    "inventory": {
      "stockQuantity": 1000,
      "moq": 50,
      "moqUnit": "units",
      "lowStockThreshold": 100,
      "productionTimeDays": 15
    },
    "specifications": {
      "weight": 0.5,
      "dimensions": {
        "length": 20,
        "width": 10,
        "height": 5,
        "unit": "cm"
      },
      "material": "Plastic",
      "color": ["Red", "Blue", "Green"]
    },
    "media": {
      "mainImage": "https://cdn.example.com/main.jpg",
      "images": [
        "https://cdn.example.com/image1.jpg",
        "https://cdn.example.com/image2.jpg"
      ],
      "video": "https://youtube.com/watch?v=...",
      "specSheet": "https://cdn.example.com/spec.pdf"
    },
    "seo": {
      "title": "SEO Title",
      "description": "SEO Description",
      "keywords": ["keyword1", "keyword2"]
    },
    "status": "active",
    "isFeatured": false,
    "isNegotiable": true,
    "rating": 4.7,
    "totalReviews": 123,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-15T00:00:00Z"
  }
}
```

---

#### POST /products
Create a new product (Manufacturer only).

**Request Body**:
```json
{
  "sku": "PROD-001",
  "name": "Product Name",
  "categoryId": "uuid",
  "shortDescription": "Brief description",
  "fullDescription": "Detailed description",
  "basePrice": 99.99,
  "currency": "USD",
  "moq": 50,
  "stockQuantity": 1000,
  "mainImage": "https://cdn.example.com/image.jpg",
  "images": ["url1", "url2"],
  "specifications": {
    "weight": 0.5,
    "dimensions": {"length": 20, "width": 10, "height": 5}
  },
  "pricingTiers": [
    {"minQty": 50, "price": 95.00},
    {"minQty": 100, "price": 90.00}
  ]
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "sku": "PROD-001",
    "name": "Product Name",
    "slug": "product-name",
    "status": "draft"
  },
  "message": "Product created successfully"
}
```

---

#### PUT /products/:id
Update product (Manufacturer only).

---

#### DELETE /products/:id
Soft delete product (Manufacturer only).

---

#### POST /products/bulk-upload
Bulk upload products via CSV.

**Request**: `multipart/form-data`
```
file: products.csv
```

**Response** (202 Accepted):
```json
{
  "success": true,
  "data": {
    "jobId": "uuid",
    "status": "processing",
    "totalRows": 100
  },
  "message": "Bulk upload queued for processing"
}
```

---

### 3.2 Orders API

#### GET /orders
List orders (role-specific filtering).

**Query Parameters**:
```
?page=1
&limit=20
&status=pending,confirmed
&startDate=2024-01-01
&endDate=2024-01-31
&sortBy=createdAt
&sortOrder=desc
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "uuid",
        "orderNumber": "ORD-20240001",
        "status": "confirmed",
        "retailer": {
          "id": "uuid",
          "businessName": "Retail Store Inc"
        },
        "manufacturer": {
          "id": "uuid",
          "companyName": "Acme Corp"
        },
        "totalAmount": 5000.00,
        "currency": "USD",
        "itemCount": 3,
        "paymentStatus": "pending",
        "estimatedDeliveryDate": "2024-02-15",
        "createdAt": "2024-01-10T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8
    }
  }
}
```

---

#### GET /orders/:id
Get order details.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "orderNumber": "ORD-20240001",
    "status": "confirmed",
    "retailer": {
      "id": "uuid",
      "businessName": "Retail Store Inc",
      "email": "contact@retailstore.com"
    },
    "manufacturer": {
      "id": "uuid",
      "companyName": "Acme Corp",
      "email": "sales@acme.com"
    },
    "items": [
      {
        "id": "uuid",
        "productId": "uuid",
        "productName": "Product A",
        "sku": "PROD-001",
        "quantity": 100,
        "unitPrice": 45.00,
        "subtotal": 4500.00
      }
    ],
    "pricing": {
      "subtotal": 4500.00,
      "taxAmount": 450.00,
      "shippingCost": 50.00,
      "discountAmount": 0.00,
      "totalAmount": 5000.00,
      "currency": "USD"
    },
    "delivery": {
      "addressId": "uuid",
      "address": {
        "line1": "123 Main St",
        "city": "New York",
        "state": "NY",
        "country": "USA",
        "postalCode": "10001"
      },
      "instructions": "Deliver to warehouse",
      "estimatedDate": "2024-02-15",
      "actualDate": null
    },
    "payment": {
      "method": "bank_transfer",
      "status": "pending",
      "terms": "net_30"
    },
    "statusHistory": [
      {
        "status": "pending",
        "changedAt": "2024-01-10T00:00:00Z",
        "changedBy": "retailer"
      },
      {
        "status": "confirmed",
        "changedAt": "2024-01-10T02:00:00Z",
        "changedBy": "manufacturer"
      }
    ],
    "createdAt": "2024-01-10T00:00:00Z",
    "updatedAt": "2024-01-10T02:00:00Z"
  }
}
```

---

#### POST /orders
Create a new order (Retailer only).

**Request Body**:
```json
{
  "manufacturerId": "uuid",
  "items": [
    {
      "productId": "uuid",
      "quantity": 100
    }
  ],
  "deliveryAddressId": "uuid",
  "deliveryInstructions": "Deliver to warehouse",
  "paymentMethod": "bank_transfer",
  "paymentTerms": "net_30",
  "notes": "Rush order if possible"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "orderNumber": "ORD-20240001",
    "status": "pending",
    "totalAmount": 5000.00
  },
  "message": "Order placed successfully"
}
```

---

#### PATCH /orders/:id/status
Update order status (Manufacturer/Admin).

**Request Body**:
```json
{
  "status": "in_production",
  "notes": "Production started"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "orderNumber": "ORD-20240001",
    "status": "in_production",
    "updatedAt": "2024-01-11T00:00:00Z"
  },
  "message": "Order status updated"
}
```

---

#### POST /orders/:id/cancel
Cancel an order.

**Request Body**:
```json
{
  "reason": "Changed requirements",
  "notes": "Additional notes"
}
```

---

### 3.3 Manufacturers API

#### GET /manufacturers
List manufacturers.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "manufacturers": [
      {
        "id": "uuid",
        "companyName": "Acme Corp",
        "slug": "acme-corp",
        "logo": "https://cdn.example.com/logo.jpg",
        "location": {
          "city": "Shenzhen",
          "country": "China"
        },
        "productCount": 150,
        "rating": 4.5,
        "totalReviews": 200,
        "isVerified": true,
        "isPremium": true
      }
    ]
  }
}
```

---

#### GET /manufacturers/:slug
Get manufacturer profile.

**Response**: Similar structure to product details.

---

### 3.4 Users API

#### GET /users/me
Get current user profile.

---

#### PUT /users/me
Update current user profile.

---

#### POST /users/me/change-password
Change password.

---

### 3.5 Categories API

#### GET /categories
Get category tree.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "uuid",
        "name": "Electronics",
        "slug": "electronics",
        "icon": "electronics-icon",
        "productCount": 1500,
        "children": [
          {
            "id": "uuid",
            "name": "Smartphones",
            "slug": "smartphones",
            "productCount": 300
          }
        ]
      }
    ]
  }
}
```

---

### 3.6 Analytics API

#### GET /analytics/sales
Get sales analytics (Manufacturer).

**Query Parameters**:
```
?startDate=2024-01-01
&endDate=2024-01-31
&groupBy=day|week|month
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalRevenue": 50000.00,
      "totalOrders": 100,
      "averageOrderValue": 500.00,
      "growth": 15.5
    },
    "timeSeries": [
      {
        "date": "2024-01-01",
        "revenue": 1500.00,
        "orders": 3
      }
    ]
  }
}
```

---

### 3.7 Search API

#### GET /search
Global search across products and manufacturers.

**Query Parameters**:
```
?q=laptop
&type=products|manufacturers|all
&page=1
&limit=20
```

---

### 3.8 Reviews API

#### POST /reviews
Create a review.

**Request Body**:
```json
{
  "reviewableType": "product",
  "reviewableId": "uuid",
  "orderId": "uuid",
  "rating": 5,
  "title": "Great product",
  "content": "Very satisfied with the quality",
  "pros": "High quality, fast delivery",
  "cons": "None"
}
```

---

## DATA MODELS

### Standard Response Format

**Success Response**:
```json
{
  "success": true,
  "data": { },
  "message": "Optional success message",
  "meta": {
    "timestamp": "2024-01-01T00:00:00Z",
    "requestId": "uuid"
  }
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      "field": "Specific error details"
    }
  },
  "meta": {
    "timestamp": "2024-01-01T00:00:00Z",
    "requestId": "uuid"
  }
}
```

---

## ERROR HANDLING

### HTTP Status Codes

```
200 OK - Request successful
201 Created - Resource created
202 Accepted - Request accepted (async)
204 No Content - Successful with no response body

400 Bad Request - Invalid request
401 Unauthorized - Authentication required
403 Forbidden - Permission denied
404 Not Found - Resource not found
409 Conflict - Resource conflict
422 Unprocessable Entity - Validation error
429 Too Many Requests - Rate limit exceeded

500 Internal Server Error - Server error
502 Bad Gateway - Upstream error
503 Service Unavailable - Service down
```

### Error Codes

```
AUTH_001 - Invalid credentials
AUTH_002 - Token expired
AUTH_003 - Insufficient permissions

VALIDATION_001 - Missing required field
VALIDATION_002 - Invalid field format
VALIDATION_003 - Value out of range

RESOURCE_001 - Resource not found
RESOURCE_002 - Resource already exists
RESOURCE_003 - Resource conflict

BUSINESS_001 - Insufficient stock
BUSINESS_002 - MOQ not met
BUSINESS_003 - Payment required

SYSTEM_001 - Internal server error
SYSTEM_002 - Service unavailable
SYSTEM_003 - Database error
```

---

## RATE LIMITING

### Rate Limit Tiers

```
Public Endpoints:    100 requests/minute
Authenticated:       1000 requests/minute
Premium:             5000 requests/minute
Enterprise:          Custom limits
```

### Rate Limit Headers

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1640000000
```

### Exceeded Rate Limit Response

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "retryAfter": 60
  }
}
```

---

## WEBHOOKS

### Webhook Events

```
order.created
order.updated
order.confirmed
order.shipped
order.delivered
order.cancelled

payment.completed
payment.failed

product.created
product.updated
product.out_of_stock

user.verified
user.suspended
```

### Webhook Payload

```json
{
  "event": "order.created",
  "timestamp": "2024-01-01T00:00:00Z",
  "data": {
    "orderId": "uuid",
    "orderNumber": "ORD-20240001"
  }
}
```

### Webhook Security

- HMAC signature in `X-Webhook-Signature` header
- Verify signature before processing
- Retry logic: 3 attempts with exponential backoff

---

## BEST PRACTICES

### Pagination
Always use pagination for list endpoints:
```
?page=1&limit=20
```

### Filtering
Use query parameters for filtering:
```
?status=active&category=electronics
```

### Sorting
```
?sortBy=createdAt&sortOrder=desc
```

### Field Selection (Optional)
```
?fields=id,name,price
```

### Expansion
```
?expand=manufacturer,category
```

### Caching
- Use ETags for caching
- Cache-Control headers
- Conditional requests (If-None-Match)

### Versioning
- Always use latest stable version
- Monitor deprecation notices
- Test in staging before production

---

## API Client Examples

### JavaScript/TypeScript
```typescript
const apiClient = axios.create({
  baseURL: 'https://api.b2bplatform.com/v1',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

const products = await apiClient.get('/products', {
  params: { page: 1, limit: 20 }
});
```

### Python
```python
import requests

headers = {
    'Authorization': f'Bearer {access_token}',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.b2bplatform.com/v1/products',
    headers=headers,
    params={'page': 1, 'limit': 20}
)
```

---

## SDK Availability

- JavaScript/TypeScript SDK
- Python SDK
- PHP SDK
- Ruby SDK
- Go SDK

---

This API specification provides a comprehensive foundation for building integrations with the B2B wholesale platform. Always refer to the latest API documentation for updates and changes.
