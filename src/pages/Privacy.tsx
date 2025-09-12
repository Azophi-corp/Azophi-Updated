import React from "react";

const Privacy: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">
        We respect your privacy. This policy explains what we collect, why, and how we protect it.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Contact data you provide (name, email, phone, company)</li>
        <li>Usage data via analytics (pages viewed, device, approximate location)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use It</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>To respond to inquiries and provide services</li>
        <li>To improve site performance and security</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Choices</h2>
      <p className="text-gray-700">You can request access, correction, or deletion by emailing <a className="text-brand-600" href="mailto:info@azophi.com">info@azophi.com</a>.</p>
    </div>
  </section>
);
export default Privacy;
