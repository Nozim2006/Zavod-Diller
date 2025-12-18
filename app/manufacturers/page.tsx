'use client';

import { useState } from 'react';

interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  location: string;
  founded: string;
  rating: number;
  reviewCount: number;
  certifications: string[];
  productCount: number;
  minOrderValue: number;
  responseTime: string;
  verified: boolean;
  topProducts: string[];
  specialties: string[];
  description: string;
}

export default function ManufacturersPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const manufacturers: Manufacturer[] = [
    {
      id: 'MFR-001',
      name: 'TechCorp Industries',
      logo: '/api/placeholder/80/80',
      location: 'San Francisco, CA',
      founded: '2010',
      rating: 4.8,
      reviewCount: 1247,
      certifications: ['ISO 9001', 'RoHS', 'FCC'],
      productCount: 245,
      minOrderValue: 5000,
      responseTime: '< 2 hours',
      verified: true,
      topProducts: ['Industrial Electronics Kit', 'Smart Sensors', 'IoT Devices'],
      specialties: ['Electronics', 'IoT', 'Sensors'],
      description: 'Leading manufacturer of industrial electronics and IoT solutions with over 13 years of experience.',
    },
    {
      id: 'MFR-002',
      name: 'Premium Office Co.',
      logo: '/api/placeholder/80/80',
      location: 'Chicago, IL',
      founded: '2005',
      rating: 4.6,
      reviewCount: 892,
      certifications: ['ISO 14001', 'FSC Certified'],
      productCount: 156,
      minOrderValue: 2000,
      responseTime: '< 4 hours',
      verified: true,
      topProducts: ['Office Furniture Set', 'Conference Tables', 'Storage Solutions'],
      specialties: ['Furniture', 'Office Equipment'],
      description: 'Sustainable office furniture manufacturer specializing in modern, ergonomic workspace solutions.',
    },
    {
      id: 'MFR-003',
      name: 'Global Appliances Ltd.',
      logo: '/api/placeholder/80/80',
      location: 'Houston, TX',
      founded: '1998',
      rating: 4.7,
      reviewCount: 1563,
      certifications: ['Energy Star', 'UL Listed', 'CE Marking'],
      productCount: 324,
      minOrderValue: 10000,
      responseTime: '< 6 hours',
      verified: true,
      topProducts: ['Kitchen Appliances Bundle', 'Commercial Refrigerators', 'Food Processors'],
      specialties: ['Appliances', 'Kitchen Equipment', 'Commercial'],
      description: 'Established manufacturer of commercial and residential kitchen appliances with global distribution.',
    },
    {
      id: 'MFR-004',
      name: 'Industrial Solutions Inc.',
      logo: '/api/placeholder/80/80',
      location: 'Detroit, MI',
      founded: '2015',
      rating: 4.4,
      reviewCount: 634,
      certifications: ['OSHA Compliant', 'ISO 45001'],
      productCount: 89,
      minOrderValue: 3000,
      responseTime: '< 8 hours',
      verified: true,
      topProducts: ['Storage Solutions', 'Industrial Shelving', 'Warehouse Equipment'],
      specialties: ['Industrial', 'Storage', 'Warehouse'],
      description: 'Modern industrial storage and warehouse solutions provider focusing on efficiency and durability.',
    },
    {
      id: 'MFR-005',
      name: 'TechSystems Corp.',
      logo: '/api/placeholder/80/80',
      location: 'Seattle, WA',
      founded: '2012',
      rating: 4.9,
      reviewCount: 423,
      certifications: ['PCI DSS', 'SOC 2', 'ISO 27001'],
      productCount: 67,
      minOrderValue: 8000,
      responseTime: '< 1 hour',
      verified: true,
      topProducts: ['Point of Sale Equipment', 'Payment Terminals', 'Retail Systems'],
      specialties: ['Technology', 'POS Systems', 'Payment Processing'],
      description: 'Cutting-edge technology solutions for retail and payment processing industries.',
    },
  ];

  const specialties = ['all', 'Electronics', 'Furniture', 'Appliances', 'Industrial', 'Technology'];

  const getSpecialtyColor = (specialty: string) => {
    const colors: Record<string, string> = {
      'Electronics': 'bg-blue-100 text-blue-800',
      'Furniture': 'bg-green-100 text-green-800',
      'Appliances': 'bg-yellow-100 text-yellow-800',
      'Industrial': 'bg-gray-100 text-gray-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'IoT': 'bg-indigo-100 text-indigo-800',
      'Sensors': 'bg-cyan-100 text-cyan-800',
      'Office Equipment': 'bg-orange-100 text-orange-800',
      'Kitchen Equipment': 'bg-red-100 text-red-800',
      'Commercial': 'bg-pink-100 text-pink-800',
      'Storage': 'bg-yellow-100 text-yellow-800',
      'Warehouse': 'bg-brown-100 text-brown-800',
      'POS Systems': 'bg-purple-100 text-purple-800',
      'Payment Processing': 'bg-green-100 text-green-800',
    };
    return colors[specialty] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-heading-1 font-bold text-gray-900">Manufacturers</h1>
            <p className="mt-2 text-body text-gray-600">
              Discover verified manufacturers and suppliers
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-ghost">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export List
            </button>
            <button className="btn-primary">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Manufacturer
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
                placeholder="Search manufacturers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="input w-auto"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty === 'all' ? 'All Specialties' : specialty}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input w-auto"
            >
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
              <option value="products">Product Count</option>
              <option value="reviews">Review Count</option>
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

      {/* Manufacturers Grid/Table */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {manufacturers.map((manufacturer) => (
            <div key={manufacturer.id} className="card card-hover">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">{manufacturer.name}</h3>
                        {manufacturer.verified && (
                          <svg className="w-5 h-5 text-success-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{manufacturer.location}</p>
                      <p className="text-xs text-gray-500">Since {manufacturer.founded}</p>
                    </div>
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(manufacturer.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">{manufacturer.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({manufacturer.reviewCount} reviews)</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {manufacturer.specialties.slice(0, 3).map((specialty) => (
                      <span
                        key={specialty}
                        className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getSpecialtyColor(specialty)}`}
                      >
                        {specialty}
                      </span>
                    ))}
                    {manufacturer.specialties.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                        +{manufacturer.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Products</p>
                    <p className="text-sm font-semibold text-gray-900">{manufacturer.productCount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Min. Order</p>
                    <p className="text-sm font-semibold text-gray-900">${manufacturer.minOrderValue.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Response Time</p>
                    <p className="text-sm font-semibold text-gray-900">{manufacturer.responseTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Certifications</p>
                    <p className="text-sm font-semibold text-gray-900">{manufacturer.certifications.length}</p>
                  </div>
                </div>

                {/* Top Products */}
                <div className="mb-6">
                  <p className="text-xs text-gray-500 mb-2">Top Products</p>
                  <div className="space-y-1">
                    {manufacturer.topProducts.slice(0, 2).map((product) => (
                      <p key={product} className="text-xs text-gray-700 truncate">• {product}</p>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary text-sm py-2">
                    View Profile
                  </button>
                  <button className="btn-secondary text-sm py-2">
                    Contact
                  </button>
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
                  <th className="table-header-cell">Manufacturer</th>
                  <th className="table-header-cell">Specialties</th>
                  <th className="table-header-cell">Rating</th>
                  <th className="table-header-cell">Products</th>
                  <th className="table-header-cell">Min. Order</th>
                  <th className="table-header-cell">Response Time</th>
                  <th className="table-header-cell">Certifications</th>
                  <th className="table-header-cell">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {manufacturers.map((manufacturer) => (
                  <tr key={manufacturer.id} className="table-row">
                    <td className="table-cell">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <div className="font-medium text-gray-900">{manufacturer.name}</div>
                            {manufacturer.verified && (
                              <svg className="w-4 h-4 text-success-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{manufacturer.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="flex flex-wrap gap-1">
                        {manufacturer.specialties.slice(0, 2).map((specialty) => (
                          <span
                            key={specialty}
                            className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getSpecialtyColor(specialty)}`}
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="flex items-center">
                        <div className="flex items-center mr-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(manufacturer.rating) ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-900">{manufacturer.rating}</span>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className="text-gray-900">{manufacturer.productCount}</span>
                    </td>
                    <td className="table-cell">
                      <span className="text-gray-900">${manufacturer.minOrderValue.toLocaleString()}</span>
                    </td>
                    <td className="table-cell">
                      <span className="text-gray-900">{manufacturer.responseTime}</span>
                    </td>
                    <td className="table-cell">
                      <span className="text-gray-900">{manufacturer.certifications.length}</span>
                    </td>
                    <td className="table-cell">
                      <div className="flex space-x-2">
                        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                          View
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">
                          Contact
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
          Showing 1-5 of 1,247 manufacturers
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