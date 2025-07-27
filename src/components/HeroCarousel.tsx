import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import hero1 from "@/assets/who.png";
import hero2 from "@/assets/women.png";
import hero3 from "@/assets/hero-3.jpg";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: hero1,
      title: "Capturing Life's Beautiful Moments",
      subtitle: "Professional Photography",
      description:
        "Every frame tells a story. At Vishesham, we capture yours with artistic vision and technical excellence that resonates for generations.",
    },
    {
      id: 2,
      image: hero2,
      title: "Portrait Photography Redefined",
      subtitle: "Elegant & Timeless",
      description:
        "Vishesham specializes in professional portraits that capture your essence and personality in stunning detail, creating memories that last forever.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Architectural Excellence",
      subtitle: "Modern & Dynamic",
      description:
        "Vishesham showcases architectural beauty through innovative perspectives and dramatic lighting that transforms spaces into visual poetry.",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0  opacity-60 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          {/* <h2 className="text-lg sm:text-xl font-inter font-medium opacity-90 animate-slide-in-right">
            {slides[currentSlide].subtitle}
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold leading-tight animate-zoom-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl font-inter opacity-90 max-w-2xl mx-auto animate-fade-in">
            {slides[currentSlide].description}
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-80 animate-fade-in">
            <button className="btn-animated bg-black/40 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-8 py-3 rounded-lg font-medium transition-smooth backdrop-blur-sm">
              <span>View Portfolio</span>
            </button>
            <button className="btn-animated bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-medium shadow-glow">
              <span>Book a Session</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentSlide
                    ? "bg-white shadow-glow"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-smooth"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-smooth opacity-70 hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-smooth opacity-70 hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroCarousel;
