import React from 'react';
import { assests } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-slate-50 px-6 md:px-10 pt-4">
      {/* Divider */}
      <hr className="border border-gray-300 mb-4" />

      {/* Footer Container */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center bg-white px-4 pb-10 gap-10 md:gap-0 rounded-xl">

        {/* Logo + Description */}
        <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left gap-3">
          <NavLink to="/">
            <img src={assests.logo} alt="logo" className="w-36 mx-auto md:mx-0" />
          </NavLink>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed px-4 md:px-0">
            Travel-Stay is a trusted global platform offering premium accommodations
            and authentic travel experiences. Discover exceptional stays, verified hosts,
            and seamless bookings — wherever your journey takes you.
          </p>
        </div>

        {/* About Section */}
        <div className="w-full md:w-auto flex flex-col justify-center items-center md:items-start gap-3">
          <h2 className="font-medium text-lg">About</h2>
          <div className="flex flex-col gap-2 text-gray-700 text-sm md:text-base">
            <NavLink to="/about" className="hover:underline">About Travel-Stay</NavLink>
            <NavLink to="/contact" className="hover:underline">Contact Travel-Stay</NavLink>
            <NavLink to="/career" className="hover:underline">Career at Travel-Stay</NavLink>
          </div>
        </div>

        {/* Support Section */}
        <div className="w-full md:w-auto flex flex-col justify-center items-center md:items-start gap-3">
          <h2 className="font-medium text-lg">Support</h2>
          <div className="flex flex-col gap-2 text-gray-700 text-sm md:text-base">
            <NavLink to="/help" className="hover:underline">Help Center</NavLink>
            <NavLink to="/cancellation" className="hover:underline">Cancellation</NavLink>
            <NavLink to="/report" className="hover:underline">Report Inconvenience</NavLink>
          </div>
        </div>

        {/* Host Section */}
        <div className="w-full md:w-auto flex flex-col justify-center items-center md:items-start gap-3">
          <h2 className="font-medium text-lg">Host</h2>
          <div className="flex flex-col gap-2 text-gray-700 text-sm md:text-base">
            <a
              href="https://travel-book-stay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Host Stay
            </a>
            <NavLink to="/terms" className="hover:underline">Terms and Conditions</NavLink>
            <NavLink to="/community" className="hover:underline">Community Forum</NavLink>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 text-sm py-4 border-t border-gray-200 mt-4">
        © {new Date().getFullYear()} Travel-Stay. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
