import React, { useState } from "react";

const Report = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for submitting your report. Our team will review it shortly.");
    setFormData({ name: "", email: "", category: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Report an Issue</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Help us keep Travel-Stay safe and reliable. Use this form to report a problem or concern.
        </p>
      </section>

      {/* Report Form */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-rose-500 mb-6">Submit a Report</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-400 outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-400 outline-none"
              >
                <option value="">Select an issue type</option>
                <option value="listing">Listing Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="host">Host Misconduct</option>
                <option value="guest">Guest Misconduct</option>
                <option value="technical">Technical Error</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Please describe the issue in detail..."
                className="w-full p-3 border rounded-lg h-40 resize-none focus:ring-2 focus:ring-rose-400 outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-8 py-3 rounded-full transition duration-300"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gray-900 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-semibold mb-3">Need Urgent Help?</h2>
        <p className="text-gray-300 mb-4">
          If your safety or someone else’s safety is at risk, please contact local authorities immediately.
        </p>
        <a
          href="mailto:support@travelstay.com"
          className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Contact Support
        </a>
      </section>
    </div>
  );
};

export default Report;
