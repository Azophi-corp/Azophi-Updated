import React from "react";
import Button from "../../components/ui/Button";

const ItConsulting: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">IT Consulting</h1>
      <p className="text-gray-600 text-lg mb-6">
        We translate strategy into pragmatic technology choices—prioritized by business outcome,
        time-to-value, and risk.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="text-2xl font-semibold mb-3">What you get</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Current-state assessment (people, process, tech) and gap analysis</li>
            <li>12–24 month roadmap with costed initiatives and dependencies</li>
            <li>Security & compliance alignment (NIST/ISO, HIPAA, PCI where relevant)</li>
            <li>Cloud adoption strategy: build vs buy, lift-shift vs re-platform</li>
            <li>Executive reporting with measurable KPIs</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="text-2xl font-semibold mb-3">Engagement models</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><b>Advisory Sprint (2–4 weeks):</b> focused assessments and quick wins</li>
            <li><b>Fractional CTO:</b> part-time leadership embedded with your team</li>
            <li><b>Program Oversight:</b> governance, vendor management, and QA</li>
          </ul>
        </div>
      </div>

      <div className="p-6 rounded-xl border bg-white mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Discovery workshops with stakeholders</li>
          <li>Data gathering: inventory, risks, spend, performance</li>
          <li>Prioritization by value and effort; roadmap draft</li>
          <li>Executive playback; finalize plan & KPIs</li>
          <li>Quarterly roadmap refresh & governance</li>
        </ol>
      </div>

      <div className="flex items-center justify-between bg-brand-50 border rounded-xl p-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Ready to align IT with your KPIs?</h3>
          <p className="text-gray-700">Let’s scope an advisory sprint tailored to your goals.</p>
        </div>
        <a href="/contact"><Button>Talk to an expert</Button></a>
        <Button to="/contact">Talk to an expert</Button>

      </div>
    </div>
  </section>
);
export default ItConsulting;
