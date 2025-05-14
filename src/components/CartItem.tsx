import React from 'react';
import { Minus, Plus, Trash2Icon } from 'lucide-react';
import { FoodItem } from './FoodCard';
interface CartItemProps {
  item: FoodItem & {
    quantity: number;
  };
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}
const CartItem: React.FC<CartItemProps> = ({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  return <div className="flex items-center border-b border-gray-200 py-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
      <div className="ml-4 flex-grow">
        <h3 className="font-medium text-gray-800">{item.name}</h3>
        <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button onClick={onDecrease} className="p-1 rounded-full hover:bg-gray-100" aria-label="Decrease quantity">
          <Minus size={18} className="text-gray-600" />
        </button>
        <span className="mx-2 w-6 text-center">{item.quantity}</span>
        <button onClick={onIncrease} className="p-1 rounded-full hover:bg-gray-100" aria-label="Increase quantity">
          <Plus size={18} className="text-gray-600" />
        </button>
      </div>
      <div className="ml-4 text-right">
        <p className="font-semibold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button onClick={onRemove} className="text-red-500 hover:text-red-700 text-sm flex items-center mt-1" aria-label="Remove item">
          <Trash2Icon size={16} className="mr-1" />
          Remove
        </button>
      </div>
    </div>;
};
export default CartItem;