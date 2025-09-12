import React from "react";

const About: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">About Azophi</h1>
      <p className="text-gray-600 text-lg mb-6">
        We’re a team of architects, engineers, and operators who believe technology should serve the business—measurably.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-700">Deliver tangible outcomes with secure, scalable systems—no buzzword bingo.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="text-xl font-semibold mb-2">Principles</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Security by default</li><li>Automation over repetition</li><li>Clarity over complexity</li><li>Metrics over opinions</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="text-xl font-semibold mb-2">Credentials</h3>
          <p className="text-gray-700">AWS/Azure certs, CISSP, ITIL. Experience across finance, healthcare, retail, SaaS.</p>
        </div>
      </div>
    </div>
  </section>
);
export default About;
