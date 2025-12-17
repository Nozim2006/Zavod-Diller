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

## Distributor Portal (Authenticated)

### Main Dashboard
```
/distributor
├── /distributor/dashboard
│   ├── Regional overview
│   ├── Sales by manufacturer
│   ├── Inventory by location
│   ├── Performance metrics
│   └── Quick actions
```

### Manufacturer Management
```
/distributor/manufacturers
├── /distributor/manufacturers/assigned
├── /distributor/manufacturers/{manufacturer-id}
│   ├── Product access control
│   ├── Pricing agreements
│   ├── Volume commitments
│   └── Performance metrics
```

### Regional Inventory
```
/distributor/inventory
├── /distributor/inventory/warehouses
│   ├── /distributor/inventory/warehouses/{warehouse-id}
│   │   ├── Stock levels
│   │   ├── Incoming shipments
│   │   ├── Low stock alerts
│   │   └── Restock planning
├── /distributor/inventory/stock-allocation
└── /distributor/inventory/shipment-tracking
```

### Order Management
```
/distributor/orders
├── /distributor/orders/from-retailers
├── /distributor/orders/to-manufacturers
├── /distributor/orders/{order-id}
│   ├── Order details
│   ├── Inventory allocation
│   ├── Shipping coordination
│   └── Communication
└── /distributor/orders/recurring
```

### Contracts & Agreements
```
/distributor/contracts
├── /distributor/contracts/with-manufacturers
├── /distributor/contracts/with-retailers
├── /distributor/contracts/{contract-id}
│   ├── Terms & conditions
│   ├── Volume commitments
│   ├── Pricing tiers
│   └── Expiration tracking
└── /distributor/contracts/templates
```

### Regional Analytics
```
/distributor/analytics
├── /distributor/analytics/sales-by-region
├── /distributor/analytics/customer-segments
├── /distributor/analytics/delivery-performance
├── /distributor/analytics/market-trends
└── /distributor/analytics/custom-reports
```

### Financial Management
```
/distributor/financial
├── /distributor/financial/overview
├── /distributor/financial/revenue-by-manufacturer
├── /distributor/financial/receivables
├── /distributor/financial/payables
├── /distributor/financial/commissions
└── /distributor/financial/settlements
```

### Delivery Coordination
```
/distributor/logistics
├── /distributor/logistics/active-shipments
├── /distributor/logistics/delivery-routes
├── /distributor/logistics/proof-of-delivery
└── /distributor/logistics/carrier-management
```

