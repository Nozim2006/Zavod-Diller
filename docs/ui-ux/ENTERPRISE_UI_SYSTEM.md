# Next-Generation Enterprise UI/UX Design System

## 🎨 Overview

This document defines the complete visual identity and user experience guidelines for the WholesaleOS platform. The design system is built to feel comparable to modern enterprise tools like Stripe, Salesforce, and Notion, with a focus on **enterprise minimalism**, **data density**, and **exceptional usability**.

---

## 🎯 Design Principles

### 1. Enterprise Minimalism
- Every element serves a purpose
- Remove visual noise
- Focus on content and data
- Clean, spacious layouts
- Purposeful use of white space

### 2. Consistency & Predictability
- Consistent patterns across all pages
- Predictable interactions
- Once learned, intuitive everywhere
- Systematic use of components

### 3. Performance First
- Optimize for speed
- Smooth animations (60fps)
- Progressive loading
- Instant feedback

### 4. Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast modes
- Focus indicators

### 5. Data Density with Clarity
- Display maximum information without clutter
- Smart use of typography hierarchy
- Progressive disclosure
- Scannable interfaces

---

## 🌈 Visual Identity

### Brand Colors

#### Primary Palette
```css
/* Brand Primary - Blue to Violet Gradient */
--color-primary-500: #3B82F6;        /* Blue */
--color-primary-600: #2563EB;
--color-primary-700: #1D4ED8;

--color-accent-500: #8B5CF6;         /* Violet */
--color-accent-600: #7C3AED;
--color-accent-700: #6D28D9;

/* Gradient (Primary Accent) */
--gradient-primary: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
--gradient-primary-hover: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
```

#### Semantic Colors
```css
/* Success - Green */
--color-success-50: #ECFDF5;
--color-success-100: #D1FAE5;
--color-success-500: #10B981;
--color-success-600: #059669;
--color-success-700: #047857;

/* Warning - Amber */
--color-warning-50: #FFFBEB;
--color-warning-100: #FEF3C7;
--color-warning-500: #F59E0B;
--color-warning-600: #D97706;
--color-warning-700: #B45309;

/* Error - Red */
--color-error-50: #FEF2F2;
--color-error-100: #FEE2E2;
--color-error-500: #EF4444;
--color-error-600: #DC2626;
--color-error-700: #B91C1C;

/* Info - Blue */
--color-info-50: #EFF6FF;
--color-info-100: #DBEAFE;
--color-info-500: #3B82F6;
--color-info-600: #2563EB;
--color-info-700: #1D4ED8;
```

#### Neutral Palette (Light Mode)
```css
/* Grayscale - Light Mode */
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
--color-black: #000000;
```

#### Neutral Palette (Dark Mode)
```css
/* Soft Dark Mode - Warm Grays */
--color-dark-bg: #0F1419;            /* Main background */
--color-dark-surface: #1A1F2E;       /* Cards, panels */
--color-dark-elevated: #232936;      /* Elevated surfaces */
--color-dark-border: #2D3748;        /* Borders */
--color-dark-hover: #374151;         /* Hover states */

/* Text on Dark */
--color-dark-text-primary: #F9FAFB;
--color-dark-text-secondary: #D1D5DB;
--color-dark-text-tertiary: #9CA3AF;
--color-dark-text-disabled: #6B7280;
```

### Color Usage Guidelines

#### Background Layers
```
Light Mode:
- Page Background: white (#FFFFFF)
- Surface: gray-50 (#F9FAFB)
- Elevated Surface: white with shadow
- Overlay: rgba(0, 0, 0, 0.05)

Dark Mode:
- Page Background: dark-bg (#0F1419)
- Surface: dark-surface (#1A1F2E)
- Elevated Surface: dark-elevated (#232936)
- Overlay: rgba(255, 255, 255, 0.05)
```

#### Text Colors
```
Light Mode:
- Primary Text: gray-900 (#111827)
- Secondary Text: gray-600 (#4B5563)
- Tertiary Text: gray-500 (#6B7280)
- Disabled Text: gray-400 (#9CA3AF)
- Inverse Text: white (#FFFFFF)

Dark Mode:
- Primary Text: dark-text-primary (#F9FAFB)
- Secondary Text: dark-text-secondary (#D1D5DB)
- Tertiary Text: dark-text-tertiary (#9CA3AF)
- Disabled Text: dark-text-disabled (#6B7280)
```

