# B2B Dealer Platform - Enterprise Visual Design System

## Design Philosophy

**Enterprise-Grade B2B Platform** designed for serious wholesale business operations. Inspired by Amazon Business, Stripe Dashboard, and Salesforce - modern, trustworthy, and data-rich.

## Color System

### Primary Colors
- **Primary Blue**: `#2563EB` (Soft Enterprise Blue)
- **Primary Dark**: `#1E40AF`
- **Primary Light**: `#3B82F6`

### Secondary Colors
- **Gray-50**: `#F9FAFB`
- **Gray-100**: `#F3F4F6`
- **Gray-200**: `#E5E7EB`
- **Gray-300**: `#D1D5DB`
- **Gray-400**: `#9CA3AF`
- **Gray-500**: `#6B7280`
- **Gray-600**: `#4B5563`
- **Gray-700**: `#374151`
- **Gray-800**: `#1F2937`
- **Gray-900**: `#111827`

### Accent Colors
- **Teal**: `#0891B2` (Primary actions)
- **Violet**: `#7C3AED` (Secondary actions)

### Status Colors
- **Success**: `#059669`
- **Warning**: `#D97706`
- **Error**: `#DC2626`
- **Info**: `#0284C7`

## Typography System

### Font Stack
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Monospace**: `'JetBrains Mono', 'Fira Code', Consolas, monospace`

### Type Scale
- **Display XL**: `4.5rem` (72px) - Page headers
- **Display L**: `3.75rem` (60px) - Hero headers
- **Heading 1**: `2.25rem` (36px) - Section headers
- **Heading 2**: `1.875rem` (30px) - Subsection headers
- **Heading 3**: `1.5rem` (24px) - Card titles
- **Body Large**: `1.125rem` (18px) - Important body text
- **Body**: `1rem` (16px) - Regular body text
- **Body Small**: `0.875rem` (14px) - Secondary text
- **Caption**: `0.75rem` (12px) - Labels, metadata

### Font Weights
- **Light**: `300`
- **Regular**: `400`
- **Medium**: `500`
- **Semibold**: `600`
- **Bold**: `700`
- **Extrabold**: `800`

## Spacing & Layout

### Spacing Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `2rem` (32px)
- **2xl**: `3rem` (48px)
- **3xl**: `4rem` (64px)

### Grid System
- **Container Max Width**: `1440px`
- **Columns**: 12-column grid
- **Gutters**: `24px`

### Component Spacing
- **Section Padding**: `48px`
- **Card Padding**: `24px`
- **Element Spacing**: `16px`
- **Tight Spacing**: `8px`

## Component Design Principles

### Cards
- **Border Radius**: `12px`
- **Shadow**: `0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)`
- **Background**: `White with subtle border`

### Buttons
- **Primary**: Blue background, white text
- **Secondary**: White background, blue border and text
- **Border Radius**: `8px`
- **Padding**: `12px 24px`
- **Font Weight**: `500`

### Tables
- **Header**: Gray background, dark text
- **Rows**: White background, subtle hover
- **Border**: 1px solid gray-200

### Forms
- **Input Padding**: `12px 16px`
- **Border**: 1px solid gray-300
- **Border Radius**: `8px`
- **Focus**: 2px blue border

## Global Layout Structure

### Header
- **Height**: `72px`
- **Background**: White with bottom border
- **Logo**: Left side
- **Search**: Center (expandable)
- **Actions**: Right side (notifications, profile)

### Sidebar
- **Width**: `280px` (expanded), `80px` (collapsed)
- **Background**: White
- **Border**: Right border
- **Navigation**: Icons + text with hover states

### Main Content
- **Background**: Gray-50
- **Padding**: `32px`
- **Container**: Max-width 1440px

## Page Templates

### Dashboard
- **Header**: Page title + actions
- **KPI Cards**: 4-column grid
- **Charts**: Full-width sections
- **Tables**: Recent activity

### Product Listing
- **Filters**: Left sidebar (280px)
- **Grid**: Product cards or table view
- **Pagination**: Bottom

### Manufacturer Profile
- **Header**: Company info + CTA
- **Tabs**: Overview, Products, Reviews
- **Content**: Card-based sections

## Responsive Breakpoints

- **Mobile**: `320px - 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `1024px - 1440px`
- **Large**: `1440px+`

## Dark Mode Support

### Background Colors
- **Primary**: `#0F172A`
- **Secondary**: `#1E293B`
- **Card**: `#334155`

### Text Colors
- **Primary**: `#F8FAFC`
- **Secondary**: `#CBD5E1`
- **Muted**: `#94A3B8`

## Accessibility Standards

### Color Contrast
- **AA Standard**: 4.5:1 ratio
- **AAA Standard**: 7:1 ratio for critical text

### Focus States
- **Outline**: 2px solid blue
- **Outline Offset**: 2px

### Interactive Elements
- **Minimum Touch Target**: `44px x 44px`

## Micro-Interactions

### Hover States
- **Cards**: Subtle shadow increase
- **Buttons**: Scale 0.98
- **Links**: Underline + color change

### Loading States
- **Skeleton**: Gray-200 shimmer
- **Spinner**: Blue circle animation

### Transitions
- **Standard**: `0.2s ease-out`
- **Slow**: `0.3s ease-out`

## Data Visualization

### Charts
- **Primary**: Blue (#2563EB)
- **Secondary**: Teal (#0891B2)
- **Success**: Green (#059669)
- **Warning**: Amber (#D97706)

### Metrics Cards
- **Positive**: Green text
- **Negative**: Red text
- **Neutral**: Gray text

This design system ensures a cohesive, professional, and enterprise-grade user experience that builds trust and facilitates efficient business operations.