import React from "react";

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* 🌄 Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation & Refund Policy</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Plans change — we understand. Here’s how cancellations and refunds work on Travel-Stay.
        </p>
      </section>

      {/* 📘 Policy Details */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-10">
        {/* Standard Policy */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">Standard Cancellation Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Guests can cancel their booking for a full refund up to <strong>48 hours after booking</strong>,
            if the cancellation occurs at least <strong>5 days before check-in</strong>.  
            After that, cancellations made within 5 days of check-in will receive a <strong>50% refund</strong>
            for unused nights.
          </p>
        </div>

        {/* Flexible Policy */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">Flexible Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            For hosts who offer a flexible policy, guests can cancel up to <strong>24 hours before check-in</strong>
            for a full refund.  
            Cancellations made after that period will incur charges for the first night only.
          </p>
        </div>

        {/* Non-Refundable Bookings */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">Non-Refundable Bookings</h2>
          <p className="text-gray-700 leading-relaxed">
            Some properties offer discounted non-refundable rates.  
            Once booked, these cannot be canceled or refunded, except under rare circumstances 
            such as verified travel restrictions or emergencies.
          </p>
        </div>

        {/* Host Cancellations */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">If a Host Cancels</h2>
          <p className="text-gray-700 leading-relaxed">
            If your host cancels your booking, you’ll receive a <strong>100% refund</strong> 
            or an option to rebook another stay of similar value.  
            Repeated cancellations by hosts may lead to penalties or suspension.
          </p>
        </div>

        {/* Refund Processing */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">Refund Process</h2>
          <p className="text-gray-700 leading-relaxed">
            Refunds are automatically processed to your original payment method.  
            Depending on your bank or provider, it may take <strong>5–10 business days</strong> to reflect in your account.  
            For UPI or wallet payments, refunds are typically instant.
          </p>
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">Need Help with a Cancellation?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          If your trip was affected by an emergency or you’re having trouble requesting a refund,
          our support team can help.
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

export default Cancellation;
