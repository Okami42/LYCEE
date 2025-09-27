'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Bornes Kiosk Turboself à écran tactile",
    subtitle: "",
    description: "Après plus de 40 ans d’existence, les solutions Turboself sont aujourd’hui ...",
    image: "https://www.saintjean-pornichet.fr/wp-content/uploads/2024/12/opengraph.jpg",
    primaryButton: {
      text: "Lire la suite",
      href: "/inscriptions"
    },
  },
  {
    id: 2,
    title: "Le carnet numérique",
    subtitle: "",
    description: "Cette année, le carnet de liaison en version papier disparaît. Il est remplacé ...",
    image: "https://puy-d-issolud.mon-ent-occitanie.fr/lectureFichiergw.do?ID_FICHIER=1460195449132",
    primaryButton: {
      text: "Lire la suite",
      href: "/formations"
    },
  },
  {
    id: 3,
    title: "Restauration Scolaire",
    subtitle: "",
    description: "Un large choix de spécialités et d'options pour construire votre parcours d'excellence",
    image: "https://static.neopse.com/medias/p/2317/site/5b/18/9b/5b189bd1fb1e90a8502e5df0b64c5cdf53736564.jpg?v=v1",
    primaryButton: {
      text: "Lire la suite",
      href: "/formations/specialites"
    }
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative h-[500px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-800/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-light mb-6 text-blue-200">
                  {slide.subtitle}
                </h2>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href={slide.primaryButton.href}
                    className="inline-flex items-center px-10 py-4 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
                  >
                    {slide.primaryButton.text}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                  {slide.secondaryButton && (
                    <Link
                      href={slide.secondaryButton.href}
                      className="inline-flex items-center px-10 py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 font-bold text-lg rounded-lg transition-colors"
                    >
                      {slide.secondaryButton.text}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors z-20 group"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors z-20 group"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
