import React, { useEffect, useState } from "react";
import { userProfile, fetchedBookings } from "../assets/assets.js";

const Profile = () => {
  const[bookings, setBookings] = useState([]);
  const[loading, setLoading] = useState(false);
  const[editing, setEditing] = useState(false);
  const[editForm, setEditForm] = useState({ ...userProfile });
  const[user, setUser] = useState([])

  useEffect(() => {
    setLoading(true);
    setBookings(fetchedBookings)
  }, [])

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!editForm.name.trim() || !editForm.email.trim()) {
      return alert("Name and email are required!");
    }

    setUser(editForm);
    setEditing(false);
  };


  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        Your Profile
      </h2>
    
      {!editing ? (
        <>
      {/* Profile Card */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={userProfile.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full border-2 border-gray-300 object-cover"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800">
            {userProfile.name}
          </h3>
          <p className="text-gray-500">{userProfile.email}</p>
          <p className="mt-2 text-sm text-gray-600">
            📍 {userProfile.location}
          </p>

          <button onClick={() => {setEditing(true); setEditForm(user);}} className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
          </>
        ) : (
            <>
            
          <div className="flex-1 space-y-3">
            <input
              id="avatarUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files[0]}
            />
            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={editForm.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="location"
              value={editForm.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex gap-4 mt-4">
              <button
                onClick={handleSave}
                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
          </>
        )}

      {/* Bookings */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Your Bookings
        </h3>

        {!loading ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-gray-500 text-center">
            Loading your bookings...
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-gray-500 text-center">
            You have no upcoming bookings yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={b.image}
                  alt={b.place}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {b.place}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {b.checkIn} → {b.checkOut}
                  </p>
                  <p className="mt-2 text-blue-600 font-medium">
                    ₹{b.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
