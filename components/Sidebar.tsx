'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationItem {
  title: string;
  href?: string;
  items?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Project Summary",
    href: "/docs/project-summary",
  },
  {
    title: "NextGen Enterprise Summary",
    href: "/docs/nextgen-enterprise-summary",
  },
  {
    title: "Documentation",
    items: [
      {
        title: "Getting Started",
        href: "/docs/getting-started",
      },
      {
        title: "Sitemap",
        href: "/docs/sitemap",
      },
      {
        title: "Enterprise Product Spec",
        href: "/docs/enterprise-product-spec",
      },
      {
        title: "Enterprise Roadmap",
        href: "/docs/enterprise-roadmap",
      },
      {
        title: "Architecture",
        items: [
          {
            title: "System Architecture",
            href: "/docs/architecture/system-architecture",
          },
          {
            title: "Scalability Roadmap",
            href: "/docs/architecture/scalability-roadmap",
          },
        ],
      },
      {
        title: "Database Schema",
        href: "/docs/database/schema",
      },
      {
        title: "API Specifications",
        href: "/docs/api/specifications",
      },
      {
        title: "Feature Specifications",
        href: "/docs/features/specifications",
      },
      {
        title: "User Flows",
        items: [
          {
            title: "User Journeys",
            href: "/docs/user-flows/user-journeys",
          },
          {
            title: "Enterprise UX Flows",
            href: "/docs/user-flows/enterprise-ux-flows",
          },
        ],
      },
      {
        title: "UI/UX",
        items: [
          {
            title: "Design System",
            href: "/docs/ui-ux/design-system",
          },
          {
            title: "Enterprise UI System",
            href: "/docs/ui-ux/enterprise-ui-system",
          },
        ],
      },
      {
        title: "Security Specifications",
        href: "/docs/security/specifications",
      },
      {
        title: "Business Model",
        href: "/docs/monetization/business-model",
      },
      {
        title: "Deployment Guide",
        href: "/docs/deployment/guide",
      },
    ],
  },
];

function NavItem({ item, level = 0 }: { item: NavigationItem; level?: number }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(level === 0);

  const isActive = pathname === item.href;
  const hasChildren = item.items && item.items.length > 0;

  return (
    <div>
      <div className="flex items-center">
        {item.href ? (
          <Link
            href={item.href}
            className={`flex-1 px-2 py-1 text-sm rounded-md transition-colors ${
              isActive
                ? "bg-blue-100 text-blue-900 font-medium"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
            style={{ paddingLeft: `${8 + level * 16}px` }}
          >
            {item.title}
          </Link>
        ) : (
          <span
            className={`flex-1 px-2 py-1 text-sm rounded-md transition-colors ${
              isActive
                ? "bg-blue-100 text-blue-900 font-medium"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
            style={{ paddingLeft: `${8 + level * 16}px` }}
          >
            {item.title}
          </span>
        )}
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.items!.map((child: NavigationItem, idx: number) => (
            // use a stable fallback key when href is missing
            <NavItem
              key={child.href ?? `${item.title.replace(/\s+/g, "-").toLowerCase()}-${level}-${idx}`}
              item={child}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-16 overflow-y-auto">
      <nav className="p-4 space-y-1">
        {navigationItems.map((item) => (
          <NavItem key={item.href || item.title} item={item} />
        ))}
      </nav>
    </aside>
  );
}
