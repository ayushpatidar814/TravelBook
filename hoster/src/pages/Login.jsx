import React, { useState } from "react";
import { assests } from "../assets/assets";

const Login = () => {
  
  const[visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-slate-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6">
        {/* Logo */}
        <div className="text-center">
          <img
            src={assests.logo}
            alt="Travel-Stay Logo"
            className="w-16 h-16 mx-auto mb-3"
          />
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to continue your journey with <span className="text-pink-500 font-medium">Travel-Stay</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
              <img src={assests.email} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
              <img src={assests.lock} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full outline-none text-gray-700"
              />
              {
                !visible ?
                <img onClick={() => setVisible(true)} src={assests.eye_open} alt="" className="text-gray-400 w-5 h-5 mr-2" />
                : 
                <img onClick={() => setVisible(false)} src={assests.eye_close} alt="" className="text-gray-400 w-5 h-5 mr-2" />
              }
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" /> Remember me
            </label>
            <a href="#" className="text-pink-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-full transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google login */}
        <button className="w-full border border-gray-300 hover:bg-gray-50 rounded-full py-3 flex items-center justify-center gap-3 transition">
          <img
            src={assests.google}
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Continue with Google</span>
        </button>

        {/* Signup link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-pink-500 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
