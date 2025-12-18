# B2B Wholesale Platform - Page Layout Specifications
## Visual Design for Every Page Section

---

## Table of Contents

1. [Global Layout Structure](#global-layout-structure)
2. [Header/Top Bar](#headertop-bar)
3. [Sidebar Navigation](#sidebar-navigation)
4. [Homepage](#homepage)
5. [Dashboard](#dashboard)
6. [Product Pages](#product-pages)
7. [Manufacturer Profile](#manufacturer-profile)
8. [Order Management](#order-management)
9. [Inventory Management](#inventory-management)
10. [Analytics & Reports](#analytics--reports)
11. [Settings & Account](#settings--account)

---

## Global Layout Structure

### Overall Page Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     HEADER (Fixed)                           │
│  Logo │ Search │ Notifications │ Language │ User Profile    │
├────────────┬───────────────────────────────────────────────┤
│            │                                                 │
│  SIDEBAR   │              MAIN CONTENT AREA                 │
│ (Sticky)   │  (Responsive: Full width on mobile)           │
│            │                                                 │
│            │                                                 │
│            │                                                 │
│            ├───────────────────────────────────────────────┤
│            │         Footer (or scrolling continues)        │
└────────────┴───────────────────────────────────────────────┘
```

### Responsive Behavior

**Desktop (1024px+)**
- Sidebar: Fixed, 240px width, full height, scrollable
- Content: Main area takes remaining width
- Header: Full width, sticky top
- Layout: 3-column capable (sidebar, main, panels)

**Tablet (768px - 1023px)**
- Sidebar: Collapsible, hamburger toggle in header
- Content: Takes most width when sidebar visible
- Header: Full width, sticky top
- Layout: 2-column when needed

**Mobile (320px - 767px)**
- Sidebar: Hidden by default, slide-out panel
- Content: Full width
- Header: Full width, sticky top
- Layout: Single column, vertical stack

---

## Header/Top Bar

### Header Structure

```
┌────────────────────────────────────────────────────────────────────┐
│  ≡ │ Logo │  [Global Search Bar]  │ 🔔 │ 🌐 │ 👤 ▼        │ ≡ │
└────────────────────────────────────────────────────────────────────┘
```

### Height & Spacing
- **Height:** 64px (fixed)
- **Padding:** 12px 20px (mobile), 12px 32px (desktop)
- **Background:** White (#FFFFFF) / Gray-50 (#0F1117) dark
- **Border Bottom:** 1px Gray-300 (#D0D7DE)
- **Z-index:** 100 (above sidebar)

### Left Section - Logo & Menu Toggle

```
┌──────────────────┐
│ ≡ │ Logo/Brand   │
└──────────────────┘
```

**Logo:**
- Size: 32px × 32px (icon/text logo)
- Margin: 0 12px (from hamburger)
- Font: 16px Semibold
- Color: Primary-700 (#0066CC)
- Text: "WholesaleOS" or shorthand

**Hamburger Menu (Mobile):**
- Icon: 24px × 24px
- Color: Gray-900 (#0F1117)
- Toggle: Shows/hides sidebar
- Visible: Mobile (768px and below)

### Center Section - Global Search

```
┌────────────────────────────────────────────────────┐
│  🔍 Search products, manufacturers, orders...     │
└────────────────────────────────────────────────────┘
```

**Search Bar:**
- Width: 400px (desktop), flexible (mobile)
- Height: 40px
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 6px
- Padding: 8px 12px
- Background: Gray-50 (#F5F6F8)
- Placeholder: "Search products, manufacturers, orders..."
- Icon: Magnifying glass (left), Gray-500
- Focus: Blue border, expanded results
- Visible: Desktop (hidden on mobile)

**Search Results Dropdown:**
- Position: Absolute, below search bar
- Width: Matches search bar
- Max Height: 400px
- Background: White (#FFFFFF)
- Border: 1px Gray-300
- Border Radius: 6px (bottom only)
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.12)
- Sections:
  - Recent searches
  - Product results (with thumbnail)
  - Manufacturer results (with logo)
  - Order results (with order ID)
- Result item: 44px height, hover highlight

### Right Section - Actions & User Menu

```
┌─────────────────────────────────────────┐
│ 🔔   🌐   👤 Name ▼   (mobile: ≡)      │
└─────────────────────────────────────────┘
```

**Notification Bell:**
- Icon: 24px × 24px
- Color: Gray-600 (#6E7681)
- Badge: Red dot (when unread notifications)
- Click: Opens notifications panel
- Margin: 0 8px

**Language Selector:**
- Icon: 24px × 24px (globe)
- Color: Gray-600 (#6E7681)
- Click: Dropdown menu
  - English
  - Spanish
  - Chinese (Simplified)
  - French
  - Others (expandable)
- Current: Checkmark
- Margin: 0 8px

**User Profile Menu:**
- Avatar: 32px × 32px circular image
- Text: User initials or name (desktop only)
- Color: Primary-500 (#1A84F5)
- Click: Opens dropdown

**Profile Dropdown Menu:**
```
┌─────────────────────────────────┐
│ 👤 My Profile                   │
├─────────────────────────────────┤
│ 🏢 Company                      │
│ ⚙️  Settings                    │
│ 📚 Help & Documentation         │
│ 🔗 API Keys                     │
├─────────────────────────────────┤
│ 💬 Feedback                     │
│ 📞 Support                      │
├─────────────────────────────────┤
│ 🚪 Logout                       │
└─────────────────────────────────┘
```

- Position: Fixed, top-right
- Width: 240px
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.12)
- Sections: Dividers between groups
- Items: 40px height, 12px left padding
- Hover: Gray-50 (#F5F6F8) background
- Icons: 16px, Gray-600 (#6E7681)
- Text: 14px Regular, Gray-900 (#0F1117)
- Logout: Red text (Error-600 #DC2626)

**Notifications Panel:**
```
┌─────────────────────────────────┐
│ 🔔 Notifications                │  Close X
├─────────────────────────────────┤
│ Order #12345 Shipped    Just now│
│ Inventory Low: Widget     1 hour│
│ New Quote from Company     Today│
├─────────────────────────────────┤
│  View All Notifications         │
└─────────────────────────────────┘
```

- Position: Fixed, top-right, below language button
- Width: 360px
- Max Height: 480px
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.12)
- Header: 16px padding, 14px Semibold
- Items: 44px height, 12px padding
- Item Structure:
  - Icon (left, 24px)
  - Message (12px title, 12px secondary text)
  - Time (right, 12px Gray-500)
- Hover: Gray-50 background
- Footer: Link to all notifications

---

## Sidebar Navigation

### Sidebar Structure

```
┌──────────────┐
│              │
│ 📊 Dashboard │
│              │
│ 📦 Products  │
│              │
│ 🏭 Manufact. │
│              │
│ 📋 Orders    │
│              │
│ 📦 Inventory │
│              │
│ 📄 Contracts │
│              │
│ 💳 Payments  │
│              │
│ 📈 Analytics │
│              │
│ ❓ Support   │
│              │
│ ⚙️  Settings │
│              │
└──────────────┘
```

### Dimensions & Positioning
- **Width:** 240px (expanded), 64px (collapsed on desktop)
- **Height:** Full viewport height (below header)
- **Position:** Fixed, left side
- **Top:** 64px (below header)
- **Background:** White (#FFFFFF) / Gray-100 (#24292F) dark
- **Border Right:** 1px Gray-300 (#D0D7DE)
- **Overflow:** Auto (scrollable if needed)
- **Z-index:** 99

### Navigation Item

**Layout:**
```
┌────────────────────────────┐
│ 🏢 Products   (badge)      │
└────────────────────────────┘
```

**Expanded Item (Active):**
- Height: 44px
- Padding: 12px 16px
- Background: Primary-50 (#F0F8FF)
- Border Left: 3px Primary-700 (#0066CC)
- Icon: 20px, Primary-700
- Text: 14px Semibold, Primary-700
- Font Color: Primary-700 (#0066CC)

**Expanded Item (Inactive):**
- Height: 44px
- Padding: 12px 16px
- Background: Transparent
- Hover Background: Gray-100 (#F5F6F8)
- Icon: 20px, Gray-600 (#6E7681)
- Text: 14px Regular, Gray-700 (#444C56)
- Cursor: pointer

**Collapsed Item (Mobile/Responsive):**
- Icon only, 20px
- Centered in 64px sidebar
- Tooltip on hover (14px text)

### Badge
- Position: Right side of item
- Background: Teal-500 (#16A39E)
- Color: White
- Font: 12px Semibold
- Padding: 2px 6px
- Border Radius: 4px
- Example: "3" for 3 pending items

### Sidebar Sections

**Main Navigation:**
1. Dashboard
2. Products
3. Manufacturers
4. Orders
5. Inventory
6. Contracts
7. Payments

**Secondary Navigation (Bottom):**
1. Analytics
2. Support
3. Settings

**Divider:**
- 1px Gray-300 (#D0D7DE)
- Margin: 12px 0
- Between main and secondary sections

### Sidebar Collapse/Expand

**Desktop Behavior:**
- Toggle button: Chevron (< / >) at bottom
- Smooth animation: 200ms width transition
- Icons remain visible when collapsed
- Tooltip shows label on hover
- Keyboard shortcut: Cmd/Ctrl + B

**Mobile Behavior:**
- Hidden by default (off-canvas)
- Toggled by hamburger menu in header
- Overlay on content
- Scrim (dark overlay) behind
- Swipe to close

---

## Homepage

### Hero Section

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│  WholesaleOS - B2B Wholesale Dealer Platform              │
│                                                             │
│  Connect manufacturers with retailers at scale.            │
│  Streamline orders, reduce costs, grow faster.             │
│                                                             │
│  [Start Free Trial]  [View Demo]                          │
│                                                             │
│              [Illustration/Graphic]                         │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Full width, height: 600px (desktop), 400px (mobile)
- Padding: 80px 32px (desktop), 60px 16px (mobile)
- Background: Gradient (Primary-50 to light blue)
- Text centered, max width 800px

**Typography:**
- Main Headline: H1 (42px Bold)
  - Text: "WholesaleOS - B2B Wholesale Dealer Platform"
  - Color: Primary-900 (#003D82)
  - Margin Bottom: 16px

- Subheadline: 20px Regular
  - Text: "Connect manufacturers with retailers at scale..."
  - Color: Gray-700 (#444C56)
  - Margin Bottom: 32px
  - Max Width: 600px

**Buttons:**
- Primary: "Start Free Trial" (Teal-500)
- Secondary: "View Demo" (Gray border)
- Gap: 16px
- Size: Large (44px height, 20px padding)

**Background Element:**
- Illustration: Supply chain, handshake, or abstract design
- Size: 400px × 400px (desktop), 280px × 280px (mobile)
- Opacity: 80%
- Color: Primary-200 (#B8DEFF) blend
- Position: Right side (desktop), below headline (mobile)

### Trust & Scale Section

```
┌────────────────────────────────────────────────────────────┐
│              Trusted by Leading Businesses                 │
│                                                             │
│  500K+          $2B+          15,000+         200+         │
│  Products       GMV            Users         Countries     │
│                                                             │
│  ┌───────────────────────────────────────────────┐        │
│  │ Partner logos (gray, 60x60px)                 │        │
│  │ [Logo] [Logo] [Logo] [Logo] [Logo]           │        │
│  └───────────────────────────────────────────────┘        │
│                                                             │
│  ✓ ISO 9001 Certified  ✓ SOC 2 Compliant  ✓ PCI-DSS     │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: White (#FFFFFF) or Gray-50 (#F5F6F8)
- Padding: 64px 32px
- Centered text and content
- Max width container: 1200px

**KPI Cards (4-column grid):**
- Card: 240px × 120px
- Background: Gray-50 (#F5F6F8)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 20px
- Text Aligned: Center
- Number: 28px Bold, Primary-700 (#0066CC)
- Label: 14px Regular, Gray-600 (#6E7681)

**Partner Logos Section:**
- Background: Gray-50 (#F5F6F8)
- Padding: 32px 16px
- Border Radius: 8px
- Grid: 5 columns (desktop), 3 columns (tablet), 2 columns (mobile)
- Gap: 24px
- Logo Size: 80px × 80px
- Logo Color: Gray-500 (#8590A2), 60% opacity

**Compliance Badges:**
- Flex row, centered
- Gap: 32px
- Badge Format:
  - Icon: 24px, Success-600 (#15803D)
  - Text: 14px Semibold, Gray-900 (#0F1117)
  - Hover: Tooltip explaining certification

### Category Grid

```
┌────────────────────────────────────────────────────────────┐
│                    Browse by Category                      │
│                                                             │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│ │ 🏗️  Building │ │ 🔧 Hardware │ │ 📦 Packaging│        │
│ │ Materials    │ │ & Tools     │ │            │        │
│ │ 1,250 items  │ │ 3,420 items │ │ 540 items  │        │
│ └──────────────┘ └──────────────┘ └──────────────┘        │
│                                                             │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│ │ 🎨 Textiles │ │ 🥤 Beverages│ │ 📊 More...   │        │
│ │ & Fashion   │ │ & Supplies  │ │             │        │
│ │ 2,100 items │ │ 4,050 items │ │             │        │
│ └──────────────┘ └──────────────┘ └──────────────┘        │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: White (#FFFFFF)
- Padding: 64px 32px
- Max Width: 1200px
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 24px

**Category Card:**
- Dimensions: 300px × 200px (desktop), flexible (responsive)
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
- Hover: Box shadow elevation, -2px translate

**Card Content:**
- Icon: 48px, Primary-700 (#0066CC)
- Title: 18px Semibold, Gray-900 (#0F1117), margin 12px
- Item Count: 14px Regular, Gray-600 (#6E7681)
- CTA: Implicit, entire card clickable

### How It Works Timeline

```
┌────────────────────────────────────────────────────────────┐
│                    How It Works in 4 Steps                 │
│                                                             │
│  1. Register           2. Browse          3. Order        4. Delivered
│  Your Account       Products & Bulk       & Manage         Track &
│  & Profile          Orders              Shipments        Receive
│      ↓                  ↓                  ↓                ↓
│   [Icon]            [Icon]             [Icon]            [Icon]
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: Gray-50 (#F5F6F8) or light gradient
- Padding: 64px 32px
- Center aligned
- Max Width: 1000px

**Timeline:**
- Flex row, space-between
- Responsive: 2×2 grid on tablet, stacked on mobile
- Connectors: Horizontal line with arrow (desktop only)

**Step Card:**
- Number: 32px Bold, Primary-700 (#0066CC)
- Icon: 64px, Primary-200 (#B8DEFF) background circle
- Title: 18px Semibold, Gray-900 (#0F1117)
- Description: 14px Regular, Gray-600 (#6E7681)
- Flex: Column aligned

**Connector (Between Steps):**
- Horizontal line: 40px, Gray-300 (#D0D7DE)
- Arrow head: → Gray-300
- Vertical on mobile

### Featured Manufacturers Section

```
┌────────────────────────────────────────────────────────────┐
│           Featured Manufacturers - Top Suppliers           │
│                                                             │
│ ┌──────────────────┐ ┌──────────────────┐ ┌─────────────┐ │
│ │ [Logo/Image]     │ │ [Logo/Image]     │ │ [Logo/Image]│ │
│ │                  │ │                  │ │             │ │
│ │ Company Name     │ │ Company Name     │ │ Company Name│ │
│ │ Location: China  │ │ Location: India  │ │ Location    │ │
│ │ ⭐ 4.8 (120)     │ │ ⭐ 4.6 (85)      │ │ ⭐ 4.9     │ │
│ │                  │ │                  │ │             │ │
│ │ [View Profile]   │ │ [View Profile]   │ │[View Profil]│ │
│ └──────────────────┘ └──────────────────┘ └─────────────┘ │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: White (#FFFFFF)
- Padding: 64px 32px
- Max Width: 1200px
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 24px

**Manufacturer Card:**
- Dimensions: 320px × 300px
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
- Hover: Elevation increase, slight scale

**Card Content:**
- Logo/Image: 100px × 100px, centered, rounded 8px, Gray-200 bg
- Company Name: 16px Semibold, Gray-900 (#0F1117), margin 16px top
- Location: 12px Regular, Gray-600 (#6E7681), with 📍 icon
- Rating: ⭐ 4.8 stars, (120 reviews), 14px
- View Profile Button: Secondary style, full width, margin 16px top
- Stats (optional): "3,500+ products | Est. 1998" below name

### Footer

```
┌────────────────────────────────────────────────────────────┐
│ Logo             About              Product              │
│ © 2024 Wholesale │ About Us          Features           │
│ OS Platform      │ Blog              Pricing            │
│                  │ Careers           API Docs           │
│                  │ Press             Status             │
│                                                             │
│ Resources        Legal              Connect             │
│ Documentation    Terms of Service   Twitter             │
│ Help Center      Privacy Policy     LinkedIn            │
│ Community        Cookies            Discord             │
│ Contact          Security           Email               │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: Gray-900 (#0F1117) or dark gradient
- Text Color: Gray-400 (#BABBBD)
- Padding: 64px 32px
- Grid: 4 columns (desktop), 2 columns (mobile), 1 column (mobile)
- Gap: 48px

**Footer Links:**
- Font: 14px Regular, Gray-400
- Hover: Gray-300 (#D0D7DE)
- Column Title: 14px Semibold, Gray-100 (#F5F6F8)

**Bottom Bar:**
- Border Top: 1px Gray-600 (#6E7681)
- Padding: 24px 32px
- Flex: Space-between
- Copyright: 12px Regular, Gray-500
- Social Icons: 20px, Gray-500, hover Gray-300

---

## Dashboard

### Dashboard Overview Layout

```
┌────────────────────────────────────────────────────────────┐
│  Dashboard › Overview                                      │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  Quick Stats (KPI Cards - 4 column grid)                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ Total    │ │ Active   │ │ Revenue  │ │ Orders   │    │
│  │ Revenue  │ │ Orders   │ │ This Mo. │ │ Pending  │    │
│  │ $124.5K  │ │ 1,240    │ │ $45.2K   │ │ 18       │    │
│  │ ↑ 12%    │ │ ↑ 8%     │ │ ↑ 23%    │ │ ↓ -5%    │    │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
│                                                             │
│  [Left Sidebar] | [Main Charts Area] | [Right Panel]    │
│                                                             │
│  Recent      │ Revenue Trend      │ Top 5              │
│  Filters:    │ (Line Chart)        │ Products           │
│              │                     │ 1. Widget - $50K   │
│  - Date      │ Order Volume        │ 2. Gadget - $40K   │
│  - Status    │ (Bar Chart)         │ 3. Tool - $35K     │
│  - Region    │                     │ 4. Component - 25K │
│              │ Growth Rate         │ 5. Part - $20K     │
│              │ (Area Chart)        │                    │
│                                                             │
│  Activity Feed (Right bottom)                            │
│  Recent Orders & Events                                 │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Page Structure:**
- Width: Full width (sidebar + content)
- Padding: 24px 32px (desktop), 16px 16px (mobile)
- Background: Gray-50 (#F5F6F8)

**Page Header:**
- Breadcrumb: "Dashboard › Overview"
- Title: 24px Semibold, Gray-900 (#0F1117)
- Last updated: "Updated 2 minutes ago", 12px Gray-500
- Refresh button: Icon only, top right

### KPI Cards Row

**Container:**
- Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 16px
- Margin Bottom: 32px
- Full width

**KPI Card Template:**
```
┌──────────────────┐
│ 🔵              │ ← Icon (32px, colored)
│                 │
│ Total Revenue   │ ← Label (12px Gray-600)
│ $124,500.00     │ ← Value (28px Bold, monospace)
│                 │
│ ↑ 12% vs last mo│ ← Change (12px, Green success)
└──────────────────┘
```

- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 20px
- Min Height: 140px
- Icon: 32px, top-right, colored (primary/teal/success)
- Label: 12px Semibold, Gray-600 (#6E7681)
- Value: 28px Bold, IBM Plex Mono, Gray-900
- Change: 14px, colored icon + text
  - Positive: Green-600 (#15803D), ↑ icon
  - Negative: Red-600 (#DC2626), ↓ icon
- Hover: Subtle shadow increase

### Three-Column Layout Below KPI

**Left Column (20% width):**
- Filters card
- Date range picker
- Status checkboxes
- Region selector
- Quick actions

**Center Column (50% width):**
- Main charts area
- 2-3 large chart widgets stacked
- Respects overflow on mobile (full width)

**Right Column (30% width):**
- Top products/categories leaderboard
- Activity summary
- Quick insights panel

### Chart Widgets

**Chart Container:**
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 20px
- Margin Bottom: 16px
- Min Height: 300px

**Chart Header:**
- Title: 16px Semibold, Gray-900
- Controls: (top right)
  - Period selector: "Last 7 days / 30 days / 90 days"
  - Export button: Icon
  - Menu: ...

**Chart Types:**
- Line Chart: Smooth lines, dots on hover
- Bar Chart: Rounded top corners
- Area Chart: Semi-transparent fill
- Pie/Donut: With legend below

**Chart Styling:**
- Colors: Primary-700, Teal-500, Violet-500
- Axis Labels: 12px Gray-600, rotate on mobile
- Grid Lines: Gray-300, 0.5px, subtle
- Tooltips: Dark background, white text, rounded

### Activity Feed (Right Panel)

```
┌──────────────────────┐
│ Recent Activity      │
├──────────────────────┤
│ ⏰ 2 hours ago       │
│ Order #12345 placed  │
│ by ABC Company       │
│                      │
│ ⏰ 5 hours ago       │
│ Invoice paid         │
│ $5,000.00           │
│                      │
│ ⏰ Yesterday         │
│ New product added    │
│ "Premium Widget"    │
│                      │
│ [View All Activity] │
└──────────────────────┘
```

- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 20px
- Max Height: 400px
- Overflow: Auto

**Activity Item:**
- Padding: 12px 0
- Border Bottom: 1px Gray-300 (except last)
- Icon: 20px, colored by type
- Time: 12px Gray-500, right aligned
- Description: 14px Gray-900

---

## Product Pages

### Product Listing Page

```
┌────────────────────────────────────────────────────────────┐
│ Products › All Categories                        [+ Add]   │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ [Filters] | [Sorting] [View: Grid/List]    [Search...]   │
│                                                             │
│ Left Filters (240px) | Product Grid/Table (1200px)       │
│                       │                                     │
│ ☐ Category          │ ┌──────────────┐ ┌──────────────┐  │
│   ☑ Building        │ │ [Image]      │ │ [Image]      │  │
│   ☑ Hardware        │ │ Widget Pro   │ │ Gadget Deluxe│  │
│   ☐ Textile         │ │ Manu: Corp A │ │ Manu: Corp B  │  │
│                      │ │ $10 - $50    │ │ $20 - $100   │  │
│ Price Range:        │ │ MOQ: 100     │ │ MOQ: 50      │  │
│ [$0 - $1000]        │ │ ⭐ 4.8       │ │ ⭐ 4.6       │  │
│                      │ │ [View]       │ │ [View]       │  │
│ ☑ In Stock          │ └──────────────┘ └──────────────┘  │
│ ☑ New Arrivals      │                                     │
│                      │ ┌──────────────┐ ┌──────────────┐  │
│ Manufacturer:       │ │ [Image]      │ │ [Image]      │  │
│ (Search...)         │ │ Component XL │ │ Part Standard │  │
│ ☑ Corp A (320)      │ │ Manu: Corp C │ │ Manu: Corp D │  │
│ ☑ Corp B (180)      │ │ $5 - $25     │ │ $15 - $60    │  │
│ ☐ Corp C (140)      │ │ MOQ: 500     │ │ MOQ: 200     │  │
│                      │ │ ⭐ 4.9       │ │ ⭐ 4.7       │  │
│ Cert & Features:    │ │ [View]       │ │ [View]       │  │
│ ☑ ISO 9001          │ └──────────────┘ └──────────────┘  │
│ ☑ Bulk Orders       │                                     │
│                      │ Pagination: 1 2 3 ... 15           │
│                      │                                     │
└────────────────────────────────────────────────────────────┘
```

**Page Layout:**
- Background: Gray-50 (#F5F6F8)
- Padding: 24px 32px
- Grid: Left sidebar (240px) + Main (remaining)
- Gap: 24px

**Header Section:**
- Breadcrumb + Page Title: "Products › All Categories"
- Add Product button: (for manufacturers/admin only)
- Responsive: Collapses sidebar on tablet/mobile

**Left Sidebar - Filters:**
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 16px
- Height: Sticky, max-height 70vh
- Overflow: Auto

**Filter Group:**
```
Category (Collapsible section)
- Checkbox: 16×16px
- Label: 14px Regular
- Count: 12px Gray-500, right aligned
- Indent: 12px for subcategories
```

**Price Range Slider:**
- Min/Max inputs: 40px inputs, 14px font
- Slider track: 4px height, Gray-300
- Slider range fill: Teal-500 (#16A39E)
- Thumb: 16px circle, Teal-500
- Labels: Min $0 / Max $1000

**Apply/Clear Buttons:**
- Full width buttons at bottom
- Primary: Apply, Secondary: Clear Filters

**Top Bar - Sorting & View:**
- Flex row, space-between
- Left: Results count "Showing 24 of 480 products"
- Middle: Sort dropdown
  - Relevance
  - Price: Low to High
  - Price: High to Low
  - Newest
  - Best Sellers
  - Highest Rated
- Right: View toggle
  - Grid icon (active): Card view
  - List icon: Table view

**Product Cards (Grid View):**
```
┌──────────────┐
│  [Image]     │ ← 240×180px, image with hover zoom
│              │
│ Widget Pro   │ ← 14px Semibold, truncate
│ by Corp A    │ ← 12px Gray-600
│              │
│ $10 - $50    │ ← 14px Bold, Teal-500 (price range)
│ MOQ: 100     │ ← 12px Gray-600
│              │
│ ⭐ 4.8 (120) │ ← 12px, clickable for reviews
│              │
│ [View Detail]│ ← Button or link, full width
└──────────────┘
```

**Product Table (List View):**
- Columns: Image, Name, Manufacturer, Price, MOQ, Rating, Actions
- Row Height: 56px
- Hover: Gray-50 background
- Sticky header with sorting arrows
- Inline actions: View, Quick order, More (...)

### Product Detail Page

```
┌────────────────────────────────────────────────────────────┐
│ Products › Widget Pro                                      │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ [Main Image] | Product Info & Actions                    │
│ (400×400px)  | Name: Widget Pro                           │
│              | Manufacturer: Corp A                        │
│ [Thumbnail]  | Rating: ⭐ 4.8 (1,240 reviews)             │
│ [Thumbnail]  |                                             │
│ [Thumbnail]  | Price Tiers:                               │
│              | 100-500 units: $50 each                     │
│              | 501-1000 units: $45 each                    │
│              | 1000+ units: $40 each                       │
│              |                                             │
│              | MOQ: 100 units                              │
│              | Qty: [____] [Add to Cart]                  │
│              |                                             │
│              | [View Manufacturer Profile]                │
│              | [Get Quote]  [Compare]                     │
│                                                             │
│  Tabs:                                                     │
│  Details | Specifications | Reviews | Q&A | Certificates│
│                                                             │
│  Description & Details Section...                        │
│  Specifications Table...                                 │
│  Customer Reviews...                                     │
│  Q&A Thread...                                           │
│  Certificates/Documents...                               │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: Gray-50 (#F5F6F8)
- Padding: 24px 32px
- Main container: 1200px max width
- Grid: Image (35%) + Info (65%)

**Left - Product Images:**
- Main image: 400×400px, rounded 8px border
- Gallery: Flex column below
- Thumbnails: 80×80px each, 8px gap
- Active border: 2px Teal-500
- Hover: Zoom effect (110%)

**Right - Product Info:**
- Background: White (#FFFFFF)
- Padding: 24px
- Border Radius: 8px

**Content Sections:**
1. Breadcrumb
2. Product name: 32px Bold
3. Manufacturer link: 14px, Primary-700
4. Rating: ⭐ 4.8 (1,240 reviews)
5. Price tiers: Table format
6. MOQ, stock status
7. Quantity selector + buttons
8. Additional actions
9. Share links

**Tabs Section:**
- Sticky tabs below images
- Scrollable content areas
- Smooth transitions

---

## Manufacturer Profile

### Profile Header

```
┌────────────────────────────────────────────────────────────┐
│ [Hero Banner - 1200×300px]                                 │
│                                                             │
│         [Logo] Corp A Manufacturer                         │
│         ⭐ 4.8 (2,450 reviews) | Est. 1998 | China        │
│         "Premium industrial equipment supplier"            │
│                                                             │
│         [Contact] [Follow] [Message] [Share]              │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Banner:**
- Height: 300px
- Background: Gradient or image (Teal to Blue)
- Logo: 120×120px circle, centered

**Info Bar (Below banner):**
- Background: White (#FFFFFF)
- Padding: 16px 32px
- Flex: Space-between
- Company Name: 24px Bold, Gray-900
- Rating: 14px, clickable
- Location: 14px Gray-600
- Est. Year: 14px Gray-600
- Tagline: 16px Regular, Gray-700

**Action Buttons:**
- Row: Contact, Follow, Message, Share
- Styling: Secondary buttons, 36px height

### Profile Stats & Info

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│  3,500+      120      98%         24        7              │
│  Products    Countries Fulfillment Response Support        │
│  Listed      Servicing Rate        Time hrs  Years         │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Company Information                                   │ │
│  │ Founded: 1998 | Employees: 500-1000 | ISO 9001      │ │
│  │ Website: www.corpa.com | Phone: +86-XXX-XXX-XXX    │ │
│  │ Email: sales@corpa.com                              │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Certifications & Compliance                          │ │
│  │ ✓ ISO 9001  ✓ ISO 14001  ✓ OHSAS 18001            │ │
│  │ ✓ RoHS  ✓ CE Mark  ✓ FDA Approved                  │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Stats Cards (6-column grid):**
- Each: Number (20px Bold, Primary-700) + Label (12px Gray-600)
- Background: Gray-50 (#F5F6F8)
- Border: None, minimal styling
- Padding: 16px

**Company Info Card:**
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 20px
- Grid: 2 columns (desktop), 1 column (mobile)

**Certifications:**
- Background: White (#FFFFFF)
- Border: 1px Gray-300
- Border Radius: 8px
- Padding: 20px
- Badges: Success green checkmark + text
- Grid: Flexible, wrapping

### Products Grid

```
┌────────────────────────────────────────────────────────────┐
│ Products from this Manufacturer (3,500 total)              │
│                                                             │
│ [Filter] | [Sort] | [View]                               │
│                                                             │
│ [Product Card] [Product Card] [Product Card]             │
│ [Product Card] [Product Card] [Product Card]             │
│ [Product Card] [Product Card] [Product Card]             │
│                                                             │
│ Showing 9 of 3,500 | [Pagination]                        │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

- Same product card styling as product listing
- Filters preset to this manufacturer
- Grid: 3 columns (desktop), 2 columns (tablet)

### Reviews Section

```
┌────────────────────────────────────────────────────────────┐
│ Customer Reviews (2,450 total)                             │
│ Average Rating: ⭐⭐⭐⭐☆ 4.8 / 5.0                        │
│                                                             │
│ Rating Distribution:                                      │
│ ⭐⭐⭐⭐⭐ (5 star)    ████████████░ 65% (1,592)         │
│ ⭐⭐⭐⭐  (4 star)    ███████░      38% (931)          │
│ ⭐⭐⭐   (3 star)    ████░         20% (490)          │
│ ⭐⭐    (2 star)    ██░           8% (196)           │
│ ⭐     (1 star)    ░              4% (98)            │
│                                                             │
│ [Filter by rating] [Sort: Newest/Helpful]                │
│                                                             │
│ Review 1:                                                  │
│ ⭐⭐⭐⭐⭐ "Excellent quality and service" - John S.     │
│ "Delivered on time, great packaging..." 👍                │
│ Verified Purchase | 2 weeks ago                          │
│                                                             │
│ Review 2:                                                  │
│ ⭐⭐⭐⭐  "Good products, reliable supplier" - Jane D.   │
│ "Quality meets expectations..." 👍👎                     │
│ Verified Purchase | 1 month ago                          │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## Order Management

### Orders List Page

```
┌────────────────────────────────────────────────────────────┐
│ Orders › All Orders                                        │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ [Filters] [Search] [Export] | Showing 1-15 of 425        │
│                                                             │
│ Status Filter: All | Pending | Processing | Shipped      │
│                                                             │
│ ┌─────┬─────────────┬──────────────┬────────┬────────────┐│
│ │ □ # │ Order ID    │ Supplier     │ Status │ Total    ││
│ ├─────┼─────────────┼──────────────┼────────┼────────────┤│
│ │ □ 1 │ ORD-2024001 │ Corp A       │ ✓ Shipped │ $1,250 ││
│ │ □ 2 │ ORD-2024002 │ Corp B       │ ⚙ Processing │ $2,100││
│ │ □ 3 │ ORD-2024003 │ Corp C       │ ⏳ Pending │ $850  ││
│ │ □ 4 │ ORD-2024004 │ Corp A       │ ✓ Shipped │ $3,200 ││
│ │ □ 5 │ ORD-2024005 │ Corp D       │ ⚠ On Hold │ $1,900 ││
│ │ □ 6 │ ORD-2024006 │ Corp B       │ ✓ Shipped │ $2,450 ││
│ │ ...                                                     ││
│ │ □ 15│ ORD-2024015 │ Corp A       │ ✓ Shipped │ $5,600 ││
│ ├─────┴─────────────┴──────────────┴────────┴────────────┤│
│ │ [Bulk Action ▼] Pagination: [< 1 2 3 4 5 >]          ││
│ └─────┴─────────────┴──────────────┴────────┴────────────┘│
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Table Structure:**
- Sticky header row: Highlighted, darker background
- Columns: Checkbox, Order ID, Supplier, Status, Total, Actions
- Row Height: 56px
- Hover Row: Gray-50 background
- Selected Row: Primary-50 background + left border

**Status Indicators:**
- Icon + color badge system
- Pending: ⏳ Amber-500
- Processing: ⚙ Info-500
- Shipped: ✓ Success-600
- On Hold: ⚠ Warning-600
- Cancelled: ✗ Error-600

**Row Actions (Right):**
- View: Eye icon → Detail page
- Edit: Pencil icon (if editable)
- More: (...) dropdown
  - Download Invoice
  - Download Packing Slip
  - Contact Supplier
  - Cancel Order

### Order Detail Page

```
┌────────────────────────────────────────────────────────────┐
│ Orders › ORD-2024-001 › Details                [Edit]     │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ Status: ✓ Shipped (Dec 15, 2024) | Expected: Dec 22     │
│                                                             │
│ [Left Panel]           | [Main Panel]                     │
│ Order Information      | Items List                       │
│ ─────────────────      │ ─────────────────                │
│ Order #: ORD-2024-001 │ ┌────────────────────────────┐   │
│ Date: Dec 1, 2024     │ │ □ Widget Pro x 100        │   │
│ Supplier: Corp A      │ │   $50 each = $5,000       │   │
│ Status: Shipped       │ │   SKU: WID-PRO-001        │   │
│                       │ │                             │   │
│ Delivery Address:     │ │ □ Gadget Deluxe x 50      │   │
│ ABC Store             │ │   $100 each = $5,000      │   │
│ 123 Main St           │ │   SKU: GAD-DLX-001        │   │
│ City, State 12345     │ │                             │   │
│ Contact: +1-XXX-XXXX  │ │ Subtotal: $10,000         │   │
│                       │ │ Shipping: -$500 (promo)   │   │
│ Payment:              │ │ Tax: $800                 │   │
│ Status: Paid          │ │ Total: $10,300            │   │
│ Method: Wire Transfer │ │                             │   │
│ Date: Dec 2, 2024     │ │ [Print]  [Download PDF]  │   │
│                       │ └────────────────────────────┘   │
│ Tracking:             │                                   │
│ Tracking #: TRK-XXXX  │ Shipment Timeline               │
│ Carrier: DHL Express  │ ─────────────────               │
│ [Track Shipment]      │ Dec 1 - Order Placed            │
│                       │ Dec 2 - Payment Confirmed       │
│ Documents:            │ Dec 5 - Shipped                 │
│ - Invoice (PDF)       │ Dec 15 - In Transit             │
│ - Packing Slip (PDF)  │ Dec 22 - Expected Delivery     │
│ - Bill of Lading      │                                 │
│                       │ [Contact Supplier]              │
│                       │ [Request Changes]               │
│                       │                                 │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- 3-column: Left info (25%) + Main (50%) + Timeline (25%)
- Background: Gray-50 (#F5F6F8)

**Status Bar (Top):**
- Background: White (#FFFFFF)
- Status badge: Colored, with date
- Quick action buttons: Edit, Download, Print

**Left Sidebar:**
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 20px
- Sections: Dividers between groups

**Items List:**
- Background: White (#FFFFFF)
- Border: 1px Gray-300
- Border Radius: 8px
- Padding: 16px
- Each item: 12px padding, Gray-50 background
- Totals: Emphasized row, bold text

### Payment Management

```
┌────────────────────────────────────────────────────────────┐
│ Payments › All Transactions                               │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ Account Balance: $125,400.50                              │
│ [Withdrawal] [Deposit] [History]                         │
│                                                             │
│ ┌─────┬──────────────┬──────────────┬────────┬────────────┐│
│ │ □   │ Date         │ Description  │ Type   │ Amount   ││
│ ├─────┼──────────────┼──────────────┼────────┼────────────┤│
│ │ □   │ Dec 15       │ Order ORD-001│ Debit  │ -$1,250  ││
│ │ □   │ Dec 10       │ Refund       │ Credit │ +$500    ││
│ │ □   │ Dec 5        │ Order ORD-002│ Debit  │ -$2,100  ││
│ │ □   │ Dec 1        │ Deposit      │ Credit │ +$5,000  ││
│ │ ...                                                     ││
│ └─────┴──────────────┴──────────────┴────────┴────────────┘│
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## Inventory Management

### Inventory Overview

```
┌────────────────────────────────────────────────────────────┐
│ Inventory › Dashboard                                      │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ Summary Stats:                                             │
│ Total SKUs: 3,500 | Low Stock: 245 | Out of Stock: 12   │
│                                                             │
│ Alerts (Top):                                              │
│ ⚠️ Widget Pro (SKU-001): Low stock (50 units left)      │
│ ⚠️ Gadget Deluxe (SKU-002): Expected shipment Dec 20    │
│ ⚠️ Component XL (SKU-003): Expiring license next month  │
│                                                             │
│ Inventory by Category (Charts):                           │
│ [Pie Chart showing distribution]                         │
│                                                             │
│ Recently Updated:                                          │
│ Widget Pro - Dec 15                                       │
│ Gadget - Dec 14                                           │
│ Component - Dec 12                                        │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### Inventory List

```
┌────────────────────────────────────────────────────────────┐
│ Inventory › All Items                [+ Add] [Import]     │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌─────┬────────┬──────────────┬────────┬───────┬────────┐ │
│ │ □   │ SKU    │ Product Name │ Stock  │ Status│ Action││
│ ├─────┼────────┼──────────────┼────────┼───────┼────────┤ │
│ │ □   │ WID-001│ Widget Pro   │ 1,240  │ ✓ OK  │ Edit  ││
│ │ □   │ GAD-002│ Gadget Dlx   │ 50     │ ⚠ Low │ Edit  ││
│ │ □   │ COM-003│ Component XL │ 0      │ ✗ Out │ Edit  ││
│ │ □   │ PAR-004│ Part Std     │ 500    │ ✓ OK  │ Edit  ││
│ └─────┴────────┴──────────────┴────────┴───────┴────────┘ │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## Analytics & Reports

### Analytics Dashboard

```
┌────────────────────────────────────────────────────────────┐
│ Analytics › Business Metrics                              │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ KPI Summary (Top Row):                                   │
│ Total Revenue | Active Orders | Supplier Growth         │
│ $524K        │ 1,240        │ +18%                     │
│                                                             │
│ Revenue Trend (30 days):                                 │
│ [Line Chart showing daily revenue]                      │
│                                                             │
│ Top Products by Sales Volume:                            │
│ [Bar Chart]                                              │
│                                                             │
│ Order Status Distribution:                               │
│ [Donut Chart]                                            │
│                                                             │
│ Geographic Distribution:                                 │
│ [Map with seller count by region]                       │
│                                                             │
│ Export Report: [PDF] [CSV] [Excel]                     │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## Settings & Account

### Account Settings

```
┌────────────────────────────────────────────────────────────┐
│ Settings › Account                                         │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ [Left Menu]              | [Right Panel]                  │
│ - Account               | Account Information             │
│ - Profile               | Email: user@company.com        │
│ - Company               | Name: John Smith               │
│ - Billing & Payments    | Role: Account Manager          │
│ - Notifications         | [Edit Profile]                 │
│ - API Keys              |                                 │
│ - Security              | Password & Security            │
│ - Integrations          | Last changed: 2 weeks ago      │
│ - Help & Support        | [Change Password]              │
│ - Logout                | Two-Factor Authentication      │
│                         | Status: ✓ Enabled              │
│                         | [Manage]                        │
│                         |                                 │
│                         | Connected Apps                 │
│                         | - Stripe (Payments)            │
│                         | - Salesforce (CRM)             │
│                         | - Google Sheets (Export)       │
│                         |                                 │
│                         | [+ Add Integration]             │
│                         |                                 │
└────────────────────────────────────────────────────────────┘
```

---

## Mobile & Responsive Patterns

### Mobile Navigation (Below 768px)

**Header (Mobile):**
- Logo + Hamburger menu on left
- Search icon on right (opens modal)
- Height: 56px

**Sidebar (Mobile):**
- Slide-out panel from left
- Overlay scrim behind
- Full height, 80% width
- Swipe to close or close button

**Main Content:**
- Full width
- Single column layout
- Stacked cards
- Simplified tables → Cards with all info

**Bottom Tab Bar (Optional):**
- Sticky bottom navigation
- 5 main sections: Home, Browse, Orders, Account, More
- Icons only on very small screens

---

## Micro-interactions & Motion

### Page Transitions
```
Fade + Slight Slide:
- Duration: 200ms
- Easing: ease-in-out
- New page fades in while sliding up 16px
- Previous content fades out
```

### Button Interactions
```
Default → Hover:
- Shadow increases: 0 1px 3px → 0 4px 12px
- Duration: 150ms

Hover → Active (Click):
- Scale: 98% (subtle compression)
- Duration: 100ms

Active → Release:
- Spring back to 100%
- Duration: 200ms with ease-out
```

### Loading States
```
Skeleton Loaders:
- Pulse animation: opacity 100% → 60% → 100%
- Duration: 1.5s
- Matches component shape

Spinner:
- Rotation: 360°
- Duration: 1s
- Color: Primary-700 (#0066CC)
- Ring style (not filled)
```

### Modal Entrance
```
Background Scrim:
- Fade in: 0 → 0.5
- Duration: 200ms

Modal:
- Fade + Scale: 0.95 → 1.0
- Duration: 300ms
- Easing: ease-out
```

### Validation Feedback
```
Error Message:
- Slide down: -20px → 0px
- Fade in: 0 → 1
- Duration: 200ms
- Color: Error-600 (#DC2626)

Success Message:
- Slide up: +20px → 0px
- Fade in: 0 → 1
- Duration: 200ms
- Auto-dismiss: 4s
```

---

## Summary

This comprehensive layout specification provides:

✅ **Global Structure** - Consistent header, sidebar, responsive behavior
✅ **Homepage** - Trust-building sections, CTAs, category discovery
✅ **Dashboard** - KPI overview, charts, real-time data
✅ **Product Pages** - Listing with filters, detailed product views
✅ **Manufacturer Profiles** - Credibility, certifications, reviews
✅ **Order Management** - Complete order lifecycle visualization
✅ **Responsive Design** - Desktop, tablet, mobile optimizations
✅ **Micro-interactions** - Subtle motion for feedback and delight
✅ **Accessibility** - High contrast, keyboard navigation, semantic structure

All layouts follow the design system tokens for colors, typography, spacing, and shadows, creating a cohesive, professional B2B platform experience.
