import { Star, Heart, ShoppingBag } from 'lucide-react';

const PopArtFooter = () => {
  return (
    <footer className="pop-gradient pop-dots py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-3 rounded-full comic-border wiggle">
                <Star className="w-8 h-8 text-pop-pink" fill="currentColor" />
              </div>
              <h3 className="text-3xl font-bold handwritten pop-text-shadow">POP STORE</h3>
            </div>
            <p className="text-lg handwritten mb-6 max-w-md">
              Your one-stop shop for amazing pop art fashion and unique art pieces that make you shine! ✨
            </p>
            <div className="flex space-x-4">
              <div className="bg-white p-3 rounded-full comic-border bounce-slow">
                <Heart className="w-6 h-6 text-pop-orange" />
              </div>
              <div className="bg-white p-3 rounded-full comic-border bounce-slow">
                <ShoppingBag className="w-6 h-6 text-pop-pink" />
              </div>
              <div className="bg-white p-3 rounded-full comic-border bounce-slow">
                <Star className="w-6 h-6 text-pop-blue" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold handwritten mb-6 pop-text-shadow">Quick Links</h4>
            <ul className="space-y-3 handwritten text-lg">
              <li><a href="#" className="hover:text-pop-yellow transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-pop-yellow transition-colors">Art Gallery</a></li>
              <li><a href="#" className="hover:text-pop-yellow transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-pop-yellow transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-bold handwritten mb-6 pop-text-shadow">Contact Us</h4>
            <div className="space-y-3 handwritten text-lg">
              <p>📧 hello@popstore.com</p>
              <p>📞 (555) 123-POP!</p>
              <p>📍 Pop Art Street 123</p>
              <p>🌟 Follow us for more!</p>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-white mt-12 pt-8 text-center">
          <p className="handwritten text-xl">
            Made with 💖 and lots of ✨ pop art magic! © 2024 Pop Store
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 text-4xl animate-spin">🎨</div>
      <div className="absolute bottom-20 right-20 text-3xl wiggle">💫</div>
    </footer>
  );
};

export default PopArtFooter;