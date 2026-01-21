import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
// Make sure this path matches where you put your data file
import { productsCollection } from '@/lib/data'; 
import Navbar from '@/components/layout/Navbar';

// This function generates the static paths for all your products at build time (Faster loading)
export async function generateStaticParams() {
  return productsCollection.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // 1. Find the specific product based on the URL ID
  const product = productsCollection.find((p) => p.id.toString() === params.id);

  // 2. If product doesn't exist, show 404
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
        <Navbar/>
      <div className="pt-6 pb-16 sm:pb-24">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">Home</Link>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-300">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </li>
            <li>
              <Link href="/new-arrivals" className="text-sm font-medium text-gray-500 hover:text-gray-900">New Arrivals</Link>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-300">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            </li>
            <li className="text-sm font-medium text-gray-900" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            
            {/* Image Gallery */}
            <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 h-96 lg:h-[600px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                priority // Load this image fast
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
              
              <div className="mt-3">
                <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
              </div>

              {/* Rating */}
              <div className="mt-3 flex items-center">
                 <div className="flex items-center">
                   {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                   ))}
                 </div>
                 <p className="ml-3 text-sm text-gray-500">117 reviews</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6 text-base text-gray-700">
                  <p>
                    Experience the luxury of the {product.category} collection. 
                    This <strong>{product.color}</strong> masterpiece brings warmth and style to any room. 
                    Hand-selected for quality and durability.
                  </p>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="mt-10 flex">
                <button
                  type="button"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full"
                >
                  Add to bag
                </button>
                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <span className="sr-only">Add to favorites</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}