import React, { useState } from "react";
import { assests } from "../assets/assets";

const Contact = () => {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')

  const handleSubmit = () => {

  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${assests.contact}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you — whether it's a question, feedback, or partnership idea.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team is here to assist you. Whether you're a traveler looking for your next stay, or a host wanting to join our community — reach out anytime.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img src={assests.mappin} alt="" className="w-6 h-6 text-pink-500" />
              <p className="text-gray-700">
                123 Travel Street, Green Avenue, Bhopal, India
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img src={assests.phone} alt="" className="w-6 h-6 text-pink-500" />
              <p className="text-gray-700">+91 62651 26061</p>
            </div>

            <div className="flex items-start gap-4">
              <img src={assests.email} alt="" className="w-6 h-6 text-pink-500" />
              <p className="text-gray-700">support@travelstay.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl shadow-md space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px]">
        <iframe
          title="Travel-Stay Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6187357063044!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f4d2e64a6f%3A0xb2dce1cfcf4b5f!2sBhopal!5e0!3m2!1sen!2sin!4v1695994234345!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
