# User Flows & Journeys - B2B Wholesale Distribution Platform

## Table of Contents
1. [Retailer Journeys](#retailer-journeys)
2. [Manufacturer Journeys](#manufacturer-journeys)
3. [Admin Journeys](#admin-journeys)
4. [Critical User Flows](#critical-user-flows)

---

## RETAILER JOURNEYS

### Journey 1.1: New Retailer Onboarding

```
┌──────────────────────────────────────────────────────────┐
│                   RETAILER ONBOARDING                    │
└──────────────────────────────────────────────────────────┘

1. Landing Page
   │
   ├─▶ "For Retailers" CTA
   │
2. Registration Form
   │
   ├─▶ Business Type Selection
   │   ├─ Retail Store
   │   ├─ Chain Store
   │   └─ Online Store
   │
   ├─▶ Basic Information
   │   ├─ Business Name
   │   ├─ Registration Number
   │   ├─ Contact Details
   │   └─ Address
   │
   ├─▶ Create Account
   │   ├─ Email
   │   ├─ Password
   │   └─ Phone Number
   │
3. Email Verification
   │
4. Business Verification
   │
   ├─▶ Upload Documents
   │   ├─ Business License
   │   ├─ Tax ID Certificate
   │   └─ ID Proof
   │
5. Verification Pending
   │
   ├─▶ Explore Platform (Limited Access)
   │   ├─ Browse Products
   │   ├─ View Manufacturers
   │   └─ Cannot Place Orders
   │
6. Verification Approved ✅
   │
7. Complete Profile
   │
   ├─▶ Add Delivery Addresses
   ├─▶ Set Payment Methods
   └─▶ Configure Preferences
   │
8. Onboarding Complete
   │
   └─▶ Dashboard with Guided Tour
```

**Time to Complete**: 15-30 minutes (excluding verification wait time)
**Verification Time**: 24-48 hours

---

### Journey 1.2: Product Discovery & Ordering

```
┌──────────────────────────────────────────────────────────┐
│              PRODUCT DISCOVERY & ORDER FLOW              │
└──────────────────────────────────────────────────────────┘

START: Retailer Dashboard
│
├─▶ OPTION A: Browse by Category
│   │
│   ├─▶ Select Category (e.g., "Toys & Games")
│   ├─▶ View Subcategories
│   ├─▶ Apply Filters
│   │   ├─ Price Range
│   │   ├─ MOQ
│   │   ├─ Manufacturer Location
│   │   ├─ Delivery Time
│   │   └─ Rating
│   ├─▶ Sort Results
│   └─▶ View Products
│
├─▶ OPTION B: Browse by Manufacturer
│   │
│   ├─▶ Manufacturer Directory
│   ├─▶ Filter Manufacturers
│   ├─▶ View Manufacturer Profile
│   │   ├─ Company Info
│   │   ├─ Certifications
│   │   ├─ Product Catalog
│   │   └─ Reviews
│   └─▶ View Products
│
├─▶ OPTION C: Search
│   │
│   ├─▶ Enter Search Query
│   ├─▶ Search Suggestions
│   ├─▶ Search Results
│   └─▶ View Products
│
└─▶ OPTION D: Recommendations
    │
    ├─▶ AI-Powered Suggestions
    ├─▶ Trending Products
    └─▶ View Products

──────────────────────────────────────────────────

PRODUCT DETAILS PAGE
│
├─▶ View Product Information
│   ├─ Images & Videos
│   ├─ Description
│   ├─ Specifications
│   ├─ Pricing Tiers
│   ├─ MOQ Information
│   ├─ Available Stock
│   ├─ Lead Time
│   └─ Reviews
│
├─▶ Download Spec Sheet (PDF)
│
├─▶ Contact Manufacturer
│
├─▶ Add to Cart
│   │
│   ├─▶ Select Quantity (respecting MOQ)
│   ├─▶ View Unit Price (based on tier)
│   ├─▶ Calculate Total
│   └─▶ Add to Cart ✅
│
└─▶ Continue Shopping or Checkout

──────────────────────────────────────────────────

CHECKOUT FLOW
│
1. Review Cart
   │
   ├─▶ View Items
   ├─▶ Update Quantities
   ├─▶ Remove Items
   └─▶ See Subtotal
   │
2. Delivery Information
   │
   ├─▶ Select Delivery Address
   │   ├─ Existing Address
   │   └─ Add New Address
   │
   ├─▶ Delivery Instructions
   └─▶ Preferred Delivery Date
   │
3. Payment Method
   │
   ├─▶ Select Payment Method
   │   ├─ Bank Transfer
   │   ├─ Credit Terms (if approved)
   │   ├─ Escrow
   │   └─ Credit Card
   │
   └─▶ Payment Terms Selection
       ├─ Immediate
       ├─ Net 30
       └─ Net 60
   │
4. Review Order
   │
   ├─▶ Order Summary
   │   ├─ Items & Quantities
   │   ├─ Subtotal
   │   ├─ Tax
   │   ├─ Shipping
   │   ├─ Total
   │   └─ Estimated Delivery
   │
   ├─▶ Terms & Conditions
   └─▶ Place Order ✅
   │
5. Order Confirmation
   │
   ├─▶ Order Number
   ├─▶ Confirmation Email
   ├─▶ Download Proforma Invoice
   │
   └─▶ Track Order Status

──────────────────────────────────────────────────

ORDER TRACKING
│
├─▶ Order Status Updates
│   ├─ Pending Approval
│   ├─ Confirmed by Manufacturer
│   ├─ In Production
│   ├─ Ready to Ship
│   ├─ Shipped (with tracking)
│   ├─ Out for Delivery
│   └─ Delivered
│
├─▶ Notifications
│   ├─ Email
│   ├─ SMS
│   └─ In-App
│
├─▶ Communication with Manufacturer
│
└─▶ Order Complete
    │
    ├─▶ Leave Review
    ├─▶ Download Invoice
    └─▶ Reorder
```

---

### Journey 1.3: Repeat Purchase (Quick Reorder)

```
Dashboard
│
├─▶ "Quick Reorder" Section
│
├─▶ Select Previous Order
│
├─▶ Review Items
│   ├─ All items available? ✅
│   └─ Some items unavailable? ⚠️
│       └─ Suggest Alternatives
│
├─▶ Modify Quantities (Optional)
│
├─▶ Use Same Delivery & Payment
│
└─▶ Place Order ✅
```

**Time Saved**: 5 minutes vs 15-20 minutes for new order

---

## MANUFACTURER JOURNEYS

### Journey 2.1: Manufacturer Onboarding

```
┌──────────────────────────────────────────────────────────┐
│                 MANUFACTURER ONBOARDING                  │
└──────────────────────────────────────────────────────────┘

1. Landing Page
   │
   ├─▶ "For Manufacturers" CTA
   │
2. Registration Form
   │
   ├─▶ Company Information
   │   ├─ Company Name
   │   ├─ Business Registration Number
   │   ├─ Tax ID
   │   ├─ Established Year
   │   └─ Industry Type
   │
   ├─▶ Factory Details
   │   ├─ Location
   │   ├─ Factory Size
   │   ├─ Employee Count
   │   └─ Production Capacity
   │
   ├─▶ Contact Information
   │   ├─ Primary Contact
   │   ├─ Email
   │   ├─ Phone
   │   └─ Website
   │
   └─▶ Create Account
   │
3. Email Verification
   │
4. Business Verification (Enhanced KYC)
   │
   ├─▶ Upload Documents
   │   ├─ Business License
   │   ├─ Tax Certificates
   │   ├─ Factory License
   │   ├─ Quality Certifications (ISO, etc.)
   │   └─ Compliance Documents
   │
   ├─▶ Factory Verification
   │   ├─ Upload Factory Photos
   │   ├─ Production Line Images
   │   └─ Optional: Video Tour
   │
5. Verification Review
   │
   ├─▶ Admin Review (2-5 business days)
   │
   └─▶ Status Updates
       ├─ Documents Under Review
       ├─ Additional Information Requested
       └─ Verification Complete ✅
   │
6. Profile Completion
   │
   ├─▶ Company Profile
   │   ├─ Description
   │   ├─ Logo & Banner
   │   ├─ Company Story
   │   └─ Key Strengths
   │
   ├─▶ Product Categories
   │
   ├─▶ Shipping Zones
   │
   ├─▶ Payment Settings
   │
   └─▶ Team Members
       ├─ Add Team Members
       └─ Assign Roles
   │
7. Add Products
   │
   ├─▶ OPTION A: Manual Entry
   │   └─▶ Add Product Form
   │
   └─▶ OPTION B: Bulk Upload
       ├─▶ Download Template
       ├─▶ Fill Excel/CSV
       └─▶ Upload & Validate
   │
8. Review & Launch
   │
   ├─▶ Preview Public Profile
   ├─▶ Check Product Listings
   └─▶ Go Live ✅
   │
9. Onboarding Complete
   │
   └─▶ Dashboard with Analytics
```

**Time to Complete**: 45-60 minutes (excluding verification)
**Verification Time**: 2-5 business days

---

### Journey 2.2: Order Management Flow

```
┌──────────────────────────────────────────────────────────┐
│                 MANUFACTURER ORDER FLOW                  │
└──────────────────────────────────────────────────────────┘

NEW ORDER RECEIVED
│
├─▶ Notification
│   ├─ Email
│   ├─ SMS
│   └─ In-App Alert
│
├─▶ Dashboard Alert Badge
│
└─▶ View Order Details
    │
    ├─▶ Order Information
    │   ├─ Order Number
    │   ├─ Retailer Details
    │   ├─ Products & Quantities
    │   ├─ Total Amount
    │   ├─ Delivery Address
    │   └─ Required Delivery Date
    │
    ├─▶ DECISION POINT
    │   │
    │   ├─▶ ACCEPT ORDER
    │   │   │
    │   │   ├─▶ Confirm Availability
    │   │   ├─▶ Set Production Timeline
    │   │   ├─▶ Confirm Delivery Date
    │   │   └─▶ Send Confirmation ✅
    │   │       │
    │   │       └─▶ Status: CONFIRMED
    │   │
    │   ├─▶ REQUEST MODIFICATION
    │   │   │
    │   │   ├─▶ Suggest Alternative Quantities
    │   │   ├─▶ Propose Different Timeline
    │   │   ├─▶ Adjust Pricing
    │   │   └─▶ Send to Retailer for Approval
    │   │       │
    │   │       └─▶ Wait for Response
    │   │
    │   └─▶ REJECT ORDER
    │       │
    │       ├─▶ Select Reason
    │       │   ├─ Out of Stock
    │       │   ├─ Cannot Meet MOQ
    │       │   ├─ Cannot Deliver to Location
    │       │   └─ Other (specify)
    │       │
    │       └─▶ Send Rejection Notice

──────────────────────────────────────────────────

ORDER CONFIRMED - PRODUCTION PHASE
│
├─▶ Update Order Status: "In Production"
│
├─▶ Production Planning
│   ├─ Allocate Resources
│   ├─ Schedule Production
│   └─ Update Timeline
│
├─▶ Inventory Management
│   ├─ Reserve Stock
│   └─ Update Inventory Levels
│
├─▶ Progress Updates
│   ├─ 25% Complete
│   ├─ 50% Complete
│   ├─ 75% Complete
│   └─ 100% Complete
│
└─▶ Quality Check
    │
    └─▶ Mark as "Ready to Ship"

──────────────────────────────────────────────────

SHIPPING PHASE
│
├─▶ Create Shipment
│   │
│   ├─▶ Select Carrier
│   ├─▶ Enter Package Details
│   │   ├─ Weight
│   │   ├─ Dimensions
│   │   └─ Number of Packages
│   │
│   ├─▶ Generate Shipping Label
│   ├─▶ Enter Tracking Number
│   └─▶ Update Status: "Shipped" ✅
│
├─▶ Upload Documents
│   ├─ Packing List
│   ├─ Commercial Invoice
│   └─ Other Documents
│
├─▶ Notify Retailer
│   ├─ Shipment Details
│   ├─ Tracking Link
│   └─ Expected Delivery
│
└─▶ Track Shipment Progress
    │
    └─▶ Delivery Confirmation

──────────────────────────────────────────────────

ORDER COMPLETED
│
├─▶ Automatic Status: "Delivered"
│
├─▶ Payment Processing
│   ├─ Release Payment (if escrow)
│   └─ Platform Commission Deducted
│
├─▶ Request Review from Retailer
│
└─▶ Order Archive
```

---

### Journey 2.3: Product Management

```
PRODUCT LIFECYCLE MANAGEMENT
│
├─▶ ADD NEW PRODUCT
│   │
│   ├─▶ Product Information
│   │   ├─ Basic Details (Name, SKU, Category)
│   │   ├─ Description
│   │   ├─ Specifications
│   │   └─ Keywords/Tags
│   │
│   ├─▶ Media Upload
│   │   ├─ Main Image
│   │   ├─ Additional Images (up to 10)
│   │   ├─ Product Video
│   │   └─ Spec Sheet PDF
│   │
│   ├─▶ Pricing
│   │   ├─ Base Price
│   │   ├─ Currency
│   │   └─ Volume Pricing Tiers
│   │       ├─ Tier 1: 10-49 units → $10/unit
│   │       ├─ Tier 2: 50-99 units → $9/unit
│   │       └─ Tier 3: 100+ units → $8/unit
│   │
│   ├─▶ Inventory & Logistics
│   │   ├─ Current Stock
│   │   ├─ MOQ
│   │   ├─ Production Time
│   │   ├─ Packaging Details
│   │   └─ Shipping Weight/Dimensions
│   │
│   ├─▶ Settings
│   │   ├─ Negotiable Pricing?
│   │   ├─ Visibility (Public/Private)
│   │   └─ Featured Product?
│   │
│   └─▶ Save & Publish ✅
│
├─▶ MANAGE EXISTING PRODUCTS
│   │
│   ├─▶ View All Products
│   │   ├─ Filter by Status
│   │   ├─ Search
│   │   └─ Sort
│   │
│   ├─▶ Edit Product
│   ├─▶ Update Stock
│   ├─▶ Adjust Pricing
│   ├─▶ Activate/Deactivate
│   └─▶ Delete Product
│
└─▶ BULK OPERATIONS
    │
    ├─▶ Bulk Upload (CSV/Excel)
    ├─▶ Bulk Price Update
    ├─▶ Bulk Stock Update
    └─▶ Bulk Status Change
```

---

## ADMIN JOURNEYS

### Journey 3.1: User Verification Process

```
┌──────────────────────────────────────────────────────────┐
│               ADMIN VERIFICATION WORKFLOW                │
└──────────────────────────────────────────────────────────┘

MANUFACTURER VERIFICATION
│
├─▶ Admin Dashboard → Pending Verifications
│
├─▶ View Manufacturer Application
│   │
│   ├─▶ Company Information
│   │   ├─ Review Details
│   │   └─ Cross-check Registration
│   │
│   ├─▶ Review Documents
│   │   ├─ Business License
│   │   ├─ Tax Certificates
│   │   ├─ Quality Certifications
│   │   └─ Factory Images
│   │
│   ├─▶ Background Check
│   │   ├─ Business Registry Lookup
│   │   ├─ Verify Tax ID
│   │   └─ Check Compliance Records
│   │
│   └─▶ DECISION
│       │
│       ├─▶ APPROVE ✅
│       │   ├─▶ Set Verification Status: Approved
│       │   ├─▶ Send Welcome Email
│       │   ├─▶ Activate Account
│       │   └─▶ Add to Manufacturer Directory
│       │
│       ├─▶ REQUEST MORE INFO
│       │   ├─▶ List Required Documents
│       │   ├─▶ Set Deadline
│       │   └─▶ Send Notification
│       │
│       └─▶ REJECT ❌
│           ├─▶ Select Reason
│           ├─▶ Provide Feedback
│           └─▶ Send Rejection Email

──────────────────────────────────────────────────

RETAILER VERIFICATION
│
├─▶ Similar Process to Manufacturer
│   ├─ Review Business Documents
│   ├─ Verify Business Registration
│   └─ Approve/Request Info/Reject
│
└─▶ Set Credit Limit (if applicable)
```

---

### Journey 3.2: Dispute Resolution

```
DISPUTE MANAGEMENT
│
├─▶ New Dispute Notification
│
├─▶ View Dispute Details
│   │
│   ├─▶ Dispute Information
│   │   ├─ Dispute Number
│   │   ├─ Related Order
│   │   ├─ Raised By
│   │   ├─ Against
│   │   └─ Reason
│   │
│   ├─▶ Evidence Review
│   │   ├─ Photos
│   │   ├─ Documents
│   │   └─ Communication History
│   │
│   ├─▶ Order History
│   │
│   └─▶ Communication Thread
│
├─▶ Investigation
│   │
│   ├─▶ Contact Both Parties
│   ├─▶ Request Additional Evidence
│   ├─▶ Review Platform Policies
│   └─▶ Consult Legal (if needed)
│
└─▶ RESOLUTION
    │
    ├─▶ Full Refund
    ├─▶ Partial Refund
    ├─▶ Product Replacement
    ├─▶ Dismiss Dispute
    │
    └─▶ Close Dispute
        ├─▶ Document Resolution
        ├─▶ Update Order Status
        └─▶ Notify Parties
```

---

## CRITICAL USER FLOWS

### Flow 4.1: First Order Experience (Retailer)

```
GOAL: Make first purchase as smooth as possible
│
├─▶ Personalized Onboarding
│   └─▶ "What are you looking for?" → AI suggests products
│
├─▶ Curated Product Recommendations
│
├─▶ Featured Manufacturers
│
├─▶ First Order Incentive
│   └─▶ "10% off your first order" or "Free shipping"
│
├─▶ Simplified Checkout
│   └─▶ Fewer steps, clear progress indicator
│
├─▶ Dedicated Support
│   └─▶ Live chat available during checkout
│
└─▶ Post-Order Engagement
    ├─▶ Welcome email series
    ├─▶ Tips for using the platform
    └─▶ Feedback request
```

---

### Flow 4.2: Sample Order Request

```
SAMPLE ORDER FLOW
│
├─▶ Product Page → "Request Sample" Button
│
├─▶ Sample Request Form
│   ├─ Quantity (usually 1-5 units)
│   ├─ Delivery Address
│   └─ Purpose (Testing, Display, etc.)
│
├─▶ Send to Manufacturer
│
├─▶ Manufacturer Reviews Request
│   │
│   └─▶ DECISION
│       ├─▶ Approve (Sample Price or Free)
│       ├─▶ Request Payment
│       └─▶ Decline (with reason)
│
├─▶ Payment (if required)
│
├─▶ Sample Shipment
│
└─▶ Follow-up
    └─▶ "Ready to place bulk order?"
```

---

### Flow 4.3: Price Negotiation

```
NEGOTIATION FLOW (Optional Feature)
│
├─▶ Product Page → "Request Quote" Button
│
├─▶ Quote Request Form
│   ├─ Desired Quantity
│   ├─ Target Price
│   ├─ Delivery Timeline
│   └─ Additional Requirements
│
├─▶ Send to Manufacturer
│
├─▶ Manufacturer Reviews
│   │
│   └─▶ RESPONSE
│       ├─▶ Accept Target Price ✅
│       ├─▶ Counter Offer
│       │   └─▶ Retailer Accepts/Counters
│       └─▶ Decline
│
├─▶ Agreement Reached
│
└─▶ Convert to Order
```

---

### Flow 4.4: Return & Refund Process

```
RETURN/REFUND FLOW
│
├─▶ Order Details → "Request Return"
│
├─▶ Return Request Form
│   ├─ Reason for Return
│   ├─ Photos of Product
│   ├─ Quantity to Return
│   └─ Preferred Resolution
│       ├─ Refund
│       ├─ Replacement
│       └─ Credit Note
│
├─▶ Manufacturer Notification
│
├─▶ Manufacturer Reviews
│   │
│   └─▶ DECISION
│       ├─▶ Approve Return
│       │   └─▶ Provide Return Instructions
│       │
│       └─▶ Dispute Return
│           └─▶ Escalate to Admin
│
├─▶ Return Shipment
│   └─▶ Track Return
│
├─▶ Manufacturer Receives Return
│   └─▶ Inspect Products
│
└─▶ Process Refund/Replacement
    │
    └─▶ Case Closed ✅
```

---

## Key Performance Indicators (KPIs) for User Flows

### Retailer KPIs
- **Time to First Order**: < 30 minutes after verification
- **Checkout Completion Rate**: > 75%
- **Cart Abandonment Rate**: < 25%
- **Repeat Purchase Rate**: > 40% within 90 days

### Manufacturer KPIs
- **Time to First Product Listed**: < 2 hours after approval
- **Order Acceptance Rate**: > 90%
- **Average Response Time**: < 4 hours
- **On-Time Delivery Rate**: > 95%

### Platform KPIs
- **Verification Approval Time**: < 48 hours
- **Dispute Resolution Time**: < 7 days
- **User Satisfaction Score**: > 4.5/5
- **Platform Uptime**: > 99.9%

---

## Mobile-Specific User Flows

### Mobile Optimization Priorities

1. **Quick Reorder** - One-tap reordering
2. **Order Tracking** - Real-time notifications
3. **Product Search** - Voice search, barcode scanning
4. **Messaging** - Quick communication with manufacturers
5. **Notifications** - Push notifications for order updates

---

## Conclusion

These user flows are designed to:
- **Minimize friction** at every step
- **Build trust** through transparency
- **Enable quick decisions** with clear information
- **Support multiple user types** with role-specific flows
- **Scale efficiently** as the platform grows

Each flow should be tested with real users and iteratively improved based on analytics and feedback.
