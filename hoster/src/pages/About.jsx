import React from "react";
import { assests } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero_img.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Discover. Connect. Belong.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold text-pink-400">Travel-Stay</span> — 
            where every stay tells a story, and every journey feels like home.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={assests.our_story}
          alt="Our Story"
          className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Travel-Stay began with a simple belief — that travel is more than
            just seeing new places. It's about creating connections, sharing
            stories, and feeling at home anywhere you go.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From humble beginnings, we've grown into a global platform that
            helps thousands of travelers find authentic stays and experiences
            every day.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe in travel that brings people together. Our mission is to
              empower hosts and guests to connect authentically, creating a world
              where everyone can feel they belong — anywhere.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition">
              <a href="" target="_blank" rel="noopener noreferrer">
                Become a Host
              </a>
            </button>
          </div>
          <img
            src={assests.mission}
            alt="Our Mission"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              icon: assests.community,
              title: "Community",
              desc: "We bring people together to share experiences and cultures.",
            },
            {
              icon: assests.trust,
              title: "Trust",
              desc: "Every host and guest verified for safety and peace of mind.",
            },
            {
              icon: assests.innovation,
              title: "Innovation",
              desc: "Constantly improving how people travel, connect, and stay.",
            },
            {
              icon: assests.sustainability,
              title: "Sustainability",
              desc: "Committed to responsible, eco-friendly travel solutions.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="mx-auto w-16 mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-pink-200 text-white py-20 text-center px-6 overflow-hidden rounded-xl">
        <div className="absolute inset-0 opacity-80 rounded-xl"
          style={{
            backgroundImage: "url('/pattern.jpeg')",
        }} />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to start your next adventure?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Find beautiful stays, unforgettable experiences, and trusted hosts — only on Travel-Stay.
          </p>
          <button onClick={() => navigate('../bookstay')} className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Stays
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
