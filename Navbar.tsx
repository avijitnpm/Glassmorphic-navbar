'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <a 
              href="/" 
              className="flex items-center transition-opacity duration-200 hover:opacity-70"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white font-semibold text-lg">
                YC
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:block">
                YourCompany
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <a
              href="/sign-in"
              className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Log in
            </a>
            <a
              href="/sign-up"
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 transition-all duration-200 hover:bg-gray-800 rounded-md shadow-sm"
            >
              Sign up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
              <a
                href="/sign-in"
                className="block px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 rounded-md"
              >
                Log in
              </a>
              <a
                href="/sign-up"
                className="block px-3 py-2 text-base font-medium text-white bg-gray-900 transition-colors duration-200 hover:bg-gray-800 rounded-md text-center"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}