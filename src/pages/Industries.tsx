import React from "react";

const rows = [
  { h: "Financial Services", p: "Controls and governance that satisfy auditors without throttling delivery." },
  { h: "Healthcare", p: "HIPAA-aligned architectures, PHI protection, and resilient clinical systems." },
  { h: "Retail & eCommerce", p: "Omnichannel experiences, secure payments, and cost-efficient scale." },
  { h: "Manufacturing", p: "Secure OT/IT, factory connectivity, and telemetry for better yield." },
  { h: "Startups & SaaS", p: "Ship fast with guardrails: IaC, CI/CD, observability, and SSO from day one." },
  { h: "Public Sector", p: "Identity-first controls, continuity planning, and value for every dollar spent." },
];

const Industries: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Industries We Serve</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rows.map(r => (
          <div key={r.h} className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold mb-2">{r.h}</h3>
            <p className="text-gray-700">{r.p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Industries;
