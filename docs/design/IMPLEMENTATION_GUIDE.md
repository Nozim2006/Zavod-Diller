# B2B Wholesale Platform - Design Implementation Guide
## How to Build & Implement This Visual Design

---

## Overview

This guide explains how to use all the design documentation to build the B2B wholesale platform website. It serves as a bridge between design specifications and actual implementation.

---

## Design System Files Reference

### 1. **DESIGN_SYSTEM.md** 
**Purpose:** Core visual language and design tokens

**Key Contents:**
- Color system (light & dark modes)
- Typography system (font sizes, weights, line heights)
- Spacing scale (4px base unit grid)
- Component library overview
- Design tokens (CSS custom properties)

**When to Use:**
- Establishing consistent colors throughout the site
- Applying typography rules to any page
- Ensuring spacing consistency
- Creating CSS variables for styling
- Setting up Tailwind or other utility frameworks

**Implementation Example:**
```css
/* Use design tokens for consistency */
.button-primary {
  background-color: var(--color-primary-700);
  font-size: var(--text-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-base);
}
```

---

### 2. **PAGE_LAYOUTS.md**
**Purpose:** Visual structure and layout for every page

**Key Contents:**
- Global layout structure (header, sidebar, main)
- Detailed layout for each page/section
- Responsive behavior (mobile, tablet, desktop)
- Micro-interactions and animations
- Visual hierarchy and spacing

**When to Use:**
- Planning page structure before coding
- Understanding how components should be arranged
- Learning responsive breakpoints
- Implementing header, sidebar, footer
- Creating page-specific layouts

**Implementation Example:**
```jsx
// Following PAGE_LAYOUTS.md structure
function DashboardPage() {
  return (
    <Layout>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          {/* KPI Cards Row */}
          <KPICardRow cards={kpiData} />
          
          {/* 3-Column Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Sidebar: Filters */}
            <aside className="col-span-3">
              <FilterPanel />
            </aside>
            
            {/* Center: Charts */}
            <section className="col-span-6">
              <ChartWidgets />
            </section>
            
            {/* Right: Summary */}
            <aside className="col-span-3">
              <ActivityFeed />
            </aside>
          </div>
        </main>
      </div>
    </Layout>
  );
}
```

---

### 3. **COMPONENT_LIBRARY.md**
**Purpose:** Specifications for individual UI components

**Key Contents:**
- 50+ component specifications
- All interactive states (default, hover, active, disabled, error, loading)
- Sizing options
- Usage examples
- Accessibility guidelines

**When to Use:**
- Building individual components (buttons, inputs, cards)
- Understanding component behavior
- Implementing component states
- Ensuring accessibility
- Learning component props structure

**Implementation Example:**
```jsx
// Following COMPONENT_LIBRARY.md specifications
import { PrimaryButton } from '@/components';

function ProductCard() {
  return (
    <Card>
      <img src={image} alt="Product" />
      <h3>Product Name</h3>
      <p>Manufacturer</p>
      <div className="flex gap-3 items-end">
        <span className="text-price">$50 - $100</span>
        <span className="text-sm">MOQ: 100</span>
      </div>
      <Rating rating={4.8} count={120} />
      <PrimaryButton 
        size="md" 
        onClick={handleViewDetails}
      >
        View Details
      </PrimaryButton>
    </Card>
  );
}
```

---

### 4. **VISUAL_SITEMAP.md**
**Purpose:** Site structure, navigation, and user flows

**Key Contents:**
- Information architecture
- Page hierarchy and relationships
- User journeys from entry to goal
- Navigation patterns (sidebar, breadcrumbs, tabs)
- Mobile navigation differences

**When to Use:**
- Planning routing structure
- Implementing navigation components
- Creating breadcrumb trails
- Planning multi-step flows
- Understanding page relationships

**Implementation Example:**
```jsx
// Following VISUAL_SITEMAP.md navigation patterns
function Navigation() {
  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: <DashboardIcon /> },
    { label: 'Products', href: '/products', icon: <ProductsIcon /> },
    { label: 'Orders', href: '/orders', icon: <OrdersIcon /> },
    { label: 'Manufacturers', href: '/manufacturers', icon: <MfgIcon /> },
    { label: 'Payments', href: '/payments', icon: <PaymentsIcon /> },
    // ... more items
  ];
  
  return (
    <nav className="sidebar">
      {navItems.map(item => (
        <NavLink key={item.href} to={item.href}>
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
```