#### Interactive Colors
```
/* Links */
--color-link: var(--color-primary-600);
--color-link-hover: var(--color-primary-700);
--color-link-visited: var(--color-accent-600);

/* Borders */
--color-border-default: var(--color-gray-200);
--color-border-hover: var(--color-gray-300);
--color-border-focus: var(--color-primary-500);
--color-border-error: var(--color-error-500);
```

---

## 🔤 Typography System

### Font Stack

#### Primary Font (UI & Content)
```css
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 
                       'Segoe UI', 'Roboto', 'Helvetica Neue', 
                       Arial, sans-serif;

/* Inter Features */
- Variable font (400-700 weight range)
- Optimized for UI at small sizes
- Excellent legibility
- Professional, modern aesthetic
```

#### Secondary Font (Data & Code)
```css
--font-family-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 
                    'Monaco', 'Cascadia Code', 'Consolas', 
                    monospace;

/* Use for: */
- SKU codes
- Order numbers
- API responses
- Code snippets
- Numeric data tables
```

#### Display Font (Marketing)
```css
--font-family-display: 'Inter', sans-serif;
/* Use Inter at larger sizes with tighter tracking */
```

### Font Weights
```css
--font-weight-normal: 400;      /* Body text */
--font-weight-medium: 500;      /* Emphasis, labels */
--font-weight-semibold: 600;    /* Subheadings */
--font-weight-bold: 700;        /* Headings, important */
```

### Type Scale

#### Desktop Type Scale (Base: 14px)
```css
/* Display - Marketing & Landing */
--text-display-2xl: 3.5rem;    /* 56px - Hero headlines */
--text-display-xl: 3rem;       /* 48px - Page hero */
--text-display-lg: 2.25rem;    /* 36px - Section hero */

/* Headings - Application UI */
--text-h1: 2.25rem;            /* 36px / 44px line-height */
--text-h2: 1.875rem;           /* 30px / 38px */
--text-h3: 1.5rem;             /* 24px / 32px */
--text-h4: 1.25rem;            /* 20px / 28px */
--text-h5: 1.125rem;           /* 18px / 26px */
--text-h6: 1rem;               /* 16px / 24px */

/* Body Text */
--text-body-xl: 1.125rem;      /* 18px / 28px - Lead paragraphs */
--text-body-lg: 1rem;          /* 16px / 24px - Default body */
--text-body: 0.875rem;         /* 14px / 22px - UI text (base) */
--text-body-sm: 0.8125rem;     /* 13px / 20px - Secondary text */

/* Small Text */
--text-caption: 0.75rem;       /* 12px / 18px - Captions, labels */
--text-overline: 0.6875rem;    /* 11px / 16px - Overlines, tags */
```

#### Mobile Type Scale (Slightly Reduced)
```css
--text-h1-mobile: 2rem;        /* 32px */
--text-h2-mobile: 1.75rem;     /* 28px */
--text-h3-mobile: 1.375rem;    /* 22px */
--text-h4-mobile: 1.125rem;    /* 18px */
--text-body-mobile: 1rem;      /* 16px - Increase for readability */
```

### Line Heights
```css
--line-height-tight: 1.25;     /* Headings */
--line-height-snug: 1.375;     /* Subheadings */
--line-height-normal: 1.5;     /* Body text */
--line-height-relaxed: 1.625;  /* Long-form content */
--line-height-loose: 2;        /* Poetry, code */
```

### Letter Spacing
```css
--letter-spacing-tighter: -0.05em;  /* Display text */
--letter-spacing-tight: -0.025em;   /* Headings */
--letter-spacing-normal: 0;         /* Body text */
--letter-spacing-wide: 0.025em;     /* Buttons, labels */
--letter-spacing-wider: 0.05em;     /* Overlines */
--letter-spacing-widest: 0.1em;     /* All caps headings */
```

### Typography Components

