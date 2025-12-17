# Database Schema - B2B Wholesale Distribution Platform

## Overview

This document defines the complete database schema for the B2B wholesale platform using PostgreSQL as the primary relational database.

---

## Entity Relationship Diagram (Conceptual)

```
┌─────────────┐         ┌─────────────┐
│    Users    │────────▶│  User Roles │
└─────────────┘         └─────────────┘
       │
       ├────────┬────────┬──────────┐
       │        │        │          │
       ▼        ▼        ▼          ▼
┌──────────┐ ┌──────┐ ┌──────┐ ┌──────┐
│Manufact. │ │Retail│ │Admin │ │ Team │
└──────────┘ └──────┘ └──────┘ └──────┘
       │        │
       │        │
       ▼        ▼
┌──────────────────┐
│    Products      │
└──────────────────┘
       │
       ▼
┌──────────────────┐         ┌──────────────────┐
│  Order Items     │◀────────│     Orders       │
└──────────────────┘         └──────────────────┘
                                     │
                            ┌────────┼────────┐
                            ▼        ▼        ▼
                      ┌─────────┐┌─────┐┌────────┐
                      │Payments ││Ship.││Invoice │
                      └─────────┘└─────┘└────────┘
```

---

## Database Tables

### 1. USERS & AUTHENTICATION

#### `users`
Core user table for all platform users.

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    status VARCHAR(20) NOT NULL DEFAULT 'pending', -- pending, active, suspended, deleted
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_created_at ON users(created_at);
```

#### `user_roles`
Role-based access control.

```sql
CREATE TABLE user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL, -- manufacturer, retailer, admin, super_admin
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX idx_user_roles_role ON user_roles(role);
CREATE UNIQUE INDEX idx_user_roles_unique ON user_roles(user_id, role);
```

#### `user_permissions`
Granular permissions.

```sql
CREATE TABLE user_permissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    permission VARCHAR(100) NOT NULL, -- product:create, order:read, etc.
    resource_type VARCHAR(50),
    resource_id UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_permissions_user_id ON user_permissions(user_id);
