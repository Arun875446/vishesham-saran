import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Eye, Heart, Share2 } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: portfolio1,
      title: "Romantic Sunset Wedding",
      category: "Wedding",
      description: "A beautiful sunset ceremony where Vishesham captured the love and joy of this special day with timeless elegance.",
      tags: ["wedding", "sunset", "romantic", "outdoor"]
    },
    {
      id: 2,
      image: portfolio2,
      title: "Corporate Event Excellence",
      category: "Event",
      description: "Professional event photography where Vishesham showcased dynamic corporate gatherings with sophisticated storytelling.",
      tags: ["corporate", "event", "professional", "business"]
    },
    {
      id: 3,
      image: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop`,
      title: "Creative Portrait Session",
      category: "Portrait",
      description: "Artistic portraiture where Vishesham highlighted personality and character through innovative lighting techniques.",
      tags: ["portrait", "creative", "studio", "artistic"]
    },
    {
      id: 4,
      image: `https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop`,
      title: "Modern Architecture",
      category: "Commercial",
      description: "Capturing architectural beauty with dramatic angles and lighting.",
      tags: ["architecture", "modern", "commercial", "geometric"]
    },
    {
      id: 5,
      image: `https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop`,
      title: "Nature's Serenity",
      category: "Nature",
      description: "Peaceful landscape photography showcasing natural beauty.",
      tags: ["nature", "landscape", "peaceful", "outdoor"]
    },
    {
      id: 6,
      image: `https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop`,
      title: "Vibrant Florals",
      category: "Nature",
      description: "Macro photography capturing the intricate details of flowers.",
      tags: ["flowers", "macro", "colorful", "nature"]
    }
  ];

  const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Commercial', 'Nature'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleCardClick = (itemId: number) => {
    navigate(`/portfolio/${itemId}`);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore Vishesham's collection of stunning photography showcasing our artistic vision and technical expertise across diverse styles and moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-smooth ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-white hover:bg-secondary text-foreground hover:text-primary-light border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-card hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-smooth">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-smooth">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-smooth">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary-light bg-secondary px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 animate-fade-in">
            <button
              onClick={prevPage}
              className="bg-white hover:bg-secondary text-foreground p-3 rounded-full shadow-card transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    i === currentPage 
                      ? 'bg-primary shadow-glow' 
                      : 'bg-border hover:bg-accent'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="bg-white hover:bg-secondary text-foreground p-3 rounded-full shadow-card transition-smooth"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;