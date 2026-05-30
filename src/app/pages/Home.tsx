import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const latestDrops = [
    {
      id: 1,
      name: "The Onyx Tote",
      price: "$850",
      image: "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxlYXRoZXIlMjBsdXh1cnklMjBoYW5kYmFnfGVufDF8fHx8MTc4MDE1ODM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "The Pearl Clutch",
      price: "$620",
      image: "https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2hpdGUlMjBkZXNpZ25lciUyMHB1cnNlfGVufDF8fHx8MTc4MDE1ODM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwbHV4dXJ5JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3ODAxNTgzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Fashion Editorial"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-widest uppercase mb-6 drop-shadow-lg">
            Uncompromising Elegance
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 font-light tracking-wide max-w-xl mx-auto">
            Discover the new standard of luxury. Pure black and white aesthetics for the modern minimalist.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors font-medium"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Latest Drops Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif uppercase tracking-widest mb-2">Latest Drops</h2>
            <p className="text-gray-500 font-light">The newest additions to our collection.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-gray-600 transition-colors border-b border-black pb-1">
            View All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {latestDrops.map((item) => (
            <Link key={item.id} to="/shop" className="group block cursor-pointer">
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-6">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-serif tracking-wide">{item.name}</h3>
                <span className="text-gray-600">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <Link to="/shop" className="flex items-center text-sm uppercase tracking-widest border-b border-black pb-1">
            View All Collection <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
