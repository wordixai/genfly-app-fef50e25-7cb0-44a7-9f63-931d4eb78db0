import PopArtHeader from '../components/PopArtHeader';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import PopArtFooter from '../components/PopArtFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <PopArtHeader />
      <HeroSection />
      <ProductGrid />
      <PopArtFooter />
    </div>
  );
};

export default Index;