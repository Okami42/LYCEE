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
        { name: 'Présentation', href: '/le-lycee/presentation' },
        { name: 'Histoire', href: '/le-lycee/histoire' },
        { name: 'Équipe de direction', href: '/le-lycee/direction' },
        { name: 'Organigramme', href: '/le-lycee/organigramme' },
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
        { name: 'Menus', href: '/restauration/menus' },
        { name: 'Tarifs', href: '/restauration/tarifs' },
        { name: 'Inscription', href: '/restauration/inscription' },
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
        {isMenuOpen && (
          <>
            {/* Overlay background */}
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu content */}
            <nav className="lg:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-50 max-h-96 overflow-y-auto mx-4 rounded-lg">
              <div className="space-y-2 p-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-slate-700 hover:text-blue-900 hover:bg-slate-50 font-medium transition-colors rounded-md"
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-900 hover:bg-slate-50 transition-colors rounded-md"
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
          </>
        )}
      </div>
    </header>
  );
}