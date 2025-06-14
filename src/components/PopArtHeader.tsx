import { ShoppingBag, Heart, Star } from 'lucide-react';

const PopArtHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="pop-gradient pop-dots min-h-[120px] flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-white p-3 rounded-full comic-border wiggle">
            <Star className="w-8 h-8 text-pop-pink" fill="currentColor" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white pop-text-shadow handwritten">
            POP STORE
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white font-semibold hover:text-pop-yellow transition-colors duration-300 handwritten text-xl">
            Fashion
          </a>
          <a href="#" className="text-white font-semibold hover:text-pop-yellow transition-colors duration-300 handwritten text-xl">
            Art
          </a>
          <a href="#" className="text-white font-semibold hover:text-pop-yellow transition-colors duration-300 handwritten text-xl">
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="bg-white p-3 rounded-full comic-border bounce-slow hover:scale-110 transition-transform">
            <Heart className="w-6 h-6 text-pop-orange" />
          </button>
          <button className="bg-white p-3 rounded-full comic-border bounce-slow hover:scale-110 transition-transform">
            <ShoppingBag className="w-6 h-6 text-pop-pink" />
          </button>
        </div>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-4 right-20 w-6 h-6 bg-pop-yellow rounded-full animate-bounce"></div>
      <div className="absolute bottom-4 left-20 w-8 h-8 bg-pop-blue rounded-full animate-pulse"></div>
    </header>
  );
};

export default PopArtHeader;