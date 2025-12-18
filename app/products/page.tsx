'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  price: number;
  moq: number;
  stock: number;
  rating: number;
  image: string;
  status: 'available' | 'low_stock' | 'out_of_stock';
}

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products: Product[] = [
    {
      id: 'PROD-001',
      name: 'Industrial Electronics Kit',
      manufacturer: 'TechCorp Industries',
      category: 'Electronics',
      price: 245.50,
      moq: 10,
      stock: 250,
      rating: 4.8,
      image: '/api/placeholder/200/200',
      status: 'available',
    },
    {
      id: 'PROD-002',
      name: 'Office Furniture Set',
      manufacturer: 'Premium Office Co.',
      category: 'Furniture',
      price: 187.25,
      moq: 5,
      stock: 180,
      rating: 4.6,
      image: '/api/placeholder/200/200',
      status: 'available',
    },
    {
      id: 'PROD-003',
      name: 'Kitchen Appliances Bundle',
      manufacturer: 'Global Appliances Ltd.',
      category: 'Appliances',
      price: 321.75,
      moq: 3,
      stock: 95,
      rating: 4.7,
      image: '/api/placeholder/200/200',
      status: 'low_stock',
    },
    {
      id: 'PROD-004',
      name: 'Storage Solutions',
      manufacturer: 'Industrial Solutions Inc.',
      category: 'Storage',
      price: 123.00,
      moq: 20,
      stock: 0,
      rating: 4.4,
      image: '/api/placeholder/200/200',
      status: 'out_of_stock',
    },
    {
      id: 'PROD-005',
      name: 'Point of Sale Equipment',
      manufacturer: 'TechSystems Corp.',
      category: 'Technology',
      price: 456.80,
      moq: 2,
      stock: 67,
      rating: 4.9,
      image: '/api/placeholder/200/200',
      status: 'available',
    },
  ];

  const categories = ['all', 'Electronics', 'Furniture', 'Appliances', 'Storage', 'Technology'];

  const getStockStatusBadge = (status: Product['status']) => {
    switch (status) {
      case 'available':
        return <span className="badge-success">In Stock</span>;
      case 'low_stock':
        return <span className="badge-warning">Low Stock</span>;
      case 'out_of_stock':
        return <span className="badge-error">Out of Stock</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-heading-1 font-bold text-gray-900">Products</h1>
            <p className="mt-2 text-body text-gray-600">
              Manage your product catalog and inventory
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-ghost">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Import
            </button>
            <button className="btn-primary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="card card-hover p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input w-auto"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input w-auto"
            >
              <option value="name">Sort by Name</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="stock">Stock Level</option>
            </select>

            {/* View Toggle */}
            <div className="flex border border-gray-300 rounded-button">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary-50 text-primary-600' : 'text-gray-400'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 ${viewMode === 'table' ? 'bg-primary-50 text-primary-600' : 'text-gray-400'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/Table */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card card-hover">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-card flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                  {getStockStatusBadge(product.status)}
                </div>
                <p className="text-xs text-gray-600 mb-2">{product.manufacturer}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>MOQ:</span>
                    <span>{product.moq} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stock:</span>
                    <span>{product.stock} units</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card card-hover p-6">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th className="table-header-cell">Product</th>
                  <th className="table-header-cell">Category</th>
                  <th className="table-header-cell">Price</th>
                  <th className="table-header-cell">MOQ</th>
                  <th className="table-header-cell">Stock</th>
                  <th className="table-header-cell">Rating</th>
                  <th className="table-header-cell">Status</th>
                  <th className="table-header-cell">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {products.map((product) => (
                  <tr key={product.id} className="table-row">
                    <td className="table-cell">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.manufacturer}</div>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="table-cell">
                      <span className="font-semibold text-gray-900">${product.price}</span>
                    </td>
                    <td className="table-cell">
                      <span className="text-gray-900">{product.moq} units</span>
                    </td>
                    <td className="table-cell">
                      <span className="text-gray-900">{product.stock} units</span>
                    </td>
                    <td className="table-cell">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-900">{product.rating}</span>
                      </div>
                    </td>
                    <td className="table-cell">
                      {getStockStatusBadge(product.status)}
                    </td>
                    <td className="table-cell">
                      <div className="flex space-x-2">
                        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                          Edit
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing 1-5 of 2,347 products
        </div>
        <div className="flex space-x-2">
          <button className="btn-ghost text-sm px-3 py-2">
            Previous
          </button>
          <button className="btn-primary text-sm px-3 py-2">
            1
          </button>
          <button className="btn-ghost text-sm px-3 py-2">
            2
          </button>
          <button className="btn-ghost text-sm px-3 py-2">
            3
          </button>
          <button className="btn-ghost text-sm px-3 py-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}