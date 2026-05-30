import { Instagram } from "lucide-react";
import logoImg from "../../imports/Kerek_logo_.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 flex items-center space-x-4">
          <div className="bg-black rounded-full p-1 flex-shrink-0">
            <ImageWithFallback src={logoImg} alt="Fanny's Logo" className="w-12 h-12 rounded-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline space-x-2">
              <span 
                className="text-xl md:text-2xl font-bold text-white uppercase" 
                style={{ fontFamily: "'London', serif" }}
              >
                FANNY'S
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-gray-300 font-medium">
                BRAND
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Luxury in Black & White.</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://www.instagram.com/fannys_brand?igsh=MThjMngyOHlvdzB2OA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center" aria-label="TikTok">
              {/* TikTok SVG Icon */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Fanny's Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