---

## Implementation Workflow

### Phase 1: Foundation Setup

**1.1 Create Design Tokens**
```typescript
// Define CSS custom properties or Tailwind config
// Source: DESIGN_SYSTEM.md - Design Tokens section

// Option 1: CSS Variables (globals.css)
:root {
  --color-primary-700: #0066CC;
  --color-primary-800: #0052A3;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --radius-md: 6px;
  /* ... more tokens ... */
}

// Option 2: Tailwind Config (tailwind.config.ts)
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#0066CC',
          800: '#0052A3',
          // ...
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        // ...
      }
    }
  }
}
```

**1.2 Setup Typography**
```css
/* Define font families and text styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: var(--font-primary, 'Inter', sans-serif);
  font-size: var(--text-base, 16px);
  line-height: var(--line-height-normal, 1.5);
  color: var(--text-primary);
}

h1 {
  font-size: var(--text-4xl, 42px);
  font-weight: var(--font-weight-bold, 700);
  line-height: var(--line-height-tight, 1.2);
}

/* Define all heading levels, body text, etc. */
```

**1.3 Setup Color Modes**
```jsx
// Implement light/dark mode support
// Source: DESIGN_SYSTEM.md - Light & Dark Mode section

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);
  
  return (
    <div data-theme={theme}>
      {children}
    </div>
  );
}

// CSS for theme switching
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0F1117;
    --text-primary: #FAFBFC;
    /* ... more dark mode tokens ... */
  }
}

[data-theme="dark"] {
  --bg-primary: #0F1117;
  --text-primary: #FAFBFC;
}
```

### Phase 2: Global Layout Components

**2.1 Build Header Component**
```jsx
// Source: PAGE_LAYOUTS.md - Header/Top Bar
import { Header } from '@/components';

export function AppHeader() {
  return (
    <Header className="h-16 bg-white border-b border-gray-300">
      {/* Logo */}
      <Logo />
      
      {/* Search Bar */}
      <SearchInput placeholder="Search..." />
      
      {/* Right Actions */}
      <NotificationBell />
      <LanguageSelector />
      <UserProfileMenu />
    </Header>
  );
}
```

**2.2 Build Sidebar Navigation**
```jsx
// Source: PAGE_LAYOUTS.md - Sidebar Navigation

import { Sidebar } from '@/components';

export function AppSidebar() {
  return (
    <Sidebar className="w-60 fixed left-0 top-16 h-[calc(100vh-64px)]">
      <nav className="space-y-1 p-4">
        <NavItem href="/dashboard" icon={<DashboardIcon />}>
          Dashboard
        </NavItem>
        <NavItem href="/products" icon={<ProductsIcon />}>
          Products
        </NavItem>
        {/* ... more items ... */}
      </nav>
    </Sidebar>
  );
}
```

**2.3 Build Layout Wrapper**
```jsx
// Combines header and sidebar
export function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <main className="flex-1 ml-60 p-8 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### Phase 3: Core Components

**3.1 Build Button Components**
```jsx
// Source: COMPONENT_LIBRARY.md - Button Components

