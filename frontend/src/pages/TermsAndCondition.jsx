import React from "react";

const TermsAndCondition = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms & Conditions
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Please read these terms carefully before using Travel-Stay’s platform and services.
        </p>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using Travel-Stay, you agree to comply with and be bound by these Terms and Conditions. 
            If you do not agree, please refrain from using our platform or services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            2. Services Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Travel-Stay is a digital platform that connects hosts offering stays with guests seeking accommodation. 
            We do not own or control any properties listed on the site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>You must provide accurate and up-to-date information when creating an account.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>Misuse, fraud, or violation of our policies may result in suspension or termination.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            4. Booking & Payments
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All bookings are subject to host approval and availability. Payments processed through Travel-Stay’s 
            platform must follow our secure gateway process. Refunds, if applicable, will adhere to our cancellation policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            5. Cancellation & Refund Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Guests may cancel their booking as per the host’s listed cancellation terms. 
            Refunds are processed after deducting any applicable service fees. 
            Travel-Stay reserves the right to modify refund timelines based on payment method or location.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Travel-Stay acts solely as an intermediary between hosts and guests. We are not liable for 
            property conditions, safety issues, or any damages arising during a stay.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            7. Modifications to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms periodically to reflect service improvements or legal requirements. 
            Continued use of Travel-Stay after updates signifies acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-rose-500 mb-3">
            8. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions or concerns regarding these Terms & Conditions, please contact us at{" "}
            <a
              href="mailto:support@travelstay.com"
              className="text-rose-500 hover:underline font-medium"
            >
              support@travelstay.com
            </a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Travel-Stay. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default TermsAndCondition;
