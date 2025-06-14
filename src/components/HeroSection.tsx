import PopButton from './PopButton';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pop-pink via-pop-purple to-pop-orange pop-dots py-20 md:py-32">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 pop-text-shadow handwritten">
          WOW!
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 pop-text-shadow font-fredoka">
          Pop Art Fashion Revolution!
        </h3>
        <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto handwritten">
          Discover our amazing collection of vibrant fashion and unique art pieces that will make you stand out!
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <PopButton variant="primary" className="text-2xl px-12 py-6">
            Shop Now!
          </PopButton>
          <PopButton variant="secondary" className="text-2xl px-12 py-6">
            View Gallery
          </PopButton>
        </div>
      </div>

      {/* Floating comic elements */}
      <div className="absolute top-10 left-10 text-6xl animate-spin">⭐</div>
      <div className="absolute top-20 right-20 text-4xl wiggle">💥</div>
      <div className="absolute bottom-20 left-1/4 text-5xl bounce-slow">🎨</div>
      <div className="absolute bottom-10 right-10 text-3xl animate-pulse">✨</div>
    </section>
  );
};

export default HeroSection;