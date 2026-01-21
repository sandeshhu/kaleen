import Image from 'next/image';
import Link from 'next/link';
// Import the data you provided
import { productsCollection } from '@/lib/data'; 
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NewArrivalsPage() {
  // Filter for items where isNew is true
  const newArrivals = productsCollection.filter((product) => product.isNew);

  return (
    <div className="bg-white">
        <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrivals</h2>
          <Link href="/shop" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hidden md:block">
            View all products <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {newArrivals.map((product) => (
            <div key={product.id} className="group relative">
              
              {/* Image Container */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none group-hover:opacity-75 h-80 relative">
                
                {/* ✅ Handles both Local SVGs and Remote URLs 
                   We use 'fill' so the SVG scales to fit the container perfectly.
                */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  // Priority is TRUE for these items so the SVG loads instantly
                  priority={true} 
                />

                {/* New Tag Badge */}
                <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded">
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                    New
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-medium">
                    <Link href={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}