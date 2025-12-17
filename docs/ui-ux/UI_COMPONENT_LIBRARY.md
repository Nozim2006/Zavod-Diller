# UI Component Library - B2B Wholesale Platform

**Version**: 2.0  
**Last Updated**: 2024

---

## Table of Contents

1. [Component Categories](#component-categories)
2. [Basic Components](#basic-components)
3. [Data Display Components](#data-display-components)
4. [Form Components](#form-components)
5. [Navigation Components](#navigation-components)
6. [Feedback Components](#feedback-components)
7. [Container Components](#container-components)
8. [Domain-Specific Components](#domain-specific-components)
9. [Layout System](#layout-system)
10. [Responsive Behavior](#responsive-behavior)

---

## Component Categories

### By Complexity
- **Basic**: Buttons, text inputs, badges
- **Composite**: Cards, modals, forms
- **Domain-Specific**: Product cards, order cards, contract widgets
- **Advanced**: Data tables, charts, dashboards

### By Usage
- **Interactive**: Buttons, inputs, dropdowns
- **Informational**: Cards, badges, alerts
- **Structural**: Layout, navigation, grids
- **Visual**: Charts, graphs, indicators

---

## Basic Components

### Button Component

**Hierarchy Levels**:
```
1. PRIMARY BUTTON (High Emphasis)
   - Used for: Main call-to-action
   - Background: Blue 500 (#2563EB)
   - Text: White
   - Padding: 12px 24px
   - Border Radius: 6px
   - Font: Medium, 14px

2. SECONDARY BUTTON (Medium Emphasis)
   - Used for: Secondary actions
   - Background: White
   - Border: 1px solid Blue 500
   - Text: Blue 500
   - Padding: 12px 24px
   - Hover: Blue 50 background

3. TERTIARY BUTTON (Low Emphasis)
   - Used for: Less important actions
   - Background: Transparent
   - Text: Blue 500
   - Padding: 12px 24px
   - Hover: Blue 50 background

4. DANGER BUTTON (Destructive)
   - Used for: Delete, cancel, reject
   - Background: Red 500
   - Text: White
   - Padding: 12px 24px
```

**Sizes**:
```
Small:   32px height, 12px vertical padding, 14px font
Medium:  40px height, 16px vertical padding, 14px font (default)
Large:   48px height, 20px vertical padding, 16px font
```

**States**:
- Default
- Hover (darker shade)
- Active (pressed effect)
- Focus (focus ring)
- Disabled (50% opacity)
- Loading (spinner + disabled state)

**Examples**:
```
[Place Order]  [Cancel]  [Edit]  [Delete]
[Save]         [Discard] [Next]  [Remove]
```

---

### Text Input

**Properties**:
```
Height: 40px
Padding: 12px 16px (horizontal), 8px (vertical)
Border: 1px solid Gray 300
Border Radius: 6px
Font: 14px, Regular
Placeholder Color: Gray 400
```

**States**:
- Default (empty)
- Focus (Blue 500 border + focus ring)
- Error (Red 500 border + error message)
- Success (Green 500 border)
- Disabled (Gray 100 background, 50% opacity)
- Filled (user has entered text)

**Variants**:
- Text input
- Email input
- Password input (toggle show/hide)
- Search input (with icon)
- Number input (with +/- buttons)
- Textarea (multi-line)
- Date picker
- Time picker
- File upload

**Validation Messages**:
```
Error: [!] This field is required
Success: [✓] Email verified
Info: [i] Enter your business email
```

---

### Select Dropdown

**Properties**:
```
Height: 40px
Padding: 12px 16px
Border: 1px solid Gray 300
Chevron Icon: Right-aligned
Max Height (Open): 300px (scrollable)
```

**Variants**:
- Single select
- Multi-select (with chips)
- Searchable select
- Grouped select
- Async select (loads data)

**States**:
- Closed (default)
- Open (menu visible)
- Selected (value shown)
- Focused
- Error
- Disabled

---

### Badge Component

**Sizes**:
```
Small:  12px font, 6px vertical padding, 12px horizontal
Medium: 14px font, 8px vertical padding, 16px horizontal
Large:  16px font, 10px vertical padding, 20px horizontal
```

**Variants**:
```
1. Status Badges (fixed colors)
   - Success (Green background, Green text)
   - Warning (Yellow background, Yellow text)
   - Error (Red background, Red text)
   - Info (Blue background, Blue text)
   - Neutral (Gray background, Gray text)

2. Dynamic Badges
   - Custom colors per category
   - Removable (with X icon)
   - Clickable (navigate to category)

3. Count Badges
   - Circular with number
   - Used on nav icons (notification count)
   - Red background, white text
```

**Examples**:
```
[Verified ✓]  [Pending]  [Active]  [Suspended]
[In Stock]    [Low Stock] [Out of Stock]
[Featured]    [Sponsored] [Promoted]
```

---

### Toggle / Switch

**Properties**:
```
Width: 48px
Height: 28px
Border Radius: 14px (pill-shaped)
Indicator Circle: 24px diameter
Transition: 200ms smooth
```

**States**:
- Off (Gray background, indicator left)
- On (Blue background, indicator right)
- Disabled (50% opacity)
- Loading (spinner inside)

---

### Checkbox & Radio

**Checkbox**:
```
Size: 20px × 20px
Border: 2px solid Gray 300
Border Radius: 4px
Checked: Blue 500 background, white checkmark
Hover: Border becomes Blue 400
Focus: Blue focus ring (4px outer ring)
```

**Radio Button**:
```
Size: 20px diameter
Border: 2px solid Gray 300
Selected: Blue 500 with inner circle
Hover: Border becomes Blue 400
Focus: Blue focus ring
```

---

## Data Display Components

### Data Table

**Structure**:
```
┌─────────────────────────────────────────────────┐
│ [Toolbar] [Search] [Filters] [Bulk Actions]     │
├─────────────────────────────────────────────────┤
│ [Checkbox] │ Header 1 │ Header 2 │ Header 3    │
├─────────────────────────────────────────────────┤
│ [☑] Row 1  │ Data     │ Data     │ [Actions ▼] │
│ [☐] Row 2  │ Data     │ Data     │ [Actions ▼] │
│ [☐] Row 3  │ Data     │ Data     │ [Actions ▼] │
└─────────────────────────────────────────────────┘
[← Previous] [1 2 3 4 5] [Next →]
```

**Features**:
- Sortable headers (click to sort, ASC/DESC)
- Filterable columns
- Searchable rows
- Pagination (10, 25, 50, 100 rows per page)
- Row selection (checkbox for multi-select)
- Bulk actions (selected rows)
- Column visibility toggle
- Export functionality (CSV, Excel, PDF)
- Expandable rows (details)
- Sticky headers (on scroll)
- Responsive (stack on mobile)

**Column Types**:
- Text
- Number (right-aligned)
- Currency (right-aligned, formatted)
- Date (formatted)
- Status (badge)
- Actions (button group)

---

### Card Component

**Generic Card**:
```
┌──────────────────────────────┐
│ [Header]              [Icon] │
├──────────────────────────────┤
│                              │
│      Content Area            │
│                              │
├──────────────────────────────┤
│      [Footer / Actions]      │
└──────────────────────────────┘
```

**Properties**:
- Padding: 24px
- Border Radius: 8px
- Border: 1px solid Gray 200
- Background: White
- Shadow: subtle (0 1px 3px rgba(0,0,0,0.1))
- Hover Shadow: slightly elevated

---

### Product Card

**Structure**:
```
┌──────────────────────────────┐
│     [Product Image 1:1]      │
│  [Hover: Quick View Button]  │
├──────────────────────────────┤
│ Product Name (2 lines max)   │
│ Manufacturer Name            │
│ ★★★★☆ (4.2) · 156 reviews  │
├──────────────────────────────┤
│ MOQ: 100 units      In Stock │
│ Price from: $12.50 per unit  │
├──────────────────────────────┤
│ [Add to Cart]  [Save]        │
└──────────────────────────────┘
```

**Hover States**:
- Image overlay with "Quick View" button
- Shadow elevation
- Slight scale up (transform: scale(1.02))

---

### Order Card

**Structure**:
```
┌────────────────────────────────────┐
│ Order #ORD-2024-001234  Mar 15    │
│ [Confirmed ✓]           $2,450    │
├────────────────────────────────────┤
│ [Product 1] [Product 2] [+2 more] │
│ 5 items from 2 manufacturers      │
├────────────────────────────────────┤
│ Estimated Delivery: Mar 22         │
│ [View Details] [Track] [Reorder]   │
└────────────────────────────────────┘
```

---

### Stats Card

**Structure**:
```
┌──────────────────┐
│ Total Orders     │
│ 234              │
│ ↑ 12% vs last mo │
│ [View Trend]     │
└──────────────────┘
```

**Metrics Displayed**:
- Metric label
- Large number
- Change indicator (↑ green, ↓ red)
- Percentage change
- Optional: chart thumbnail

---

### Chart Components

**Supported Charts**:
- Line chart (sales over time)
- Bar chart (category comparison)
- Pie chart (distribution)
- Area chart (stacked data)
- Scatter plot (correlation)

**Properties**:
- Responsive (scales to container)
- Interactive (hover for details)
- Legend
- Axis labels
- Grid lines (subtle)
- Custom colors per series

---

## Form Components

### Form Layout

**Standard Form**:
```
┌────────────────────────────────┐
│      Form Title                │
│      Form Description (optional)
├────────────────────────────────┤
│ Label *                        │
│ [Input Field]                  │
│ Helper text or error message   │
│                                │
│ Label *                        │
│ [Input Field]                  │
│ Helper text or error message   │
├────────────────────────────────┤
│  [Cancel]  [Save Changes]      │
└────────────────────────────────┘
```

**Spacing**:
- Between form groups: 24px
- Between label and input: 8px
- Between input and helper text: 4px

---

### Multi-Step Form

```
Progress: ●—–—–—–●—–—–—–○

Step 1: Business Details [Complete ✓]
Step 2: Verification [In Progress]
Step 3: Review & Confirm [Pending]

[Prev Step]  [Next Step]
```

**Features**:
- Visual progress indicator
- Step validation before proceeding
- Save progress ability
- Back button enabled
- Completion summary

---

### Date Picker

**Calendar View**:
```
┌─────────────────────────┐
│ March 2024        [<] > │
├─────────────────────────┤
│ Su Mo Tu We Th Fr Sa    │
│                 1  2    │
│  3  4  5  6  7  8  9    │
│ 10 11 12 13 14 15 16    │
│ 17 18 19 20 21 22 23    │
│ 24 25 26 27 28 29 30    │
└─────────────────────────┘
```

**Features**:
- Click to select date
- Month/year navigation
- Today button
- Range selection (start-end)
- Keyboard navigation
- Previous dates disabled (future ordering)

---

## Navigation Components

### Top Navigation Bar

**Layout**:
```
┌─────────────────────────────────────────┐
│ [Logo] [Search] [Notifications] [Profile]
└─────────────────────────────────────────┘
```

**Elements**:
- Logo/brand (left)
- Search bar (center-left)
- Notification bell (right)
- User profile dropdown (right)
- Language/currency selector (optional)

---

### Side Navigation

**Structure**:
```
┌─────────────────┐
│  Dashboard   □  │
│  Orders      □  │
│  Products    □  │
│  Analytics   □  │
│─────────────────│
│  Communication □ │
│  Contracts   □  │
│  Credit      □  │
│─────────────────│
│  Settings    □  │
│  Support     □  │
│  Log Out     □  │
└─────────────────┘
```

**Features**:
- Active state highlighting
- Icons + labels
- Collapsible submenu
- Hover effects
- Scrollable if many items
- Collapse/expand toggle

**Width**:
- Expanded: 260px
- Collapsed: 80px (icons only)

---

### Breadcrumb Navigation

```
Home > Products > Electronics > Smartphones > iPhone 15
```

**Properties**:
- Clickable segments
- Last item bold (current page)
- Separator: /
- Responsive: Truncate on mobile

---

### Pagination

```
[< Previous] [1] [2] [3] ... [100] [Next >]
```

**Variants**:
- Numbered pagination
- Previous/Next only
- Jump to page input
- Per-page selector (10, 25, 50, 100)

---

## Feedback Components

### Alert / Banner

**Types**:
```
✓ Success Alert
  Action completed successfully!
  [Dismiss]

! Warning Alert  
  Please review before proceeding.
  [Learn More]

✕ Error Alert
  Something went wrong.
  [Retry] [Dismiss]

ⓘ Info Alert
  New features available.
  [Learn More]
```

**Auto-dismiss**:
- Success: 5 seconds
- Warning: User dismissal only
- Error: User dismissal only
- Info: User dismissal only

---

### Toast Notification

```
Positioned: Top-right corner
Auto-dismiss: 5 seconds
Stack: Multiple toasts stack vertically

┌─────────────────────┐
│ ✓ Order confirmed!  │
│ Order #12345    [×] │
└─────────────────────┘
```

---

### Loading States

**Skeleton Screen**:
```
┌─────────────────┐
│ ▮▮▮ ▮▮▮ ▮▮▮   │ ← Shimmer effect
│ ▮▮▮ ▮▮▮ ▮▮▮   │ ← Animated placeholder
│ ▮▮▮ ▮▮▮ ▮▮▮   │
└─────────────────┘
```

**Spinner**:
```
   ◰
  ◱ ◳
 ◲   ◴
  ◵ ◶
   ◷
```

**Progress Bar**:
```
[████████░░░░░░░░░░░░░] 40%
```

---

### Modal / Dialog

**Structure**:
```
┌────────────────────────────┐
│ Dialog Title         [×]   │
├────────────────────────────┤
│                            │
│ Content Area               │
│                            │
├────────────────────────────┤
│           [Cancel] [OK]    │
└────────────────────────────┘
```

**Sizes**:
- Small: 400px (confirmations)
- Medium: 600px (forms, default)
- Large: 800px (complex content)
- Full: 100% width on mobile

**Features**:
- Backdrop overlay (semi-transparent)
- Close button (X)
- Keyboard support (ESC to close)
- Prevent outside click close
- Scroll handling

---

### Empty State

**Structure**:
```
┌────────────────────────────┐
│           [Icon]           │
│    No orders yet           │
│  Start exploring products  │
│     [Browse Products]      │
└────────────────────────────┘
```

**Elements**:
- Icon or illustration
- Headline
- Description
- Call-to-action button

---

## Container Components

### Panel / Section

**Styling**:
```
Background: White
Border: 1px solid Gray 200
Border Radius: 8px
Padding: 24px
Shadow: subtle
```

### Tabs

**Structure**:
```
│ Tab 1 │ Tab 2 │ Tab 3 │
├───────┴───────┴───────────
│ Content of active tab     │
│                           │
│                           │
```

**Behavior**:
- Click tab to switch
- Underline active tab
- Fade transition between content
- Accessible via keyboard

---

### Accordion

**Structure**:
```
▼ Accordion Item 1
  Hidden content revealed
  Multiple paragraphs allowed
▶ Accordion Item 2
  Click to expand
▶ Accordion Item 3
```

---

## Domain-Specific Components

### Product Grid

**Structure**:
```
[Product 1] [Product 2] [Product 3] [Product 4]
[Product 5] [Product 6] [Product 7] [Product 8]
```

**Responsive**:
- Desktop (4 columns)
- Tablet (3 columns)
- Mobile (2 columns, 1 column)

---

### Price Comparison Component

```
Product: Widget X

Supplier 1: $10.50  [Add to Cart]
Supplier 2: $9.99   [Add to Cart]  ← Best Price
Supplier 3: $11.20  [Add to Cart]
```

---

### RFQ Builder Component

```
Create Request for Quotation

Product Search: [________]
Quantity Needed: [500]
Delivery Location: [________]
Preferred Timeline: [Select]
Special Requirements: [Textarea]

[Cancel] [Submit RFQ]
```

---

### Contract Preview Component

```
┌─────────────────────────────┐
│ Contract Details            │
├─────────────────────────────┤
│ Type: Supply Agreement      │
│ Parties: ABC Corp, XYZ Inc  │
│ Start: March 1, 2024        │
│ End: Feb 28, 2025           │
│ Renewal: Auto-renew         │
│                             │
│ Volume Commitment: 10,000 u │
│ Pricing Tier: $8.50/unit    │
│                             │
│ [View Full] [Download] [✓]  │
└─────────────────────────────┘
```

---

### Warehouse Inventory Widget

```
┌─────────────────────────────┐
│ Warehouse Inventory         │
├─────────────────────────────┤
│ Total Stock: 15,450 units   │
│ [████░░░░░] 78% Capacity    │
│                             │
│ Top Products:               │
│ • SKU-001: 2,500 units      │
│ • SKU-002: 1,800 units      │
│ • SKU-003: 1,200 units      │
│                             │
│ Low Stock Alerts: 3         │
│ [View All]                  │
└─────────────────────────────┘
```

---

### Order Timeline

```
Timeline View:

Mar 15 - Order Confirmed ●
         ├─ Inventory reserved
         └─ Payment processed

Mar 16 - In Production ●
         └─ Started manufacturing

Mar 19 - Ready to Ship ●
         └─ Quality check complete

Mar 20 - Shipped ●
         ├─ Tracking: #TRACK123
         └─ Est. Delivery: Mar 24

Mar 24 - Delivered ●
         └─ Signature: [Proof of Delivery]
```

---

## Layout System

### Grid System

**Base Unit**: 8px

**Grid Spacing**:
- xs: 4px (0.5 unit)
- sm: 8px (1 unit)
- md: 16px (2 units)
- lg: 24px (3 units)
- xl: 32px (4 units)
- 2xl: 48px (6 units)

**Column System**:
- Desktop: 12-column grid
- Tablet: 8-column grid
- Mobile: 4-column grid

### Container Widths

```
Mobile: 100% (full width)
Tablet: 768px
Desktop: 1024px
Wide: 1440px
```

---

## Responsive Behavior

### Breakpoints

```
Mobile:     < 768px
Tablet:     768px - 1024px
Desktop:    > 1024px
```

### Component Responsiveness

**Tables**: Stack on mobile
**Cards**: 1 column on mobile, responsive on desktop
**Forms**: Full width inputs on mobile
**Navigation**: Hamburger menu on mobile
**Images**: 100% width, max-width set
**Modals**: Full height on mobile

---

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Text vs background: 4.5:1 ratio
- Large text: 3:1 ratio
- UI components: 3:1 ratio

**Keyboard Navigation**:
- All interactive elements focusable
- Tab order logical
- Focus indicator visible (4px blue ring)
- Escape closes modals

**Semantic HTML**:
- Proper heading hierarchy (H1-H6)
- Form labels associated with inputs
- Landmark regions (nav, main, footer)
- ARIA labels where needed

### Screen Reader Support
- Alternative text for images
- Descriptive button labels
- Form field descriptions
- Dynamic content announcements

---

## Implementation Guidelines

### React Component Patterns

```typescript
// Basic Button Component
<Button 
  variant="primary" 
  size="md" 
  onClick={handleClick}
  disabled={false}
  loading={false}
>
  Click Me
</Button>

// Data Table
<DataTable
  columns={columns}
  data={data}
  sortable
  filterable
  pagination={{ pageSize: 25 }}
  onRowClick={handleRowClick}
/>

// Form Input
<FormInput
  label="Email"
  name="email"
  type="email"
  value={value}
  onChange={handleChange}
  error={error}
  helperText="Enter your business email"
/>
```

### Styling Convention
- Use TailwindCSS utility classes
- Follow design system color tokens
- Maintain consistent spacing
- Respect min-touch-target (44px for mobile)

---

**Component Library Version**: 2.0  
**Last Updated**: 2024  
**Owner**: Design System Team  
**Next Review**: Quarterly
