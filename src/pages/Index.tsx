import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
