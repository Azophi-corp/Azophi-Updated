import React from "react";
import Button from "../../components/ui/Button";

const CloudSolutions: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Cloud Solutions</h1>
        <p className="text-gray-600 text-lg mb-6">
          We help organizations move to and operate in the cloud in a way that manages
          cost, keeps risk in check, and supports how your teams build and ship work.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">Capabilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cloud readiness assessments and migration planning.</li>
              <li>
                Landing zone design including identity, networking, and security
                standards.
              </li>
              <li>Modern architectures using containers, serverless, and automation.</li>
              <li>
                Disaster recovery and backup plans that are practical to test and
                maintain.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">Tooling And Platforms</h2>
            <p className="text-gray-700 mb-3">
              We work most often with Azure and AWS, but the patterns we use apply across
              major cloud providers. Infrastructure as code is a key part of our approach
              so environments are easier to repeat and adjust.
            </p>
            <p className="text-gray-700">
              Common tools include Terraform, Bicep or ARM templates, Azure DevOps or
              GitHub Actions for pipelines, and standard monitoring platforms from the
              providers and third parties.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">Cost And Governance</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Tagging strategies that map resources to owners, environments, and
              initiatives.
            </li>
            <li>
              Budget alerts and views that finance and technology teams can share without
              complex exports.
            </li>
            <li>
              Policies that guide how new resources are created so sprawl stays under
              control.
            </li>
            <li>
              Regular reviews that look at spend, performance, and security side by side.
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-brand-50 border rounded-xl p-6 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Make The Cloud Work For Your Team
            </h3>
            <p className="text-gray-700">
              Share where you are today and what outcome you want. We will respond with a
              simple path forward, not a long document.
            </p>
          </div>
          <Button to="/contact">Start a migration</Button>
        </div>
      </div>
    </section>
  );
};

export default CloudSolutions;

// Notes:
// This page focuses on the full lifecycle of cloud work, from readiness through cost control and ongoing reviews.
// We highlight infrastructure as code and shared views with finance because those topics come up often in cloud projects.
// The call to action invites a conversation anchored in outcomes rather than tools or buzzwords.
