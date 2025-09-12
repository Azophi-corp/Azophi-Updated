import React from "react";
import Button from "../../components/ui/Button";

const ManagedServices: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Managed Services</h1>
      <p className="text-gray-600 text-lg mb-6">
        Proactive care for your end-to-end environment—so your team can focus on customers, not tickets.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "End-User Support", items: ["24/7 help desk", "Onboarding/offboarding", "Device lifecycle"] },
          { title: "Core Infrastructure", items: ["Patch & backup management", "Identity & access", "Network/SASE"] },
          { title: "Operational Excellence", items: ["Change & incident mgmt", "Monthly reporting", "CIO advisory"] },
        ].map(b => (
          <div key={b.title} className="p-6 rounded-xl border bg-white">
            <h2 className="text-xl font-semibold mb-3">{b.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">{b.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-xl border bg-white mb-12">
        <h2 className="text-2xl font-semibold mb-3">Tooling we manage</h2>
        <p className="text-gray-700">Microsoft 365, Azure AD/Entra, Intune, JumpCloud, Google Workspace, CrowdStrike/SentinelOne, Fortinet/PAN, VMware, Veeam, AWS, Azure.</p>
      </div>

      <div className="flex items-center justify-between bg-brand-50 border rounded-xl p-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Slash downtime and noise</h3>
          <p className="text-gray-700">We’ll tailor SLAs, coverage hours, and runbooks to you.</p>
        </div>
        <a href="/contact"><Button>Get a support plan</Button></a>
        <Button to="/contact">Get a support plan</Button>

      </div>
    </div>
  </section>
);
export default ManagedServices;
