import React from "react";
import Button from "../../components/ui/Button";

const ItConsulting: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">IT Consulting</h1>
        <p className="text-gray-600 text-lg mb-6">
          Azophi helps organizations translate business goals into a practical, ordered
          set of technology changes. The result is a roadmap and operating model that
          your team can actually follow.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">What You Get</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Assessment of people, processes, and platforms in your current setup.</li>
              <li>Short list of critical risks with clear options for mitigating them.</li>
              <li>
                Twelve to twenty four month roadmap that aligns initiatives with
                capacity and budget.
              </li>
              <li>
                Recommendations for cloud, security, and data that match your risk and
                regulatory profile.
              </li>
              <li>
                Executive communication pack so leaders can explain the plan to their
                teams.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">Engagement Models</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Advisory Sprint:</span> focused two to
                four week engagement around a specific question such as cloud readiness
                or security posture.
              </li>
              <li>
                <span className="font-semibold">Fractional Leadership:</span> part time
                guidance that joins your planning rhythm and helps steer vendors.
              </li>
              <li>
                <span className="font-semibold">Program Oversight:</span> structure for
                large change programs with checkpoints and risk tracking.
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">Our Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              Discovery sessions with stakeholders from technology, operations, and
              leadership.
            </li>
            <li>
              Data gathering for assets, incidents, service levels, spend, and any audit
              findings.
            </li>
            <li>
              Analysis of gaps and pressure points, then grouping of work into logical
              themes.
            </li>
            <li>
              Roadmap draft with timelines, owners, and success measures that you can
              review and refine with us.
            </li>
            <li>
              Handover of documents and, if you choose, ongoing checkpoints to keep the
              plan on track.
            </li>
          </ol>
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">Typical Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Leaders share a clearer picture of what technology work is planned and why
              it matters.
            </li>
            <li>
              Teams see which projects to prioritize and which can wait until a later
              phase.
            </li>
            <li>
              Vendors have a more precise scope so engagements run with fewer surprises.
            </li>
            <li>
              You have a repeatable pattern for revisiting the roadmap each quarter or
              half year.
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-brand-50 border rounded-xl p-6 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Ready To Clarify Your Technology Plan
            </h3>
            <p className="text-gray-700">
              Share your current priorities and we will suggest a consulting pattern that
              fits your stage and capacity.
            </p>
          </div>
          <Button to="/contact">Talk to an expert</Button>
        </div>
      </div>
    </section>
  );
};

export default ItConsulting;

// Notes:
// This page expands the consulting offer into outcomes, process, and engagement models so visitors know what to expect.
// The language avoids jargon where possible and highlights how this work feels for both leaders and technical staff.
// The closing panel keeps a single clear call to action so it is easy to move from reading into a conversation.
