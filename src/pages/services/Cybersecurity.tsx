import React from "react";
import Button from "../../components/ui/Button";

const Cybersecurity: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Cybersecurity</h1>
      <p className="text-gray-600 text-lg mb-6">
        Reduce risk with layered defenses, clear playbooks, and continuous monitoring.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Assess & Prioritize", items: ["Threat modeling", "CIS/NIST gap analysis", "Pen tests & phishing"] },
          { title: "Protect & Detect", items: ["EDR/XDR & email security", "Identity hardening", "SIEM/SOC"] },
          { title: "Respond & Recover", items: ["IR runbooks", "Ransomware playbooks", "Backup/DR validation"] },
        ].map(b => (
          <div key={b.title} className="p-6 rounded-xl border bg-white">
            <h2 className="text-xl font-semibold mb-3">{b.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">{b.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-brand-50 border rounded-xl p-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Security that scales</h3>
          <p className="text-gray-700">We’ll prioritize controls that deliver the most risk reduction first.</p>
        </div>
        <a href="/contact"><Button>Book a risk assessment</Button></a>
        <Button to="/contact">Book a risk assessment</Button>
      </div>
    </div>
  </section>
);
export default Cybersecurity;
