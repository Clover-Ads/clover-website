'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Clover Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-brand text-gray-900">Clover</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/pages/about" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link href="/pages/services" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/pages/contact" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link href="/pages/waitlist" className="bg-gradient-green text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:opacity-90">
              Join Waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-500 focus:outline-none focus:text-green-500"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="text-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/pages/about" className="text-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <Link href="/pages/services" className="text-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/pages/contact" className="text-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link href="/pages/waitlist" className="bg-gradient-green text-white block px-3 py-2 rounded-md text-base font-medium">
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 