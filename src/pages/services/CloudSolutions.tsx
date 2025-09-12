import React from "react";
import Button from "../../components/ui/Button";

const CloudSolutions: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Cloud Solutions</h1>
      <p className="text-gray-600 text-lg mb-6">
        Design for scalability and cost—without sacrificing security or velocity.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="text-2xl font-semibold mb-3">Capabilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Migrations: discovery, landing zones, cutover plans</li>
            <li>Modern architectures: containers, serverless, IaC</li>
            <li>FinOps: tagging, budgets, right-sizing, savings plans</li>
            <li>Backup/DR: RTO/RPO targets, chaos testing</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h2 className="text-2xl font-semibold mb-3">Platforms</h2>
          <p className="text-gray-700">AWS, Microsoft Azure, Google Cloud, VMware. Terraform, Bicep, GitHub Actions.</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-brand-50 border rounded-xl p-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Make the cloud pay for itself</h3>
          <p className="text-gray-700">We’ll build a finance-friendly roadmap with measurable savings.</p>
        </div>
        <a href="/contact"><Button>Start a migration</Button></a>
      </div>
    </div>
  </section>
);
export default CloudSolutions;
