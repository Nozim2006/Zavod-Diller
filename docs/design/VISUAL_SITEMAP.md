# B2B Wholesale Platform - Visual Sitemap & Information Architecture
## Complete User Journey & Page Hierarchy

---

## Table of Contents

1. [Information Architecture](#information-architecture)
2. [Site Hierarchy Map](#site-hierarchy-map)
3. [User Flows](#user-flows)
4. [Page Relationships](#page-relationships)
5. [Navigation Patterns](#navigation-patterns)

---

## Information Architecture

### Site Structure Overview

```
WholesaleOS B2B Platform
│
├─ Public Facing (No Auth Required)
│  ├── Homepage
│  ├── About Us
│  ├── How It Works
│  ├── Pricing
│  ├── Blog / Resources
│  └── Contact / Support
│
├─ Authentication Gates
│  ├── Login Page
│  ├── Sign Up (Manufacturer or Retailer)
│  ├── Forgot Password
│  ├── Verify Email
│  └── Two-Factor Authentication
│
└─ Authenticated User Portal
   ├── Dashboard
   │  ├── Overview (KPIs, recent activity)
   │  ├── Analytics Hub
   │  └── Reports
   │
   ├── Products Module
   │  ├── All Products (Buyers view)
   │  ├── Browse by Category
   │  ├── Search Results
   │  ├── Product Detail Page
   │  ├── Product Management (Sellers view)
   │  └── Inventory Management
   │
   ├── Manufacturers Module (for Retailers)
   │  ├── Browse Manufacturers
   │  ├── Manufacturer Directory
   │  ├── Manufacturer Profile
   │  ├── Certificates & Verification
   │  └── Reviews & Ratings
   │
   ├── Orders Module
   │  ├── My Orders (all)
   │  ├── Order History (past)
   │  ├── Pending Orders
   │  ├── Order Detail Page
   │  ├── Create New Order
   │  ├── Bulk Order Manager
   │  └── Order Tracking
   │
   ├── Inventory Module (Sellers)
   │  ├── Inventory Dashboard
   │  ├── Stock Management
   │  ├── SKU Management
   │  ├── Low Stock Alerts
   │  └── Bulk Import / Export
   │
   ├── Payments & Billing
   │  ├── Payments Dashboard
   │  ├── Payment History
   │  ├── Invoices
   │  ├── Payment Methods
   │  ├── Receipts
   │  └── Escrow Management
   │
   ├── Contracts & Documents
   │  ├── Active Contracts
   │  ├── Contract Templates
   │  ├── Document Library
   │  ├── Request Quote
   │  ├── Agreement Management
   │  └── Digital Signatures
   │
   ├── Logistics & Shipping
   │  ├── Shipments Overview
   │  ├── Track Shipment
   │  ├── Shipping Labels
   │  ├── Carrier Management
   │  └── Delivery Tracking
   │
   ├── Communications
   │  ├── Messages / Inbox
   │  ├── Notifications
   │  ├── Support Tickets
   │  ├── Help Center
   │  └── FAQ
   │
   ├── Account Management
   │  ├── Profile Settings
   │  ├── Company Information
   │  ├── User Management
   │  ├── Billing Information
   │  ├── API Keys
   │  ├── Integrations
   │  ├── Privacy & Security
   │  ├── Preferences
   │  └── Logout
   │
   └── Admin Panel (Admin Only)
      ├── User Management
      ├── Merchant Verification
      ├── Dispute Resolution
      ├── Platform Analytics
      ├── Content Management
      ├── System Settings
      └── Audit Logs
```

---

## Site Hierarchy Map

### Visual Hierarchy Tree (Simplified)

```
                          WholesaleOS
                              │
                ┌─────────────┼─────────────┐
                │             │             │
            Public         Auth Gates   Authenticated
            ├─ Home         ├─ Login      ├─ Dashboard
            ├─ About        ├─ SignUp     ├─ Products
            ├─ Pricing      ├─ Forgot     ├─ Orders
            └─ Blog         └─ Verify     ├─ Payments
                                          ├─ Inventory
                                          ├─ Account
                                          └─ Admin
```

### Page Depth Levels

**Level 1: Main Sections** (Accessible from sidebar)
- Dashboard
- Products
- Orders
- Payments
- Settings
- Support

**Level 2: Category Views** (List/Browse pages)
- Product Listing
- Order History
- Payment Transactions
- Support Tickets

**Level 3: Detail Pages** (Single item views)
- Product Details
- Order Details
- Invoice Details
- Ticket Details

**Level 4: Sub-details** (Nested information)
- Product Reviews
- Order Line Items
- Transaction Receipts
- Ticket Conversations

---

## Site Hierarchy Map (Detailed)

### Homepage Structure

```
Homepage (/)
├── Header
│   ├── Logo
│   ├── Search
│   ├── Notifications
│   ├── Language
│   └── User Menu
│
├── Hero Section
│   ├── Main Headline
│   ├── Subheadline
│   ├── CTA Buttons (Login / Sign Up)
│   └── Background Graphic
│
├── Trust Section
│   ├── Stats KPIs
│   ├── Partner Logos
│   └── Certifications
│
├── Category Grid
│   ├── 6 Category Cards
│   └── Browse All Link
│
├── How It Works
│   ├── 4-Step Timeline
│   └── Learn More Link
│
├── Featured Manufacturers
│   ├── 3 Manufacturer Cards
│   └── View All Link
│
├── CTA Section
│   ├── "Ready to get started?"
│   ├── Sign Up Button
│   └── Contact Sales Link
│
└── Footer
    ├── Links (About, Blog, Careers, etc.)
    ├── Legal (Terms, Privacy, etc.)
    └── Social Links
```

**Key Metrics:**
- Hero height: 600px desktop, 400px mobile
- Category cards: 3-column grid (desktop)
- Manufacturer cards: 3-column grid (desktop)
- Footer: 4-column grid (desktop)

### Dashboard Structure

```
Dashboard (/dashboard)
├── Page Header
│   ├── Breadcrumb: "Dashboard › Overview"
│   ├── Title
│   └── Date/Time Last Updated
│
├── KPI Cards Row (4 columns)
│   ├── Total Revenue
│   ├── Active Orders
│   ├── New Leads
│   └── Growth Rate
│
├── Main Content Area (3-column)
│   ├── Left Sidebar (Filters)
│   │   ├── Date Range
│   │   ├── Status Filters
│   │   ├── Region/Category
│   │   └── Custom Metrics
│   │
│   ├── Center (Charts)
│   │   ├── Revenue Trend (Line Chart)
│   │   ├── Order Volume (Bar Chart)
│   │   └── Growth Rate (Area Chart)
│   │
│   └── Right Sidebar (Summary)
│       ├── Top Products
│       ├── Recent Activity
│       ├── Quick Insights
│       └── Alerts & Warnings
│
└── Footer / Actions
    ├── Export Report Button
    └── View Detailed Analytics
```

### Products Module Structure

```
Products (/products)
├── Products › All
│   ├── Page Header
│   ├── Filter Panel (Left)
│   ├── Product Listing
│   │   ├── Grid View (Default)
│   │   │   ├── Product Cards (3-col grid)
│   │   │   └── Pagination
│   │   │
│   │   └── List View
│   │       ├── Data Table
│   │       └── Pagination
│   │
│   └── Pagination Controls
│
├── Products › Search Results
│   ├── Search Query Display
│   ├── Results Count
│   └── Filter & Sort Options
│
├── Products › Category
│   ├── Category Title & Description
│   ├── Subcategories (if applicable)
│   ├── Product Listings
│   └── Category-specific Filters
│
├── Products › [Product ID]
│   ├── Page Header (Breadcrumb)
│   ├── Product Gallery (Left)
│   │   ├── Main Image (Large)
│   │   └── Thumbnails
│   │
│   ├── Product Info (Right)
│   │   ├── Name & Manufacturer
│   │   ├── Rating & Reviews
│   │   ├── Price Tiers Table
│   │   ├── MOQ Info
│   │   ├── Quantity Selector
│   │   ├── Add to Cart Button
│   │   └── Additional Actions
│   │
│   ├── Tabs Section
│   │   ├── Details
│   │   ├── Specifications
│   │   ├── Reviews
│   │   ├── Q&A
│   │   └── Certificates
│   │
│   └── Related Products
│       └── Carousel
│
├── Products › Inventory (Seller View)
│   ├── Inventory Dashboard
│   │   ├── Low Stock Alerts
│   │   ├── Total SKUs
│   │   ├── Out of Stock Count
│   │   └── Stock by Category (Chart)
│   │
│   ├── Inventory Table
│   │   ├── Columns: SKU, Name, Stock, Status, Actions
│   │   ├── Inline Editing
│   │   ├── Bulk Actions
│   │   └── Import/Export
│   │
│   └── Add New Product
│       └── Multi-step Form
│
└── Products › [Manufacturer]
    ├── Manufacturer Profile
    │   ├── Banner & Logo
    │   ├── Info Tabs
    │   ├── Ratings & Reviews
    │   ├── Certifications
    │   └── Contact Info
    │
    └── Products from this Manufacturer
        └── Filtered Product Grid
```

### Orders Module Structure

```
Orders (/orders)
├── Orders › All
│   ├── Page Header
│   ├── Status Filter Tabs
│   ├── Order Table
│   │   ├── Columns: ID, Supplier, Date, Status, Total
│   │   ├── Sort Options
│   │   ├── Search
│   │   ├── Bulk Actions
│   │   └── Row Actions (View, Edit, etc.)
│   │
│   └── Pagination
│
├── Orders › Pending
│   ├── Pending Orders Table
│   ├── Quick Actions
│   └── Status Updates
│
├── Orders › [Order ID]
│   ├── Page Header (Breadcrumb)
│   ├── Status Badge & Timeline
│   ├── Left Panel
│   │   ├── Order Information
│   │   ├── Delivery Address
│   │   ├── Payment Status
│   │   └── Contact Information
│   │
│   ├── Center Panel
│   │   ├── Line Items Table
│   │   ├── Item Details
│   │   ├── Subtotal, Tax, Total
│   │   └── Notes/Comments
│   │
│   ├── Right Panel
│   │   ├── Order Timeline
│   │   ├── Shipment Info
│   │   ├── Tracking Number
│   │   └── Carrier Details
│   │
│   └── Tabs
│       ├── Overview
│       ├── Documents (Invoice, etc.)
│       ├── Communication
│       ├── History
│       └── Actions
│
├── Orders › New Order
│   ├── Multi-step Form
│   ├── Step 1: Search & Select Products
│   ├── Step 2: Set Quantities
│   ├── Step 3: Shipping Address
│   ├── Step 4: Payment Method
│   ├── Step 5: Review & Submit
│   └── Success Message
│
└── Orders › Bulk Order
    ├── Bulk Upload Interface
    ├── CSV Template Download
    ├── File Upload Area
    ├── Preview Table
    ├── Validation Results
    └── Submit Bulk Order
```

### Account Settings Structure

```
Settings (/settings)
├── Settings › Account
│   ├── Left Menu (Settings Sections)
│   │   ├── Account
│   │   ├── Profile
│   │   ├── Company
│   │   ├── Billing
│   │   ├── Notifications
│   │   ├── API Keys
│   │   ├── Security
│   │   ├── Integrations
│   │   └── Logout
│   │
│   ├── Main Panel
│   │   └── Account Information
│   │       ├── Email
│   │       ├── Name
│   │       ├── Role
│   │       ├── Account Status
│   │       └── [Edit Button]
│
├── Settings › Profile
│   ├── Profile Picture Upload
│   ├── Profile Information Form
│   ├── Bio / Description
│   ├── Social Links
│   └── Preferences
│
├── Settings › Company
│   ├── Company Name
│   ├── Company Registration
│   ├── Logo Upload
│   ├── Contact Information
│   ├── Office Address
│   ├── Business Type
│   ├── Industry
│   └── Certifications
│
├── Settings › Billing
│   ├── Current Plan
│   ├── Billing Cycle
│   ├── Payment Methods
│   │   ├── Add Payment Method
│   │   ├── Default Payment Method
│   │   └── Saved Cards
│   │
│   ├── Invoices & Billing History
│   │   ├── Invoice List (Table)
│   │   ├── Download Invoice
│   │   └── Billing Statements
│   │
│   └── Plan Upgrade
│       └── Upgrade to Premium
│
├── Settings › Notifications
│   ├── Notification Preferences
│   │   ├── Email Notifications
│   │   ├── SMS Alerts
│   │   ├── Push Notifications
│   │   └── In-app Notifications
│   │
│   ├── Notification Types
│   │   ├── Orders
│   │   ├── Payments
│   │   ├── Inventory Alerts
│   │   ├── Messages
│   │   ├── System Updates
│   │   └── Marketing
│   │
│   └── Frequency Settings
│       ├── Real-time
│       ├── Daily Digest
│       ├── Weekly Summary
│       └── Never
│
├── Settings › Security
│   ├── Password Management
│   │   └── Change Password Form
│   │
│   ├── Two-Factor Authentication
│   │   ├── Status: Enabled/Disabled
│   │   ├── Setup 2FA
│   │   ├── Backup Codes
│   │   └── Trusted Devices
│   │
│   ├── Login History
│   │   ├── Recent Logins (Table)
│   │   ├── Login Location
│   │   ├── Device Info
│   │   └── Suspicious Activity Alert
│   │
│   ├── Connected Apps
│   │   ├── OAuth Applications
│   │   ├── Revoke Access
│   │   └── Permissions
│   │
│   └── Session Management
│       ├── Active Sessions
│       └── Logout All Sessions
│
├── Settings › API Keys
│   ├── Active API Keys Table
│   │   ├── Key Name
│   │   ├── Permissions
│   │   ├── Created Date
│   │   ├── Last Used
│   │   ├── View Key
│   │   └── Delete
│   │
│   ├── Generate New Key
│   │   └── API Key Generation Form
│   │
│   ├── Documentation Link
│   └── API Rate Limits
│
├── Settings › Integrations
│   ├── Available Integrations
│   │   ├── Stripe (Payments)
│   │   ├── Google Sheets
│   │   ├── Salesforce
│   │   ├── QuickBooks
│   │   ├── Slack
│   │   └── More Integrations
│   │
│   ├── Connected Integrations
│   │   ├── Integration Status
│   │   ├── Last Sync
│   │   ├── Disconnect
│   │   └── Settings
│   │
│   └── OAuth Permissions
│       └── Manage Permissions
│
└── Settings › Logout
    ├── Confirmation Message
    └── [Confirm Logout Button]
```

---

## User Flows

### New User Sign Up Flow

```
Homepage
    ↓
[Sign Up Button] → Sign Up Page
    ↓
Choose Role: Manufacturer or Retailer
    ↓
Registration Form (Email, Password, Basic Info)
    ↓
Verify Email
    ↓
Company Profile Setup (Multi-step form)
    ↓
Additional Verification (Documents/Tax ID)
    ↓
Dashboard (Onboarding Tour)
```

### Manufacturer Listing Products Flow

```
Dashboard
    ↓
[Products] → Product Management
    ↓
[Add New Product]
    ↓
Product Form (Multi-step)
    - Step 1: Basic Info (Name, Description)
    - Step 2: Images & Gallery
    - Step 3: Pricing & Tiers
    - Step 4: Specifications
    - Step 5: Documents & Certifications
    - Step 6: Review & Publish
    ↓
Product Listed
    ↓
Manage Inventory
```

### Retailer Browsing & Ordering Flow

```
Homepage
    ↓
[Products / Browse]
    ↓
Browse by Category or Search
    ↓
Product Listing Page
    ↓
[View Details] → Product Detail Page
    ↓
[Add to Cart] or [Request Quote]
    ↓
Checkout / Order Summary
    ↓
Shipping Address & Payment
    ↓
Order Confirmation
    ↓
Order Tracking Page
```

### Viewing Order Details Flow

```
Orders › All
    ↓
[View / Click Order Row]
    ↓
Order Detail Page
    ├── Order Timeline
    ├── Line Items
    ├── Shipping Info
    ├── Documents
    └── Communication
    ↓
[Track Shipment] → Tracking Page
```

### Payment & Invoicing Flow

```
Orders › Order Detail
    ↓
[View Invoice] → Invoice Preview
    ↓
[Download PDF] or [Send Email]
    ↓
Payments › Payment History
    ↓
[View Receipt] → Receipt Detail
```

---

## Page Relationships

### Parent-Child Relationships

**Products Module:**
```
Products (Listing)
├── Category
├── Search Results
├── [Product Detail]
│   ├── Reviews Tab
│   ├── Q&A Tab
│   ├── Certificates Tab
│   └── Related Products
├── [Manufacturer Profile]
│   ├── About Tab
│   ├── Certifications Tab
│   └── Products from Manufacturer
└── Inventory Management
    └── Add/Edit Product
```

**Orders Module:**
```
Orders (All)
├── Orders (By Status: Pending, Processing, Shipped)
├── [Order Detail]
│   ├── Documents Tab (Invoices, etc.)
│   ├── Communication Tab
│   ├── History Tab
│   └── [Tracking Page]
└── [Create New Order]
    ├── Step 1: Product Selection
    ├── Step 2: Quantity & Pricing
    ├── Step 3: Shipping
    ├── Step 4: Payment
    └── Step 5: Review & Confirm
```

### Breadcrumb Navigation Paths

```
Home → Products → Widget Pro
Home → Products → Building Materials → Widget Pro
Home → Orders → ORD-2024-001
Home → Manufacturers → Corp A
Home → Dashboard → Analytics
Home → Settings → Security → 2FA Setup
```

---

## Navigation Patterns

### Primary Navigation (Sidebar)

**Visible on Desktop & Tablet (Hamburger on Mobile)**

```
Dashboard
├── Overview
├── Analytics
└── Reports

Products
├── All Products
├── Categories
├── Search
├── Inventory (Seller)
└── Manage Products (Seller)

Manufacturers
├── Directory
├── Browse
└── Favorites

Orders
├── All Orders
├── Pending
├── Processed
├── History
└── Create New

Payments
├── Dashboard
├── Transactions
├── Invoices
├── Payment Methods
└── Billing

Contracts
├── Active
├── Templates
├── Documents
└── Quotes

Inventory (Seller)
├── Dashboard
├── Stock Management
├── Alerts
└── Import/Export

Analytics
├── Sales Performance
├── Product Performance
├── Customer Insights
└── Reports

Support
├── Help Center
├── Contact Support
├── FAQ
└── Status

Settings
├── Account
├── Profile
├── Company
├── Billing
├── Notifications
├── Security
├── Integrations
└── API Keys
```

### Contextual Navigation (Tabs)

**Within Detail Pages**

**Product Detail Tabs:**
- Details
- Specifications
- Reviews
- Q&A
- Certificates

**Order Detail Tabs:**
- Overview
- Documents
- Communication
- History
- Actions

**Manufacturer Profile Tabs:**
- About
- Products
- Certifications
- Reviews
- Ratings

### Secondary Actions

**Inline Buttons:**
- Edit
- Delete
- Share
- Download
- Print
- Export

**Dropdown Menus:**
- More Actions (...)
- Bulk Actions
- Sort Options
- Filter Options

### Footer Navigation

**Links Section:**
- About Us
- Blog
- Careers
- Press
- Pricing

**Legal:**
- Terms of Service
- Privacy Policy
- Cookies Policy
- Security

**Support:**
- Help Center
- Documentation
- Contact
- Status Page

**Social:**
- Twitter
- LinkedIn
- Facebook
- GitHub

---

## Mobile Navigation Patterns

### Mobile Header
```
[≡ Hamburger] [Logo] [🔔] [👤]
```

### Mobile Sidebar (Slide-out)
```
Sidebar overlays content
- All main navigation items
- [Collapse/Expand]
- User can swipe to close
```

### Bottom Navigation (Optional)
```
[Home] [Search] [Orders] [Account] [More]
```

### Key Differences from Desktop:
- Single-column layouts
- Stacked cards vertically
- Table → Card conversion
- Hidden sidebar by default
- Simplified filters
- Full-width modals/panels
- Bottom sheet for actions

---

## Information Density Levels

### Low Density (Focus/Detail View)
- Product Detail Page
- Order Detail Page
- Single Item View
- Large cards with whitespace

### Medium Density (Browsing View)
- Product Listing
- Order List
- Dashboard Overview
- Balanced cards and whitespace

### High Density (Data/Analytical View)
- Analytics Dashboard
- Detailed Analytics
- Data Tables
- Compact rows
- Multiple metrics per row

---

## Summary

This visual sitemap provides:

✅ **Complete Site Structure** - All major pages and relationships
✅ **User Journeys** - Key flows from entry to goal completion
✅ **Navigation Patterns** - Sidebar, tabs, breadcrumbs, footer
✅ **Page Hierarchy** - 4-level depth with clear relationships
✅ **Mobile Adaptations** - Responsive navigation strategies
✅ **Information Architecture** - Organized by modules and functions
✅ **Cross-linking Map** - Related pages and contextual navigation

The hierarchy ensures users can:
- Easily find their destination
- Understand their current location
- Return to previous pages
- Discover related content
- Access account settings from anywhere
