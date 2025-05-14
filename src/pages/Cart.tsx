import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ShoppingBagIcon } from 'lucide-react';
import CartItem from '../components/CartItem';
import { FoodItem } from '../components/FoodCard';
// Sample cart data for demonstration
const initialCartItems: (FoodItem & {
  quantity: number;
})[] = [{
  id: '1',
  name: 'Classic Cheeseburger',
  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 9.99,
  rating: 4.8,
  category: 'Burgers',
  description: 'Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun.',
  quantity: 2
}, {
  id: '3',
  name: 'Chicken Caesar Salad',
  image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 8.99,
  rating: 4.5,
  category: 'Salads',
  description: 'Crisp romaine lettuce with grilled chicken, parmesan cheese, croutons, and Caesar dressing.',
  quantity: 1
}];
const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const handleIncrease = (id: string) => {
    setCartItems(items => items.map(item => item.id === id ? {
      ...item,
      quantity: item.quantity + 1
    } : item));
  };
  const handleDecrease = (id: string) => {
    setCartItems(items => items.map(item => item.id === id && item.quantity > 1 ? {
      ...item,
      quantity: item.quantity - 1
    } : item));
  };
  const handleRemove = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 2.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + deliveryFee + tax;
  return <div>
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4 p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
      </div>
      {cartItems.length > 0 ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">
                Cart Items ({cartItems.length})
              </h2>
              <div className="divide-y divide-gray-200">
                {cartItems.map(item => <CartItem key={item.id} item={item} onIncrease={() => handleIncrease(item.id)} onDecrease={() => handleDecrease(item.id)} onRemove={() => handleRemove(item.id)} />)}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors duration-300">
                <ShoppingBagIcon size={18} className="mr-2" />
                Proceed to Checkout
              </Link>
              <Link to="/search" className="w-full text-center block mt-4 text-orange-500 hover:text-orange-600">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div> : <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <div className="mb-4 flex justify-center">
            <ShoppingBagIcon size={64} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/search" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full font-medium inline-block transition-colors duration-300">
            Start Shopping
          </Link>
        </div>}
    </div>;
};
export default Cart;