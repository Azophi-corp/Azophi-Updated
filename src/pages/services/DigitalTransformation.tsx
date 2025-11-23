import React from "react";
import Button from "../../components/ui/Button";

const DigitalTransformation: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Digital Transformation</h1>
        <p className="text-gray-600 text-lg mb-6">
          Digital transformation at Azophi means improving how work flows through your
          organization with better processes, data, and systems. It is less about new
          buzzwords and more about consistent results.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">Initiatives We Commonly Drive</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Customer portals and self service experiences that reduce ticket load.</li>
              <li>Workflow automation for approvals, requests, and routine updates.</li>
              <li>
                Integration between line of business systems so data stays in sync across
                teams.
              </li>
              <li>
                Modernization of legacy applications into more manageable, modular
                services.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">Expected Outcomes</h2>
            <p className="text-gray-700 mb-3">
              We focus on outcomes like shorter cycle times, fewer manual steps, and
              clearer reporting. That way everyone involved can see whether the effort is
              working.
            </p>
            <p className="text-gray-700">
              For example, that might show up as faster onboarding for customers, fewer
              data entry errors, or more predictable delivery of services to internal
              teams.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">Approach To Change</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              Map how work currently flows between teams and systems, including handoffs
              and delays.
            </li>
            <li>
              Identify the most important pain points and pick a small number to tackle
              first.
            </li>
            <li>
              Design and pilot new processes and supporting technology with a limited
              group.
            </li>
            <li>
              Measure the impact, refine the approach, and then roll it out more broadly.
            </li>
            <li>
              Capture lessons learned into standards and documentation so improvements
              stick.
            </li>
          </ol>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-brand-50 border rounded-xl p-6 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Start With One Process That Matters
            </h3>
            <p className="text-gray-700">
              Share a process that frustrates staff or customers and we can explore how to
              improve it before you commit to a larger program.
            </p>
          </div>
          <Button to="/contact">Plan a pilot</Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;

// Notes:
// The digital transformation page keeps the focus on process and measurable outcomes instead of generic transformation language.
// The step by step list describes how we run small pilots that can scale rather than trying to change everything at once.
// The call to action points to a single process as a good low risk starting point for new clients.
