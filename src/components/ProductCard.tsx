import { Heart, ShoppingBag } from 'lucide-react';
import PopButton from './PopButton';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg comic-border p-6 hover:scale-105 transition-transform duration-300 wiggle">
      {/* Category Badge */}
      <div className="inline-block bg-pop-pink text-white px-4 py-2 rounded-full handwritten font-bold text-sm mb-4 pop-text-shadow">
        {category}
      </div>

      {/* Product Image */}
      <div className="relative mb-6 comic-border overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-pop-yellow transition-colors">
          <Heart className="w-5 h-5 text-pop-pink" />
        </button>
      </div>

      {/* Product Info */}
      <h3 className="text-xl font-bold mb-2 handwritten text-gray-800">{name}</h3>
      <p className="text-2xl font-bold text-pop-orange mb-4 pop-text-shadow">{price}</p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <PopButton variant="primary" className="flex-1 flex items-center justify-center gap-2 py-3">
          <ShoppingBag className="w-5 h-5" />
          Buy Now!
        </PopButton>
        <PopButton variant="secondary" className="px-4 py-3">
          💖
        </PopButton>
      </div>
    </div>
  );
};

export default ProductCard;