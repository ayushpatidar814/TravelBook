import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assests } from '../assets/assets.js';
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  const[menuOpen, setMenuOpen] = useState(false);
  const[searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-slate-50 px-6 md:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
            <NavLink to='/'>
                <img src={assests.logo} alt="Travel-Stay logo" className="w-28 md:w-32" />
            </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center bg-white px-4 md:px-6 lg:px-8 py-3 rounded-full">
          <NavLink to="/" className="text-base md:text-lg font-medium hover:text-teal-600">Home</NavLink>
          <NavLink to="/bookstay" className="text-base md:text-lg font-medium hover:text-teal-600">Book Stay</NavLink>
          <NavLink to="/about" className="text-base md:text-lg font-medium hover:text-teal-600">About</NavLink>
          <NavLink to="/contact" className="text-base md:text-lg font-medium hover:text-teal-600">Contact</NavLink>
        </div>

        {/* Desktop Right Menu */}
        <div className="hidden md:flex gap-6 items-center bg-white px-4 md:px-6 lg:px-6 py-3 rounded-full">
          <img onClick={() => setSearchOpen(true)} src={assests.search_icon} alt="search icon" className="w-5 cursor-pointer" />
          <NavLink to='/profile'>
            <img src={assests.user} alt="" className='w-5 cursor-pointer' />
          </NavLink>
          <NavLink to="/login" className="text-base md:text-lg font-medium hover:text-teal-600">Login</NavLink>
          <NavLink to="/signup" className="text-base md:text-lg font-medium hover:text-teal-600">SignUp</NavLink>
          <a href="https://travel-book-stay.vercel.app" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-medium text-gray-500 hover:text-blue-600">Host a stay</a>
        </div>

        <div className='absolute top-23 right-8 z-100'>
          { searchOpen && <SearchBar setSearchOpen={setSearchOpen} /> }
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {menuOpen ? <img src={assests.cross_icon} alt="cross icon" className='w-6' /> : <img src={assests.menu_icon} alt='menu icon' className='w-6' />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white rounded-xl p-5 shadow-lg">
          <NavLink to="/" onClick={toggleMenu} className="text-lg font-medium hover:text-teal-600">Home</NavLink>
          <NavLink to="/bookstay" onClick={toggleMenu} className="text-lg font-medium hover:text-teal-600">Book Stay</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="text-lg font-medium hover:text-teal-600">About</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="text-lg font-medium hover:text-teal-600">Contact</NavLink>
          <hr className="border-slate-200" />
          <div className="flex gap-4 items-center justify-between">
            <img onClick={() => {setMenuOpen(false); setSearchOpen(true)}} src={assests.search_icon} alt="search icon" className="w-5" />
            <NavLink to='/profile'>
              <img onClick={() => {setMenuOpen(false)}} src={assests.user} alt="" className='w-5 cursor-pointer' />
            </NavLink>
            <div className='flex gap-4'>
                <NavLink to="/login" onClick={toggleMenu} className="text-lg font-medium hover:text-teal-600">Login</NavLink>
                <NavLink to="/signup" onClick={toggleMenu} className="text-lg font-medium hover:text-teal-600">SignUp</NavLink>
            </div>
            <a href="https://travel-book-stay.vercel.app" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-medium text-gray-500 hover:text-blue-600">Host a stay</a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
