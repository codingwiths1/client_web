import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon, SearchIcon, MenuIcon, XIcon } from 'lucide-react';
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <span className="text-2xl">TastyBites</span>
          </Link>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-orange-200">
              <HomeIcon size={20} />
              <span>Home</span>
            </Link>
            <Link to="/search" className="flex items-center space-x-1 hover:text-orange-200">
              <SearchIcon size={20} />
              <span>Search</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-1 hover:text-orange-200">
              <ShoppingCartIcon size={20} />
              <span>Cart</span>
            </Link>
          </nav>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden bg-orange-600 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded" onClick={toggleMenu}>
                <HomeIcon size={20} />
                <span>Home</span>
              </Link>
              <Link to="/search" className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded" onClick={toggleMenu}>
                <SearchIcon size={20} />
                <span>Search</span>
              </Link>
              <Link to="/cart" className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded" onClick={toggleMenu}>
                <ShoppingCartIcon size={20} />
                <span>Cart</span>
              </Link>
            </div>
          </div>}
      </header>
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">TastyBites</h3>
              <p className="text-gray-300">
                Delicious food delivered to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/search" className="text-gray-300 hover:text-white">
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-gray-300 hover:text-white">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <p className="text-gray-300">Email: info@tastybites.com</p>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} TastyBites. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;