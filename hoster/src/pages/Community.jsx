import React from "react";
import { assests } from '../assets/assets.js'

const Community = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* Header Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Community</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Travel-Stay is more than just stays — it's a community of hosts and
          travelers sharing experiences, cultures, and stories from across the world.
        </p>
      </section>

      {/* Community Highlights */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
          <img
            src={assests.logo}
            alt="Hosts"
            className="w-20 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold mb-3 text-rose-500">
            Empowering Hosts
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our hosts bring local charm to global travelers. From homestays to
            luxury villas, every stay reflects authentic hospitality and care.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
          <img
            src={assests.logo}
            alt="Travelers"
            className="w-20 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold mb-3 text-rose-500">
            Connecting Travelers
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our travelers explore with purpose — building memories, friendships,
            and meaningful connections across borders and cultures.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
          <img
            src={assests.logo}
            alt="Sustainability"
            className="w-20 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-xl font-semibold mb-3 text-rose-500">
            Supporting Sustainability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe in responsible travel — supporting eco-friendly stays,
            local artisans, and community growth through every booking.
          </p>
        </div>
      </section>

      {/* Join Community */}
      <section className="bg-white py-16 px-6 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Join the Travel-Stay Community
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Become part of a global network of travelers and hosts who believe in
          cultural exchange, sustainable tourism, and unforgettable experiences.
        </p>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
          Join Now
        </button>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Voices from Our Community
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-100 rounded-xl p-6 shadow-sm">
            <p className="italic text-gray-700 mb-4">
              “Hosting on Travel-Stay has changed the way I connect with people.
              I’ve welcomed travelers from 12 countries — each visit adds a new story.”
            </p>
            <h4 className="text-rose-500 font-semibold">— Aarti Sharma, Host in Udaipur</h4>
          </div>

          <div className="bg-slate-100 rounded-xl p-6 shadow-sm">
            <p className="italic text-gray-700 mb-4">
              “I found places that felt like home. The community feels genuine
              and every host made my trip more memorable.”
            </p>
            <h4 className="text-rose-500 font-semibold">— Rohan Mehta, Traveler</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Community;