#### Heading with Overline
```html
<div class="heading-group">
  <span class="overline">PRODUCTS</span>
  <h2>Wireless Accessories</h2>
  <p class="lead">Browse our complete range of wireless products</p>
</div>

<style>
.overline {
  font-size: var(--text-overline);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-widest);
  text-transform: uppercase;
  color: var(--color-primary-600);
  display: block;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: var(--text-h2);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: 0.75rem;
}

.lead {
  font-size: var(--text-body-lg);
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}
</style>
```

---

## 📐 Spacing System

### Base Unit: 4px
All spacing values are multiples of 4px (0.25rem) for consistent rhythm.

```css
/* Spacing Scale */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-7: 1.75rem;   /* 28px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-14: 3.5rem;   /* 56px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
--space-40: 10rem;    /* 160px */
--space-48: 12rem;    /* 192px */
--space-64: 16rem;    /* 256px */
```

### Spacing Usage Guidelines

#### Component Internal Spacing
```
Button: padding-x: space-4 (16px), padding-y: space-2 (8px)
Input: padding: space-3 (12px)
Card: padding: space-6 (24px)
Modal: padding: space-8 (32px)
```

#### Layout Spacing
```
Section Margins: space-16 (64px) to space-24 (96px)
Component Gaps: space-4 (16px) to space-6 (24px)
List Items: space-3 (12px) to space-4 (16px)
Grid Gaps: space-4 (16px) to space-6 (24px)
```

#### Responsive Spacing
```css
/* Stack spacing (adjusts by breakpoint) */
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .stack {
    gap: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .stack {
    gap: var(--space-8);
  }
}
```

---

## 🎭 Elevation & Shadows

### Shadow Scale
```css
/* Subtle Shadows (Light Mode) */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
             0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
             0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored Shadows (for emphasis) */
--shadow-primary: 0 4px 12px rgba(59, 130, 246, 0.15);
--shadow-success: 0 4px 12px rgba(16, 185, 129, 0.15);
--shadow-error: 0 4px 12px rgba(239, 68, 68, 0.15);

/* Dark Mode Shadows */
--shadow-dark-sm: 0 2px 4px rgba(0, 0, 0, 0.4);
--shadow-dark-md: 0 4px 8px rgba(0, 0, 0, 0.5);
--shadow-dark-lg: 0 10px 20px rgba(0, 0, 0, 0.6);
```

### Elevation Levels
```
Level 0: Base page (no shadow)
Level 1: Cards, panels (shadow-sm)
Level 2: Buttons, inputs on hover (shadow-md)
Level 3: Dropdowns, tooltips (shadow-lg)
Level 4: Modals, popovers (shadow-xl)
Level 5: Full-screen overlays (shadow-2xl)
```

### Glassmorphism Effects
```css
/* Subtle Glass Effect */
.glass-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: var(--shadow-md);
}

.glass-medium {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* Dark Mode Glass */
.glass-dark {
  background: rgba(26, 31, 46, 0.8);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Use Cases */
- Navigation overlays
- Command palette (⌘K)
- Floating action buttons
- Notification toasts
- Hero sections (light glass over image)
```

---

## 🔲 Border Radius

```css
/* Border Radius Scale */
--radius-none: 0;
--radius-sm: 0.25rem;     /* 4px - Tags, badges */
--radius-md: 0.375rem;    /* 6px - Buttons, inputs */
--radius-lg: 0.5rem;      /* 8px - Cards, modals */
--radius-xl: 0.75rem;     /* 12px - Large cards */
--radius-2xl: 1rem;       /* 16px - Hero sections */
--radius-3xl: 1.5rem;     /* 24px - Decorative elements */
--radius-full: 9999px;    /* Circles, pills */
```

### Usage Examples
```css
/* Buttons */
button { border-radius: var(--radius-md); }

/* Cards */
.card { border-radius: var(--radius-lg); }

/* Avatars */
.avatar { border-radius: var(--radius-full); }

/* Grouped Buttons */
.button-group button:first-child {
  border-radius: var(--radius-md) 0 0 var(--radius-md);
}
.button-group button:last-child {
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}
```

---

## 🎬 Motion & Animation