### Settings
```
/distributor/settings
├── /distributor/settings/region-info
├── /distributor/settings/warehouses
├── /distributor/settings/team-members
├── /distributor/settings/payment-methods
└── /distributor/settings/api-integration
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

### Contracts & Deals
```
/retailer/contracts
├── /retailer/contracts/active
├── /retailer/contracts/{contract-id}
│   ├── Terms & conditions
│   ├── Volume commitments
│   ├── Pricing agreements
│   └── Renewal reminders
└── /retailer/contracts/negotiation
```

### Communication & Negotiation
```
/retailer/communication
├── /retailer/communication/inbox
├── /retailer/communication/conversations
│   ├── /retailer/communication/conversations/{conversation-id}
│   │   ├── Messages
│   │   ├── Shared documents
│   │   └── Negotiation history
├── /retailer/communication/rfq
│   ├── /retailer/communication/rfq/sent
│   ├── /retailer/communication/rfq/received
│   └── /retailer/communication/rfq/{rfq-id}
└── /retailer/communication/file-sharing
```

### Credit & Deferred Payments
```
/retailer/credit
├── /retailer/credit/credit-limit
├── /retailer/credit/credit-score
├── /retailer/credit/deferred-payments
│   ├── Active payment plans
│   ├── Payment history
│   └── Upcoming payments
└── /retailer/credit/credit-requests
```

### Price Intelligence
```
/retailer/price-intelligence
├── /retailer/price-intelligence/price-comparison
├── /retailer/price-intelligence/price-history
├── /retailer/price-intelligence/market-trends
├── /retailer/price-intelligence/price-alerts
└── /retailer/price-intelligence/recommended-deals
```

### Support & Disputes
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

### Contracts & Deals
```
/manufacturer/contracts
├── /manufacturer/contracts/active
├── /manufacturer/contracts/{contract-id}
│   ├── Terms & conditions
│   ├── Volume commitments
│   ├── Price tiers
│   └── Expiration tracking
├── /manufacturer/contracts/templates
└── /manufacturer/contracts/draft
```

### Communication & Negotiation
```
/manufacturer/communication
├── /manufacturer/communication/inbox
├── /manufacturer/communication/conversations
│   ├── /manufacturer/communication/conversations/{conversation-id}
│   │   ├── Messages
│   │   ├── Attached documents
│   │   └── Negotiation timeline
├── /manufacturer/communication/rfq
│   ├── Received RFQs
│   ├── RFQ Responses
│   └── /manufacturer/communication/rfq/{rfq-id}
└── /manufacturer/communication/document-library
```

### Warehouse & Stock Hub
```
/manufacturer/warehouse
├── /manufacturer/warehouse/overview
├── /manufacturer/warehouse/locations
│   ├── /manufacturer/warehouse/locations/{warehouse-id}
│   │   ├── Stock levels (real-time)
│   │   ├── Stock movements
│   │   ├── Batch tracking
│   │   └── Serial number tracking
├── /manufacturer/warehouse/stock-allocation
├── /manufacturer/warehouse/batch-management
└── /manufacturer/warehouse/low-stock-alerts
```

### Demand Forecasting
```
/manufacturer/forecasting
├── /manufacturer/forecasting/dashboard
├── /manufacturer/forecasting/sales-trends
├── /manufacturer/forecasting/seasonal-analysis
├── /manufacturer/forecasting/retail-signals
├── /manufacturer/forecasting/production-planning
└── /manufacturer/forecasting/smart-recommendations
```

### Price Intelligence & Dynamic Pricing
```
/manufacturer/pricing
├── /manufacturer/pricing/price-history
├── /manufacturer/pricing/competitive-analysis
├── /manufacturer/pricing/market-trends
├── /manufacturer/pricing/dynamic-pricing-rules
├── /manufacturer/pricing/discount-engine
└── /manufacturer/pricing/promotion-management
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
- **Retailer Portal**: ~65 pages (including new modules)
- **Manufacturer Portal**: ~70 pages (including new modules)
- **Distributor Portal**: ~55 pages (NEW)
- **Admin Portal**: ~60 pages

**Total Unique Pages/Views**: ~275 distinct pages/views

---

## Navigation Hierarchy Summary

1. **Public Site** - Marketing, discovery, authentication
2. **Retailer Portal** - Buying experience, order management, contracts, communication, credit, price intelligence, analytics
3. **Manufacturer Portal** - Selling tools, production management, warehouse management, demand forecasting, price intelligence, customer relations, contracts, communication
4. **Distributor Portal** (NEW) - Regional management, manufacturer relationships, warehouse coordination, order aggregation, local analytics
5. **Admin Portal** - Platform governance, monitoring, configuration, user management

Each portal has its own navigation structure optimized for role-specific workflows.

---

## Key Additions in This Update

### New Distributor Portal
- Regional inventory management across multiple warehouses
- Manufacturer relationship and access control
- Contract and agreement management with manufacturers and retailers
- Regional analytics and performance tracking
- Order aggregation from both retailers and manufacturers
- Delivery coordination and logistics management

### Enhanced Retailer Portal
- Contract & deal management with expiration alerts
- Communication & negotiation tools with RFQ system
- Credit & deferred payment management
- Price intelligence and market comparison tools
- Demand-based purchasing recommendations

### Enhanced Manufacturer Portal
- Warehouse & stock hub with batch and serial tracking
- AI-powered demand forecasting and production planning
- Dynamic pricing and price optimization tools
- Contract and agreement management
- Built-in communication and RFQ response system
- Regional pricing management for distributors

### New Shared Modules (All Portals)
- Contract management system
- Real-time communication & negotiation
- Document sharing and collaboration
- Price tracking and market intelligence
- Inventory visibility and management
