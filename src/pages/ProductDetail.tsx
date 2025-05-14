import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, Star, MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react';
import { FoodItem } from '../components/FoodCard';
// Sample product data (would typically come from an API)
const productData: Record<string, FoodItem> = {
  '1': {
    id: '1',
    name: 'Classic Cheeseburger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 9.99,
    rating: 4.8,
    category: 'Burgers',
    description: 'Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun. Made with 100% Angus beef and served with a side of crispy fries. Our most popular item!'
  },
  '2': {
    id: '2',
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 12.99,
    rating: 4.6,
    category: 'Pizza',
    description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil on a thin crust. Wood-fired to perfection with a crispy edge and soft center. Simple yet delicious!'
  }
};
const relatedProducts: FoodItem[] = [{
  id: '3',
  name: 'Chicken Caesar Salad',
  image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 8.99,
  rating: 4.5,
  category: 'Salads',
  description: 'Crisp romaine lettuce with grilled chicken, parmesan cheese, croutons, and Caesar dressing.'
}, {
  id: '4',
  name: 'Veggie Wrap',
  image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 7.99,
  rating: 4.3,
  category: 'Wraps',
  description: 'Fresh vegetables, hummus, and feta cheese wrapped in a spinach tortilla.'
}];
const ProductDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  // In a real app, you would fetch this data based on the ID
  const product = productData[id || '1'] || productData['1'];
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    // In a real app, you would dispatch an action to add to cart
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  return <div>
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4 p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-xl font-bold text-gray-800">{product.category}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star size={18} className="text-yellow-500 fill-current" />
              <span className="ml-1 text-gray-700">{product.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600">{product.category}</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button onClick={decreaseQuantity} className="px-3 py-2 hover:bg-gray-100" aria-label="Decrease quantity">
                <MinusIcon size={16} className="text-gray-600" />
              </button>
              <span className="px-4 py-2 border-l border-r border-gray-300">
                {quantity}
              </span>
              <button onClick={increaseQuantity} className="px-3 py-2 hover:bg-gray-100" aria-label="Increase quantity">
                <PlusIcon size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={handleAddToCart} className={`w-full py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors duration-300 ${addedToCart ? 'bg-green-600 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}>
              <ShoppingCartIcon size={18} className="mr-2" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>
            <Link to="/cart" className="w-full py-3 px-4 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-md font-medium text-center transition-colors duration-300">
              View Cart
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-800 mb-2">
              Delivery Information
            </h3>
            <p className="text-gray-600 text-sm">
              Delivery time: 30-45 minutes
            </p>
            <p className="text-gray-600 text-sm">
              Free delivery for orders over $15
            </p>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {relatedProducts.map(item => <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link to={`/product/${item.id}`} className="block">
                <div className="flex">
                  <img src={item.image} alt={item.name} className="w-1/3 h-32 object-cover" />
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {item.rating}
                      </span>
                    </div>
                    <p className="text-orange-500 font-bold mt-2">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>)}
        </div>
      </div>
    </div>;
};
export default ProductDetail;