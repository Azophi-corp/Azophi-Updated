import React from "react";
import Button from "../../components/ui/Button";

const DigitalTransformation: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Digital Transformation</h1>
      <p className="text-gray-600 text-lg mb-6">
        Re-engineer processes, integrate data, and automate workflows to unlock growth.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="text-2xl font-semibold mb-3">Initiatives we drive</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Customer experience: portals, chat, and self-service</li>
            <li>Data foundation: single source of truth, BI dashboards</li>
            <li>Automation: low-code workflows, RPA, approvals</li>
            <li>App modernization: APIs, microservices, event-driven</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="text-2xl font-semibold mb-3">Outcomes</h2>
          <p className="text-gray-700">Cycle times down, accuracy up, happier customers—and a technology stack that supports innovation.</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-brand-50 border rounded-xl p-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Modernize with confidence</h3>
          <p className="text-gray-700">We’ll pilot quickly, prove value, then scale responsibly.</p>
        </div>
        <a href="/contact"><Button>Plan a pilot</Button></a>

      </div>
    </div>
  </section>
);
export default DigitalTransformation;
