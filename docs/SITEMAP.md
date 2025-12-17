# Complete Site Map - B2B Wholesale Distribution Platform

## Public Pages (Unauthenticated)

### Marketing & Information
```
/
├── /about
├── /how-it-works
│   ├── /for-manufacturers
│   └── /for-retailers
├── /pricing
├── /contact
├── /blog
├── /case-studies
├── /partners
└── /trust-security
```

### Browse & Discovery
```
/categories
├── /categories/{category-slug}
│   └── /categories/{category-slug}/{subcategory-slug}
│
/manufacturers
├── /manufacturers/directory
├── /manufacturers/{manufacturer-slug}
│   ├── /manufacturers/{manufacturer-slug}/products
│   ├── /manufacturers/{manufacturer-slug}/about
│   ├── /manufacturers/{manufacturer-slug}/certifications
│   └── /manufacturers/{manufacturer-slug}/reviews
│
/products
├── /products/search
├── /products/{product-slug}
└── /products/compare
```

### Authentication
```
/auth
├── /auth/login
├── /auth/register
│   ├── /auth/register/manufacturer
│   └── /auth/register/retailer
├── /auth/forgot-password
├── /auth/reset-password
└── /auth/verify-email
```

### Legal & Support
```
/legal
├── /legal/terms-of-service
├── /legal/privacy-policy
├── /legal/refund-policy
├── /legal/shipping-policy
└── /legal/compliance
│
/help
├── /help/faq
├── /help/support
├── /help/documentation
└── /help/tutorials
```

---

## Retailer Portal (Authenticated)

### Main Dashboard
```
/retailer
├── /retailer/dashboard
│   ├── Overview widgets
│   ├── Active orders
│   ├── Quick reorder
│   └── Recommendations
```

### Product Discovery
```
/retailer/browse
├── /retailer/browse/categories
├── /retailer/browse/manufacturers
├── /retailer/browse/products
├── /retailer/browse/new-arrivals
├── /retailer/browse/trending
└── /retailer/browse/favorites
```

### Orders
```
/retailer/orders
├── /retailer/orders/active
├── /retailer/orders/history
├── /retailer/orders/{order-id}
│   ├── Order details
│   ├── Track shipment
│   ├── Download invoice
│   └── Dispute/support
├── /retailer/orders/drafts
└── /retailer/orders/recurring
```

### Shopping & Checkout
```
/retailer/cart
├── /retailer/cart/review
├── /retailer/cart/checkout
│   ├── Delivery information
│   ├── Payment method
│   └── Order confirmation
└── /retailer/cart/saved-for-later
```

### Financial Management
```
/retailer/financial
├── /retailer/financial/overview
├── /retailer/financial/invoices
├── /retailer/financial/payments
├── /retailer/financial/credit-limit
├── /retailer/financial/spending-analytics
└── /retailer/financial/tax-documents
```

### Relationships
```
/retailer/manufacturers
├── /retailer/manufacturers/following
├── /retailer/manufacturers/recent
└── /retailer/manufacturers/recommended
```

### Account Settings
```
/retailer/settings
├── /retailer/settings/profile
├── /retailer/settings/business-details
├── /retailer/settings/delivery-addresses
├── /retailer/settings/payment-methods
├── /retailer/settings/team-members
├── /retailer/settings/notifications
└── /retailer/settings/security
```

### Support
```
/retailer/support
├── /retailer/support/tickets
├── /retailer/support/disputes
└── /retailer/support/chat
```

---

## Manufacturer Portal (Authenticated)

### Main Dashboard
```
/manufacturer
├── /manufacturer/dashboard
│   ├── Sales overview
│   ├── Pending orders
│   ├── Inventory alerts
│   ├── Performance metrics
│   └── Quick actions
```

### Product Management
```
/manufacturer/products
├── /manufacturer/products/all
├── /manufacturer/products/add
├── /manufacturer/products/{product-id}/edit
├── /manufacturer/products/bulk-upload
├── /manufacturer/products/categories
├── /manufacturer/products/inventory
│   ├── Stock levels
│   ├── Low stock alerts
│   └── Restock planning
└── /manufacturer/products/pricing
    ├── Price tiers
    ├── MOQ settings
    └── Bulk pricing rules
```

### Order Management
```
/manufacturer/orders
├── /manufacturer/orders/pending
├── /manufacturer/orders/in-production
├── /manufacturer/orders/ready-to-ship
├── /manufacturer/orders/shipped
├── /manufacturer/orders/completed
├── /manufacturer/orders/cancelled
└── /manufacturer/orders/{order-id}
    ├── Order details
    ├── Production status
    ├── Shipping management
    └── Communication log
```

### Customer Relationships
```
/manufacturer/customers
├── /manufacturer/customers/all
├── /manufacturer/customers/{customer-id}
│   ├── Profile
│   ├── Order history
│   ├── Communication
│   └── Credit terms
├── /manufacturer/customers/vip
└── /manufacturer/customers/analytics
```

### Financial Management
```
/manufacturer/financial
├── /manufacturer/financial/overview
├── /manufacturer/financial/revenue
├── /manufacturer/financial/pending-payments
├── /manufacturer/financial/commission-fees
├── /manufacturer/financial/invoices
├── /manufacturer/financial/payouts
└── /manufacturer/financial/tax-reports
```

