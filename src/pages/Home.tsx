import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import FoodCard, { FoodItem } from '../components/FoodCard';
// Sample data for demonstration
const featuredFoods: FoodItem[] = [{
  id: '1',
  name: 'Classic Cheeseburger',
  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 9.99,
  rating: 4.8,
  category: 'Burgers',
  description: 'Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun.'
}, {
  id: '2',
  name: 'Margherita Pizza',
  image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 12.99,
  rating: 4.6,
  category: 'Pizza',
  description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil on a thin crust.'
}, {
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
const categories = [{
  name: 'Burgers',
  image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  name: 'Pizza',
  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  name: 'Salads',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  name: 'Desserts',
  image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  name: 'Drinks',
  image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}];
const Home = () => {
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg overflow-hidden mb-8">
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Delicious Food Delivered to Your Door
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Order your favorite meals with just a few clicks and enjoy them at
              home.
            </p>
            <Link to="/search" className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-full font-medium inline-flex items-center transition-colors duration-300">
              Order Now
              <ChevronRightIcon size={20} className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Delicious Food" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <Link to="/search" className="text-orange-500 hover:text-orange-600 flex items-center">
            See All
            <ChevronRightIcon size={20} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map(category => <Link key={category.name} to={`/search?category=${category.name}`} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={category.image} alt={category.name} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white font-medium text-lg">
                  {category.name}
                </h3>
              </div>
            </Link>)}
        </div>
      </section>
      {/* Featured Foods Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Items</h2>
          <Link to="/search" className="text-orange-500 hover:text-orange-600 flex items-center">
            See All
            <ChevronRightIcon size={20} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFoods.map(food => <FoodCard key={food.id} food={food} onAddToCart={() => {}} />)}
        </div>
      </section>
      {/* Promotion Banner */}
      <section className="bg-gray-100 rounded-lg p-6 md:p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Free Delivery on Your First Order
            </h2>
            <p className="text-gray-600 mb-4">
              Use code WELCOME at checkout for free delivery on orders over $15
            </p>
            <Link to="/search" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium inline-block transition-colors duration-300">
              Order Now
            </Link>
          </div>
          <div className="md:w-1/3">
            <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food Delivery" className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </section>
    </div>;
};
export default Home;