# B2B Wholesale Platform - Design System & Visual Specification
## Enterprise-Grade Visual Identity & UI Component Library

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography System](#typography-system)
4. [Spacing & Layout Grid](#spacing--layout-grid)
5. [Component Library](#component-library)
6. [Design Tokens](#design-tokens)
7. [Light & Dark Mode](#light--dark-mode)

---

## Design Philosophy

### Core Design Principles

**1. Enterprise Trust**
- Clean, professional, no-nonsense aesthetics
- High visual hierarchy and clarity
- Serious, mature color palette
- Clear information architecture

**2. B2B Focus**
- Data-rich without overwhelming
- Bulk operations prioritized
- Efficiency over delight
- Complex workflows supported

**3. Scalability**
- Components work at any scale
- Responsive across all devices
- Accessible color contrasts
- Keyboard-navigable interfaces

**4. Modern SaaS (2025+)**
- Minimalist design language
- Soft, subtle shadows
- Generous whitespace
- Micro-interactions for feedback
- No unnecessary ornamentation

### Inspirations
- Stripe (payment trust, clean design)
- Linear (minimal issue tracking)
- Notion (data density + readability)
- Amazon Business (B2B expertise)
- Google Cloud Console (enterprise UX)

---

## Color System

### Primary Color Palette

#### Enterprise Blue (Primary)
```
Light Mode:
- Primary-900: #003D82 (darkest, headers)
- Primary-800: #0052A3
- Primary-700: #0066CC (main blue)
- Primary-600: #0A73DE
- Primary-500: #1A84F5 (interactive, hover)
- Primary-400: #4A9FFF (light interactive)
- Primary-300: #7ABFFF (subtle background)
- Primary-200: #B8DEFF (very light background)
- Primary-100: #E8F3FF (lightest background)
- Primary-50: #F0F8FF (near white)

Dark Mode:
- Primary-900: #E8F3FF (light in dark)
- Primary-800: #DBEAFF
- Primary-700: #B8DEFF
- Primary-600: #7ABFFF
- Primary-500: #4A9FFF (main in dark mode)
- Primary-400: #1A84F5
- Primary-300: #0A73DE
- Primary-200: #0052A3
- Primary-100: #003D82
```

#### Neutral Grays (Secondary)
```
Light Mode:
- Gray-900: #0F1117 (text, headings)
- Gray-800: #24292F (body text)
- Gray-700: #444C56
- Gray-600: #6E7681
- Gray-500: #8590A2 (secondary text)
- Gray-400: #BABBBD (borders)
- Gray-300: #D0D7DE (subtle borders)
- Gray-200: #EAEEF2 (light backgrounds)
- Gray-100: #F5F6F8 (very light background)
- Gray-50: #FAFBFC (near white)

Dark Mode:
- Gray-900: #FAFBFC (light in dark)
- Gray-800: #F5F6F8
- Gray-700: #EAEEF2
- Gray-600: #D0D7DE
- Gray-500: #BABBBD
- Gray-400: #8590A2
- Gray-300: #6E7681
- Gray-200: #444C56
- Gray-100: #24292F
- Gray-50: #0F1117 (darkest in dark mode)
```

### Accent Colors

#### Teal (Call-to-Action, Primary Actions)
```
- Teal-700: #0D6E6E (dark)
- Teal-600: #138585
- Teal-500: #16A39E (primary teal)
- Teal-400: #4FBDB5
- Teal-300: #89D4CE
- Teal-200: #C0E8E2
- Teal-100: #E8F6F4
```

#### Violet (Secondary Actions, Highlights)
```
- Violet-700: #5E40BE (dark)
- Violet-600: #7C3AED
- Violet-500: #9D4FEE (primary violet)
- Violet-400: #B377F8
- Violet-300: #D8B4FF
- Violet-200: #ECDDFD
- Violet-100: #FAF5FF
```

### Semantic Colors

#### Success (Green)
```
- Success-900: #06481F
- Success-700: #15803D
- Success-500: #22C55E (main success)
- Success-300: #86EFAC
- Success-100: #DCFCE7
```

#### Warning (Amber)
```
- Warning-900: #78350F
- Warning-700: #B45309
- Warning-500: #FBBF24 (main warning)
- Warning-300: #FCD34D
- Warning-100: #FEF3C7
```

#### Error (Red)
```
- Error-900: #7F1D1D
- Error-700: #DC2626
- Error-500: #EF4444 (main error)
- Error-300: #FCA5A5
- Error-100: #FEE2E2
```

#### Info (Blue)
```
- Info-900: #0C2340
- Info-700: #1E40AF
- Info-500: #3B82F6 (main info)
- Info-300: #93C5FD
- Info-100: #DBEAFE
```

### Color Usage Guidelines

**Light Mode (Default)**
- Background: Gray-50 (#FAFBFC)
- Primary Text: Gray-900 (#0F1117)
- Secondary Text: Gray-500 (#8590A2)
- Borders: Gray-300 (#D0D7DE)
- Interactive Elements: Primary-700 (#0066CC), Teal-500 (#16A39E)
- Cards/Surfaces: White (#FFFFFF)

**Dark Mode**
- Background: Gray-50 (#0F1117)
- Primary Text: Gray-900 (#FAFBFC)
- Secondary Text: Gray-500 (#BABBBD)
- Borders: Gray-300 (#444C56)
- Interactive Elements: Primary-500 (#4A9FFF), Teal-400 (#4FBDB5)
- Cards/Surfaces: Gray-100 (#24292F)

### Contrast Standards
- All text meets WCAG AA standard (4.5:1 ratio minimum)
- Interactive elements: 3:1 minimum contrast
- Large text: 3:1 minimum

---

## Typography System

### Font Stack

**Primary Font: Inter**
- Modern, clean, highly readable
- Excellent on screens and displays
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue'`

**Monospace Font: IBM Plex Mono**
- For numbers, prices, IDs, codes
- Clear character differentiation
- Fallback: `'Courier New', monospace`

### Font Weights
- **Bold (700)**: Headings, emphasis, labels
- **Semibold (600)**: Section titles, important labels
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Secondary labels, metadata

### Font Sizes & Line Heights

#### Headings
```
H1 (Display):
- Size: 42px / 2.625rem
- Line Height: 1.2 (50px)
- Letter Spacing: -0.5px
- Weight: Bold (700)
- Usage: Page titles, hero sections

H2 (Hero Heading):
- Size: 32px / 2rem
- Line Height: 1.25 (40px)
- Letter Spacing: -0.3px
- Weight: Bold (700)
- Usage: Section headings, dashboard title

H3 (Section Title):
- Size: 24px / 1.5rem
- Line Height: 1.33 (32px)
- Letter Spacing: -0.2px
- Weight: Semibold (600)
- Usage: Card titles, subsections

H4 (Subsection):
- Size: 20px / 1.25rem
- Line Height: 1.4 (28px)
- Letter Spacing: 0px
- Weight: Semibold (600)
- Usage: Form labels, widget titles

H5 (Small Heading):
- Size: 16px / 1rem
- Line Height: 1.5 (24px)
- Letter Spacing: 0px
- Weight: Semibold (600)
- Usage: Tab labels, small section headers
```

#### Body Text
```
Large Body:
- Size: 18px / 1.125rem
- Line Height: 1.56 (28px)
- Letter Spacing: 0px
- Weight: Regular (400)
- Usage: Large descriptions, highlighted text

Body (Regular):
- Size: 16px / 1rem
- Line Height: 1.5 (24px)
- Letter Spacing: 0px
- Weight: Regular (400)
- Usage: Main body text, descriptions

Small Body:
- Size: 14px / 0.875rem
- Line Height: 1.43 (20px)
- Letter Spacing: 0px
- Weight: Regular (400)
- Usage: Secondary text, helper text, captions

Extra Small Body:
- Size: 12px / 0.75rem
- Line Height: 1.33 (16px)
- Letter Spacing: 0px
- Weight: Regular (400)
- Usage: Footnotes, timestamps, small labels
```

#### UI Labels
```
Label (Medium):
- Size: 14px / 0.875rem
- Line Height: 1.43 (20px)
- Letter Spacing: 0px
- Weight: Semibold (600)
- Usage: Form labels, button text

Label (Small):
- Size: 12px / 0.75rem
- Line Height: 1.33 (16px)
- Letter Spacing: 0.5px
- Weight: Semibold (600)
- Usage: Tags, badges, small buttons
```

#### Numbers & Data
```
Price Display:
- Size: 28px / 1.75rem
- Line Height: 1.14 (32px)
- Weight: Bold (700)
- Font: IBM Plex Mono
- Usage: Product prices, order totals

Metric (Large):
- Size: 24px / 1.5rem
- Line Height: 1.33 (32px)
- Weight: Semibold (600)
- Font: IBM Plex Mono
- Usage: Dashboard KPIs

Metric (Small):
- Size: 16px / 1rem
- Line Height: 1.5 (24px)
- Weight: Semibold (600)
- Font: IBM Plex Mono
- Usage: Small numbers, quantities
```

### Text Color Hierarchy

**Light Mode**
- Primary Text (H1-H4, important body): Gray-900 (#0F1117)
- Secondary Text (descriptions, helpers): Gray-600 (#6E7681)
- Tertiary Text (disabled, footnotes): Gray-500 (#8590A2)
- Link Text: Primary-700 (#0066CC)
- Link Hover: Primary-800 (#0052A3)
- Inverted (on dark backgrounds): White (#FFFFFF)

**Dark Mode**
- Primary Text: Gray-900 (#FAFBFC)
- Secondary Text: Gray-500 (#BABBBD)
- Tertiary Text: Gray-400 (#8590A2)
- Link Text: Primary-500 (#4A9FFF)
- Link Hover: Primary-400 (#7ABFFF)
- Inverted (on light backgrounds): Gray-50 (#0F1117)

---

## Spacing & Layout Grid

### Base Unit: 4px (0.25rem)

All spacing values are multiples of 4px for consistent rhythm.

### Spacing Scale
```
4px   (0.25rem) - xs   - Extra small (borders, minimal gaps)
8px   (0.5rem)  - sm   - Small (tight spacing)
12px  (0.75rem) - md   - Medium (standard element spacing)
16px  (1rem)    - lg   - Large (card padding, section spacing)
20px  (1.25rem) - xl   - Extra large
24px  (1.5rem)  - 2xl  - Extra extra large (section margins)
32px  (2rem)    - 3xl  - Large section spacing
40px  (2.5rem)  - 4xl
48px  (3rem)    - 5xl  - Major section breaks
64px  (4rem)    - 6xl
80px  (5rem)    - 7xl  - Hero section spacing
```

### Common Spacing Patterns

**Padding**
- Container padding: 16px (mobile), 24px (tablet), 32px (desktop)
- Card internal padding: 16px
- Input field padding: 10px horizontal, 8px vertical
- Button padding: 10px horizontal, 8px vertical

**Margins**
- Element to element: 8px - 16px
- Section to section: 32px - 48px
- Between card rows: 12px

**Gap (Flex/Grid)**
- Component gap: 8px
- Card grid gap: 16px
- Form field gap: 12px
- List item gap: 8px

### Layout Grid

**Desktop (1440px+)**
- 12-column grid
- Column width: 100px
- Gutter: 24px
- Margin: 32px

**Tablet (768px - 1439px)**
- 6-column grid
- Column width: 100px
- Gutter: 16px
- Margin: 16px

**Mobile (320px - 767px)**
- 4-column grid
- Column width: dynamic
- Gutter: 8px
- Margin: 16px

### Container Sizes
```
xs:  320px
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1440px
```

---

## Component Library

### Buttons

#### Primary Button
```
State: Default
- Background: Primary-700 (#0066CC)
- Text: White (#FFFFFF)
- Padding: 10px 16px (36px height with icon)
- Border Radius: 6px
- Font: 14px, Semibold

State: Hover
- Background: Primary-800 (#0052A3)
- Shadow: 0 2px 8px rgba(10, 115, 222, 0.2)

State: Active
- Background: Primary-900 (#003D82)

State: Disabled
- Background: Gray-300 (#D0D7DE)
- Text: Gray-500 (#8590A2)
- Cursor: not-allowed
```

#### Secondary Button
```
State: Default
- Background: Gray-100 (#F5F6F8)
- Border: 1px Gray-300 (#D0D7DE)
- Text: Gray-900 (#0F1117)
- Padding: 10px 16px

State: Hover
- Background: Gray-200 (#EAEEF2)
- Border: 1px Gray-400 (#BABBBD)

State: Active
- Background: Gray-300 (#D0D7DE)

State: Disabled
- Background: Gray-100 (#F5F6F8)
- Text: Gray-400 (#BABBBD)
```

#### Tertiary Button (Ghost)
```
State: Default
- Background: Transparent
- Text: Primary-700 (#0066CC)
- Border: None
- Padding: 10px 16px

State: Hover
- Background: Primary-50 (#F0F8FF)
- Text: Primary-800 (#0052A3)

State: Active
- Background: Primary-100 (#E8F3FF)
- Text: Primary-900 (#003D82)
```

#### Accent Button (Teal CTA)
```
State: Default
- Background: Teal-500 (#16A39E)
- Text: White (#FFFFFF)
- Padding: 10px 16px

State: Hover
- Background: Teal-600 (#138585)
- Shadow: 0 2px 8px rgba(19, 133, 133, 0.2)

State: Active
- Background: Teal-700 (#0D6E6E)
```

#### Button Sizes
```
Small: 8px padding vertical, 12px horizontal, 12px text
Medium: 10px padding vertical, 16px horizontal, 14px text (default)
Large: 12px padding vertical, 20px horizontal, 16px text
```

#### Icon Buttons
```
- 32px × 32px (default)
- 40px × 40px (large)
- 24px × 24px (small)
- Icon centered with SVG
- Same hover/active states as buttons
```

### Form Components

#### Input Fields
```
Default State:
- Height: 40px
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 6px
- Padding: 10px 12px
- Font: 14px Regular
- Placeholder: Gray-500 (#8590A2)
- Background: White (#FFFFFF)

Hover State:
- Border: 1px Gray-400 (#BABBBD)

Focus State:
- Border: 2px Primary-700 (#0066CC)
- Box Shadow: 0 0 0 3px rgba(10, 102, 204, 0.1)
- Outline: None

Error State:
- Border: 2px Error-500 (#EF4444)
- Box Shadow: 0 0 0 3px rgba(239, 68, 68, 0.1)

Disabled State:
- Background: Gray-100 (#F5F6F8)
- Border: 1px Gray-300 (#D0D7DE)
- Text: Gray-400 (#BABBBD)
- Cursor: not-allowed
```

#### Textarea
```
- Min Height: 120px
- Border & styling: Same as input field
- Padding: 12px
- Resize: Vertical only
- Font: 14px Regular, monospace for code
```

#### Select Dropdown
```
- Same sizing as input (40px)
- Down arrow icon (right aligned)
- Background: White (#FFFFFF)
- States: Same as input field
- Dropdown styling: Consistent with inputs
```

#### Checkboxes
```
- Size: 16px × 16px
- Border Radius: 4px
- Border: 2px Gray-300 (#D0D7DE)
- Checked Color: Primary-700 (#0066CC)
- Checked Icon: White checkmark
- Spacing from label: 8px
```

#### Radio Buttons
```
- Size: 16px × 16px
- Border Radius: 50%
- Border: 2px Gray-300 (#D0D7DE)
- Checked Color: Primary-700 (#0066CC)
- Inner dot: 6px diameter
- Spacing from label: 8px
```

#### Toggle Switch
```
- Size: 48px × 24px
- Border Radius: 12px
- Off: Gray-300 (#D0D7DE) background, white dot on left
- On: Primary-700 (#0066CC) background, white dot on right
- Transition: 200ms smooth
- Cursor: pointer
```

#### Form Label
```
- Font: 14px Semibold
- Color: Gray-900 (#0F1117)
- Margin Bottom: 6px
- Optional indicator: "(optional)" in Gray-500
- Required indicator: Red asterisk "*"
```

#### Helper Text & Error Messages
```
Helper Text:
- Font: 12px Regular
- Color: Gray-500 (#8590A2)
- Margin Top: 4px

Error Message:
- Font: 12px Regular
- Color: Error-600 (#DC2626)
- Icon: Error warning icon (12px)
- Margin Top: 4px
```

### Cards & Surfaces

#### Standard Card
```
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 16px
- Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.08)

Hover State (interactive):
- Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.12)
- Transform: translateY(-2px)
- Transition: 200ms ease

Dark Mode:
- Background: Gray-100 (#24292F)
- Border: 1px Gray-200 (#444C56)
```

#### Elevated Card (Prominent)
```
- Background: White (#FFFFFF)
- Border: None
- Border Radius: 8px
- Padding: 16px
- Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.12)
```

#### Flat Card (Subtle)
```
- Background: Gray-50 (#FAFBFC)
- Border: None
- Border Radius: 8px
- Padding: 16px
- Box Shadow: None
```

#### KPI Card
```
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 20px
- Layout: Flex column
  - Icon (32px, primary color): Top right
  - Label (12px, Gray-500): Top left
  - Value (24px, Bold): Middle
  - Change (14px, success/error color): Bottom
- Min Width: 240px
```

### Badges & Tags

#### Badge (Status)
```
Small Badge (12px height):
- Padding: 2px 8px
- Font: 11px Semibold
- Border Radius: 4px
- Display: inline-block
- Variants:
  - Primary: Blue background, white text
  - Success: Green background, white text
  - Warning: Amber background, black text
  - Error: Red background, white text
  - Gray: Gray-200 background, Gray-900 text

Large Badge (20px height):
- Padding: 4px 10px
- Font: 12px Semibold
- Border Radius: 6px
```

#### Tag (Filterable Label)
```
- Padding: 4px 8px
- Font: 12px Regular
- Border Radius: 4px
- Background: Gray-100 (#F5F6F8)
- Border: 1px Gray-300 (#D0D7DE)
- Icon: Small X for removal
- Cursor: pointer

Hover:
- Background: Gray-200 (#EAEEF2)
```

### Dividers & Separators

#### Horizontal Divider
```
- Height: 1px
- Color: Gray-300 (#D0D7DE)
- Margin: 16px 0

Full Width:
- Extends edge to edge

Inset:
- Margin Left/Right: 16px
```

#### Vertical Divider
```
- Width: 1px
- Color: Gray-300 (#D0D7DE)
- Height: 24px - full height
- Margin: 0 12px
```

### Tables

#### Table Header
```
- Background: Gray-50 (#FAFBFC)
- Border Bottom: 1px Gray-300 (#D0D7DE)
- Padding: 12px 16px
- Font: 12px Semibold, Gray-700 (#444C56)
- Sticky on scroll (position: sticky, top: 0)
- Z-index: 10
```

#### Table Row
```
Default:
- Height: 44px
- Padding: 12px 16px
- Border Bottom: 1px Gray-300 (#D0D7DE)
- Font: 14px Regular, Gray-900

Hover:
- Background: Gray-50 (#FAFBFC)
- Cursor: pointer (if clickable)

Striped (Optional):
- Even rows: Gray-50 (#FAFBFC)
- Odd rows: White (#FFFFFF)

Selected Row:
- Background: Primary-50 (#F0F8FF)
- Border Left: 3px Primary-700 (#0066CC)
```

#### Table Cell
```
- Padding: 12px 16px
- Vertical Align: middle
- Text Overflow: ellipsis
- Overflow: hidden
- Whitespace: nowrap
- Max Width: 200px (configurable)
```

#### Sorting Icons
```
- Color (inactive): Gray-400 (#BABBBD)
- Color (active): Primary-700 (#0066CC)
- Size: 16px
- Margin Left: 4px
```

### Navigation Components

#### Breadcrumb
```
- Font: 14px Regular, Gray-600 (#6E7681)
- Separator: "/" in Gray-400 (#BABBBD)
- Spacing: 0 4px around separator
- Link: Primary-700 (#0066CC)
- Link Hover: Primary-800 (#0052A3), underline

Active (Last item):
- Color: Gray-900 (#0F1117)
- Not clickable
```

#### Pagination
```
- Font: 14px Regular
- Button Size: 36px × 36px
- Border Radius: 6px
- Styling: Same as secondary button
- Active Page: Primary-700 (#0066CC), white text
- Gap: 4px
- Display: Flex, center aligned
- Variants:
  - Numbered (1, 2, 3, ...)
  - With prev/next arrows
  - With jump to page input
```

#### Tabs
```
Tab Bar:
- Background: Transparent or Gray-50 (#FAFBFC)
- Height: 44px
- Border Bottom: 1px Gray-300 (#D0D7DE)

Tab (Inactive):
- Font: 14px Semibold, Gray-600 (#6E7681)
- Padding: 12px 16px
- Cursor: pointer

Tab (Active):
- Font: 14px Semibold, Primary-700 (#0066CC)
- Border Bottom: 3px Primary-700 (#0066CC)

Tab Hover:
- Color: Primary-700 (#0066CC)
```

#### Pills (Segmented Control)
```
- Container: Gray-200 (#EAEEF2), border 1px Gray-300
- Border Radius: 8px
- Padding: 2px (internal gap)
- Height: 36px
- Font: 14px Semibold

Pill (Inactive):
- Background: Transparent
- Color: Gray-600 (#6E7681)

Pill (Active):
- Background: White (#FFFFFF)
- Color: Gray-900 (#0F1117)
- Border Radius: 6px
- Box Shadow: 0 2px 4px rgba(0, 0, 0, 0.08)
```

### Alerts & Notifications

#### Alert Banner
```
Container:
- Padding: 12px 16px
- Border Radius: 8px
- Border Left: 4px colored
- Display: Flex, gap 12px

Title:
- Font: 14px Semibold

Message:
- Font: 14px Regular
- Color: Gray-700 (#444C56)

Close Button:
- X icon, Gray-500
- Hover: Gray-700

Variants:
- Success: Green-100 bg, Green-900 border, Green-700 text
- Warning: Amber-100 bg, Amber-900 border, Amber-700 text
- Error: Red-100 bg, Red-900 border, Red-700 text
- Info: Blue-100 bg, Blue-900 border, Blue-700 text
```

#### Toast Notification
```
Container:
- Position: Fixed, bottom right, 16px from edges
- Padding: 12px 16px
- Border Radius: 8px
- Background: Gray-900 (#0F1117)
- Box Shadow: 0 10px 28px rgba(0, 0, 0, 0.2)
- Z-index: 9999

Text:
- Font: 14px Regular, White (#FFFFFF)
- Max Width: 320px

Icon:
- 16px, left aligned
- Color: White

Close Button:
- X icon, Gray-500
- Hover: Gray-400

Animation:
- Enter: Slide in from bottom, 300ms
- Exit: Fade out, 200ms
- Auto dismiss: 5000ms default
```

#### Inline Message (Validation)
```
Success:
- Border Left: 3px Green-500 (#22C55E)
- Background: Green-50 (#F0FDF4)
- Icon: Check (Green-700)
- Text: 12px, Green-700

Error:
- Border Left: 3px Error-500 (#EF4444)
- Background: Error-50 (#FEF2F2)
- Icon: X or alert (Error-700)
- Text: 12px, Error-700

Warning:
- Border Left: 3px Warning-500 (#FBBF24)
- Background: Amber-50 (#FFFBEB)
- Icon: Alert (Amber-700)
- Text: 12px, Amber-700

Info:
- Border Left: 3px Info-500 (#3B82F6)
- Background: Info-50 (#EFF6FF)
- Icon: Info (Info-700)
- Text: 12px, Info-700
```

### Modals & Overlays

#### Modal Dialog
```
Container:
- Background: White (#FFFFFF)
- Border Radius: 12px
- Box Shadow: 0 20px 64px rgba(0, 0, 0, 0.2)
- Max Width: 600px (standard, configurable)
- Width: 90% (mobile), 600px (desktop)
- Z-index: 1000

Header:
- Padding: 20px 24px
- Border Bottom: 1px Gray-300 (#D0D7DE)
- Title: 20px Semibold
- Close button: X icon (right aligned)

Body:
- Padding: 24px
- Font: 14px Regular

Footer:
- Padding: 16px 24px
- Border Top: 1px Gray-300 (#D0D7DE)
- Display: Flex, gap 12px, justify-end
- Buttons: Secondary + Primary

Overlay (Scrim):
- Background: rgba(0, 0, 0, 0.5)
- Z-index: 999
- Click to close (optional, configurable)
```

#### Slide-over Panel
```
- Position: Fixed, right side, full height
- Width: 400px (standard), 90% (mobile)
- Background: White (#FFFFFF)
- Box Shadow: -4px 0 12px rgba(0, 0, 0, 0.15)
- Z-index: 1000

Header:
- Padding: 20px 24px
- Border Bottom: 1px Gray-300 (#D0D7DE)
- Title: 20px Semibold
- Close button: X icon (right aligned)

Body:
- Padding: 24px
- Overflow: auto

Footer (Optional):
- Padding: 16px 24px
- Border Top: 1px Gray-300 (#D0D7DE)
- Sticky bottom
```

#### Tooltip
```
- Background: Gray-900 (#0F1117)
- Color: White (#FFFFFF)
- Font: 12px Regular
- Padding: 8px 12px
- Border Radius: 6px
- Max Width: 200px
- Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
- Arrow: Small triangle pointing to trigger
- Delay: 200ms show, 100ms hide
- Z-index: 1000
- Dark mode: Gray-100 background, Gray-900 text
```

#### Popover
```
- Background: White (#FFFFFF)
- Border: 1px Gray-300 (#D0D7DE)
- Border Radius: 8px
- Padding: 12px 16px
- Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.12)
- Arrow: Small triangle
- Max Width: 300px
- Z-index: 1000
- Dark mode: Gray-100 background, borders adjusted
```

### Loading States

#### Skeleton Loader
```
- Background: Gray-200 (#EAEEF2)
- Border Radius: Match component (6px-8px)
- Pulse Animation:
  - Opacity: 100% → 60% → 100%
  - Duration: 1.5s
  - Easing: ease-in-out

Text Skeleton:
- Height: 16px
- Width: 80% (varied)

Card Skeleton:
- Full card outline with skeletal content

Image Skeleton:
- Background: Gray-300 (#D0D7DE)
- With icon: Image placeholder icon, Gray-400
```

#### Spinner
```
- Size: 24px (default), 16px (small), 32px (large)
- Color: Primary-700 (#0066CC)
- Animation: Linear rotation, 1s duration
- Stroke Width: 3px
- Ring style
```

#### Progress Bar
```
- Height: 4px (default), 8px (large)
- Background: Gray-300 (#D0D7DE)
- Foreground: Primary-700 (#0066CC)
- Border Radius: 2px
- Animation: Smooth transition on value change

Indeterminate:
- Animated stripe pattern
- Left to right sweep, 1s duration
```

### Icons

#### Icon Sizes
```
16px - Small (navigation, badges)
20px - Default (list items, form fields)
24px - Medium (buttons, headers)
32px - Large (hero, empty states)
48px - Extra large (hero sections)
64px - Massive (landing pages)
```

#### Icon Styling
```
Color: Inherit from text color or explicit color
Weight: 2px stroke (typically)
Style: Line-based, not filled (generally)
Consistency: Rounded corners (2px radius minimum)
Opacity states:
- Active/enabled: 100%
- Hover: 100%
- Disabled: 50%
- Secondary: 60%
```

#### Icon Colors
```
Primary action: Primary-700 (#0066CC)
Success: Success-600 (#15803D)
Warning: Warning-600 (#B45309)
Error: Error-600 (#DC2626)
Info: Info-600 (#1E40AF)
Neutral: Gray-600 (#6E7681)
Secondary: Gray-500 (#8590A2)
Inverted: White (#FFFFFF)
```

---

## Design Tokens

### Design Token Registry (CSS Custom Properties)

```css
/* Colors - Light Mode */
:root {
  /* Primary Blue */
  --color-primary-900: #003D82;
  --color-primary-800: #0052A3;
  --color-primary-700: #0066CC;
  --color-primary-600: #0A73DE;
  --color-primary-500: #1A84F5;
  --color-primary-400: #4A9FFF;
  --color-primary-300: #7ABFFF;
  --color-primary-200: #B8DEFF;
  --color-primary-100: #E8F3FF;
  --color-primary-50: #F0F8FF;

  /* Neutral Gray */
  --color-gray-900: #0F1117;
  --color-gray-800: #24292F;
  --color-gray-700: #444C56;
  --color-gray-600: #6E7681;
  --color-gray-500: #8590A2;
  --color-gray-400: #BABBBD;
  --color-gray-300: #D0D7DE;
  --color-gray-200: #EAEEF2;
  --color-gray-100: #F5F6F8;
  --color-gray-50: #FAFBFC;

  /* Teal Accent */
  --color-teal-700: #0D6E6E;
  --color-teal-600: #138585;
  --color-teal-500: #16A39E;
  --color-teal-400: #4FBDB5;
  --color-teal-300: #89D4CE;
  --color-teal-200: #C0E8E2;
  --color-teal-100: #E8F6F4;

  /* Violet Accent */
  --color-violet-700: #5E40BE;
  --color-violet-600: #7C3AED;
  --color-violet-500: #9D4FEE;
  --color-violet-400: #B377F8;
  --color-violet-300: #D8B4FF;
  --color-violet-200: #ECDDFD;
  --color-violet-100: #FAF5FF;

  /* Status Colors */
  --color-success-900: #06481F;
  --color-success-700: #15803D;
  --color-success-500: #22C55E;
  --color-success-300: #86EFAC;
  --color-success-100: #DCFCE7;

  --color-warning-900: #78350F;
  --color-warning-700: #B45309;
  --color-warning-500: #FBBF24;
  --color-warning-300: #FCD34D;
  --color-warning-100: #FEF3C7;

  --color-error-900: #7F1D1D;
  --color-error-700: #DC2626;
  --color-error-500: #EF4444;
  --color-error-300: #FCA5A5;
  --color-error-100: #FEE2E2;

  --color-info-900: #0C2340;
  --color-info-700: #1E40AF;
  --color-info-500: #3B82F6;
  --color-info-300: #93C5FD;
  --color-info-100: #DBEAFE;

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;

  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --text-4xl: 42px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line Height */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;
  --spacing-2xl: 24px;
  --spacing-3xl: 32px;
  --spacing-4xl: 40px;
  --spacing-5xl: 48px;
  --spacing-6xl: 64px;
  --spacing-7xl: 80px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.2);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;

  /* Background & Text (Light Mode) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F6F8;
  --bg-tertiary: #FAFBFC;
  --text-primary: #0F1117;
  --text-secondary: #6E7681;
  --text-tertiary: #8590A2;
  --border-color: #D0D7DE;
}

/* Colors - Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    /* Adjust primary colors for dark mode */
    --color-primary-900: #E8F3FF;
    --color-primary-800: #DBEAFF;
    --color-primary-700: #B8DEFF;
    --color-primary-600: #7ABFFF;
    --color-primary-500: #4A9FFF;
    --color-primary-400: #1A84F5;
    --color-primary-300: #0A73DE;
    --color-primary-200: #0052A3;
    --color-primary-100: #003D82;

    /* Adjust grays for dark mode */
    --color-gray-900: #FAFBFC;
    --color-gray-800: #F5F6F8;
    --color-gray-700: #EAEEF2;
    --color-gray-600: #D0D7DE;
    --color-gray-500: #BABBBD;
    --color-gray-400: #8590A2;
    --color-gray-300: #6E7681;
    --color-gray-200: #444C56;
    --color-gray-100: #24292F;
    --color-gray-50: #0F1117;

    /* Background & Text (Dark Mode) */
    --bg-primary: #0F1117;
    --bg-secondary: #24292F;
    --bg-tertiary: #2D333B;
    --text-primary: #FAFBFC;
    --text-secondary: #D0D7DE;
    --text-tertiary: #8590A2;
    --border-color: #444C56;
  }
}
```

### Breakpoints
```
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+
```

---

## Light & Dark Mode

### Light Mode (Default)

**Characteristics:**
- Clean, bright, professional
- High contrast for readability
- Primary text on light backgrounds
- Trusted enterprise aesthetic

**Color Usage:**
- Page Background: Gray-50 (#FAFBFC)
- Card Background: White (#FFFFFF)
- Text: Gray-900 (#0F1117)
- Secondary Text: Gray-600 (#6E7681)
- Borders: Gray-300 (#D0D7DE)
- Interactive: Primary-700 (#0066CC), Teal-500 (#16A39E)

### Dark Mode

**Characteristics:**
- Eye-friendly for low-light environments
- Reduced strain during evening use
- Maintains contrast and accessibility
- Professional, modern appearance

**Color Usage:**
- Page Background: Gray-50 (#0F1117) - darkest
- Card Background: Gray-100 (#24292F)
- Text: Gray-900 (#FAFBFC) - brightest
- Secondary Text: Gray-500 (#BABBBD)
- Borders: Gray-200 (#444C56)
- Interactive: Primary-500 (#4A9FFF), Teal-400 (#4FBDB5)

### Implementation

**CSS:**
```css
/* Automatically respects system preference */
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}

/* User preference override */
[data-theme="dark"] { /* dark mode */ }
[data-theme="light"] { /* light mode */ }
```

**JavaScript Toggle:**
- Provide user preference in settings
- Store in localStorage
- Apply to html element: `data-theme` attribute
- Respect system preference on first visit

### Transition Between Modes
```css
/* Smooth color transition when switching modes */
* {
  transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease;
}

/* Disable transitions during page load to prevent flash */
html:not(.theme-loaded) * {
  transition: none;
}
```

---

## Application

### How to Use Design Tokens

1. **In CSS:**
   ```css
   .button-primary {
     background-color: var(--color-primary-700);
     color: var(--text-primary);
     font-size: var(--text-sm);
     padding: var(--spacing-lg);
     border-radius: var(--radius-md);
     box-shadow: var(--shadow-sm);
   }
   ```

2. **In Tailwind Config:**
   ```javascript
   theme: {
     colors: {
       primary: {
         900: 'var(--color-primary-900)',
         // ... etc
       }
     },
     spacing: {
       xs: 'var(--spacing-xs)',
       // ... etc
     }
   }
   ```

3. **Component Consistency:**
   - All components use these tokens
   - Changes to tokens automatically cascade
   - No magic numbers in component code
   - Reduces visual inconsistencies

---

## Summary

This design system creates an enterprise-grade, modern B2B platform visual identity that:

- ✅ Establishes trust through professional aesthetics
- ✅ Supports complex data and workflows
- ✅ Maintains accessibility standards
- ✅ Scales across all device sizes
- ✅ Supports light and dark themes
- ✅ Provides consistent component patterns
- ✅ Uses systematic spacing and typography
- ✅ Creates a cohesive visual language

All components, colors, typography, and spacing follow these specifications to create a unified, professional B2B wholesale platform experience.