### Animation Principles
1. **Purposeful**: Every animation serves a function
2. **Subtle**: Not distracting or overwhelming
3. **Fast**: Animations should feel instant (<300ms)
4. **Natural**: Use easing curves, not linear
5. **Consistent**: Same duration for similar actions

### Animation Duration
```css
--duration-instant: 75ms;     /* Tooltip show/hide */
--duration-fast: 150ms;       /* Hover effects */
--duration-base: 200ms;       /* Default transitions */
--duration-slow: 300ms;       /* Modals, drawers */
--duration-slower: 500ms;     /* Page transitions */
```

### Easing Curves
```css
/* Custom Bezier Curves */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);      /* Most UI transitions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);            /* Elements leaving */
--ease-out: cubic-bezier(0, 0, 0.2, 1);           /* Elements entering */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);      /* Transform, scale */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);  /* Playful */
```

### Micro-Animations

#### Button Hover
```css
.button {
  transition: all var(--duration-fast) var(--ease-smooth);
  transform: translateY(0);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

#### Input Focus
```css
.input {
  border: 2px solid var(--color-border-default);
  transition: border-color var(--duration-fast) var(--ease-smooth),
              box-shadow var(--duration-fast) var(--ease-smooth);
}

.input:focus {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}
```

#### Card Hover
```css
.card {
  transition: all var(--duration-base) var(--ease-smooth);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

### Page Transitions
```css
/* Fade + Slide Up */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-enter {
  animation: fadeSlideUp var(--duration-base) var(--ease-out);
}

/* Modal Entrance */
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal {
  animation: modalEnter var(--duration-slow) var(--ease-out);
}
```

### Loading Animations

#### Skeleton Loader
```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 25%,
    var(--color-gray-100) 50%,
    var(--color-gray-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}
```

#### Spinner
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  border: 3px solid var(--color-gray-200);
  border-top-color: var(--color-primary-500);
  border-radius: var(--radius-full);
  width: 24px;
  height: 24px;
  animation: spin 600ms linear infinite;
}
```

#### Progress Bar
```css
@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.progress-bar {
  height: 4px;
  background: var(--color-gray-200);
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  display: block;
  width: 25%;
  height: 100%;
  background: var(--color-primary-500);
  animation: progress 1.5s infinite;
}
```

---

## 🧩 Core UI Components

### 1. Buttons

#### Button Variants
```html
<!-- Primary Button -->
<button class="btn btn-primary">
  Place Order
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">
  Save Draft
</button>

<!-- Outline Button -->
<button class="btn btn-outline">
  Cancel
</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">
  Learn More
</button>

<!-- Danger Button -->
<button class="btn btn-danger">
  Delete Product
</button>
```

#### Button Styles
```css
.btn {
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-body);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: var(--gradient-primary-hover);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.btn-secondary {
  background: var(--color-gray-100);
  color: var(--color-gray-900);
  
  &:hover {
    background: var(--color-gray-200);
  }
}

.btn-outline {
  background: transparent;
  border-color: var(--color-gray-300);
  color: var(--color-gray-700);
  
  &:hover {
    background: var(--color-gray-50);
    border-color: var(--color-gray-400);
  }
}

.btn-ghost {
  background: transparent;
  color: var(--color-gray-700);
  
  &:hover {
    background: var(--color-gray-100);
  }
}

.btn-danger {
  background: var(--color-error-500);
  color: white;
  
  &:hover {
    background: var(--color-error-600);
  }
}
```

#### Button Sizes
```css
.btn-sm {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-body-sm);
}

.btn-md { /* default */ }

.btn-lg {
  padding: var(--space-4) var(--space-6);
  font-size: var(--text-body-lg);
}

.btn-xl {
  padding: var(--space-5) var(--space-8);
  font-size: var(--text-body-xl);
}
```

#### Button with Icon
```html
<button class="btn btn-primary">
  <svg class="icon"><!-- Plus icon --></svg>
  Add Product
</button>

<button class="btn btn-outline">
  Download
  <svg class="icon"><!-- Download icon --></svg>
</button>

<!-- Icon-only button -->
<button class="btn btn-ghost btn-icon">
  <svg class="icon"><!-- Settings icon --></svg>
