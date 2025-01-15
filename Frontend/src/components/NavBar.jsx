import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate();
  // Add state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='text-white'>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-green-500">
              <span className='text-white'>Start</span>Prep
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-green-500 hover:text-green-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <Link to="/" className="hover:text-green-500 transition-colors text-sm lg:text-base">Home</Link>
              <Link to="/features" className="hover:text-green-500 transition-colors text-sm lg:text-base">Features</Link>
              <Link to="/about" className="hover:text-green-500 transition-colors text-sm lg:text-base">About</Link>
              <Link to="/contact" className="hover:text-green-500 transition-colors text-sm lg:text-base">Contact</Link>
            </div>
            <div className='hidden md:flex gap-4'>
              <button onClick={() => navigate('/login')} className="hidden md:block bg-green-500 px-4 lg:px-6 py-2 rounded-full hover:bg-green-600 transition-colors text-sm lg:text-base">
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="hidden md:block bg-green-500 px-4 lg:px-6 py-2 rounded-full hover:bg-green-600 transition-colors text-sm lg:text-base">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 transition-colors">
                Home
              </Link>
              <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 transition-colors">
                Features
              </Link>
              <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 transition-colors">
                About
              </Link>
              <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <button className="w-full bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-colors text-sm">
                  Login
                </button>
                <button className="w-full bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-colors text-sm">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
