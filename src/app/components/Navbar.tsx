import { Link, useLocation } from "react-router";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/Kerek_logo_.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useI18n } from "../../i18n/i18n";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { labels, language, setLanguage } = useI18n();

  const links = [
    { name: labels.nav.home, path: "/" },
    { name: labels.nav.shop, path: "/shop" },
    { name: labels.nav.about, path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <ImageWithFallback src={logoImg} alt="Fanny's Logo" className="w-12 h-12 rounded-full object-cover filter invert" />
              <div className="hidden sm:flex items-baseline space-x-2">
                <span 
                  className="text-xl md:text-2xl font-bold text-black uppercase" 
                  style={{ fontFamily: "'London', serif" }}
                >
                  FANNY'S
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-black font-medium">
                  BRAND
                </span>
              </div>
            </Link>
          </div>

          <div className="flex-1 flex justify-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <nav className="flex space-x-8 lg:space-x-12">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-widest uppercase transition-colors hover:text-gray-500 ${
                    isActive(link.path) ? "text-black border-b border-black pb-1" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-5 pl-8 border-l border-gray-200">
              <button className="text-black hover:text-gray-600 transition-colors">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button className="text-black hover:text-gray-600 transition-colors relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </button>
              {/* Language switch (smaller; selected = bold only) */}
              <div className="flex items-center">
                <button
                  aria-label="Switch to English"
                  onClick={() => setLanguage("en")}
                  className={`text-xs px-1.5 py-0.5 ${language === "en" ? "font-semibold text-black" : "text-black/70 hover:text-black"}`}
                >
                  EN
                </button>
                <div className="w-px h-4 bg-gray-200 mx-1" aria-hidden />
                <button
                  aria-label="Switch to Hungarian"
                  onClick={() => setLanguage("hu")}
                  className={`text-xs px-1.5 py-0.5 ${language === "hu" ? "font-semibold text-black" : "text-black/70 hover:text-black"}`}
                >
                  HU
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0">
          <div className="px-6 pt-4 pb-8 space-y-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg tracking-widest uppercase ${
                  isActive(link.path) ? "text-black font-bold" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-gray-100">
              <button className="text-black hover:text-gray-600 flex items-center text-sm uppercase tracking-widest">
                <Search size={20} className="mr-2" /> {labels.search}
              </button>
              <button className="text-black hover:text-gray-600 flex items-center text-sm uppercase tracking-widest">
                <ShoppingBag size={20} className="mr-2" /> {labels.cart} (0)
              </button>

              <div className="flex items-center">
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-xs px-1.5 py-0.5 ${language === "en" ? "font-semibold text-black" : "text-black/70 hover:text-black"}`}
                >
                  EN
                </button>
                <div className="w-px h-4 bg-gray-100 mx-1" aria-hidden />
                <button
                  onClick={() => setLanguage("hu")}
                  className={`text-xs px-1.5 py-0.5 ${language === "hu" ? "font-semibold text-black" : "text-black/70 hover:text-black"}`}
                >
                  HU
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