### Analytics & Reports
```
/manufacturer/analytics
├── /manufacturer/analytics/sales
├── /manufacturer/analytics/products
├── /manufacturer/analytics/customers
├── /manufacturer/analytics/geography
├── /manufacturer/analytics/trends
└── /manufacturer/analytics/export-reports
```

### Marketing & Promotion
```
/manufacturer/marketing
├── /manufacturer/marketing/profile-optimization
├── /manufacturer/marketing/sponsored-products
├── /manufacturer/marketing/campaigns
└── /manufacturer/marketing/performance
```

### Compliance & Documentation
```
/manufacturer/compliance
├── /manufacturer/compliance/certifications
├── /manufacturer/compliance/documents
├── /manufacturer/compliance/verification-status
└── /manufacturer/compliance/upload
```

### Settings
```
/manufacturer/settings
├── /manufacturer/settings/company-profile
├── /manufacturer/settings/factory-information
├── /manufacturer/settings/team-members
├── /manufacturer/settings/roles-permissions
├── /manufacturer/settings/shipping-zones
├── /manufacturer/settings/payment-methods
├── /manufacturer/settings/notifications
├── /manufacturer/settings/api-integration
└── /manufacturer/settings/subscription
```

---

## Platform Admin Portal (Super Admin)

### Main Dashboard
```
/admin
├── /admin/dashboard
│   ├── Platform overview
│   ├── Revenue metrics
│   ├── User growth
│   ├── Transaction volume
│   └── System health
```

### User Management
```
/admin/users
├── /admin/users/manufacturers
│   ├── /admin/users/manufacturers/pending-verification
│   ├── /admin/users/manufacturers/active
│   ├── /admin/users/manufacturers/suspended
│   └── /admin/users/manufacturers/{id}
├── /admin/users/retailers
│   ├── /admin/users/retailers/pending-verification
│   ├── /admin/users/retailers/active
│   ├── /admin/users/retailers/suspended
│   └── /admin/users/retailers/{id}
└── /admin/users/admins
    ├── Add/edit admin users
    └── Role management
```

### Order Management
```
/admin/orders
├── /admin/orders/all
├── /admin/orders/pending
├── /admin/orders/disputed
├── /admin/orders/cancelled
└── /admin/orders/{order-id}
```

### Financial Management
```
/admin/financial
├── /admin/financial/overview
├── /admin/financial/transactions
├── /admin/financial/commissions
├── /admin/financial/payouts
├── /admin/financial/refunds
└── /admin/financial/reports
```

### Content Management
```
/admin/content
├── /admin/content/categories
│   ├── Add/edit/delete categories
│   └── Category hierarchy
├── /admin/content/products
│   ├── Approve/reject products
│   └── Moderate listings
├── /admin/content/pages
│   ├── Edit static pages
│   └── Blog management
└── /admin/content/media
    └── Asset library
```

### Disputes & Support
```
/admin/support
├── /admin/support/tickets
├── /admin/support/disputes
│   ├── Pending resolution
│   ├── In progress
│   └── Resolved
├── /admin/support/chat-monitoring
└── /admin/support/escalations
```

### Platform Configuration
```
/admin/settings
├── /admin/settings/general
├── /admin/settings/commission-rates
├── /admin/settings/payment-gateways
├── /admin/settings/shipping-settings
├── /admin/settings/notifications
├── /admin/settings/tax-settings
├── /admin/settings/compliance-rules
└── /admin/settings/api-keys
```

### Analytics & Reporting
```
/admin/analytics
├── /admin/analytics/platform-metrics
├── /admin/analytics/user-behavior
├── /admin/analytics/revenue-analysis
├── /admin/analytics/product-performance
├── /admin/analytics/geographic-distribution
└── /admin/analytics/custom-reports
```

### Security & Audit
```
/admin/security
├── /admin/security/audit-logs
├── /admin/security/access-control
├── /admin/security/fraud-detection
└── /admin/security/data-privacy
```

---

## API Endpoints Structure

### Public API
```
/api/v1
├── /auth
├── /categories
├── /manufacturers (public profiles)
└── /products (public listings)
```

### Authenticated API
```
/api/v1
├── /retailer/*
├── /manufacturer/*
└── /admin/*
```

### Webhooks
```
/api/webhooks
├── /payment-provider
├── /shipping-provider
└── /notification-service
```

---

## Mobile App Structure (Optional Future)

### Retailer Mobile App
```
- Dashboard
- Browse Products
- Quick Order
- Order Tracking
- Notifications
- Account
```

### Manufacturer Mobile App
```
- Dashboard
- Order Management
- Inventory Alerts
- Customer Messages
- Analytics
- Account
```

---

## Total Page Count Estimate

- **Public Pages**: ~25 pages
- **Retailer Portal**: ~45 pages
- **Manufacturer Portal**: ~50 pages
- **Admin Portal**: ~60 pages

**Total Unique Pages/Views**: ~180 distinct pages/views

---

## Navigation Hierarchy Summary

1. **Public Site** - Marketing, discovery, authentication
2. **Retailer Portal** - Buying experience, order management, analytics
3. **Manufacturer Portal** - Selling tools, production management, customer relations
4. **Admin Portal** - Platform governance, monitoring, configuration

Each portal has its own navigation structure optimized for role-specific workflows.