</button>
```

---

### 2. Inputs & Forms

#### Text Input
```html
<div class="form-field">
  <label for="product-name" class="form-label">
    Product Name
    <span class="required">*</span>
  </label>
  <input
    type="text"
    id="product-name"
    class="form-input"
    placeholder="Enter product name"
  />
  <p class="form-hint">
    Keep it clear and descriptive
  </p>
</div>
```

```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-label {
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
}

.required {
  color: var(--color-error-500);
}

.form-input {
  padding: var(--space-3);
  font-size: var(--text-body);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-smooth);
  
  &::placeholder {
    color: var(--color-gray-400);
  }
  
  &:hover {
    border-color: var(--color-border-hover);
  }
  
  &:focus {
    outline: none;
    border-color: var(--color-primary-500);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    background: var(--color-gray-50);
    cursor: not-allowed;
  }
  
  /* Error state */
  &.error {
    border-color: var(--color-error-500);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  }
}

.form-hint {
  font-size: var(--text-caption);
  color: var(--color-gray-500);
}

.form-error {
  font-size: var(--text-caption);
  color: var(--color-error-600);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
```

#### Input with Icon
```html
<div class="input-group">
  <span class="input-icon">
    <svg><!-- Search icon --></svg>
  </span>
  <input type="text" class="form-input has-icon" placeholder="Search products..." />
</div>
```

```css
.input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-gray-400);
  pointer-events: none;
}

.form-input.has-icon {
  padding-left: var(--space-10);
}
```

#### Select Dropdown
```html
<select class="form-select">
  <option>Select category</option>
  <option>Electronics</option>
  <option>Apparel</option>
  <option>Home & Garden</option>
</select>
```

```css
.form-select {
  /* Same base styles as form-input */
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg>...</svg>');
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  padding-right: var(--space-10);
}
```

---

### 3. Data Tables

#### Advanced Table Structure
```html
<div class="table-container">
  <div class="table-toolbar">
    <div class="table-search">
      <input type="text" placeholder="Search..." />
    </div>
    <div class="table-actions">
      <button class="btn btn-outline">Filters</button>
      <button class="btn btn-outline">Export</button>
      <button class="btn btn-primary">Add Product</button>
    </div>
  </div>
  
  <table class="data-table">
    <thead>
      <tr>
        <th class="checkbox-cell">
          <input type="checkbox" />
        </th>
        <th class="sortable">
          Product
          <span class="sort-icon">↕</span>
        </th>
        <th class="sortable">SKU</th>
        <th class="sortable numeric">Stock</th>
        <th class="sortable numeric">Price</th>
        <th>Status</th>
        <th class="actions-cell"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="checkbox-cell">
          <input type="checkbox" />
        </td>
        <td>
          <div class="product-cell">
            <img src="..." alt="" class="product-image" />
            <div>
              <div class="product-name">Wireless Mouse</div>
              <div class="product-meta">Category: Electronics</div>
            </div>
          </div>
        </td>
        <td><code>WM-001</code></td>
        <td class="numeric">1,234</td>
        <td class="numeric">$8.50</td>
        <td><span class="badge badge-success">Active</span></td>
        <td class="actions-cell">
          <button class="btn btn-ghost btn-sm">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
  
  <div class="table-footer">
    <div class="table-info">
      Showing 1-25 of 1,234 products
    </div>
    <div class="pagination">
      <button class="btn btn-sm">← Prev</button>
      <button class="btn btn-sm">1</button>
      <button class="btn btn-sm btn-primary">2</button>
      <button class="btn btn-sm">3</button>
      <button class="btn btn-sm">Next →</button>
    </div>
  </div>
</div>
```

```css
.data-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  
  thead {
    background: var(--color-gray-50);
    border-bottom: 2px solid var(--color-border-default);
  }
  
  th {
    padding: var(--space-3) var(--space-4);
    text-align: left;
    font-size: var(--text-body-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--color-gray-700);
    white-space: nowrap;
    
    &.sortable {
      cursor: pointer;
      user-select: none;
      
      &:hover {
        background: var(--color-gray-100);
      }
    }
    
    &.numeric {
      text-align: right;
    }
  }
  
  tbody tr {
    border-bottom: 1px solid var(--color-border-default);
    transition: background var(--duration-fast);
    
    &:hover {
      background: var(--color-gray-50);
    }
  }
  
  td {
    padding: var(--space-4);
    font-size: var(--text-body);
    
    &.numeric {
      text-align: right;
      font-family: var(--font-family-mono);
    }
  }
  
  .checkbox-cell {
    width: 40px;
    text-align: center;
  }
  
  .actions-cell {
    width: 100px;
    text-align: right;
  }
}

