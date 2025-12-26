/**
 * About Page - Mulyam Jewelry
 * 
 * URL: /about
 * 
 * Tells the brand story and builds trust.
 * Important for:
 * - Connecting with customers emotionally
 * - Building credibility
 * - SEO (brand-related searches)
 */

import Link from 'next/link';
import type { Metadata } from 'next';

/**
 * Page-specific metadata
 */
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Mulyam Jewelry - India\'s first fashion jewelry brand for pets. Our story, mission, and why we started.',
};

/**
 * Brand values data
 */
const values = [
  {
    title: 'Quality First',
    description: 'Every piece is carefully inspected to ensure it meets our high standards.',
    icon: '✨',
  },
  {
    title: 'Pet Safety',
    description: 'All pet jewelry is designed with your furry friend\'s comfort in mind.',
    icon: '🛡️',
  },
  {
    title: 'Affordable Luxury',
    description: 'Looking good shouldn\'t cost a fortune. Premium looks, friendly prices.',
    icon: '💎',
  },
  {
    title: 'Customer Love',
    description: 'Your satisfaction is our priority. We\'re here to help, always.',
    icon: '💝',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-500">
              <li>
                <Link href="/" className="hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900">About</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900">
            Our Story
          </h1>
          
          <p className="mt-4 text-neutral-600">
            How a simple idea became India's first pet jewelry brand
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Opening Statement */}
          <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed text-center">
            "We believe everyone deserves to shine — 
            <span className="text-brand"> including your pets.</span>"
          </p>

          {/* Story Content */}
          <div className="mt-16 space-y-6 text-neutral-600 leading-relaxed">
            <p>
              Mulyam started with a simple observation: pet parents in India 
              love dressing up their furry friends, but there was nowhere to 
              find stylish, affordable jewelry for them. We saw an opportunity 
              to fill that gap.
            </p>
            
            <p>
              As pet lovers ourselves, we understood the joy of pampering our 
              companions. We wanted to create something special — pieces that 
              would make tails wag and heads turn at the park.
            </p>

            <p>
              But we didn't stop there. We expanded our collection to include 
              beautiful jewelry for women and kids too. Because at Mulyam, 
              we're all about family — the whole family, furry members included.
            </p>

            <p>
              Today, we're proud to be India's first fashion jewelry brand 
              that caters to pets. Every piece in our collection is crafted 
              with love, designed for style, and priced for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-brand uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900">
              Our Values
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-4xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-widest text-brand uppercase mb-4">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
            To make beautiful jewelry accessible to everyone — 
            women, kids, and pets alike.
          </h2>
          <p className="mt-6 text-neutral-600">
            We're on a mission to bring joy through affordable fashion. 
            Because looking good shouldn't be a luxury.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-light text-brand-light">
                500+
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Happy Pet Parents
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light text-brand-light">
                50+
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Unique Designs
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light text-brand-light">
                10+
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Cities Delivered
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-light text-brand-light">
                4.8★
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
            Want to be part of our journey?
          </h2>
          <p className="mt-4 text-neutral-600">
            Follow us on Instagram for behind-the-scenes, new launches, 
            and adorable pet photos from our community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://instagram.com/mulyamjewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide rounded-full hover:bg-neutral-800 transition-colors"
            >
              Follow @mulyamjewelry
            </a>
            <Link
              href="/collections/pets"
              className="w-full sm:w-auto px-8 py-4 border border-neutral-300 text-neutral-700 text-sm tracking-wide rounded-full hover:border-neutral-900 transition-colors"
            >
              Shop Pet Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
