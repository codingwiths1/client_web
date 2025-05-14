import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, FilterIcon, ChevronDownIcon, XIcon } from 'lucide-react';
import FoodCard, { FoodItem } from '../components/FoodCard';
// Sample food data for demonstration
const allFoods: FoodItem[] = [{
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
}, {
  id: '5',
  name: 'BBQ Chicken Pizza',
  image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 14.99,
  rating: 4.7,
  category: 'Pizza',
  description: 'Grilled chicken, red onions, and BBQ sauce on a hand-tossed crust.'
}, {
  id: '6',
  name: 'Chocolate Brownie',
  image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 4.99,
  rating: 4.9,
  category: 'Desserts',
  description: 'Rich chocolate brownie with walnuts, served warm with vanilla ice cream.'
}, {
  id: '7',
  name: 'Strawberry Smoothie',
  image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 5.99,
  rating: 4.4,
  category: 'Drinks',
  description: 'Refreshing smoothie made with fresh strawberries, banana, and yogurt.'
}, {
  id: '8',
  name: 'Spicy Chicken Sandwich',
  image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  price: 8.99,
  rating: 4.6,
  category: 'Burgers',
  description: 'Crispy chicken fillet with spicy sauce, lettuce, and pickles on a brioche bun.'
}];
const categories = ['All', 'Burgers', 'Pizza', 'Salads', 'Wraps', 'Desserts', 'Drinks'];
const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Rating'];
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Recommended');
  const [showFilters, setShowFilters] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would trigger a search here
  };
  const filteredFoods = allFoods.filter(food => (selectedCategory === 'All' || food.category === selectedCategory) && (searchTerm === '' || food.name.toLowerCase().includes(searchTerm.toLowerCase()))).sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  return <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Find Your Favorite Food
      </h1>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative mb-6">
        <input type="text" placeholder="Search for food..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
        <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {searchTerm && <button type="button" onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <XIcon size={18} />
          </button>}
      </form>
      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
            <FilterIcon size={18} />
            <span>Filters</span>
            <ChevronDownIcon size={18} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          <div className="relative">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="appearance-none bg-gray-100 hover:bg-gray-200 px-4 py-2 pr-8 rounded-md focus:outline-none">
              {sortOptions.map(option => <option key={option} value={option}>
                  {option}
                </option>)}
            </select>
            <ChevronDownIcon size={18} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
        <div className="text-sm text-gray-600">
          {filteredFoods.length} {filteredFoods.length === 1 ? 'item' : 'items'}{' '}
          found
        </div>
      </div>
      {/* Category filters */}
      {showFilters && <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category}
              </button>)}
          </div>
        </div>}
      {/* Results */}
      {filteredFoods.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFoods.map(food => <FoodCard key={food.id} food={food} onAddToCart={() => {}} />)}
        </div> : <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <div className="mb-4 flex justify-center">
            <SearchIcon size={48} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            No results found
          </h2>
          <p className="text-gray-600">
            Try adjusting your search or filters to find what you're looking
            for.
          </p>
        </div>}
    </div>;
};
export default Search;