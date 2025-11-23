import React from "react";
import Button from "../../components/ui/Button";

const ManagedServices: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Managed Services</h1>
        <p className="text-gray-600 text-lg mb-6">
          Azophi provides ongoing support for your users, devices, and core systems so
          your internal team can focus on projects that move the business forward.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "End User Support",
              items: [
                "Service desk for incidents and requests based on agreed hours.",
                "Onboarding and offboarding workflows for staff and contractors.",
                "Device lifecycle including setup, patching, and retirement.",
              ],
            },
            {
              title: "Core Infrastructure",
              items: [
                "Identity, directory, and access control management.",
                "Patch and backup routines for servers and critical systems.",
                "Network and secure access service edge monitoring.",
              ],
            },
            {
              title: "Operational Excellence",
              items: [
                "Change and incident management structure with clear records.",
                "Monthly reporting across tickets, uptime, and key metrics.",
                "Advisory time reserved for planning and improvement work.",
              ],
            },
          ].map((block) => (
            <div key={block.title} className="p-6 rounded-xl border bg-white">
              <h2 className="text-xl font-semibold mb-3">{block.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">Platforms We Commonly Support</h2>
          <p className="text-gray-700 mb-3">
            We focus on a set of platforms that show up in most environments and keep our
            familiarity with them current.
          </p>
          <p className="text-gray-700">
            Microsoft 365, Exchange Online, SharePoint, Teams, Entra ID and Intune,
            Google Workspace, major endpoint protection tools, remote access platforms,
            backup platforms, and leading cloud providers such as Azure and AWS.
          </p>
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">How We Start A New Managed Service</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              Baseline review of existing tickets, systems, and documentation so we know
              what is in play.
            </li>
            <li>
              Agreement on scope, service levels, escalation paths, and communication
              patterns.
            </li>
            <li>
              Setup of monitoring, tools, and access in a way that respects your security
              model.
            </li>
            <li>
              Trial period where we run the service, review results, and adjust coverage
              where needed.
            </li>
          </ol>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-brand-50 border rounded-xl p-6 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Reduce Noise Without Losing Visibility
            </h3>
            <p className="text-gray-700">
              Tell us about your current support load and we will suggest a way to share
              the work that fits your size and budget.
            </p>
          </div>
          <Button to="/contact">Get a support plan</Button>
        </div>
      </div>
    </section>
  );
};

export default ManagedServices;

// Notes:
// The managed services page now explains what is in scope, which platforms we often see, and how onboarding works.
// We keep the structure in three capability columns because that matches how many teams think about support.
// The final section is written for teams that already feel ticket pressure and want to understand how a handoff starts.
