import { assests } from "../assets/assets";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

const SearchBar = ({ setSearchOpen }) => {

    const navigate = useNavigate();

    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);

    const handleSearch = () => {
        if(!location.trim()) return alert("Please enter location")
        
        const query = new URLSearchParams({
            location,
            checkIn,
            checkOut,
            guests,
        }).toString();

        navigate(`/bookstay?${query}`)
        setSearchOpen(false)
    }

  return (
    <div className="w-full flex justify-center px-4 mt-8">
      <div className="flex flex-wrap md:flex-nowrap items-center bg-white shadow-lg border border-gray-200 rounded-xl md:rounded-full py-3 px-5 md:space-x-6 w-full max-w-5xl hover:shadow-2xl transition-all duration-300 ease-in-out">
        
        {/* Location */}
        <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 md:pr-6 pb-2 md:pb-0">
          <img src={assests.mappin} alt="map" className="w-5 h-5" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where to?"
            className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-500 text-sm md:text-base"
          />
        </div>

        {/* Check-in */}
        <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 md:pr-6 pb-2 md:pb-0 mt-2 md:mt-0">
          <img src={assests.calendar} alt="check-in" className="w-5 h-5" />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="outline-none bg-transparent text-gray-700 w-full text-sm md:text-base"
          />
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 md:pr-6 pb-2 md:pb-0 mt-2 md:mt-0">
          <img src={assests.calendar} alt="check-out" className="w-5 h-5" />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="outline-none bg-transparent text-gray-700 w-full text-sm md:text-base"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 w-10 md:w-20 pb-2 md:pb-0 mt-2 md:mt-0">
          <img src={assests.community} alt="guests" className="w-5 h-5" />
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="Guests"
            className="outline-none bg-transparent text-gray-700 w-full text-sm md:text-base"
          />
        </div>

        {/* Search Button */}
        <button onClick={handleSearch} className="w-50 bg-pink-500 hover:bg-pink-600 text-white p-3 md:p-4 rounded-full ml-auto transition mt-3 md:mt-0 shadow-md hover:shadow-lg flex items-center justify-center">
          <img src={assests.search} alt="search" className="w-5 h-5" />
        </button>

        {/* Close Icon */}
          <button onClick={() => setSearchOpen(false)} className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition">
            <img src={assests.cross_icon} alt="close" className="w-5 h-5" />
          </button>

      </div>
    </div>
  );
};

export default SearchBar;