.product-cell {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.product-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-default);
}

.product-name {
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
}

.product-meta {
  font-size: var(--text-caption);
  color: var(--color-gray-500);
}
```

---

### 4. Cards

#### Basic Card
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Sales Overview</h3>
    <button class="btn btn-ghost btn-sm">View All</button>
  </div>
  <div class="card-body">
    <!-- Content -->
  </div>
  <div class="card-footer">
    <p class="text-sm text-gray-500">Last updated: 5 minutes ago</p>
  </div>
</div>
```

```css
.card {
  background: white;
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all var(--duration-base) var(--ease-smooth);
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
}

.card-title {
  font-size: var(--text-h5);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.card-body {
  padding: var(--space-6);
}

.card-footer {
  padding: var(--space-4) var(--space-6);
  background: var(--color-gray-50);
  border-top: 1px solid var(--color-border-default);
}
```

#### KPI Card
```html
<div class="card kpi-card">
  <div class="kpi-header">
    <span class="kpi-label">Total Revenue</span>
    <span class="kpi-icon">💰</span>
  </div>
  <div class="kpi-value">$145,230</div>
  <div class="kpi-change positive">
    <svg class="icon">↗</svg>
    +23% vs last month
  </div>
  <div class="kpi-chart">
    <!-- Mini sparkline chart -->
  </div>
</div>
```

```css
.kpi-card {
  padding: var(--space-6);
}

.kpi-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3);
}

.kpi-label {
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-600);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.kpi-value {
  font-size: var(--text-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
  margin-bottom: var(--space-2);
}

.kpi-change {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-body-sm);
  font-weight: var(--font-weight-medium);
  
  &.positive {
    color: var(--color-success-600);
  }
  
  &.negative {
    color: var(--color-error-600);
  }
}
```

---

### 5. Badges & Tags

```html
<!-- Status Badges -->
<span class="badge badge-success">Active</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-error">Suspended</span>
<span class="badge badge-info">Draft</span>
<span class="badge badge-gray">Inactive</span>

<!-- With dot indicator -->
<span class="badge badge-success">
  <span class="badge-dot"></span>
  Active
</span>

<!-- Removable tags -->
<span class="tag">
  Electronics
  <button class="tag-remove">×</button>
</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-caption);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.badge-success {
  background: var(--color-success-50);
  color: var(--color-success-700);
}

.badge-warning {
  background: var(--color-warning-50);
  color: var(--color-warning-700);
}

.badge-error {
  background: var(--color-error-50);
  color: var(--color-error-700);
}

.badge-info {
  background: var(--color-info-50);
  color: var(--color-info-700);
}

.badge-gray {
  background: var(--color-gray-100);
  color: var(--color-gray-700);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: currentColor;
}
```

---

### 6. Modals & Drawers

#### Modal
```html
<div class="modal-overlay" role="dialog">
  <div class="modal">
    <div class="modal-header">
      <h2 class="modal-title">Confirm Deletion</h2>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to delete this product? This action cannot be undone.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline">Cancel</button>
      <button class="btn btn-danger">Delete Product</button>
    </div>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-4);
  
  /* Animation */
  animation: fadeIn var(--duration-base) var(--ease-out);
}

.modal {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-2xl);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  /* Animation */
  animation: modalEnter var(--duration-slow) var(--ease-out);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-border-default);
}

.modal-title {
  font-size: var(--text-h4);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-gray-400);
  cursor: pointer;
  padding: var(--space-1);
  line-height: 1;
  
  &:hover {
    color: var(--color-gray-600);
  }
}

.modal-body {
  padding: var(--space-6);
  overflow-y: auto;
}

.modal-footer {
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
  padding: var(--space-6);
  border-top: 1px solid var(--color-border-default);
}
```

