import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Pop Art T-Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      category: "Fashion"
    },
    {
      id: 2,
      name: "Retro Sneakers",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      category: "Shoes"
    },
    {
      id: 3,
      name: "Comic Art Poster",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Art"
    },
    {
      id: 4,
      name: "Neon Jacket",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Pop Art Canvas",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      category: "Art"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pop-yellow/20 to-pop-pink/20 pop-dots">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 pop-text-shadow handwritten">
            Amazing Products!
          </h2>
          <p className="text-xl text-gray-600 handwritten">
            Check out our super cool collection of pop art fashion & art! 🎨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <PopButton variant="accent" className="text-2xl px-12 py-6">
            See More Products! 🔥
          </PopButton>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;