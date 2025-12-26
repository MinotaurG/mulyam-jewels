/**
 * Size Guide Page - Mulyam Jewelry
 * 
 * URL: /size-guide
 * 
 * SEO goldmine! People search for:
 * - "how to measure dog for necklace"
 * - "pet collar size chart"
 * - "dog jewelry size guide"
 * 
 * Helps customers order correct size = fewer returns.
 */

import Link from 'next/link';
import type { Metadata } from 'next';

/**
 * Page-specific metadata
 */
export const metadata: Metadata = {
  title: 'Size Guide',
  description: 'How to measure your pet for jewelry. Complete size guide for dog necklaces, cat collar charms, and pet accessories.',
  keywords: ['pet jewelry size guide', 'dog necklace size', 'how to measure dog neck', 'pet collar size chart'],
};

/**
 * Pet size chart data
 */
const petSizeChart = [
  {
    size: 'XS',
    neckSize: '15-20 cm',
    breeds: 'Chihuahua, Pomeranian, Kittens',
    icon: '🐕',
  },
  {
    size: 'S',
    neckSize: '20-28 cm',
    breeds: 'Shih Tzu, Pug, Adult Cats',
    icon: '🐩',
  },
  {
    size: 'M',
    neckSize: '28-38 cm',
    breeds: 'Beagle, Cocker Spaniel, Indian Spitz',
    icon: '🐕‍🦺',
  },
  {
    size: 'L',
    neckSize: '38-48 cm',
    breeds: 'Labrador, Golden Retriever, German Shepherd',
    icon: '🦮',
  },
  {
    size: 'XL',
    neckSize: '48-58 cm',
    breeds: 'Great Dane, Saint Bernard, Rottweiler',
    icon: '🐕',
  },
];

/**
 * Measurement steps
 */
const measurementSteps = [
  {
    step: 1,
    title: 'Get a Measuring Tape',
    description: 'Use a soft measuring tape. If you don\'t have one, use a string and measure it against a ruler.',
  },
  {
    step: 2,
    title: 'Measure the Neck',
    description: 'Wrap the tape around the base of your pet\'s neck where a collar would normally sit. Keep it snug but not tight.',
  },
  {
    step: 3,
    title: 'Add Comfort Room',
    description: 'Add 2-3 cm to the measurement for comfort. Your pet should be able to breathe and move freely.',
  },
  {
    step: 4,
    title: 'Check the Chart',
    description: 'Match your measurement to our size chart below. When in doubt, size up!',
  },
];

export default function SizeGuidePage() {
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
              <li className="text-neutral-900">Size Guide</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900">
            Size Guide
          </h1>
          
          <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
            Find the perfect fit for your furry friend. Follow our simple guide 
            to measure your pet correctly.
          </p>
        </div>
      </section>

      {/* How to Measure Section */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-brand uppercase mb-4">
              Step by Step
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
              How to Measure Your Pet
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {measurementSteps.map((item) => (
              <div key={item.step} className="text-center">
                {/* Step Number */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand text-white flex items-center justify-center text-lg font-medium">
                  {item.step}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-medium text-neutral-900 mb-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Guide Placeholder */}
          <div className="mt-16 p-10 bg-amber-50 rounded-2xl text-center">
            <div className="text-6xl mb-4">📏🐕</div>
            <p className="text-neutral-600">
              Measure around the base of the neck, where a collar sits naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Size Chart Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-brand uppercase mb-4">
              Reference
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
              Pet Size Chart
            </h2>
          </div>

          {/* Size Table */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-medium">Size</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Neck Circumference</th>
                  <th className="px-6 py-4 text-left text-sm font-medium hidden sm:table-cell">Suitable For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {petSizeChart.map((row) => (
                  <tr key={row.size} className="hover:bg-neutral-50">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="text-xl">{row.icon}</span>
                        <span className="font-medium text-neutral-900">{row.size}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-neutral-600">
                      {row.neckSize}
                    </td>
                    <td className="px-6 py-4 text-neutral-600 hidden sm:table-cell">
                      {row.breeds}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: Breeds Info */}
          <div className="mt-6 sm:hidden space-y-3">
            <p className="text-sm font-medium text-neutral-700">Breed Examples:</p>
            {petSizeChart.map((row) => (
              <p key={row.size} className="text-sm text-neutral-600">
                <span className="font-medium">{row.size}:</span> {row.breeds}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900">
              Helpful Tips
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-green-50 rounded-xl">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-medium text-neutral-900">When in Doubt, Size Up</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  It's better to have a slightly loose fit than too tight. Your pet's comfort comes first.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-blue-50 rounded-xl">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-medium text-neutral-900">Consider Fur Length</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  For fluffy breeds, measure closer to the skin. The jewelry will rest on top of the fur.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-amber-50 rounded-xl">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-medium text-neutral-900">Supervise Your Pet</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Always supervise your pet when they're wearing jewelry. Remove it during play, sleep, and meals.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-purple-50 rounded-xl">
              <span className="text-2xl">📸</span>
              <div>
                <h3 className="font-medium text-neutral-900">Perfect for Photos</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Our jewelry is ideal for photoshoots and special occasions. Make memories that last!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-neutral-900">
            Still Not Sure?
          </h2>
          <p className="mt-4 text-neutral-600">
            Send us a photo of your pet on WhatsApp and we'll help you pick the right size!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide rounded-full hover:bg-neutral-800 transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/collections/pets"
              className="w-full sm:w-auto px-8 py-4 border border-neutral-300 text-neutral-700 text-sm tracking-wide rounded-full hover:border-neutral-900 transition-colors"
            >
              Browse Pet Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
