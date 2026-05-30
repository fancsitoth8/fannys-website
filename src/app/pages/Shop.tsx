import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShoppingBag } from "lucide-react";

export function Shop() {
  const products = [
    {
      id: 1,
      name: "The Onyx Tote",
      price: "$850",
      description: "A spacious, structured everyday tote crafted from premium black leather.",
      image: "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxlYXRoZXIlMjBsdXh1cnklMjBoYW5kYmFnfGVufDF8fHx8MTc4MDE1ODM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "The Pearl Clutch",
      price: "$620",
      description: "An elegant evening companion in pure white with subtle silver hardware.",
      image: "https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2hpdGUlMjBkZXNpZ25lciUyMHB1cnNlfGVufDF8fHx8MTc4MDE1ODM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "The Monolith Weekender",
      price: "$1,200",
      description: "Generous capacity meets minimalist design for your luxury escapes.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwdG90ZSUyMGJhZ3xlbnwxfHx8fDE3ODAxNTgzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "The Eclipse Crossbody",
      price: "$740",
      description: "A versatile day-to-night piece featuring our signature striking contrasts.",
      image: "https://images.unsplash.com/photo-1603189343302-e603f7add05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwbHV4dXJ5JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3ODAxNTgzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">Collection</h1>
        <p className="text-gray-500 font-light max-w-2xl mx-auto">
          Explore our complete range of luxury bags. Minimalist design, uncompromising quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="aspect-square w-full overflow-hidden bg-gray-50 mb-6 relative">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif tracking-wide">{product.name}</h3>
                <span className="text-lg">{product.price}</span>
              </div>
              <p className="text-gray-500 text-sm font-light mb-6 flex-grow">
                {product.description}
              </p>
              
              <button 
                className="w-full border border-black bg-transparent text-black py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                onClick={() => alert("Ordering functionality will be connected via Supabase shortly!")}
              >
                <ShoppingBag size={16} className="mr-2" />
                Pre-Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
