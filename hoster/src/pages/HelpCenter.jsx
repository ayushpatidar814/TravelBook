import React from "react";

const HelpCenter = () => {
  const faqs = [
    {
      category: "Bookings",
      questions: [
        { q: "How do I modify or cancel my booking?", a: "Go to 'My Trips', select your reservation, and click 'Modify' or 'Cancel'. Review cancellation policies before proceeding." },
        { q: "What happens if my host cancels my stay?", a: "If a host cancels, you’ll receive a full refund or the option to rebook another stay through Travel-Stay support." },
      ],
    },
    {
      category: "Payments",
      questions: [
        { q: "Which payment methods are accepted?", a: "We accept credit/debit cards, UPI, and most major online wallets." },
        { q: "When will I be charged for my booking?", a: "Payment is processed once your booking is confirmed. For longer stays, you may see a pre-authorization before final charge." },
      ],
    },
    {
      category: "Hosting",
      questions: [
        { q: "How can I become a host?", a: "Click 'Host a Stay' in the menu, create your property listing, and upload photos and pricing details." },
        { q: "How do I manage my listing?", a: "You can edit property details, availability, and prices anytime under your Host Dashboard." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* 🧭 Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          We’re here to help you every step of the way. Find answers, get support, or contact our team.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for help (e.g. cancel booking, refund)"
            className="w-full bg-white md:w-1/2 px-5 py-3 rounded-full focus:outline-none shadow-md placeholder-gray-500"
          />
        </div>
      </section>

      {/* 📘 FAQ Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-12">
          {faqs.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">{section.category}</h3>
              <div className="space-y-5">
                {section.questions.map((faq, i) => (
                  <div key={i}>
                    <p className="font-semibold text-gray-800">{faq.q}</p>
                    <p className="text-gray-600 mt-1">{faq.a}</p>
                    <hr className="my-3 border-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 Contact Support */}
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Still Need Help?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Our support team is available 24/7 to assist with your bookings, payments, or hosting questions.
        </p>
        <a
          href="mailto:support@travelstay.com"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Contact Support
        </a>
      </section>
    </div>
  );
};

export default HelpCenter;
