import React from 'react';
import { Link } from 'react-router-dom';
import { Star, PlusCircleIcon } from 'lucide-react';
export interface FoodItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  description: string;
}
interface FoodCardProps {
  food: FoodItem;
  onAddToCart?: () => void;
}
const FoodCard: React.FC<FoodCardProps> = ({
  food,
  onAddToCart
}) => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${food.id}`} className="block">
        <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-gray-800">{food.name}</h3>
            <span className="text-orange-500 font-bold">
              ${food.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{food.rating}</span>
            <span className="text-xs text-gray-500 ml-2">{food.category}</span>
          </div>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {food.description}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button onClick={onAddToCart} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-300">
          <PlusCircleIcon size={18} className="mr-1" />
          Add to Cart
        </button>
      </div>
    </div>;
};
export default FoodCard;