```

#### `user_sessions`
Session management.

```sql
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(255) NOT NULL,
    refresh_token_hash VARCHAR(255),
    ip_address VARCHAR(45),
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_user_sessions_token_hash ON user_sessions(token_hash);
CREATE INDEX idx_user_sessions_expires_at ON user_sessions(expires_at);
```

#### `user_verification`
Business verification and KYC.

```sql
CREATE TABLE user_verification (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    verification_type VARCHAR(50) NOT NULL, -- email, phone, business, identity
    status VARCHAR(20) NOT NULL DEFAULT 'pending', -- pending, approved, rejected
    documents JSONB, -- Array of document URLs
    verified_by UUID REFERENCES users(id),
    verified_at TIMESTAMP,
    rejection_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_verification_user_id ON user_verification(user_id);
CREATE INDEX idx_user_verification_status ON user_verification(status);
```

---

### 2. MANUFACTURERS

#### `manufacturers`
Manufacturer/factory profiles.

```sql
CREATE TABLE manufacturers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    company_name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    business_registration_number VARCHAR(100),
    tax_id VARCHAR(100),
    description TEXT,
    logo_url VARCHAR(500),
    cover_image_url VARCHAR(500),
    website VARCHAR(255),
    established_year INTEGER,
    employee_count VARCHAR(50), -- 1-50, 51-200, 201-1000, 1000+
    production_capacity TEXT,
    
    -- Contact Information
    contact_person VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    
    -- Address
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    
    -- Business Settings
    minimum_order_value DECIMAL(15, 2),
    lead_time_days INTEGER,
    shipping_regions TEXT[], -- Array of regions they ship to
    
    -- Status and Ratings
    status VARCHAR(20) DEFAULT 'pending', -- pending, active, suspended
    rating DECIMAL(3, 2) DEFAULT 0.00,
    total_reviews INTEGER DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    is_premium BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_manufacturers_user_id ON manufacturers(user_id);
CREATE INDEX idx_manufacturers_slug ON manufacturers(slug);
CREATE INDEX idx_manufacturers_status ON manufacturers(status);
CREATE INDEX idx_manufacturers_country ON manufacturers(country);
CREATE INDEX idx_manufacturers_rating ON manufacturers(rating);
CREATE INDEX idx_manufacturers_is_verified ON manufacturers(is_verified);
```

#### `manufacturer_certifications`
Certificates and compliance documents.

```sql
CREATE TABLE manufacturer_certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID NOT NULL REFERENCES manufacturers(id) ON DELETE CASCADE,
    certification_type VARCHAR(100) NOT NULL, -- ISO, CE, FDA, etc.
    certification_number VARCHAR(100),
    issuing_authority VARCHAR(255),
    document_url VARCHAR(500),
    issue_date DATE,
    expiry_date DATE,
    status VARCHAR(20) DEFAULT 'pending', -- pending, verified, expired, rejected
    verified_by UUID REFERENCES users(id),
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_manufacturer_certifications_manufacturer_id ON manufacturer_certifications(manufacturer_id);
CREATE INDEX idx_manufacturer_certifications_status ON manufacturer_certifications(status);
```

#### `manufacturer_settings`
Business preferences and settings.

```sql
CREATE TABLE manufacturer_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID NOT NULL REFERENCES manufacturers(id) ON DELETE CASCADE,
    auto_approve_orders BOOLEAN DEFAULT FALSE,
    allow_negotiations BOOLEAN DEFAULT TRUE,
    show_production_capacity BOOLEAN DEFAULT TRUE,
    notification_preferences JSONB,
    payment_terms JSONB, -- Net 30, Net 60, etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_manufacturer_settings_manufacturer_id ON manufacturer_settings(manufacturer_id);
```

---

### 3. RETAILERS

#### `retailers`
Retailer/shop owner profiles.

```sql
CREATE TABLE retailers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    business_name VARCHAR(255) NOT NULL,
    business_registration_number VARCHAR(100),
    tax_id VARCHAR(100),
    business_type VARCHAR(50), -- retail_store, chain, online_store, etc.
    description TEXT,
    logo_url VARCHAR(500),
    
    -- Contact Information
    contact_person VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    
    -- Business Address
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    
    -- Business Details
    annual_purchase_volume DECIMAL(15, 2),
    preferred_payment_method VARCHAR(50),
    
    -- Status
    status VARCHAR(20) DEFAULT 'pending', -- pending, active, suspended
    is_verified BOOLEAN DEFAULT FALSE,
    credit_limit DECIMAL(15, 2) DEFAULT 0.00,
    credit_used DECIMAL(15, 2) DEFAULT 0.00,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_retailers_user_id ON retailers(user_id);
CREATE INDEX idx_retailers_status ON retailers(status);
CREATE INDEX idx_retailers_is_verified ON retailers(is_verified);
```

#### `retailer_delivery_addresses`
Multiple delivery addresses for retailers.

```sql
CREATE TABLE retailer_delivery_addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    retailer_id UUID NOT NULL REFERENCES retailers(id) ON DELETE CASCADE,
    address_label VARCHAR(100), -- Warehouse A, Main Store, etc.
    contact_person VARCHAR(255),
    contact_phone VARCHAR(20),
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    country VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_retailer_delivery_addresses_retailer_id ON retailer_delivery_addresses(retailer_id);
```

---

### 4. PRODUCTS & INVENTORY

#### `categories`
Product category hierarchy.

```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    icon VARCHAR(100),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_categories_parent_id ON categories(parent_id);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_is_active ON categories(is_active);
```

#### `products`
Product catalog.

```sql
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID NOT NULL REFERENCES manufacturers(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    
    -- Basic Information
    sku VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    short_description TEXT,
    full_description TEXT,
    
    -- Media
    main_image_url VARCHAR(500),
    images JSONB, -- Array of additional image URLs
    video_url VARCHAR(500),
    spec_sheet_url VARCHAR(500), -- PDF spec sheet
    
    -- Pricing
    base_price DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    
    -- MOQ (Minimum Order Quantity)
    moq INTEGER NOT NULL DEFAULT 1,
    moq_unit VARCHAR(50) DEFAULT 'units', -- units, boxes, pallets
    
    -- Packaging
    units_per_box INTEGER,
    boxes_per_pallet INTEGER,
    unit_weight DECIMAL(10, 2), -- kg
    box_weight DECIMAL(10, 2), -- kg
    
    -- Dimensions
    length DECIMAL(10, 2), -- cm
    width DECIMAL(10, 2), -- cm
    height DECIMAL(10, 2), -- cm
    
    -- Inventory
    stock_quantity INTEGER DEFAULT 0,
    low_stock_threshold INTEGER DEFAULT 10,
    production_time_days INTEGER,
    
    -- Status
    status VARCHAR(20) DEFAULT 'draft', -- draft, active, inactive, out_of_stock
    is_featured BOOLEAN DEFAULT FALSE,
    is_negotiable BOOLEAN DEFAULT FALSE,
    
    -- SEO
    seo_title VARCHAR(255),
    seo_description TEXT,
    seo_keywords TEXT,
    
    -- Metadata
    attributes JSONB, -- Custom attributes
    tags TEXT[],
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_products_manufacturer_id ON products(manufacturer_id);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_is_featured ON products(is_featured);
CREATE INDEX idx_products_created_at ON products(created_at);
```

#### `product_pricing_tiers`
Volume-based pricing.

```sql
CREATE TABLE product_pricing_tiers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    min_quantity INTEGER NOT NULL,
    max_quantity INTEGER,
    price_per_unit DECIMAL(15, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_product_pricing_tiers_product_id ON product_pricing_tiers(product_id);
```

#### `inventory_transactions`
Inventory movement tracking.

```sql
CREATE TABLE inventory_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    transaction_type VARCHAR(50) NOT NULL, -- stock_in, stock_out, adjustment, reserved
    quantity INTEGER NOT NULL,
    reference_type VARCHAR(50), -- order, manual, production
    reference_id UUID,
    notes TEXT,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_inventory_transactions_product_id ON inventory_transactions(product_id);
CREATE INDEX idx_inventory_transactions_created_at ON inventory_transactions(created_at);
```

---

### 5. ORDERS

#### `orders`
Main order table.

```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Parties
    retailer_id UUID NOT NULL REFERENCES retailers(id),
    manufacturer_id UUID NOT NULL REFERENCES manufacturers(id),
    
    -- Order Details
    status VARCHAR(50) NOT NULL DEFAULT 'pending', 
    -- pending, confirmed, in_production, ready_to_ship, shipped, delivered, completed, cancelled
    
    -- Pricing
    subtotal DECIMAL(15, 2) NOT NULL,
    tax_amount DECIMAL(15, 2) DEFAULT 0.00,
    shipping_cost DECIMAL(15, 2) DEFAULT 0.00,
    discount_amount DECIMAL(15, 2) DEFAULT 0.00,
    total_amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    
    -- Delivery
    delivery_address_id UUID REFERENCES retailer_delivery_addresses(id),
    delivery_instructions TEXT,
    estimated_delivery_date DATE,
    actual_delivery_date DATE,
    
    -- Payment
    payment_method VARCHAR(50), -- bank_transfer, escrow, credit, etc.
    payment_status VARCHAR(50) DEFAULT 'pending', -- pending, paid, partial, failed
    payment_terms VARCHAR(50), -- immediate, net_30, net_60
    
    -- Notes
    retailer_notes TEXT,
    manufacturer_notes TEXT,
    internal_notes TEXT,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cancelled_at TIMESTAMP,
    cancellation_reason TEXT
);

CREATE INDEX idx_orders_order_number ON orders(order_number);
CREATE INDEX idx_orders_retailer_id ON orders(retailer_id);
CREATE INDEX idx_orders_manufacturer_id ON orders(manufacturer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
```

#### `order_items`
Individual line items in orders.

```sql
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id),
    
    -- Product Snapshot (at time of order)
    product_name VARCHAR(500) NOT NULL,
    product_sku VARCHAR(100) NOT NULL,
    product_image_url VARCHAR(500),
    
    -- Pricing
    unit_price DECIMAL(15, 2) NOT NULL,
    quantity INTEGER NOT NULL,
    subtotal DECIMAL(15, 2) NOT NULL,
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, in_production, shipped
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
```

#### `order_status_history`
Track all status changes.

```sql
CREATE TABLE order_status_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    from_status VARCHAR(50),
    to_status VARCHAR(50) NOT NULL,
    notes TEXT,
    changed_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_status_history_order_id ON order_status_history(order_id);
CREATE INDEX idx_order_status_history_created_at ON order_status_history(created_at);
```

---

### 6. PAYMENTS & FINANCIALS

#### `payments`
Payment transactions.

```sql
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    payment_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Payment Details
    amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_method VARCHAR(50) NOT NULL, -- bank_transfer, escrow, credit_card, etc.
    
    -- Status
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- pending, processing, completed, failed, refunded
    
    -- Payment Gateway
    gateway VARCHAR(50), -- stripe, paypal, bank
    gateway_transaction_id VARCHAR(255),
    gateway_response JSONB,
    
    -- Parties
    paid_by UUID REFERENCES users(id),
    paid_to UUID REFERENCES users(id),
    
    -- Metadata
    reference_number VARCHAR(100),
    notes TEXT,
    
    processed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_order_id ON payments(order_id);
CREATE INDEX idx_payments_payment_number ON payments(payment_number);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_created_at ON payments(created_at);
```

#### `invoices`
Invoice generation and management.

```sql
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    invoice_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Invoice Details
    invoice_type VARCHAR(50) NOT NULL, -- proforma, commercial, tax_invoice
    
    -- Amounts
    subtotal DECIMAL(15, 2) NOT NULL,
    tax_amount DECIMAL(15, 2) NOT NULL,
    total_amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    
    -- Parties
    issued_to UUID NOT NULL REFERENCES retailers(id),
    issued_by UUID NOT NULL REFERENCES manufacturers(id),
    
    -- Dates
    issue_date DATE NOT NULL,
    due_date DATE,
    paid_date DATE,
    
    -- Status
    status VARCHAR(50) DEFAULT 'draft', -- draft, sent, paid, overdue, cancelled
    
    -- Files
    pdf_url VARCHAR(500),
    
    -- Metadata
    notes TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_invoices_order_id ON invoices(order_id);
CREATE INDEX idx_invoices_invoice_number ON invoices(invoice_number);
CREATE INDEX idx_invoices_issued_to ON invoices(issued_to);
CREATE INDEX idx_invoices_issued_by ON invoices(issued_by);
CREATE INDEX idx_invoices_status ON invoices(status);
```

#### `commission_records`
Platform commission tracking.

```sql
CREATE TABLE commission_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    payment_id UUID REFERENCES payments(id),
    
    -- Commission Details
    order_amount DECIMAL(15, 2) NOT NULL,
    commission_rate DECIMAL(5, 2) NOT NULL, -- Percentage
    commission_amount DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- pending, collected, waived
    
    collected_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_commission_records_order_id ON commission_records(order_id);
CREATE INDEX idx_commission_records_status ON commission_records(status);
```

#### `refunds`
Refund management.

```sql
CREATE TABLE refunds (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id UUID NOT NULL REFERENCES payments(id),
    order_id UUID NOT NULL REFERENCES orders(id),
    refund_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Refund Details
    refund_amount DECIMAL(15, 2) NOT NULL,
    refund_reason VARCHAR(255) NOT NULL,
    refund_notes TEXT,
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, processing, completed, rejected
    
    -- Gateway
    gateway_refund_id VARCHAR(255),
    gateway_response JSONB,
    
    -- Parties
    requested_by UUID REFERENCES users(id),
    approved_by UUID REFERENCES users(id),
    
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approved_at TIMESTAMP,
    processed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_refunds_payment_id ON refunds(payment_id);
CREATE INDEX idx_refunds_order_id ON refunds(order_id);
CREATE INDEX idx_refunds_status ON refunds(status);
```

---

### 7. LOGISTICS & SHIPPING

#### `shipments`
Shipment tracking.

```sql
CREATE TABLE shipments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    tracking_number VARCHAR(100) UNIQUE NOT NULL,
    
    -- Carrier Information
    carrier_name VARCHAR(100),
    carrier_service VARCHAR(100),
    
    -- Shipping Details
    shipping_cost DECIMAL(15, 2),
    estimated_delivery_date DATE,
    actual_delivery_date DATE,
    
    -- Addresses
    origin_address JSONB NOT NULL,
    destination_address JSONB NOT NULL,
    
    -- Package Details
    weight DECIMAL(10, 2), -- kg
    dimensions JSONB, -- {length, width, height}
    number_of_packages INTEGER DEFAULT 1,
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', 
    -- pending, picked_up, in_transit, out_for_delivery, delivered, failed, returned
    
    -- Documents
    shipping_label_url VARCHAR(500),
    packing_list_url VARCHAR(500),
    
    -- Metadata
    notes TEXT,
    
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_shipments_order_id ON shipments(order_id);
CREATE INDEX idx_shipments_tracking_number ON shipments(tracking_number);
CREATE INDEX idx_shipments_status ON shipments(status);
```

#### `shipment_tracking_events`
Detailed tracking history.

```sql
CREATE TABLE shipment_tracking_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    shipment_id UUID NOT NULL REFERENCES shipments(id) ON DELETE CASCADE,
    
    -- Event Details
    status VARCHAR(50) NOT NULL,
    location VARCHAR(255),
    description TEXT,
    
    event_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_shipment_tracking_events_shipment_id ON shipment_tracking_events(shipment_id);
CREATE INDEX idx_shipment_tracking_events_event_time ON shipment_tracking_events(event_time);
```

---

### 8. COMMUNICATION & REVIEWS

#### `messages`
Direct messaging between users.

```sql
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    thread_id UUID NOT NULL,
    sender_id UUID NOT NULL REFERENCES users(id),
    recipient_id UUID NOT NULL REFERENCES users(id),
    
    -- Message Content
    subject VARCHAR(255),
    content TEXT NOT NULL,
    attachments JSONB,
    
    -- Status
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    
    -- Metadata
    order_id UUID REFERENCES orders(id),
    product_id UUID REFERENCES products(id),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE INDEX idx_messages_thread_id ON messages(thread_id);
CREATE INDEX idx_messages_sender_id ON messages(sender_id);
CREATE INDEX idx_messages_recipient_id ON messages(recipient_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
```

#### `reviews_ratings`
Product and manufacturer reviews.

```sql
CREATE TABLE reviews_ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- What is being reviewed
    reviewable_type VARCHAR(50) NOT NULL, -- product, manufacturer
    reviewable_id UUID NOT NULL,
    
    -- Who is reviewing
    reviewer_id UUID NOT NULL REFERENCES users(id),
    order_id UUID REFERENCES orders(id),
    
    -- Review Content
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    content TEXT,
    pros TEXT,
    cons TEXT,
    images JSONB,
    
    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
    is_verified_purchase BOOLEAN DEFAULT FALSE,
    
    -- Engagement
    helpful_count INTEGER DEFAULT 0,
    
    -- Response
    response TEXT,
    responded_at TIMESTAMP,
    responded_by UUID REFERENCES users(id),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_ratings_reviewable ON reviews_ratings(reviewable_type, reviewable_id);
CREATE INDEX idx_reviews_ratings_reviewer_id ON reviews_ratings(reviewer_id);
CREATE INDEX idx_reviews_ratings_status ON reviews_ratings(status);
CREATE INDEX idx_reviews_ratings_rating ON reviews_ratings(rating);
```

---

### 9. NOTIFICATIONS

#### `notifications`
User notifications.

```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Notification Details
    type VARCHAR(50) NOT NULL, -- order_update, payment_received, message, etc.
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    
    -- Related Resources
    resource_type VARCHAR(50),
    resource_id UUID,
    action_url VARCHAR(500),
    
    -- Status
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    
    -- Channels
    sent_via_email BOOLEAN DEFAULT FALSE,
    sent_via_sms BOOLEAN DEFAULT FALSE,
    sent_via_push BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);
```

#### `notification_preferences`
User notification settings.

```sql
CREATE TABLE notification_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Preferences by Type
    notification_type VARCHAR(50) NOT NULL,
    email_enabled BOOLEAN DEFAULT TRUE,
    sms_enabled BOOLEAN DEFAULT FALSE,
    push_enabled BOOLEAN DEFAULT TRUE,
    in_app_enabled BOOLEAN DEFAULT TRUE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id, notification_type)
);

CREATE INDEX idx_notification_preferences_user_id ON notification_preferences(user_id);
```

---

### 10. PLATFORM ADMINISTRATION

#### `platform_settings`
Global platform configuration.

```sql
CREATE TABLE platform_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value JSONB NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_platform_settings_key ON platform_settings(setting_key);
```

#### `audit_logs`
Comprehensive audit trail.

```sql
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    
    -- Action Details
    action VARCHAR(100) NOT NULL, -- create, update, delete, login, etc.
    resource_type VARCHAR(50) NOT NULL,
    resource_id UUID,
    
    -- Changes
    old_values JSONB,
    new_values JSONB,
    
    -- Request Details
    ip_address VARCHAR(45),
    user_agent TEXT,
    request_url VARCHAR(500),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_resource ON audit_logs(resource_type, resource_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
```

#### `disputes`
Dispute management.

```sql
CREATE TABLE disputes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(id),
    dispute_number VARCHAR(50) UNIQUE NOT NULL,
    
    -- Parties
    raised_by UUID NOT NULL REFERENCES users(id),
    against UUID NOT NULL REFERENCES users(id),
    
    -- Dispute Details
    reason VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    evidence JSONB, -- Array of document URLs
    
    -- Status
    status VARCHAR(50) DEFAULT 'open', -- open, under_review, resolved, closed
    resolution TEXT,
    
    -- Resolution
    resolved_by UUID REFERENCES users(id),
    resolution_type VARCHAR(50), -- refund, replacement, dismissed, etc.
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP
);

CREATE INDEX idx_disputes_order_id ON disputes(order_id);
CREATE INDEX idx_disputes_raised_by ON disputes(raised_by);
CREATE INDEX idx_disputes_status ON disputes(status);
```

---

### 11. ANALYTICS & REPORTING

#### `analytics_events`
Track user actions and events.

```sql
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_name VARCHAR(100) NOT NULL,
    event_category VARCHAR(50),
    
    -- User Context
    user_id UUID REFERENCES users(id),
    session_id VARCHAR(100),
    
    -- Event Data
    properties JSONB,
    
    -- Context
    ip_address VARCHAR(45),
    user_agent TEXT,
    referrer VARCHAR(500),
    page_url VARCHAR(500),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at);
