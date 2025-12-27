/**
 * Navbar Component - Mulyam Jewels
 *
 * Clean, minimal navigation inspired by Uniqlo.
 * Features:
 * - Logo on left
 * - Navigation links center
 * - CTA (Instagram) on right
 * - Mobile responsive with slide-out drawer
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Pets', href: '/collections/pets' },
  { label: 'About', href: '/about' },
  { label: 'Size Guide', href: '/size-guide' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-light tracking-[0.3em] text-neutral-800 hover:text-brand transition-colors"
              onClick={closeMenu}
            >
              MULYAM
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="https://instagram.com/Mulyam_jewels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Shop on Instagram
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-neutral-800 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-neutral-800 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-neutral-800 transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>

          </div>
        </nav>
      </header>

      {/* ==================== MOBILE MENU (Outside header!) ==================== */}
      
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 bg-neutral-50 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 px-4 text-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Instagram CTA */}
          <a
            href="https://instagram.com/Mulyam_jewels"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block w-full py-4 bg-neutral-900 text-white text-center text-sm font-medium tracking-wide rounded-full hover:bg-neutral-800 transition-colors"
          >
            Shop on Instagram
          </a>

          {/* Branding */}
          <p className="mt-6 text-xs text-neutral-400 text-center">
            © {new Date().getFullYear()} Mulyam Jewels
          </p>

        </div>
      </div>
    </>
  );
}