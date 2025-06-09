import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-45 w-auto max-w-35 object-contain" // Increased from h-12 to h-16 and added object-contain
              src="src/assets/logo.png" // Replace with your logo path
              alt="Restaurant Logo"
            />
            <span className="ml-3 text-2xl font-bold text-orange-800">
              NO NONSENSE MEALS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#"
                className="text-orange-800 hover:text-orange-600 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-orange-800 hover:text-orange-600 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                Menu
              </a>
              <a
                href="#"
                className="text-orange-800 hover:text-orange-600 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-orange-800 hover:text-orange-600 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
              >
                Contact
              </a>
              
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-800 hover:text-orange-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-orange-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-orange-800 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-orange-800 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-orange-800 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-orange-800 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <div className="flex space-x-4 px-3 py-2">
              <button className="text-orange-800 hover:text-orange-600">
                <FaShoppingCart size={20} />
              </button>
              <button className="text-orange-800 hover:text-orange-600">
                <FaUser size={20} />
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium">
                Reserve
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;