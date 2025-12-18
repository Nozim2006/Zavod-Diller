# B2B Wholesale Platform - Design Quick Reference
## Fast Lookup Guide for Design Specifications

---

## Color Quick Reference

### Primary Colors
```
Primary Blue (Main)
  Dark:  #003D82 (900)
  Main:  #0066CC (700)
  Light: #E8F3FF (100)

Teal (CTAs)
  Dark:  #0D6E6E (700)
  Main:  #16A39E (500)
  Light: #E8F6F4 (100)

Grays (Neutral)
  Darkest:  #0F1117 (900)
  Dark:     #24292F (800)
  Medium:   #6E7681 (600)
  Light:    #EAEEF2 (200)
  Lightest: #FAFBFC (50)
```

### Status Colors
```
Success (Green)     - #22C55E
Warning (Amber)     - #FBBF24
Error (Red)         - #EF4444
Info (Blue)         - #3B82F6
```

---

## Typography Quick Reference

### Font Stack
```
Primary: Inter (sans-serif)
Monospace: IBM Plex Mono (numbers, prices)
```

### Font Sizes
```
H1: 42px Bold     (Page title)
H2: 32px Bold     (Section heading)
H3: 24px Semibold (Card title)
H4: 20px Semibold (Form label)
Body: 16px Regular
Small: 14px Regular
XS: 12px Regular
```

### Font Weights
```
Bold:      700 (headings)
Semibold:  600 (labels, emphasis)
Regular:   400 (body text)
```

---

## Spacing Quick Reference

### Base Unit: 4px
```
xs: 4px    (minimal gaps)
sm: 8px    (tight spacing)
md: 12px   (standard)
lg: 16px   (card padding)
xl: 20px   (large)
2xl: 24px  (section margins)
3xl: 32px  (major breaks)
5xl: 48px  (large sections)
```

### Common Patterns
```
Card padding:        16px
Container margin:    32px
Element gap:         8-12px
Section gap:         32-48px
Button padding:      10px vertical, 16px horizontal
```

---

## Component Size Reference

### Buttons
```
Small:   32px height, 12px font
Medium:  36px height, 14px font (default)
Large:   44px height, 16px font
```

### Input Fields
```
Height:    40px
Padding:   8px horizontal, 10px vertical
Font:      14px
```

### Icons
```
Small:   16px
Default: 20px
Medium:  24px
Large:   32px
XL:      48px
```

### Cards
```
Border radius: 8px
Padding:       16px (standard), 20px (large)
Shadow:        0 1px 3px (default), 0 4px 12px (hover)
```

---

## Breakpoints

```
Mobile:   320px - 767px
Tablet:   768px - 1023px
Desktop:  1024px - 1439px
Wide:     1440px+
```

---

## Button States Quick Chart

### Primary Button
```
Default:  Blue (#0066CC), shadow sm
Hover:    Dark blue (#0052A3), shadow lg
Active:   Darker (#003D82)
Disabled: Gray (#D0D7DE), gray text
```

### Secondary Button
```
Default:  Light gray (#F5F6F8), gray border
Hover:    Medium gray (#EAEEF2)
Active:   Dark gray (#D0D7DE)
Disabled: Light gray (#F5F6F8), gray border
```

### Tertiary Button (Ghost)
```
Default:  Transparent, blue text
Hover:    Light blue background (#F0F8FF)
Active:   Blue background (#E8F3FF)
Disabled: Light gray background
```

---

## Form Validation States

### Input Focus
```
Border:     2px Primary (#0066CC)
Shadow:     0 0 0 3px rgba(10,102,204,0.1)
Transition: 150ms ease-in-out
```

### Input Error
```
Border:     2px Error (#EF4444)
Shadow:     0 0 0 3px rgba(239,68,68,0.1)
Text Color: Error (#DC2626)
```

### Input Success
```
Border:     2px Success (#22C55E)
Icon:       Checkmark (right side)
Text Color: Success (#15803D)
```

---

## Shadows Quick Reference

```
xs:  0 1px 2px rgba(0,0,0,0.05)
sm:  0 1px 3px rgba(0,0,0,0.1)
md:  0 4px 6px rgba(0,0,0,0.1)
lg:  0 10px 15px rgba(0,0,0,0.1)
xl:  0 20px 25px rgba(0,0,0,0.1)
2xl: 0 25px 50px rgba(0,0,0,0.2)
```

### When to Use
```
xs:  Subtle borders, minimal depth
sm:  Card default state
md:  Card hover state
lg:  Prominent cards, dialogs
xl:  Modals, overlays
2xl: Full-screen overlays
```

---

## Border Radius Quick Reference

```
sm:   4px  (minimal rounding)
md:   6px  (buttons, inputs)
lg:   8px  (cards, panels)
xl:   12px (modals, large elements)
full: 9999px (circles, pills)
```

---

## Transition Timing

```
Fast:   150ms ease-in-out (hover, small changes)
Base:   200ms ease-in-out (standard animations)
Slow:   300ms ease-in-out (large transitions)
```

### Animations
```
Page fade:        200ms
Button press:     100ms scale
Hover lift:       200ms translate-y
Modal entrance:   300ms scale+fade
```

---

## Component Checklist

### Button Component ✓
- [ ] Primary, secondary, tertiary, accent variants
- [ ] sm/md/lg sizes
- [ ] Hover, active, disabled states
- [ ] Loading state (spinner)
- [ ] Icon support
- [ ] Disabled cursor

### Input Component ✓
- [ ] Text, email, password, number types
- [ ] Label and helper text
- [ ] Error state with message
- [ ] Focus state with ring
- [ ] Icon support (leading/trailing)
- [ ] Placeholder text
- [ ] Disabled state

