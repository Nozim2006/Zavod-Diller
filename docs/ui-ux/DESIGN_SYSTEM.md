# UI/UX Design System - B2B Wholesale Distribution Platform

## Table of Contents
1. [Design Principles](#design-principles)
2. [Visual Design](#visual-design)
3. [Typography](#typography)
4. [Color System](#color-system)
5. [Components](#components)
6. [Layout & Grid](#layout-grid)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)
9. [Page Templates](#page-templates)
10. [Interaction Patterns](#interaction-patterns)

---

## DESIGN PRINCIPLES

### Core UX Principles

1. **Professional & Trustworthy**
   - Clean, corporate aesthetic
   - Consistent branding
   - Professional photography
   - Data-driven design

2. **Efficiency-Focused**
   - Minimize clicks to complete tasks
   - Bulk actions available
   - Keyboard shortcuts
   - Quick filters and search

3. **Data-Heavy but Clear**
   - Information hierarchy
   - Progressive disclosure
   - Scannable layouts
   - Visual data representation

4. **Transparency**
   - Clear pricing
   - No hidden costs
   - Honest product information
   - Open communication

5. **Scalability**
   - Works for 10 or 10,000 products
   - Handles large orders
   - Supports bulk operations

---

## VISUAL DESIGN

### Design Style

**Aesthetic**: Modern, Professional, Clean, Data-Focused

**Characteristics**:
- Generous white space
- Subtle shadows and depth
- Clear visual hierarchy
- Professional product photography
- Data visualization emphasis
- Minimal decorative elements
- Card-based layouts

**Inspiration**:
- Alibaba (B2B functionality)
- Shopify Admin (clean dashboard)
- Stripe Dashboard (financial clarity)
- LinkedIn (professional networking)

---

## TYPOGRAPHY

### Font Stack

**Primary Font**: Inter (sans-serif)
- Clean, modern, highly legible
- Excellent for data-heavy interfaces
- Web-optimized

**Secondary Font**: SF Pro / Roboto (fallback)

**Monospace Font**: JetBrains Mono
- For SKUs, prices, codes

### Type Scale

```
H1: 36px / 2.25rem - Bold - Line height: 1.2
H2: 30px / 1.875rem - Bold - Line height: 1.3
H3: 24px / 1.5rem - Semibold - Line height: 1.4
H4: 20px / 1.25rem - Semibold - Line height: 1.4
H5: 18px / 1.125rem - Semibold - Line height: 1.5
H6: 16px / 1rem - Semibold - Line height: 1.5

Body Large: 16px / 1rem - Regular - Line height: 1.6
Body: 14px / 0.875rem - Regular - Line height: 1.6
Body Small: 12px / 0.75rem - Regular - Line height: 1.5

Caption: 11px / 0.6875rem - Regular - Line height: 1.5
Overline: 11px / 0.6875rem - Bold - Uppercase - Letter spacing: 0.5px
```

### Font Usage

- **Headlines**: Bold weight for maximum impact
- **Body text**: Regular weight for readability
- **Data labels**: Medium weight
- **Prices**: Semibold weight, larger size
- **Metadata**: Smaller, muted color

---

## COLOR SYSTEM

### Primary Colors

```
Primary Blue (Brand)
- Primary 500: #2563EB (Main brand color)
- Primary 600: #1D4ED8 (Hover state)
- Primary 700: #1E40AF (Active state)
- Primary 400: #3B82F6 (Light variant)
- Primary 50: #EFF6FF (Background tint)
```

### Semantic Colors

```
Success Green
- Success 500: #10B981
- Success 600: #059669
- Success 50: #ECFDF5

Warning Yellow
- Warning 500: #F59E0B
- Warning 600: #D97706
- Warning 50: #FFFBEB

Error Red
- Error 500: #EF4444
- Error 600: #DC2626
- Error 50: #FEF2F2

Info Blue
- Info 500: #3B82F6
- Info 600: #2563EB
- Info 50: #EFF6FF
```

### Neutral Colors (Grayscale)

```
Gray Scale
- Gray 900: #111827 (Primary text)
- Gray 800: #1F2937
- Gray 700: #374151 (Secondary text)
- Gray 600: #4B5563
- Gray 500: #6B7280 (Tertiary text)
- Gray 400: #9CA3AF (Placeholder)
- Gray 300: #D1D5DB (Borders)
- Gray 200: #E5E7EB (Dividers)
- Gray 100: #F3F4F6 (Backgrounds)
- Gray 50: #F9FAFB (Subtle backgrounds)
- White: #FFFFFF
```

### Color Usage

**Text Colors**:
- Primary text: Gray 900
- Secondary text: Gray 700
- Tertiary text: Gray 500
- Disabled text: Gray 400
- Inverse text: White

**Background Colors**:
- Page background: Gray 50
- Card background: White
- Hover background: Gray 100
- Active background: Gray 200

**Interactive Elements**:
- Links: Primary 500
- Buttons: Primary 500
- Focus rings: Primary 500 with opacity

**Status Colors**:
- Success: Green 500
- Warning: Yellow 500
- Error: Red 500
- Info: Blue 500
- Pending: Yellow 500
- In Progress: Blue 500
- Completed: Green 500
- Cancelled: Red 500

---

## COMPONENTS

### 5.1 Buttons

**Button Hierarchy**:

```
Primary Button (High emphasis)
- Background: Primary 500
- Text: White
- Hover: Primary 600
- Active: Primary 700
- Use: Main call-to-action

Secondary Button (Medium emphasis)
- Background: White
- Border: Primary 500
- Text: Primary 500
- Hover: Primary 50 background
- Use: Secondary actions

Tertiary Button (Low emphasis)
- Background: Transparent
- Text: Primary 500
- Hover: Primary 50 background
- Use: Less important actions

Danger Button
- Background: Red 500
- Text: White
- Hover: Red 600
- Use: Destructive actions
```

**Button Sizes**:
```
Small: 32px height, 12px padding, 14px text
Medium: 40px height, 16px padding, 14px text
Large: 48px height, 20px padding, 16px text
```

**Button States**:
- Default
- Hover
- Active
- Focus (with focus ring)
- Disabled (50% opacity)
- Loading (spinner icon)

---

### 5.2 Form Inputs

**Text Input**:
```
Height: 40px
Padding: 8px 12px
Border: 1px solid Gray 300
Border radius: 6px
Focus: Primary 500 border, focus ring
Error: Red 500 border
Placeholder: Gray 400
```

**Input Variants**:
- Text input
- Number input
- Email input
- Password input (with show/hide toggle)
- Search input (with icon)
- Textarea
- Select dropdown
- Multi-select
- Date picker
- File upload

**Input States**:
- Default
- Focus
- Error
- Disabled
- Read-only

---

### 5.3 Cards

**Product Card**:
```
Structure:
├── Product Image (aspect ratio 1:1)
├── Product Name
├── Manufacturer Name
├── Price (bold, large)
├── MOQ badge
├── Rating (stars)
└── Action button
```

**Order Card**:
```
Structure:
├── Header
│   ├── Order Number
│   ├── Date
│   └── Status badge
├── Body
│   ├── Product thumbnails
│   ├── Total items
│   └── Total amount
└── Actions
    ├── View details
    └── Track order
```

**Manufacturer Card**:
```
Structure:
├── Company Logo
├── Company Name
├── Location
├── Rating & Reviews
├── Product Categories
├── Verification badges
└── Contact/View button
```

---

### 5.4 Data Tables

**Features**:
- Sortable columns
- Filterable
- Searchable
- Pagination
- Row selection (checkbox)
- Bulk actions
- Column visibility toggle
- Export functionality
- Responsive (stack on mobile)

**Table Structure**:
```
┌─────────────────────────────────────────────────┐
│ [Search] [Filters] [Bulk Actions] [Export]      │
├──┬────────┬──────────┬─────────┬──────┬────────┤
│☐ │Product │  SKU     │  Stock  │Price │Actions │
├──┼────────┼──────────┼─────────┼──────┼────────┤
│☐ │Item 1  │ SKU-001  │  150    │$10   │ ...    │
│☐ │Item 2  │ SKU-002  │  75     │$15   │ ...    │
└──┴────────┴──────────┴─────────┴──────┴────────┘
```

---

### 5.5 Navigation

**Top Navigation**:
```
┌─────────────────────────────────────────────────┐
│ [Logo] [Search]     [Notifications][Profile]    │
└─────────────────────────────────────────────────┘
```

**Side Navigation** (Portal dashboards):
```
┌─────────────┐
│ Dashboard   │
│ Orders      │
│ Products    │
│ Analytics   │
│ Settings    │
└─────────────┘
```

**Breadcrumbs**:
```
Home > Products > Electronics > Smartphones
```

---

### 5.6 Status Badges

**Badge Styles**:
```
Success Badge
- Background: Green 100
- Text: Green 700
- Border: Green 200

Warning Badge
- Background: Yellow 100
- Text: Yellow 700
- Border: Yellow 200

Error Badge
- Background: Red 100
- Text: Red 700
- Border: Red 200

Info Badge
- Background: Blue 100
- Text: Blue 700
- Border: Blue 200

Neutral Badge
- Background: Gray 100
- Text: Gray 700
- Border: Gray 200
```

**Order Status Badges**:
- Pending: Yellow
- Confirmed: Blue
- In Production: Blue
- Shipped: Purple
- Delivered: Green
- Cancelled: Red

---

### 5.7 Alerts & Notifications

**Alert Types**:
```
Success Alert
[✓] Success message

Warning Alert
[!] Warning message

Error Alert
[×] Error message

Info Alert
[i] Info message
```

**Toast Notifications**:
- Appear top-right corner
- Auto-dismiss after 5 seconds
- Dismissible with X button
- Stack vertically if multiple

---

### 5.8 Modals & Dialogs

**Modal Structure**:
```
┌─────────────────────────────────┐
│ [Title]                    [×]  │
├─────────────────────────────────┤
│                                 │
│ Content area                    │
│                                 │
├─────────────────────────────────┤
│          [Cancel] [Confirm]     │
└─────────────────────────────────┘
```

**Modal Sizes**:
- Small: 400px
- Medium: 600px
- Large: 800px
- Full screen (mobile)

---

### 5.9 Loading States

**Skeleton Screens**:
- Use for page/component loading
- Animated shimmer effect
- Match layout of actual content

**Spinners**:
- Use for button loading states
- Use for inline loading

**Progress Bars**:
- Use for file uploads
- Use for multi-step processes

---

### 5.10 Empty States

**Components**:
- Illustration or icon
- Primary message
- Secondary explanation
- Call-to-action button

**Examples**:
```
No Orders Yet
You haven't placed any orders yet
[Browse Products]

No Products Found
Try adjusting your filters
[Clear Filters]
```

---

## LAYOUT & GRID

### Grid System

**12-Column Grid**:
- Gutter: 24px
- Margins: 24px (mobile), 48px (desktop)

**Breakpoints**:
```
xs: 0px - 639px (Mobile)
sm: 640px - 767px (Large mobile)
md: 768px - 1023px (Tablet)
lg: 1024px - 1279px (Desktop)
xl: 1280px - 1535px (Large desktop)
2xl: 1536px+ (Extra large)
```

### Layout Patterns

**Dashboard Layout**:
```
┌────────────────────────────────────────────┐
│ Top Navigation                              │
├────┬───────────────────────────────────────┤
│Side│                                        │
│Nav │  Main Content Area                     │
│    │                                        │
└────┴───────────────────────────────────────┘
```

**Product Listing**:
```
┌────────────────────────────────────────────┐
│ Filters ││ Product Grid (2-4 columns)      │
│ ────────││                                  │
│ Category││ [Card] [Card] [Card] [Card]     │
│ Price   ││ [Card] [Card] [Card] [Card]     │
│ Rating  ││ [Card] [Card] [Card] [Card]     │
└────────────────────────────────────────────┘
```

---

## RESPONSIVE DESIGN

### Mobile-First Approach

**Priorities for Mobile**:
1. Essential information first
2. Simplified navigation (hamburger menu)
3. Touch-friendly buttons (44px minimum)
4. Vertical stacking
5. Collapsible sections

**Responsive Patterns**:
- **Desktop**: Multi-column layouts
- **Tablet**: 2-column or adaptive
- **Mobile**: Single column, stacked

**Touch Targets**:
- Minimum: 44x44px
- Recommended: 48x48px

---

## ACCESSIBILITY

### WCAG 2.1 Level AA Compliance

**Color Contrast**:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Keyboard Navigation**:
- All interactive elements focusable
- Logical tab order
- Skip links for navigation
- Escape to close modals

**Screen Reader Support**:
- Semantic HTML
- ARIA labels where needed
- Alt text for images
- Form labels properly associated

**Focus Indicators**:
- Visible focus ring
- High contrast
- 2px outline minimum

---

## PAGE TEMPLATES

### 9.1 Homepage

**Structure**:
```
┌─────────────────────────────────────────┐
│ Navigation                               │
├─────────────────────────────────────────┤
│                                         │
│ Hero Section                            │
│ - Value proposition                     │
│ - CTA buttons                           │
│                                         │
├─────────────────────────────────────────┤
│ Live Statistics                         │
│ [Factories] [Products] [Orders]         │
├─────────────────────────────────────────┤
│ Category Showcase                       │
│ [Cat 1] [Cat 2] [Cat 3] [Cat 4]        │
├─────────────────────────────────────────┤
│ Featured Manufacturers                  │
│ [Card] [Card] [Card] [Card]            │
├─────────────────────────────────────────┤
│ How It Works                            │
│ Step 1 → Step 2 → Step 3               │
├─────────────────────────────────────────┤
│ Trust & Compliance                      │
│ [Badges] [Certifications] [Partners]   │
├─────────────────────────────────────────┤
│ Footer                                  │
└─────────────────────────────────────────┘
```

---

### 9.2 Product Listing Page

**Layout**:
```
┌─────────────────────────────────────────┐
│ Breadcrumbs                             │
├────┬────────────────────────────────────┤
│    │ Sort by: [Dropdown]  View: □ ≡    │
│    ├────────────────────────────────────┤
│Fil-│ [Product Card] [Product Card]      │
│ters│ [Product Card] [Product Card]      │
│    │ [Product Card] [Product Card]      │
│Cat-│ [Product Card] [Product Card]      │
│ego-│                                    │
│ries│ [Pagination]                       │
│    │                                    │
│Pri-│                                    │
│ce  │                                    │
│    │                                    │
│MOQ │                                    │
│    │                                    │
│Rat-│                                    │
│ing │                                    │
└────┴────────────────────────────────────┘
```

**Product Card Hover**:
- Slight elevation
- Show quick view option
- Show compare checkbox

---

### 9.3 Product Detail Page

**Layout**:
```
┌─────────────────────────────────────────┐
│ Breadcrumbs                             │
├──────────────┬──────────────────────────┤
│              │ Product Name             │
│              │ Manufacturer Name        │
│  Product     │ Rating ★★★★☆ (123)      │
│  Images      │ ─────────────────────    │
│              │ Price: $XX.XX            │
│  [Main Img]  │ MOQ: 50 units           │
│              │ ─────────────────────    │
│  [Thumb]     │ Quantity: [__] units     │
│  [Thumb]     │ Unit Price: $XX.XX       │
│  [Thumb]     │ Total: $XXX.XX           │
│  [Thumb]     │                          │
│              │ [Add to Cart] [Contact]  │
│              │ [Download Spec Sheet]    │
├──────────────┴──────────────────────────┤
│ Tabs                                    │
│ [Description] [Specifications] [Reviews]│
├─────────────────────────────────────────┤
│ Tab Content                             │
│                                         │
├─────────────────────────────────────────┤
│ Related Products                        │
│ [Card] [Card] [Card] [Card]            │
└─────────────────────────────────────────┘
```

---

### 9.4 Dashboard (Manufacturer/Retailer)

**Layout**:
```
┌─────────────────────────────────────────┐
│ Top Nav                                 │
├────┬────────────────────────────────────┤
│Side│ Dashboard Overview                 │
│Nav │ ─────────────────────────────────  │
│    │ [Metric] [Metric] [Metric]         │
│Dash│ ─────────────────────────────────  │
│board│ Recent Orders                      │
│    │ ┌───────────────────────────────┐ │
│Ord-│ │ Order list table               │ │
│ers │ └───────────────────────────────┘ │
│    │ ─────────────────────────────────  │
│Pro-│ Sales Chart                        │
│ducts│ [Line/Bar Chart]                  │
│    │                                    │
│Ana-│                                    │
│lyti│                                    │
│cs  │                                    │
│    │                                    │
│Set-│                                    │
│ting│                                    │
└────┴────────────────────────────────────┘
```

**Dashboard Widgets**:
- Metric cards (revenue, orders, etc.)
- Charts (line, bar, pie)
- Recent activity feed
- Quick actions
- Notifications

---

### 9.5 Checkout Flow

**Multi-Step Layout**:
```
┌─────────────────────────────────────────┐
│ Logo                                    │
├─────────────────────────────────────────┤
│ Progress: ● ● ○ ○                       │
│           Cart → Delivery → Payment → ✓ │
├──────────────────────┬──────────────────┤
│                      │                  │
│  Step Content        │  Order Summary   │
│  Form fields         │  ───────────     │
│  Instructions        │  Items: 3        │
│                      │  Subtotal: $XXX  │
│                      │  Tax: $XX        │
│  [Back] [Continue]   │  Total: $XXX     │
│                      │                  │
└──────────────────────┴──────────────────┘
```

---

## INTERACTION PATTERNS

### Micro-interactions

**Hover Effects**:
- Buttons: Darken background
- Cards: Lift with shadow
- Links: Underline
- Icons: Color change

**Click Feedback**:
- Slight scale down
- Ripple effect
- Color change

**Transitions**:
- Duration: 150-300ms
- Easing: ease-in-out

### Loading States

**Skeleton Screens**:
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

**Progress Indicators**:
- Linear progress bar for uploads
- Circular spinner for loading
- Step indicators for multi-step forms

---

### Error Handling

**Inline Errors**:
- Show below field
- Red color
- Icon for emphasis

**Form Validation**:
- Real-time validation
- Clear error messages
- Suggest corrections

**Error Pages**:
- 404: Not found (friendly message, search)
- 500: Server error (apologize, retry)
- Maintenance: Scheduled downtime notice

---

## Design Tokens

### Spacing Scale
```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
24:  96px
```

### Border Radius
```
None:   0px
Small:  4px
Medium: 6px
Large:  8px
XL:     12px
Full:   9999px (pill shape)
```

### Shadows
```
Small:  0 1px 2px rgba(0, 0, 0, 0.05)
Medium: 0 4px 6px rgba(0, 0, 0, 0.1)
Large:  0 10px 15px rgba(0, 0, 0, 0.1)
XL:     0 20px 25px rgba(0, 0, 0, 0.1)
```

---

## Component Library Recommendation

**Recommended**: shadcn/ui with Tailwind CSS
- Accessible by default
- Customizable
- Well-documented
- TypeScript support
- Tree-shakeable

**Alternative**: Material-UI, Ant Design, Chakra UI

---

## Figma/Design File Structure

```
Design System
├── Colors
├── Typography
├── Icons
├── Components
│   ├── Buttons
│   ├── Forms
│   ├── Cards
│   ├── Navigation
│   └── ...
├── Templates
│   ├── Homepage
│   ├── Product Pages
│   ├── Dashboards
│   └── ...
└── Prototypes
    ├── Retailer Flow
    └── Manufacturer Flow
```

---

## Implementation Guidelines

### CSS Architecture
- Use Tailwind CSS utility classes
- Create reusable components
- Follow BEM methodology for custom CSS
- Use CSS variables for theming

### Performance
- Optimize images (WebP format)
- Lazy load images
- Code splitting
- Minimize CSS/JS bundle size

### Browser Support
- Modern evergreen browsers
- Last 2 versions
- IE11 with polyfills (if needed)

---

This design system ensures consistency, scalability, and professional appearance across the entire B2B wholesale platform.
