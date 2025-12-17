# UX Flow Diagrams - B2B Wholesale Platform

**Version**: 2.0  
**Date**: 2024

---

## Table of Contents

1. [Authentication Flows](#authentication-flows)
2. [Manufacturer Flows](#manufacturer-flows)
3. [Retailer Flows](#retailer-flows)
4. [Distributor Flows](#distributor-flows)
5. [Transaction Flows](#transaction-flows)
6. [Communication & Negotiation Flows](#communication--negotiation-flows)
7. [Admin Flows](#admin-flows)

---

## Authentication Flows

### Sign Up Flow (New User)

```
START
  │
  ▼
[Select Role]
  ├─ Manufacturer
  ├─ Retailer
  └─ Distributor
  │
  ▼
[Enter Email & Password]
  │
  ▼
[Verify Email]
  │ (Click verification link)
  ▼
[Basic Profile] (Name, Phone, Address)
  │
  ▼
[Business Verification] (Level 1)
  │ (Documents upload)
  ▼
Decision: Verification Status?
  ├─ ✓ Approved → [Go to Dashboard]
  ├─ ⏳ Pending → [Waiting for Review]
  └─ ✗ Rejected → [Re-upload Documents] (loop back)
  │
  ▼
END
```

### Login Flow

```
START
  │
  ▼
[Enter Email]
  │
  ▼
[Enter Password]
  │
  ▼
Decision: 2FA Enabled?
  ├─ Yes → [Enter 2FA Code]
  │        │
  │        ▼
  │     [Verify Code]
  │
  └─ No → [Direct to Dashboard]
  │
  ▼
[Redirect to Dashboard]
  │
  ▼
END
```

### Password Reset Flow

```
START
  │
  ▼
[Forgot Password Link]
  │
  ▼
[Enter Email]
  │
  ▼
[Send Reset Email]
  │
  ▼
[Email Sent Confirmation]
  │ (User clicks link in email)
  ▼
[Enter New Password]
  │
  ▼
[Confirm Password Reset]
  │
  ▼
[Success - Redirect to Login]
  │
  ▼
END
```

---

## Manufacturer Flows

### Product Listing Flow

```
START
  │
  ▼
[Go to Products → Add New]
  │
  ▼
[Enter Basic Info]
  ├─ Product Name
  ├─ Category
  ├─ SKU
  └─ Description
  │
  ▼
[Upload Images & Media]
  │ (Main image + gallery)
  ▼
[Set Specifications]
  ├─ Dimensions
  ├─ Weight
  ├─ Material
  └─ Certifications
  │
  ▼
[Configure Pricing]
  ├─ Base Price
  ├─ Volume Tiers (MOQ 50, 100, 500, 1000+)
  ├─ Bulk Discounts
  └─ Packaging Options
  │
  ▼
[Set Inventory]
  ├─ Current Stock
  ├─ Reorder Level
  └─ Lead Time
  │
  ▼
[Review & Publish]
  │
  ▼
Decision: Ready to Publish?
  ├─ Yes → [Product Live]
  │         │
  │         ▼
  │      [Show QR Code / Share URL]
  │
  └─ No → [Save as Draft]
  │
  ▼
END
```

### Order Processing Flow

```
START
  │
  ▼
[New Order Received Notification]
  │
  ▼
[View Order Details]
  ├─ Items
  ├─ Quantity
  ├─ Customer Info
  └─ Delivery Address
  │
  ▼
Decision: Accept Order?
  ├─ Yes → [Accept Order]
  │         │
  │         ▼
  │      [Order Status: Confirmed]
  │         │
  │         ▼
  │      [Allocate Inventory]
  │         │
  │         ▼
  │      [Schedule Production]
  │         │
  │         ▼
  │      [Notify Customer]
  │
  ├─ Negotiate → [Counter-Offer]
  │              │
  │              ▼
  │         [Send to Customer]
  │              │
  │              ▼
  │         [Wait for Response]
  │
  └─ Reject → [Rejection Reason]
             │
             ▼
          [Cancel Order, Refund Payment]
  │
  ▼
[Production Phase]
  │ (Update status: In Production)
  ▼
[Goods Ready]
  │ (Update status: Ready to Ship)
  ▼
[Ship Goods]
  │ (Add tracking number)
  ▼
[Notify Customer with Tracking]
  │
  ▼
[Await Delivery Confirmation]
  │
  ▼
[Payment Released to Manufacturer]
  │
  ▼
[Order Complete]
  │
  ▼
END
```

### Production Planning Flow (NEW)

```
START
  │
  ▼
[View Demand Forecasting Dashboard]
  │
  ▼
[Analyze Sales Trends]
  ├─ Last 3 months
  ├─ Last 6 months
  ├─ Year-over-year
  └─ By Product
  │
  ▼
[View AI Recommendations]
  │ (Based on forecasting)
  ▼
[Review Seasonal Patterns]
  │ (Peak vs. off-season)
  ▼
Decision: Accept Recommendations?
  ├─ Yes → [Update Production Schedule]
  │         │
  │         ▼
  │      [Adjust Raw Material Orders]
  │         │
  │         ▼
  │      [Notify Production Team]
  │
  └─ No → [Custom Production Plan]
             │
             ▼
          [Manual Adjustments]
  │
  ▼
[Set Stock Targets]
  │
  ▼
END
```

---

## Retailer Flows

### Product Discovery Flow

```
START
  │
  ▼
[Go to Browse Products]
  │
  ▼
Decision: Search Method?
  ├─ Search by Keyword
  │   │
  │   ▼
  │ [Enter Search Term]
  │   │
  │   ▼
  │ [View Results]
  │
  ├─ Browse by Category
  │   │
  │   ▼
  │ [Select Category]
  │   │
  │   ▼
  │ [View Products in Category]
  │
  ├─ Browse Manufacturers
  │   │
  │   ▼
  │ [View Manufacturer Directory]
  │   │
  │   ▼
  │ [Click Manufacturer Profile]
  │   │
  │   ▼
  │ [Browse Their Products]
  │
  └─ Use Recommendations
      │
      ▼
   [View Recommended Products]
  │
  ▼
[Apply Filters]
  ├─ Price Range
  ├─ MOQ
  ├─ Ratings
  ├─ In Stock
  ├─ Certifications
  └─ Delivery Time
  │
  ▼
[View Product Card]
  ├─ Image
  ├─ Price
  ├─ MOQ
  ├─ Rating
  └─ In Stock Status
  │
  ▼
Decision: Interested?
  ├─ View Details → [Product Page]
  │                 ├─ Full description
  │                 ├─ Specifications
  │                 ├─ Reviews
  │                 ├─ Manufacturer info
  │                 ├─ Pricing tiers
  │                 └─ [Add to Cart] / [Request Quote]
  │
  ├─ Add to Favorites → [Saved]
  │
  ├─ Compare → [Add to Comparison]
  │
  └─ Continue Shopping → [Back to Results]
  │
  ▼
END
```

### Order Placement Flow

```
START
  │
  ▼
[Review Cart]
  │ (Items from multiple suppliers)
  ▼
Decision: Proceed?
  ├─ Review Items → [Check quantities, prices]
  │
  ├─ Update Quantities → [Modify cart]
  │
  ├─ Remove Items → [Delete from cart]
  │
  └─ Checkout → [Continue]
  │
  ▼
[Shipping Information]
  ├─ Select Delivery Address
  ├─ Shipping Method
  └─ Delivery Deadline
  │
  ▼
[Review Order Summary]
  │ (Items, quantities, prices, total)
  ▼
Decision: Apply Contract/Deal?
  ├─ Yes → [Select Contract]
  │         │ (Auto-apply terms)
  │         ▼
  │      [View Updated Pricing]
  │
  └─ No → [Proceed]
  │
  ▼
[Payment Method]
  ├─ Credit Card
  ├─ Bank Transfer
  ├─ Escrow (default)
  ├─ Credit Limit
  └─ Deferred Payment
  │
  ▼
Decision: Payment Method Selected?
  ├─ Credit Card → [Enter Card Details]
  │                │
  │                ▼
  │             [Process Payment]
  │
  ├─ Bank Transfer → [Show Bank Details]
  │                  │
  │                  ▼
  │               [Manual Verification]
  │
  ├─ Credit Limit → [Check Available Credit]
  │                 │
  │                 ▼
  │              [Approve/Reject Based on Credit Score]
  │
  └─ Deferred → [Review Terms]
  │              │
  │              ▼
  │           [Request Approval]
  │
  ▼
[Order Confirmation]
  │ (Order number, receipt)
  ▼
[Email Confirmation Sent]
  │
  ▼
[Redirect to Order Tracking]
  │
  ▼
END
```

### Contract Negotiation Flow (NEW)

```
START
  │
  ▼
[View Product / Manufacturer]
  │
  ▼
[Click "Request Quote" or "Negotiate"]
  │
  ▼
[Create RFQ]
  ├─ Product(s) Selection
  ├─ Quantity Needed
  ├─ Delivery Timeline
  ├─ Special Requirements
  └─ Contract Terms (optional)
  │
  ▼
[Send RFQ to Supplier]
  │
  ▼
[Track RFQ Status]
  │ (Notification when response received)
  ▼
[Review Manufacturer's Quote]
  ├─ Price per unit
  ├─ Volume tiers
  ├─ Delivery time
  ├─ Terms & conditions
  └─ Special offers
  │
  ▼
Decision: Accept Quote?
  ├─ Accept → [Create Purchase Order]
  │           │
  │           ▼
  │        [Order Placement]
  │
  ├─ Negotiate → [Counter-Offer]
  │              │
  │              ▼
  │         [Send Back to Supplier]
  │              │
  │              ▼
  │         [Wait for Response] (loop)
  │
  └─ Reject → [Request New Quote]
  │
  ▼
Decision: Want Long-Term Contract?
  ├─ Yes → [Create Contract]
  │         │ (Volume commitments, pricing)
  │         ▼
  │      [Digital Signature]
  │         │
  │         ▼
  │      [Contract Active]
  │
  └─ No → [One-off Order]
  │
  ▼
END
```

---

## Distributor Flows

### Inventory Management Flow (NEW)

```
START
  │
  ▼
[Go to Warehouse Hub]
  │
  ▼
[View Multi-Warehouse Inventory]
  ├─ Warehouse 1: 5,000 units
  ├─ Warehouse 2: 3,200 units
  ├─ Warehouse 3: 4,100 units
  └─ Total: 12,300 units
  │
  ▼
[Click Warehouse Detail]
  │
  ▼
[View Products in Warehouse]
  ├─ Product A: 2,000 units
  ├─ Product B: 1,500 units
  ├─ Product C: 1,200 units
  └─ (More...)
  │
  ▼
Decision: Action Needed?
  ├─ Restock → [View Low Stock Alerts]
  │            │ (Products below reorder level)
  │            ▼
  │         [Select Manufacturers]
  │            │
  │            ▼
  │         [Place Bulk Order]
  │            │
  │            ▼
  │         [Forecast Delivery]
  │
  ├─ Transfer → [Move Between Warehouses]
  │             │
  │             ▼
  │          [Schedule Transfer]
  │
  ├─ Allocate → [Reserve Stock for Retailers]
  │             │
  │             ▼
  │          [Update Allocation]
  │
  ├─ Track Shipments → [View Incoming Shipments]
  │
  └─ Monitor Health → [Check Inventory Metrics]
  │
  ▼
END
```

### Order Aggregation Flow (NEW)

```
START
  │
  ▼
[Go to Orders Dashboard]
  │
  ▼
[View Orders from Retailers]
  │ (In assigned region)
  ├─ Order 1: Retailer A - 500 units Product X
  ├─ Order 2: Retailer B - 300 units Product X
  ├─ Order 3: Retailer C - 200 units Product Y
  └─ (More...)
  │
  ▼
[System Consolidates Similar Orders]
  │ (AI grouping by manufacturer)
  ▼
[Suggest Bulk Order to Manufacturer]
  │ Recommendation: Order 1,000 units Product X
  │                 (Combining 3 retailer orders)
  ▼
Decision: Create Bulk Order?
  ├─ Yes → [Create PO to Manufacturer]
  │         │ (Better unit price)
  │         ▼
  │      [Negotiate Group Pricing]
  │
  └─ Individual Orders → [Place Separate Orders]
  │
  ▼
[Monitor Fulfillment]
  │ (Receive goods in warehouse)
  ▼
[Allocate to Retailers]
  │ (Distribute from warehouse)
  ▼
[Coordinate Delivery]
  │ (Pickup by retailers or distributor delivery)
  ▼
[Collect Payment from Retailers]
  │
  ▼
[Pay Manufacturer]
  │
  ▼
[Keep Commission]
  │
  ▼
END
```

---

## Transaction Flows

### Full Purchase Transaction Flow

```
┌────────────────────────────────────────────┐
│ RETAILER SIDE                              │
│                                            │
│ START → Browse → Add to Cart → Checkout   │
│         (Product Discovery)    (Order Page)│
│                    │                       │
│                    ▼                       │
│              [Place Order]                 │
│              (Payment Method)              │
│                    │                       │
│                    ▼                       │
│         [Order Confirmation]               │
│         (Track Shipment)                   │
│                    │                       │
│                    ▼                       │
│         [Receive Goods]                    │
│         (Confirm Delivery)                 │
│                    │                       │
│                    ▼                       │
│         [Leave Review/Rating]              │
│                    │                       │
│                    ▼                       │
│                   END                      │
└────────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │    PLATFORM (MIDDLE)    │
        │                         │
        │ • Payment Escrow        │
        │ • Payment Processing    │
        │ • Order Routing         │
        │ • Tracking              │
        │ • Dispute Resolution    │
        └────────────┬────────────┘
                     │
┌────────────────────────────────────────────┐
│ MANUFACTURER SIDE                          │
│                                            │
│         [Receive Order]                    │
│         (Notification)                     │
│              │                             │
│              ▼                             │
│    [Accept/Negotiate/Reject]               │
│              │                             │
│              ├─ Accept                     │
│              │   │                         │
│              │   ▼                         │
│              │ [In Production]             │
│              │   │                         │
│              │   ▼                         │
│              │ [Ship Goods]                │
│              │   │                         │
│              │   ▼                         │
│              │ [Send Tracking]             │
│              │   │                         │
│              │   ▼                         │
│              │ [Await Delivery]            │
│              │   │                         │
│              │   ▼                         │
│              │ [Payment Released]          │
│              │   │                         │
│              │   ▼                         │
│              │ [Leave Review]              │
│              │                             │
│              └─ Reject                     │
│                  │                         │
│                  ▼                         │
│              [Cancel Order]                │
│              [Refund Payment]              │
│                  │                         │
│                  ▼                         │
│                  END                       │
└────────────────────────────────────────────┘
```

---

## Communication & Negotiation Flows

### RFQ Request Flow

```
RETAILER INITIATES:
START
  │
  ▼
[Request for Quotation]
  ├─ Product(s): [Select]
  ├─ Quantity: [Enter]
  ├─ Timeline: [Select]
  ├─ Special Requirements: [Text]
  └─ Target Price: [Optional]
  │
  ▼
[Select Suppliers to Send to]
  ├─ ☑ Supplier A
  ├─ ☑ Supplier B
  ├─ ☑ Supplier C
  └─ (Show 5-10 relevant suppliers)
  │
  ▼
[Send RFQ]
  │
  ▼
[Confirmation Screen]
  └─ "RFQ sent to 3 suppliers"
  │
  ▼
[Wait for Responses]
  │ (Notification when quotes received)
  ▼

MANUFACTURER RECEIVES:
[New RFQ Notification]
  │
  ▼
[Review RFQ Details]
  │
  ▼
[Create Quote Response]
  ├─ Unit Price
  ├─ Volume Tiers
  ├─ Delivery Timeline
  ├─ MOQ
  ├─ Special Terms
  └─ Message to Buyer
  │
  ▼
[Send Quote]
  │
  ▼

RETAILER REVIEWS QUOTES:
[Compare Quotes]
  ├─ Show Side-by-Side:
  │   Supplier A: $10/unit, 7 days, MOQ 100
  │   Supplier B: $9.50/unit, 10 days, MOQ 500
  │   Supplier C: $9/unit, 14 days, MOQ 1000
  │
  ▼
Decision: Accept or Negotiate?
  ├─ Accept Quote → [Create Order]
  │
  ├─ Negotiate → [Send Counter-Offer]
  │              │ (Better price, terms)
  │              ▼
  │         [Wait for Response]
  │
  └─ Reject All → [Request New Quotes]
  │
  ▼
END
```

### In-App Chat Flow

```
RETAILER INITIATES:
START
  │
  ▼
[View Manufacturer Profile]
  │
  ▼
[Click "Send Message"]
  │
  ▼
[Compose Message]
  ├─ Type: [Text input]
  ├─ Attach Files: [Optional]
  └─ [Send]
  │
  ▼
[Message Sent]
  │ (Notification to manufacturer)
  ▼

MANUFACTURER RECEIVES:
[Chat Notification]
  │
  ▼
[Open Conversation]
  │
  ▼
[Read Message]
  │
  ▼
[Reply]
  │
  ▼
[Message Sent]
  │ (Notification to retailer)
  ▼

CONVERSATION CONTINUES:
[Message Thread]
  ├─ Retailer: "What's your best price for 1000 units?"
  ├─ Manufacturer: "For 1000 units, we can offer $9.50/unit"
  ├─ Retailer: "Can you do $9/unit with 30-day terms?"
  ├─ Manufacturer: "We can meet $9.25/unit with 20-day terms"
  ├─ Retailer: "Deal! When can you ship?"
  └─ Manufacturer: "We can ship within 5 days"
  │
  ▼
[Agree on Terms]
  │
  ▼
[Create Contract or Order]
  │ (Option to formalize discussion)
  ▼
END
```

### Contract Management Flow (NEW)

```
MANUFACTURER CREATES:
START
  │
  ▼
[Create Contract Template]
  ├─ Contract Type: [Supply Agreement]
  ├─ Parties: [Select]
  ├─ Duration: [Start - End Date]
  ├─ Volume Commitment: [X units/year]
  ├─ Pricing Tiers: [Per volume level]
  ├─ Payment Terms: [30 days]
  ├─ Renewal: [Auto-renew]
  └─ Special Terms: [Text]
  │
  ▼
[Send to Retailer/Distributor]
  │
  ▼
[Await Response]
  │

RETAILER REVIEWS:
[View Contract]
  ├─ Read Terms
  ├─ Review Pricing
  ├─ Check Commitment Level
  └─ Review Special Terms
  │
  ▼
Decision: Accept or Negotiate?
  ├─ Accept → [Digital Signature]
  │           │
  │           ▼
  │        [Contract Activated]
  │
  ├─ Negotiate → [Request Changes]
  │              │
  │              ▼
  │         [Send Back to Manufacturer]
  │              │
  │              ▼
  │         [Await Response] (loop)
  │
  └─ Reject → [Decline Contract]
  │
  ▼
[Contract Active]
  ├─ All orders auto-apply pricing
  ├─ Track volume commitments
  ├─ Monitor expiration
  └─ Receive renewal notices
  │
  ▼
END
```

---

## Admin Flows

### User Verification Flow

```
NEW USER REGISTRATION
  │
  ▼
[User Submits Verification Docs]
  ├─ Business Registration
  ├─ Tax ID
  ├─ Proof of Address
  ├─ Owner/Director ID
  └─ Bank Account Verification
  │
  ▼
[Enter Admin Review Queue]
  │
  ▼
[Admin Review]
  ├─ Check Document Authenticity
  ├─ Verify Business Information
  ├─ Cross-reference with Government DB
  └─ Flag if Suspicious
  │
  ▼
Decision: Verification Status?
  ├─ ✓ APPROVED
  │   │
  │   ▼
  │ [User Status: Verified]
  │ [Can Place Orders]
  │
  ├─ ⏳ PENDING MORE INFO
  │   │
  │   ▼
  │ [Request Additional Docs]
  │ [User Notified]
  │
  └─ ✗ REJECTED
      │
      ▼
   [Rejection Reason: Unclear photo]
   [User Can Re-upload]
      │
      ▼
   [Return to Review Queue]
  │
  ▼
END
```

### Dispute Resolution Flow

```
DISPUTE INITIATED:
START
  │
  ▼
[Buyer Files Dispute]
  ├─ Reason: [Damaged goods / Wrong items / Non-delivery]
  ├─ Evidence: [Photos / Tracking]
  └─ Requested Action: [Refund / Replacement]
  │
  ▼
[Admin Notifies Seller]
  │
  ▼
[Seller Response Period: 48 hours]
  │
  ▼
SELLER RESPONDS:
Decision: Accept or Dispute?
  ├─ Accept → [Refund Issued]
  │           │
  │           ▼
  │        [Order Cancelled]
  │           │
  │           ▼
  │        [Buyer Satisfaction Survey]
  │
  ├─ Dispute → [Provide Counter-Evidence]
  │            │
  │            ▼
  │         [Evidence Submitted]
  │
  └─ No Response → [Auto-escalate to Admin]
  │
  ▼
[Admin Reviews All Evidence]
  ├─ Buyer Evidence
  ├─ Seller Response
  ├─ Photos
  └─ Tracking Information
  │
  ▼
Decision: Verdict?
  ├─ Favor Buyer → [Issue Refund]
  │               │
  │               ▼
  │            [Seller Appeal Period]
  │
  ├─ Favor Seller → [Dismiss Dispute]
  │                 │
  │                 ▼
  │              [Buyer Appeal Period]
  │
  └─ Partial → [Split Refund]
  │
  ▼
[Final Settlement]
  │
  ▼
END
```

---

## Edge Cases & Error Flows

### Inventory Out of Stock

```
Retailer Clicks [Add to Cart]
  │
  ▼
System Check: In Stock?
  │
  ├─ Yes → [Add to Cart]
  │
  └─ No → [Show Out of Stock]
         ├─ [Notify When Available]
         ├─ [View Similar Products]
         └─ [View Alternatives]
  │
  ▼
END
```

### Payment Failure

```
Payment Processing
  │
  ▼
Check Card Status
  │
  ├─ Valid → [Process Payment]
  │          │
  │          ▼
  │       [Success]
  │
  ├─ Declined → [Show Error Message]
  │             ├─ "Card Declined by Bank"
  │             ├─ [Retry with Different Card]
  │             ├─ [Try Different Payment Method]
  │             └─ [Contact Support]
  │
  ├─ Expired → [Notify User]
  │            └─ "Card Expired - Update Card"
  │
  └─ Suspicious → [Trigger 3D Secure]
                  │
                  ▼
               [Verify with Bank]
  │
  ▼
END
```

---

**Document Version**: 2.0  
**Last Updated**: 2024  
**Owner**: Product & UX Teams