export function PrimaryButton({ 
  children, 
  size = 'md', 
  disabled = false,
  ...props 
}) {
  const sizeClasses = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-sm',
    lg: 'h-11 px-5 text-base'
  };
  
  return (
    <button
      className={`
        ${sizeClasses[size]}
        bg-primary-700 text-white font-semibold
        rounded-md
        hover:bg-primary-800 hover:shadow-lg
        active:bg-primary-900
        disabled:bg-gray-300 disabled:text-gray-500
        transition-all duration-200
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, ...props }) {
  return (
    <button
      className={`
        h-9 px-4 text-sm font-semibold
        bg-gray-100 text-gray-900
        border border-gray-300
        rounded-md
        hover:bg-gray-200 hover:border-gray-400
        active:bg-gray-300
        transition-all duration-200
      `}
      {...props}
    >
      {children}
    </button>
  );
}
```

**3.2 Build Input Components**
```jsx
// Source: COMPONENT_LIBRARY.md - Input Components

export function TextInput({ 
  label, 
  error, 
  helperText,
  icon,
  ...props 
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-semibold text-gray-900">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}
        
        <input
          className={`
            w-full h-10 px-3 py-2 text-sm
            border rounded-md
            focus:outline-none focus:ring-2
            ${error 
              ? 'border-error-500 focus:ring-error-100'
              : 'border-gray-300 focus:border-primary-700 focus:ring-primary-100'
            }
          `}
          {...props}
        />
      </div>
      
      {error && (
        <span className="text-xs text-error-600">{error}</span>
      )}
      {helperText && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
    </div>
  );
}
```

**3.3 Build Card Component**
```jsx
// Source: COMPONENT_LIBRARY.md - Card & Surfaces

export function Card({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-white border border-gray-300 shadow-sm hover:shadow-md',
    elevated: 'bg-white shadow-md',
    flat: 'bg-gray-50 border-0',
    outline: 'bg-white border-2 border-primary-500'
  };
  
  return (
    <div className={`rounded-lg p-4 ${variants[variant]}`}>
      {children}
    </div>
  );
}
```

### Phase 4: Page-Specific Implementations

**4.1 Implement Homepage**
```jsx
// Source: PAGE_LAYOUTS.md - Homepage

export function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <TrustSection />
      <CategoryGrid />
      <HowItWorksSection />
      <FeaturedManufacturers />
      <CTASection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-blue-50 py-20 lg:py-32">
      <Container size="lg" className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
          WholesaleOS - B2B Wholesale Dealer Platform
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Connect manufacturers with retailers at scale. Streamline orders, reduce costs, grow faster.
        </p>
        <div className="flex gap-4 justify-center">
          <PrimaryButton size="lg">Start Free Trial</PrimaryButton>
          <SecondaryButton size="lg">View Demo</SecondaryButton>
        </div>
      </Container>
    </section>
  );
}
```

**4.2 Implement Dashboard**
```jsx
// Source: PAGE_LAYOUTS.md - Dashboard

export function DashboardPage() {
  return (
    <AppLayout>
      <Container size="2xl">
        {/* Header */}
        <div className="mb-8">
          <Breadcrumb />
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            label="Total Revenue"
            value="$124,500"
            change={{ value: 12, direction: 'up' }}
          />
          {/* ... more KPI cards ... */}
        </div>
        
        {/* 3-Column Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Filters */}
          <aside className="col-span-3">
            <FilterCard />
          </aside>
          
          {/* Charts */}
          <section className="col-span-6">
            <RevenueChart />
            <OrderVolumeChart />
          </section>
          
          {/* Summary */}
          <aside className="col-span-3">
            <ActivityFeed />
            <TopProducts />
          </aside>
        </div>
      </Container>
    </AppLayout>
  );
}
```

**4.3 Implement Product Listing Page**
```jsx
// Source: PAGE_LAYOUTS.md - Product Pages

export function ProductListingPage() {
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  
  return (
    <AppLayout>
      <Container size="2xl">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <Tabs value={viewMode} onChange={setViewMode}>
            <Tab value="grid">Grid</Tab>
            <Tab value="list">List</Tab>
          </Tabs>
        </div>
        
        {/* Filter & Sort Bar */}
        <div className="mb-6 flex gap-4 justify-between">
          <div className="flex gap-4">
            <Button onClick={openFilters} variant="secondary">
              Filters
            </Button>
            <Select 
              value={sortBy} 
              onChange={setSortBy}
              options={sortOptions}
            />
          </div>
          <SearchInput placeholder="Search products..." />
        </div>
        
        {/* Main Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Filters */}
          <aside className="col-span-3 hidden lg:block">
            <FilterPanel 
              onFilterChange={setFilters}
              filters={filters}
            />
          </aside>
          
          {/* Main - Product Grid/List */}
          <div className="col-span-12 lg:col-span-9">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <ProductTable products={products} />
            )}
            
            {/* Pagination */}
            <Pagination 
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </div>
      </Container>
    </AppLayout>
  );
}
```

### Phase 5: Responsive Implementation

**5.1 Mobile Breakpoints**
```jsx
// Follow DESIGN_SYSTEM.md - Responsive Behavior

// Tailwind breakpoints
export const breakpoints = {
  mobile: '320px',    // 320px - 767px
  tablet: '768px',    // 768px - 1023px
  desktop: '1024px',  // 1024px - 1439px
  wide: '1440px'      // 1440px+
};

// Use in components
<div className="
  grid grid-cols-1          // mobile
  md:grid-cols-2            // tablet
  lg:grid-cols-3            // desktop
  gap-4 md:gap-6 lg:gap-8
">
  {/* Content */}
</div>
```

**5.2 Responsive Navigation**
```jsx
// Source: PAGE_LAYOUTS.md - Responsive Behavior

export function ResponsiveLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div>
      {/* Header always visible */}
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        {/* Sidebar: Hidden on mobile, visible on desktop */}
        <aside className="hidden lg:block w-60 fixed">
          <Sidebar />
        </aside>
        
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed lg:hidden w-60 h-screen bg-white shadow-lg">
              <Sidebar />
            </aside>
          </>
        )}
        
        {/* Main content */}
        <main className="flex-1 lg:ml-60">
          {/* Content */}
        </main>
      </div>
    </div>
  );
}
```

### Phase 6: Interactive States & Animations

**6.1 Implement Hover States**
```jsx
// Source: DESIGN_SYSTEM.md - Micro-interactions

export function InteractiveCard() {
  return (
    <div className="
      bg-white border border-gray-300 rounded-lg p-4
      hover:shadow-lg hover:-translate-y-0.5
      transition-all duration-200 ease-in-out
      cursor-pointer
    ">
      {/* Card content */}
    </div>
  );
}
```

**6.2 Implement Loading States**
```jsx
// Source: COMPONENT_LIBRARY.md - Loading States

export function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function Spinner() {
  return (
    <div className="animate-spin">
      <svg 
        className="w-6 h-6 text-primary-700"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" cy="12" r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8v0a8 8 0 100 16v0a8 8 0 01-8-8z"
        />
      </svg>
    </div>
  );
}
```

**6.3 Implement Form Validation**
```jsx
// Source: COMPONENT_LIBRARY.md - Form Components

export function Form() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
    
    try {
      // Validate and submit
    } catch (error) {
      setErrors(error.validationErrors);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <TextInput
        label="Product Name"
        error={errors.name}
        required
      />
      
      <TextInput
        label="Description"
        error={errors.description}
        helperText="Describe your product clearly"
      />
      
      <div className="flex gap-4">
        <SecondaryButton type="button">Cancel</SecondaryButton>
        <PrimaryButton type="submit" disabled={loading}>
          {loading ? <Spinner /> : 'Submit'}
        </PrimaryButton>
      </div>
    </form>
  );
}
```

### Phase 7: Accessibility Implementation

**7.1 Semantic HTML**
```jsx
// Use semantic elements
export function AccessiblePage() {
  return (
    <div>
      <header>Header content</header>
      <nav>Navigation</nav>
      <main>Main content</main>
      <footer>Footer</footer>
    </div>
  );
}
```

**7.2 ARIA Labels**
```jsx
// Add accessibility labels
export function AccessibleButton() {
  return (
    <button 
      aria-label="Close menu"
      aria-pressed={isOpen}
      className="..."
    >
      ✕
    </button>
  );
}

export function AccessibleForm() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input 
        id="email"
        type="email"
        aria-required="true"
        aria-describedby="email-help"
      />
      <span id="email-help">Enter a valid email</span>
    </form>
  );
}
```

**7.3 Keyboard Navigation**
```jsx
// Ensure keyboard navigation works
export function AccessibleMenu() {
  const [focusIndex, setFocusIndex] = useState(0);
  
  const handleKeyDown = (e) => {
    switch(e.key) {
      case 'ArrowDown':
        setFocusIndex((i) => (i + 1) % items.length);
        break;
      case 'ArrowUp':
        setFocusIndex((i) => (i - 1 + items.length) % items.length);
        break;
      case 'Enter':
        items[focusIndex].onClick();
        break;
    }
  };
  
  return (
    <menu onKeyDown={handleKeyDown}>
      {/* Menu items */}
    </menu>
  );
}
```

---

## Testing the Design Implementation

### Visual Testing Checklist

- [ ] Colors match DESIGN_SYSTEM.md
- [ ] Typography follows size/weight specifications
- [ ] Spacing uses 4px grid consistently
- [ ] Buttons have all specified states
- [ ] Form inputs show error states
- [ ] Cards have appropriate shadows and borders
- [ ] Tables are properly formatted with sticky headers
- [ ] Modals and overlays display correctly

### Responsive Testing Checklist

- [ ] Desktop layout (1440px+) displays correctly
- [ ] Tablet layout (768px) shows 2-column designs
- [ ] Mobile layout (320px) stacks vertically
- [ ] Navigation works on all sizes
- [ ] Touch targets are minimum 44px × 44px
- [ ] Text is readable at all sizes
- [ ] Images scale proportionally

### Interaction Testing Checklist

- [ ] Hover states appear on desktop
- [ ] Active states display correctly
- [ ] Disabled states prevent interaction
- [ ] Loading states show spinners/skeleton
- [ ] Error messages display properly
- [ ] Success messages show briefly
- [ ] Forms validate input
- [ ] Modals close correctly

### Accessibility Testing Checklist

- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Text is readable (not too small)
- [ ] Keyboard navigation works throughout
- [ ] Screen reader describes content properly
- [ ] Focus indicators are visible
- [ ] Form labels are associated with inputs
- [ ] Error messages are announced
- [ ] No auto-playing media

---

## Common Implementation Patterns

### Pattern 1: Page with Sidebar and Main Content

```jsx
export function StandardPage({ title, children }) {
  return (
    <AppLayout>
      <Container size="2xl">
        <PageHeader title={title} />
        
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-3">
            <Sidebar />
          </aside>
          
          <main className="col-span-9">
            {children}
          </main>
        </div>
      </Container>
    </AppLayout>
  );
}
```

### Pattern 2: List Page with Filters

```jsx
export function ListPage({ items, filters, onFilterChange }) {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  
  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex gap-4 justify-between">
        <FilterButton />
        <SortButton value={sortBy} onChange={setSortBy} />
        <SearchInput />
      </div>
      
      {/* Content */}
      <ItemGrid items={filteredItems} />
      
      {/* Pagination */}
      <Pagination page={page} onChange={setPage} />
    </div>
  );
}
```

### Pattern 3: Detail Page with Tabs

```jsx
export function DetailPage({ itemId }) {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader title={item.name} />
      
      {/* Tabs */}
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tab value="overview">Overview</Tab>
        <Tab value="details">Details</Tab>
        <Tab value="history">History</Tab>
      </Tabs>
      
      {/* Tab Content */}
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'details' && <DetailsTab />}
      {activeTab === 'history' && <HistoryTab />}
    </div>
  );
}
```

---

## Performance Optimization

### Image Optimization
```jsx
// Use responsive images
<img
  src="image.webp"
  srcSet="image-small.webp 480w, image-large.webp 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 1200px) 80vw, 1200px"
  alt="Description"
  loading="lazy"
/>
```

### Code Splitting
```jsx
// Lazy load heavy components
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

export function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### CSS Optimization
```jsx
// Use CSS custom properties for theme switching
// Avoid inline styles
// Minimize animations on mobile
// Use CSS Grid/Flexbox instead of floats
```

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers (iOS Safari, Chrome Mobile): Latest version

---

## Conclusion

This design system and implementation guide provides everything needed to build a professional, modern B2B wholesale platform. Use the guides in order:

1. **DESIGN_SYSTEM.md** - Establish visual foundation
2. **PAGE_LAYOUTS.md** - Plan page structures
3. **COMPONENT_LIBRARY.md** - Build components
4. **VISUAL_SITEMAP.md** - Structure navigation
5. **IMPLEMENTATION_GUIDE.md** - Execute implementation

Follow the specifications, test thoroughly, and maintain consistency across the platform. The result will be a cohesive, professional B2B wholesale platform that users trust and enjoy using.