```

---

### 12. SUBSCRIPTIONS & BILLING

#### `subscription_plans`
Manufacturer subscription tiers.

```sql
CREATE TABLE subscription_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    
    -- Pricing
    price DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    billing_period VARCHAR(50) NOT NULL, -- monthly, yearly
    
    -- Features
    features JSONB NOT NULL,
    max_products INTEGER,
    max_orders INTEGER,
    commission_rate DECIMAL(5, 2),
    
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### `subscriptions`
Active subscriptions.

```sql
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    manufacturer_id UUID NOT NULL REFERENCES manufacturers(id),
    plan_id UUID NOT NULL REFERENCES subscription_plans(id),
    
    -- Subscription Status
    status VARCHAR(50) DEFAULT 'active', -- active, cancelled, expired, suspended
    
    -- Billing
    current_period_start DATE NOT NULL,
    current_period_end DATE NOT NULL,
    cancel_at_period_end BOOLEAN DEFAULT FALSE,
    
    -- Payment
    payment_method_id VARCHAR(255),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cancelled_at TIMESTAMP
);

CREATE INDEX idx_subscriptions_manufacturer_id ON subscriptions(manufacturer_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
```

---

## Database Views

### Active Orders Summary
```sql
CREATE VIEW v_active_orders AS
SELECT 
    o.id,
    o.order_number,
    o.status,
    r.business_name as retailer_name,
    m.company_name as manufacturer_name,
    o.total_amount,
    o.created_at
FROM orders o
JOIN retailers r ON o.retailer_id = r.id
JOIN manufacturers m ON o.manufacturer_id = m.id
WHERE o.status NOT IN ('completed', 'cancelled');
```

