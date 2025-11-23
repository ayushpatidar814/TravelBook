import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assests } from "../assets/assets";

const Signup = () => {
  
  const[visible, setVisible] = useState(false);
  const[visibles, setVisibles] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full my-2 max-w-md p-8 space-y-6">
        <div className="text-center">
          <img
            src={assests.logo}
            alt="Travel-Stay"
            className="w-16 h-16 mx-auto mb-3"
          />
          <h2 className="text-3xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Join the <span className="text-pink-500 font-medium">Travel-Stay</span> community today!
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
              <img src={assests.user} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
              <img src={assests.email} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
              <img src={assests.lock} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none text-gray-700"
                required
              />
              {
                !visible ?
                  <img onClick={() => setVisible(true)} src={assests.eye_open} alt="" className="text-gray-400 w-5 h-5 mr-2" />
                  : 
                  <img onClick={() => setVisible(false)} src={assests.eye_close} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              }
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
              <img src={assests.lock} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type={visibles ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full outline-none text-gray-700"
                required
              />
              {
                !visibles ?
                <img onClick={() => setVisibles(true)} src={assests.eye_open} alt="" className="text-gray-400 w-5 h-5 mr-2" />
                : 
                <img onClick={() => setVisibles(false)} src={assests.eye_close} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              }
            </div>
          </div>

          {/* {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )} */}

          <button
            type="submit"
            // disabled={loading}
            className={`w-full bg-pink-500 text-white font-semibold py-3 rounded-full transition`}
          >Sign Up
            {/* {loading ? "Creating Account..." : "Sign Up"} */}
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 hover:bg-gray-50 rounded-full py-3 flex items-center justify-center gap-3 transition">
          <img src={assests.google} alt="Google" className="w-5 h-5" />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-500 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
