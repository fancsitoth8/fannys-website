import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="flex flex-col w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">About Fanny</h1>
            <div className="w-16 h-px bg-black mb-8"></div>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed font-light">
            <p>
              Founded in 2026, FANNY'S is more than just a brand; it is a manifestation of pure elegance, reducing luxury to its most essential elements: black and white.
            </p>
            <p>
              As a designer, I always believed that true luxury whispers rather than shouts. By stripping away loud colors, I focus intensely on form, texture, and the unparalleled quality of materials. Every bag is a statement piece designed to transcend fleeting trends.
            </p>
            <p>
              My journey began in Paris, studying the masters of haute couture. I noticed a gap in the market for accessories that were simultaneously striking and profoundly understated. FANNY'S was born from the desire to fill that void.
            </p>
            <p>
              When you wear one of our pieces, you aren't just carrying a bag. You are carrying a piece of art, meticulously crafted for the modern, empowered individual who knows that sometimes, less is infinitely more.
            </p>
          </div>
          
          <div className="pt-8">
            <p className="font-serif italic text-xl text-gray-900 border-l-2 border-black pl-6">
              "Elegance is refusal." <br/>
              <span className="text-sm font-sans not-italic text-gray-500 uppercase tracking-widest mt-2 block">— Fanny, Founder</span>
            </p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgwMTU4Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fanny - Founder of Fanny's"
              className="w-full h-full object-cover object-center grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
