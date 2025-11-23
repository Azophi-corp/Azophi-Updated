import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">About Azophi</h1>
        <p className="text-gray-600 text-lg mb-6">
          Azophi was created to give organizations a partner that understands both the
          daily realities of in house IT teams and the long term goals of leadership.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-700">
              Deliver technology outcomes that leaders can measure and that employees can
              feel in their day to day work.
            </p>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold mb-2">Principles</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Security and reliability are baked in early, not added later.</li>
              <li>Automation is used to reduce repetitive work where it makes sense.</li>
              <li>Clarity in documentation and roles is valued over complexity.</li>
              <li>Metrics guide decisions instead of gut feeling alone.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-700">
              Work across finance, healthcare, retail, manufacturing, and SaaS has shaped
              how we design operating models and choose tools.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">How We Work With Clients</h2>
            <p className="text-gray-700 mb-3">
              We spend the first part of any engagement listening and mapping how work
              flows today. That means understanding who is responsible for what, which
              systems are critical, and where the pain shows up.
            </p>
            <p className="text-gray-700 mb-3">
              From there we put together a simple picture of the environment and a short
              list of improvements that balance risk, cost, and effort. This becomes the
              first version of a roadmap, which we review together and adjust.
            </p>
            <p className="text-gray-700">
              The goal is to build a plan that feels realistic and does not rely on one or
              two key people to carry everything.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">
              What Long Term Partnerships Look Like
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Regular check ins where we review incidents, changes, and trends.</li>
              <li>
                Shared dashboards so leaders and technical staff work from the same
                information.
              </li>
              <li>
                Periodic roadmap refreshes based on new goals, acquisitions, or changes in
                the market.
              </li>
              <li>
                Joint planning for audits, compliance efforts, and major platform changes.
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl border bg-white">
          <h2 className="text-2xl font-semibold mb-3">Why Clients Stay</h2>
          <p className="text-gray-700 mb-3">
            Many clients start with a specific need like a cloud migration, security
            assessment, or a desire to reduce incidents. Over time the relationship grows
            into a broader partnership because the team sees consistent follow through and
            honest communication.
          </p>
          <p className="text-gray-700">
            We are comfortable saying no when something does not fit the agreed priorities
            and explaining why. That level of clarity helps both sides stay focused and
            protects budgets and timelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

// Notes:
// This page expands on the shorter home about section with more detail on working style and long term relationships.
// The layout uses simple cards so the content feels structured without needing extra components.
// The emphasis here is on expectations and collaboration rather than a long company history.