### Product Inventory Status
```sql
CREATE VIEW v_product_inventory AS
SELECT 
    p.id,
    p.name,
    p.sku,
    p.stock_quantity,
    p.low_stock_threshold,
    CASE 
        WHEN p.stock_quantity = 0 THEN 'out_of_stock'
        WHEN p.stock_quantity <= p.low_stock_threshold THEN 'low_stock'
        ELSE 'in_stock'
    END as stock_status
FROM products p;
```

---

## Database Triggers

### Update Updated_At Timestamp
```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply to all relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ... repeat for other tables
```

### Inventory Update Trigger
```sql
CREATE OR REPLACE FUNCTION update_product_stock()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE products 
    SET stock_quantity = stock_quantity + NEW.quantity
    WHERE id = NEW.product_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_product_stock
AFTER INSERT ON inventory_transactions
FOR EACH ROW
EXECUTE FUNCTION update_product_stock();
```

---

## Indexes Strategy

1. **Primary Keys**: Automatic indexes on all PKs
2. **Foreign Keys**: Indexes on all FKs for join performance
3. **Status Fields**: Indexes on frequently filtered status columns
4. **Timestamps**: Indexes on created_at for sorting
5. **Unique Constraints**: Business-level unique fields (email, order_number, etc.)
6. **Composite Indexes**: For common multi-column queries

---

## Data Retention Policy

- **Active Data**: Kept indefinitely
- **Completed Orders**: Archived after 7 years (legal requirement)
- **Analytics Events**: Aggregated and purged after 2 years
- **Audit Logs**: Retained for 5 years
- **Deleted Records**: Soft delete with `deleted_at` timestamp

---

## Backup Strategy

- **Full Backup**: Daily at 2 AM UTC
- **Incremental Backup**: Every 6 hours
- **Point-in-Time Recovery**: Enabled with 30-day window
- **Cross-Region Replication**: Async replication to DR region
- **Backup Retention**: 30 days for daily, 90 days for weekly

---

This schema supports:
- ✅ Multi-tenancy (manufacturers & retailers)
- ✅ Complex order workflows
- ✅ Financial tracking and commission
- ✅ Inventory management
- ✅ Audit trails
- ✅ Scalability
- ✅ Data integrity
- ✅ Performance optimization
