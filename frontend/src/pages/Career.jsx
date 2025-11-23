import React from "react";

const Career = () => {
  const openings = [
    {
      title: "Frontend Developer (React.js)",
      location: "Remote / Pune, India",
      type: "Full-time",
      desc: "Build beautiful, responsive web interfaces for our booking platform using React, Tailwind, and modern tooling.",
    },
    {
      title: "Backend Developer (Node.js)",
      location: "Remote / Bengaluru, India",
      type: "Full-time",
      desc: "Develop robust, scalable APIs to support Travel-Stay’s growing user base using Node.js, Express, and MongoDB.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote / Delhi, India",
      type: "Full-time",
      desc: "Design intuitive, elegant experiences that bring travel discovery and booking to life.",
    },
    {
      title: "Digital Marketing Intern",
      location: "Remote",
      type: "Internship",
      desc: "Assist our marketing team with content creation, analytics, and SEO to grow our brand.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-gray-800">
      {/* 🌍 Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join the Travel-Stay Team
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Help us redefine how people travel and experience the world — one
          stay at a time.
        </p>
      </section>

      {/* 💡 About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3 text-pink-600">
              🚀 Innovation First
            </h3>
            <p className="text-gray-600">
              We constantly experiment with technology to create world-class
              travel experiences that empower explorers everywhere.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3 text-pink-600">
              🌍 Work From Anywhere
            </h3>
            <p className="text-gray-600">
              Our flexible remote-first culture helps you work from anywhere
              while staying connected and productive.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3 text-pink-600">
              ❤️ People Over Process
            </h3>
            <p className="text-gray-600">
              We care about our people, their growth, and creating an inclusive
              environment that values creativity and curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* 💼 Job Openings Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Current Openings
        </h2>

        {openings.length ? (
          <div className="grid md:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-3">{job.desc}</p>
                <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                </div>
                <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-sm font-medium transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No open roles currently. Check back soon!
          </p>
        )}
      </section>

      {/* ✨ Footer CTA */}
      <section className="bg-gray-900 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Let’s Build the Future of Travel Together
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          We’re always looking for passionate people to join our growing team.
          Even if your dream role isn’t listed, we’d love to hear from you!
        </p>
        <a
          href="mailto:careers@travelstay.com"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Send Your Resume
        </a>
      </section>
    </div>
  );
};

export default Career;
