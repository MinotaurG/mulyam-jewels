/**
 * Pets Collection Page - Mulyam Jewelry
 * 
 * URL: /collections/pets
 * 
 * This is our SEO goldmine page.
 * Target keywords:
 * - pet jewelry india
 * - dog necklace india
 * - cat accessories
 * - pet fashion accessories
 * 
 * Structure:
 * - Hero banner for pets
 * - Product grid
 * - SEO content at bottom
 */

import Link from 'next/link';
import type { Metadata } from 'next';

/**
 * Page-specific metadata for SEO
 * This overrides the default metadata from layout.tsx
 */
export const metadata: Metadata = {
  title: 'Pet Jewelry Collection',
  description: "India's first fashion jewelry for pets. Discover elegant necklaces, collar charms, and accessories for your dogs and cats. Safe, stylish, and affordable.",
  keywords: ['pet jewelry india', 'dog necklace', 'cat collar charm', 'pet accessories india', 'dog jewelry'],
};

/**
 * Sample product data
 * Later this can come from a database or CMS
 * For now, hardcoded to build the UI
 */
const petProducts = [
  {
    id: 'pet-001',
    name: 'Golden Paw Necklace',
    price: 299,
    description: 'Elegant gold-tone necklace for small dogs',
    tag: 'Bestseller',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'pet-002',
    name: 'Pearl Collar Charm',
    price: 199,
    description: 'Delicate pearl charm for any collar',
    tag: 'New',
    bgColor: 'bg-rose-50',
  },
  {
    id: 'pet-003',
    name: 'Royal Blue Beads',
    price: 349,
    description: 'Statement piece for medium dogs',
    tag: null,
    bgColor: 'bg-blue-50',
  },
  {
    id: 'pet-004',
    name: 'Silver Star Pendant',
    price: 249,
    description: 'Cute star pendant for cats and small dogs',
    tag: 'New',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'pet-005',
    name: 'Floral Collar Set',
    price: 399,
    description: 'Beautiful floral design collar accessory',
    tag: null,
    bgColor: 'bg-pink-50',
  },
  {
    id: 'pet-006',
    name: 'Diamond Bow Charm',
    price: 279,
    description: 'Sparkling bow charm for special occasions',
    tag: 'Bestseller',
    bgColor: 'bg-cyan-50',
  },
];

export default function PetsCollectionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-6 py-16 bg-amber-50">
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
              <li>
                <Link href="/collections" className="hover:text-neutral-900">
                  Collections
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900">Pets</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900">
            Pet Jewelry
          </h1>
          
          {/* Description */}
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            India's first fashion jewelry collection for your furry friends. 
            Safe, comfortable, and absolutely adorable.
          </p>

          {/* Filter Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">
              All
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Dogs
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              Cats
            </button>
            <button className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full hover:bg-neutral-100 transition-colors">
              New Arrivals
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* 
            Product Grid
            - 1 column on mobile
            - 2 columns on small screens
            - 3 columns on large screens
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {petProducts.map((product) => (
              <div 
                key={product.id}
                className="group cursor-pointer"
              >
                {/* Product Image Placeholder */}
                <div className={`relative aspect-square rounded-2xl ${product.bgColor} overflow-hidden`}>
                  {/* Tag Badge */}
                  {product.tag && (
                    <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full ${
                      product.tag === 'New' 
                        ? 'bg-brand text-white' 
                        : 'bg-neutral-900 text-white'
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🐾</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Product Info */}
                <div className="mt-4">
                  <h3 className="font-medium text-neutral-900 group-hover:text-brand transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {product.description}
                  </p>
                  <p className="mt-2 text-brand font-medium">
                    ₹{product.price}
                  </p>
                </div>

                {/* Order Button */}
                <a
                  href={`https://instagram.com/mulyamjewelry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full py-3 text-center text-sm border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Order on Instagram
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="px-6 py-16 bg-neutral-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-neutral-900 mb-6">
            Pet Jewelry: A New Trend in India
          </h2>
          
          <div className="prose prose-neutral text-neutral-600 space-y-4">
            <p>
              Welcome to India's first dedicated pet jewelry collection. At Mulyam, 
              we believe your furry companions deserve to look just as stylish as you do. 
              Our carefully curated collection features elegant necklaces, collar charms, 
              and accessories designed specifically for dogs and cats.
            </p>
            
            <h3 className="text-lg font-medium text-neutral-800 mt-8 mb-3">
              Why Choose Our Pet Jewelry?
            </h3>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Safety First:</strong> All pieces are lightweight, comfortable, 
                and designed to not irritate your pet's skin or fur.
              </li>
              <li>
                <strong>Premium Quality:</strong> We use high-quality materials that 
                are durable and long-lasting.
              </li>
              <li>
                <strong>Unique Designs:</strong> Stand out at the park with exclusive 
                designs you won't find anywhere else in India.
              </li>
              <li>
                <strong>Perfect for Photos:</strong> Make your pet Instagram-ready 
                with our photogenic accessories.
              </li>
            </ul>

            <h3 className="text-lg font-medium text-neutral-800 mt-8 mb-3">
              Matching Sets Available
            </h3>
            
            <p>
              Want to twin with your pet? Check out our matching sets where you can 
              get coordinated pieces for yourself and your furry friend. Perfect for 
              family photos, special occasions, or just everyday styling!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light text-neutral-900">
            Can't Find What You're Looking For?
          </h2>
          <p className="mt-4 text-neutral-600">
            We're constantly adding new designs. Follow us on Instagram for the 
            latest arrivals or DM us for custom requests!
          </p>
          <a
            href="https://instagram.com/mulyamjewelry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide rounded-full hover:bg-neutral-800 transition-colors"
          >
            Follow @mulyamjewelry
          </a>
        </div>
      </section>
    </main>
  );
}
