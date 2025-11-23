import React, { useState } from "react";
import { assests } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
// import airplane_on_world from "../assets/airplane_on_world.json"; // make sure path is correct

const HeroSection = () => {

    const navigate = useNavigate();

    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [guests, setGuests] = useState(1);

    const handleSearch = () => {
        if(!location.trim()) return alert("Please enter location")
        
        const query = new URLSearchParams({
            location,
            checkIn,
            guests,
        }).toString();

        navigate(`/bookstay?${query}`)
    }

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center rounded-xl overflow-hidden"
      style={{ backgroundImage: `url(${assests.hero_img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

      {/* Lottie Animation */}
      {/* <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 sm:w-48 md:w-50">
        <Lottie animationData={airplane_on_world} loop={true} />
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-white text-center flex flex-col items-center justify-center px-6 md:px-10 space-y-6 max-w-3xl mt-32 sm:mt-40 md:mt-48">
        {/* Hero Text */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Find Your Next Stay
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200">
          Stay anywhere. Feel at home everywhere. Discover unique homes, verified hosts,
          and unforgettable experiences with Travel-Stay.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col items-center gap-3 py-4 w-full sm:w-[90%] mt-6 ">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:w-[90%]">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where to?" 
            className="flex-1 px-4 py-2 bg-white shadow-lg rounded-full outline-none text-gray-700 w-auto"
            />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="px-4 py-2 rounded-full bg-white shadow-lg outline-none text-gray-700 w-full sm:w-auto"
            />
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="Guests"
            min="1"
            className="px-4 py-2 rounded-full bg-white shadow-lg outline-none text-gray-700 w-full sm:w-auto"
            />
          </div>
          <button onClick={handleSearch} className="px-12 py-2 bg-teal-600 text-whitebg-white shadow-lg rounded-full hover:bg-teal-700 transition-all duration-300 w-full sm:w-auto">
            Search
          </button>
        </div>

        {/* CTA Button */}
        <NavLink to="/bookstay">
          <button className="mt-6 sm:mt-8 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-lg shadow-lg transition-all duration-300">
            Explore Stays
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
