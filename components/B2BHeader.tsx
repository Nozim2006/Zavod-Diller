'use client';

import { useState } from 'react';

export default function B2BHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications] = useState([
    { id: 1, title: 'New order from TechStore Inc.', time: '2 min ago', unread: true },
    { id: 2, title: 'Payment received', time: '1 hour ago', unread: true },
    { id: 3, title: 'Order #12345 shipped', time: '3 hours ago', unread: false },
  ]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WB</span>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-900">
                WholesaleHub Pro
              </h1>
            </div>
          </div>

          {/* Global Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products, manufacturers, orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-button leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5-5-5h5v-5a7 7 0 1114 0z"
                  />
                </svg>
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error-400 ring-2 ring-white"></span>
                )}
              </button>
            </div>

            {/* Language Selector */}
            <select className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>

            {/* User Profile */}
            <div className="relative flex items-center">
              <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-700">JD</span>
              </div>
              <div className="ml-3 hidden md:block">
                <div className="text-sm font-medium text-gray-700">John Doe</div>
                <div className="text-xs text-gray-500">Pro Retailer</div>
              </div>
              <svg
                className="ml-2 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}