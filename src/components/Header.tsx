'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Délai de 200ms avant de fermer
  };

  // Nettoyer le timeout au démontage du composant
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);


  const navigationItems = [
    { name: 'Accueil', href: '/' },
    { 
      name: 'Le Lycée', 
      href: '/le-lycee',
      submenu: [
        { name: 'Présentation', href: '#' },
      ]
    },
    { 
      name: 'Formations', 
      href: '/formations',
      submenu: [
        { name: 'Seconde Générale', href: '/formations/seconde' },
        { name: 'Première Générale', href: '/formations/premiere' },
        { name: 'Terminale Générale', href: '/formations/terminale' },
      ]
    },
    { 
      name: 'Actualités', 
      href: '/actualites',
      submenu: [
        { name: 'Actualités', href: '/actualites' },
      ]
    },
    { 
      name: 'Restauration', 
      href: '/restauration',
      submenu: [
        { name: 'Menus', href: '#' },
      ]
    },
    { 
      name: 'Inscriptions', 
      href: '/inscriptions',
      submenu: [
        { name: 'Inscriptions', href: '/inscriptions' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and school name */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Image 
                src="/14313.png" 
                alt="République Française - Liberté Égalité Fraternité" 
                width={80}
                height={80}
                className="h-20 w-auto"
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">
                LGT PIERRE DE LA RAMEE
                <br />
                </h1>
                <p className="text-slate-600 text-sm">Saint-Quentin - Académie d'Amiens</p>
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-slate-700 hover:text-blue-900 font-medium transition-colors rounded-md hover:bg-slate-50"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                
                {/* Dropdown menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50"
                    style={{ marginTop: '-1px' }} // Pas de gap entre le menu et le dropdown
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-slate-700 hover:text-blue-900 hover:bg-slate-50 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          {/* Overlay background */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <nav className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Header du menu */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Navigation items */}
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  
                  {item.submenu && (
                    <div className="ml-4 space-y-1 border-l-2 border-white/30 pl-3">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}