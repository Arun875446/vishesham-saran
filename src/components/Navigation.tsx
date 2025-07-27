import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useNavigate } from "react-router-dom";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems: DropdownItem[];
}

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "#home",
      dropdownItems: [
        { label: "Welcome", href: "#welcome" },
        { label: "Featured Work", href: "#featured" },
        { label: "Latest Updates", href: "#updates" },
        { label: "Client Reviews", href: "#reviews" },
        { label: "Quick Contact", href: "#quick-contact" },
      ],
    },
    {
      label: "Portfolio",
      href: "#portfolio",
      dropdownItems: [
        { label: "Wedding Photography", href: "#wedding" },
        { label: "Portrait Sessions", href: "#portraits" },
        { label: "Event Photography", href: "#events" },
        { label: "Commercial Work", href: "#commercial" },
        { label: "Nature & Landscape", href: "#nature" },
      ],
    },
    {
      label: "Services",
      href: "#services",
      dropdownItems: [
        { label: "Wedding Packages", href: "#wedding-packages" },
        { label: "Portrait Sessions", href: "#portrait-sessions" },
        { label: "Event Coverage", href: "#event-coverage" },
        { label: "Commercial Photography", href: "#commercial-photo" },
        { label: "Photo Editing", href: "#photo-editing" },
      ],
    },
    {
      label: "About",
      href: "#about",
      dropdownItems: [
        { label: "Our Story", href: "#story" },
        { label: "Photography Style", href: "#style" },
        { label: "Equipment", href: "#equipment" },
        { label: "Awards & Recognition", href: "#awards" },
        { label: "Behind the Scenes", href: "#behind-scenes" },
      ],
    },
    {
      label: "Contact",
      href: "#contact",
      dropdownItems: [
        { label: "Book a Session", href: "#book" },
        { label: "Get a Quote", href: "#quote" },
        { label: "Location & Hours", href: "#location" },
        { label: "FAQ", href: "#faq" },
        { label: "Support", href: "#support" },
      ],
    },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-border/50 z-50 transition-smooth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex-shrink-0 animate-float"
          >
            <a href="#home" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Vishesham Photography"
                className="h-8 w-auto lg:h-10 hover-glow rounded-md"
              />
              <span className="text-xl lg:text-2xl font-playfair font-bold bg-gradient-primary bg-clip-text text-transparent">
                Vishesham
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center space-x-1 text-foreground hover:text-primary-light transition-smooth font-medium"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div className="nav-dropdown">
                  <div className="py-2">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <a
                        key={index}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary-light hover:bg-secondary/50 transition-smooth"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary-light transition-smooth p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-foreground hover:text-primary-light transition-smooth"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === item.label && (
                    <div className="pl-4 space-y-2 animate-fade-in">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary-light transition-smooth py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
