import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PortfolioDetailData {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  images: string[];
}

const portfolioData: Record<string, PortfolioDetailData> = {
  "1": {
    id: "1",
    title: "Romantic Sunset Wedding",
    category: "Wedding",
    description:
      "A beautiful sunset ceremony capturing the love and joy of the special day.",
    content:
      "Every wedding tells a unique love story, and this sunset ceremony was particularly magical. The golden hour light created the perfect romantic atmosphere as the couple exchanged vows overlooking the serene landscape. Our photography captured every precious moment - from the intimate first look to the joyous celebration with family and friends. The natural beauty of the setting combined with the couple's genuine emotions resulted in a stunning collection of memories that will be treasured for a lifetime.",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop",
    ],
  },
  "2": {
    id: "2",
    title: "Corporate Event Excellence",
    category: "Event",
    description:
      "Professional event photography showcasing dynamic corporate gatherings.",
    content:
      "Corporate events require a different approach to photography - one that captures the professional atmosphere while highlighting the human connections and achievements being celebrated. This event showcased innovative networking, inspiring presentations, and meaningful collaborations. Our photography documented the energy and professionalism of the occasion, creating images that effectively communicate the company's values and the success of their gathering.",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    ],
  },
  "3": {
    id: "3",
    title: "Creative Portrait Session",
    category: "Portrait",
    description: "Artistic portraiture highlighting personality and character.",
    content:
      "Portrait photography is about revealing the essence of a person through careful composition, lighting, and timing. This creative session focused on capturing authentic expressions and showcasing individual personality. Using a combination of natural and studio lighting techniques, we created dynamic portraits that go beyond traditional headshots to tell a more complete story of who this person is. Each image reflects different aspects of their character and style.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&h=600&fit=crop",
    ],
  },
  "4": {
    id: "4",
    title: "Modern Architecture",
    category: "Commercial",
    description:
      "Capturing architectural beauty with dramatic angles and lighting.",
    content:
      "Architectural photography requires a keen eye for geometry, light, and space. This modern building presented fascinating opportunities to explore lines, textures, and shadows. Our approach emphasizes the architect's vision while adding our own artistic interpretation through careful composition and timing. The interplay between natural and artificial light creates dramatic contrasts that highlight the building's innovative design and sophisticated materials.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&h=600&fit=crop",
    ],
  },
  "5": {
    id: "5",
    title: "Nature's Serenity",
    category: "Nature",
    description: "Peaceful landscape photography showcasing natural beauty.",
    content:
      "Nature photography is about patience, observation, and being present in the moment. This serene landscape captured during the golden hour showcases the peaceful beauty of the natural world. The composition emphasizes the harmony between different elements - water, sky, and earth - creating a sense of tranquility and wonder. Each image in this collection invites viewers to pause and appreciate the subtle beauty that surrounds us in nature.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1447958272669-9c562446304f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1463546610035-dc2aa56d2943?w=800&h=600&fit=crop",
    ],
  },
  "6": {
    id: "6",
    title: "Vibrant Florals",
    category: "Nature",
    description:
      "Macro photography capturing the intricate details of flowers.",
    content:
      "Macro photography reveals the hidden world of intricate details that often go unnoticed. This floral collection explores the delicate beauty of petals, the fascinating geometry of natural patterns, and the vibrant colors that make each bloom unique. Using specialized macro techniques, we captured the subtle textures and stunning details that showcase nature's incredible artistry on a miniature scale.",
    images: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?w=800&h=600&fit=crop",
    ],
  },
};

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [images, setImages] = useState(portfolioData[id || ""]?.images || []);

  const data = portfolioData[id || ""];

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Portfolio item not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-primary text-white px-6 py-3 rounded-full transition-smooth"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const handleAddImage = () => {
    const newImageUrl = prompt("Enter image URL:");
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-primary hover:text-primary-light transition-smooth mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-primary-light bg-secondary px-3 py-1 rounded-full">
                {data.category}
              </span>
              <button
                disabled
                style={{ display: "none" }}
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                {isEditing ? "Done Editing" : "Customize Images"}
              </button>
            </div>

            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              {data.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {data.description}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">{data.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Collage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-playfair font-bold text-foreground">
              Image Gallery
            </h2>
            {isEditing && (
              <button
                onClick={handleAddImage}
                className="flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-lg transition-smooth hover:shadow-glow"
              >
                <Plus className="w-4 h-4" />
                Add Image
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-card hover-lift"
              >
                <img
                  src={image}
                  alt={`${data.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {isEditing && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-smooth"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}

            {isEditing && (
              <div
                onClick={handleAddImage}
                className="h-64 border-2 border-dashed border-border rounded-xl flex items-center justify-center cursor-pointer hover:border-primary transition-smooth bg-muted/20"
              >
                <div className="text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <span className="text-muted-foreground">Add New Image</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