### Card Component ✓
- [ ] Default, elevated, flat variants
- [ ] Padding consistency
- [ ] Border and shadow
- [ ] Hover effect (optional)
- [ ] Header, body, footer sections
- [ ] Rounded corners (8px)

### Table Component ✓
- [ ] Sticky header
- [ ] Hover row highlighting
- [ ] Sort icons
- [ ] Striped rows (optional)
- [ ] Pagination
- [ ] Checkbox column

### Modal Component ✓
- [ ] Overlay/scrim background
- [ ] Centered positioning
- [ ] Header with close button
- [ ] Body scrollable
- [ ] Footer with buttons
- [ ] Escape key to close

### Navigation Components ✓
- [ ] Breadcrumb with separator
- [ ] Sidebar items with icons
- [ ] Active state indicator
- [ ] Hover effects
- [ ] Mobile toggle
- [ ] Pagination with prev/next

---

## Dark Mode Conversion

### Primary Conversion
```
Light mode:  #0066CC → Dark mode: #4A9FFF
Light mode:  #0F1117 → Dark mode: #FAFBFC
Light mode:  #FFFFFF → Dark mode: #24292F
```

### Quick Rules
```
1. Invert text colors
2. Invert background colors
3. Use lighter shades of primary
4. Use darker shades of grays
5. Maintain contrast ratios (4.5:1)
6. Keep semantic meaning (success=green, etc.)
```

---

## Mobile Optimization Checklist

- [ ] Touch targets: 44px × 44px minimum
- [ ] Font size: Minimum 14px
- [ ] Line height: Minimum 1.5
- [ ] Padding: Double check on small screens
- [ ] Single column layout
- [ ] Stacked cards/components
- [ ] Full-width buttons
- [ ] Hidden sidebar (hamburger menu)
- [ ] Simplified tables (card view)
- [ ] No hover-only interactions

---

## Accessibility Checklist

- [ ] Color contrast: 4.5:1 minimum
- [ ] Keyboard navigation: Tab through all
- [ ] Focus indicators: Visible on all elements
- [ ] ARIA labels: On images, icons
- [ ] Semantic HTML: Use <button>, <nav>, etc.
- [ ] Form labels: Linked to inputs
- [ ] Error messages: Announced clearly
- [ ] Loading states: Announced
- [ ] Motion: Respects prefers-reduced-motion
- [ ] Language: Clear and simple

---

## CSS Variables Template

```css
:root {
  /* Colors */
  --primary: #0066CC;
  --primary-light: #E8F3FF;
  --success: #22C55E;
  --warning: #FBBF24;
  --error: #EF4444;
  --text: #0F1117;
  --text-light: #6E7681;
  --bg: #FAFBFC;
  --border: #D0D7DE;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;

  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Border */
  --radius: 8px;
  --radius-sm: 4px;
  --radius-lg: 12px;

  /* Shadow */
  --shadow: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

  /* Transition */
  --transition: 200ms ease-in-out;
}
```

---

## Common Issues & Solutions

### Issue: Text too small on mobile
**Solution:** Use `font-size: clamp(14px, 4vw, 16px)` for responsive sizing

### Issue: Images not scaling
**Solution:** Use `max-width: 100%` and `height: auto` on all images

### Issue: Layout breaking on tablet
**Solution:** Use 12-column grid with responsive column spans

### Issue: Buttons too small on mobile
**Solution:** Ensure minimum 44px × 44px, use full width on small screens

### Issue: Dark mode not switching
**Solution:** Use CSS variables with media query AND data-theme attribute

### Issue: Animation laggy
**Solution:** Use `transform` and `opacity` only (not `top`/`left`/`width`)

### Issue: Accessibility issues
**Solution:** Test with keyboard (Tab key), screen reader, and color contrast checker

---

## Resources & References

### Files in This Design System
- `DESIGN_SYSTEM.md` - Complete design tokens and colors
- `PAGE_LAYOUTS.md` - Page structures and layouts
- `COMPONENT_LIBRARY.md` - Component specifications
- `VISUAL_SITEMAP.md` - Site structure and navigation
- `IMPLEMENTATION_GUIDE.md` - How to build everything
- `QUICK_REFERENCE.md` - This file (quick lookups)

### External Tools
- Color contrast: https://contrast-ratio.com
- Typography: https://type-scale.com
- Spacing: https://spacing.spec.fm
- Accessibility: https://www.a11y-101.com
- CSS utilities: https://tailwindcss.com

---

## Glossary

**Primary Action**: Main button to achieve page goal (e.g., "Save", "Submit")

**Secondary Action**: Alternative action (e.g., "Cancel", "Back")

**Tertiary Action**: De-emphasized link-style button (e.g., "Learn more")

**CTA (Call-to-Action)**: Button that encourages user to take action

**Elevation**: Visual depth created by shadows (cards "float" above background)

**Focus State**: Visual indicator showing where keyboard is (required for accessibility)

**Hover State**: Visual feedback when mouse is over element

**Active State**: Visual feedback showing element is currently selected/in-use

**Disabled State**: Grayed out, non-interactive element

**Error State**: Red-highlighted element with error message

**Loading State**: Spinner or skeleton showing content is loading

**Scrim**: Semi-transparent overlay behind modals/overlays

**Breadcrumb**: Navigation trail showing current page location

**Sidebar**: Vertical navigation on left/right side

**KPI**: Key Performance Indicator (metric card)

**MOQ**: Minimum Order Quantity

**Skeleton Loader**: Placeholder showing shape of content while loading

---

This quick reference should help you quickly look up colors, sizes, and specifications while building. For detailed information, refer to the full documentation files.
