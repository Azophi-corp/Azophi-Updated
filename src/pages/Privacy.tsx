import React from "react";

const Privacy: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Your privacy matters to us. This page explains what information we collect,
          how we use it, and what choices you have.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Contact details:</span> such as your name,
            email address, phone number, and company when you submit a form or contact us.
          </li>
          <li>
            <span className="font-semibold">Usage information:</span> basic analytics
            about pages visited, browser type, and approximate location based on IP
            address.
          </li>
          <li>
            <span className="font-semibold">Communications:</span> copies of emails or
            messages you send us and notes from conversations where relevant.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use This Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>To respond to your inquiries and provide services you request.</li>
          <li>To manage our relationship with you and record project details.</li>
          <li>To maintain and improve our site and understand general usage patterns.</li>
          <li>To protect the security of our systems and detect possible misuse.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Sharing Of Information</h2>
        <p className="text-gray-700 mb-3">
          We do not sell your personal information. We may share limited information with
          trusted service providers who help us operate our site, manage communications,
          or deliver services, and only for those purposes.
        </p>
        <p className="text-gray-700">
          We may also disclose information if required by law or in response to valid
          legal requests from authorities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Data Security</h2>
        <p className="text-gray-700 mb-3">
          We use reasonable technical and organizational measures to protect personal
          information. No method of transmission or storage is completely secure, but we
          work to keep risk at a practical minimum.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Your Choices</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            You can ask for a copy of the personal information we hold about you where
            allowed by law.
          </li>
          <li>
            You can request corrections if you believe any of that information is
            inaccurate or incomplete.
          </li>
          <li>
            You can ask us to delete information where there is no good reason for us to
            keep it, subject to legal obligations.
          </li>
        </ul>

        <p className="text-gray-700 mt-4">
          To exercise any of these options, contact us at{" "}
          <a className="text-brand-600" href="mailto:info@azophi.com">
            info@azophi.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Changes To This Policy</h2>
        <p className="text-gray-700">
          We may update this policy from time to time. When we do, we will change the
          last updated date on this page. Your continued use of the site after changes are
          posted means you accept the updated policy.
        </p>
      </div>
    </section>
  );
};

export default Privacy;

// Notes:
// The privacy page now gives a full overview of what we collect, why we collect it, and how people can contact us.
// Wording is plain and avoids legal-heavy phrasing so small teams can still understand it easily.
// If regulations or internal practices change we can update the relevant section without rewriting the whole page.