#### Drawer (Slide-in Panel)
```css
.drawer {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  max-width: 90vw;
  background: white;
  box-shadow: var(--shadow-2xl);
  z-index: 1000;
  transform: translateX(100%);
  transition: transform var(--duration-slow) var(--ease-out);
  
  &.open {
    transform: translateX(0);
  }
}
```

---

### 7. Toast Notifications

```html
<div class="toast toast-success">
  <svg class="toast-icon">✓</svg>
  <div class="toast-content">
    <div class="toast-title">Success</div>
    <div class="toast-message">Product created successfully</div>
  </div>
  <button class="toast-close">×</button>
</div>
```

```css
.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4);
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border-left: 4px solid;
  min-width: 300px;
  max-width: 400px;
  
  /* Animation */
  animation: toastEnter var(--duration-base) var(--ease-out);
}

.toast-success {
  border-color: var(--color-success-500);
  
  .toast-icon {
    color: var(--color-success-600);
  }
}

.toast-error {
  border-color: var(--color-error-500);
  
  .toast-icon {
    color: var(--color-error-600);
  }
}

.toast-title {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-1);
}

.toast-message {
  font-size: var(--text-body-sm);
  color: var(--color-gray-600);
}

@keyframes toastEnter {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;    /* Phones landscape */
--breakpoint-md: 768px;    /* Tablets */
--breakpoint-lg: 1024px;   /* Desktops */
--breakpoint-xl: 1280px;   /* Large desktops */
--breakpoint-2xl: 1536px;  /* Extra large */
```

### Container Queries (Modern Approach)
```css
.card {
  container-type: inline-size;
}

/* Adjust layout based on card width, not viewport */
@container (min-width: 400px) {
  .card-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Mobile Optimizations
- Touch targets: minimum 44×44px
- Bottom navigation on mobile
- Drawer menus instead of dropdowns
- Stack columns on mobile
- Larger text on mobile (16px base)
- Sticky CTAs at bottom

---

## ♿ Accessibility

### Focus Management
```css
/* Custom focus styles */
*:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--color-primary-500);
  color: white;
  padding: var(--space-2) var(--space-4);
  
  &:focus {
    top: 0;
  }
}
```

### ARIA Labels
```html
<!-- Button with icon only -->
<button aria-label="Close modal">
  <svg aria-hidden="true">×</svg>
</button>

<!-- Loading state -->
<div aria-live="polite" aria-busy="true">
  Loading products...
</div>

<!-- Form validation -->
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

### Keyboard Navigation
- Tab through interactive elements
- Enter to activate buttons/links
- Space for checkboxes
- Arrow keys for radio groups
- Esc to close modals
- ⌘K for command palette

---

## 🌙 Dark Mode Implementation

### Toggle Mechanism
```javascript
// User preference persistence
const theme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);

// Toggle function
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
```

### CSS Variables Approach
```css
:root[data-theme='light'] {
  --color-background: var(--color-white);
  --color-text: var(--color-gray-900);
  /* ... */
}

:root[data-theme='dark'] {
  --color-background: var(--color-dark-bg);
  --color-text: var(--color-dark-text-primary);
  /* ... */
}

/* Usage */
body {
  background: var(--color-background);
  color: var(--color-text);
}
```

---

## 📐 Grid System

### 12-Column Grid
```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Span utilities */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
.col-span-3 { grid-column: span 3; }
.col-span-4 { grid-column: span 4; }
.col-span-6 { grid-column: span 6; }
.col-span-12 { grid-column: span 12; }

/* Responsive spans */
@media (min-width: 768px) {
  .md\:col-span-6 { grid-column: span 6; }
}
```

---

## 🎨 Conclusion

This design system provides a comprehensive foundation for building the WholesaleOS platform with:

- **Consistency**: Unified visual language
- **Scalability**: Reusable components and patterns
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized animations and interactions
- **Flexibility**: Light/dark modes, responsive design
- **Enterprise-Grade**: Professional, modern aesthetic

All components should be built following this system to ensure a cohesive, high-quality user experience across the entire platform.

---

*End of Enterprise UI/UX Design System*
