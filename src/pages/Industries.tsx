import React from "react";
import Card from "../components/ui/Card";

type IndustryRow = {
  title: string;
  description: string;
  focusAreas: string[];
};

const industries: IndustryRow[] = [
  {
    title: "Financial Services",
    description:
      "Controls, governance, and reporting that satisfy regulators and internal audit without slowing change.",
    focusAreas: [
      "Identity and access controls for staff and partners.",
      "Change management and configuration tracking.",
      "Secure data platforms for analytics and reporting.",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Support for clinical systems, protected health information, and staff workflows across locations.",
    focusAreas: [
      "Architectures that align with HIPAA expectations.",
      "Secure access for clinicians and remote staff.",
      "Resilient backup and recovery for critical systems.",
    ],
  },
  {
    title: "Retail And Ecommerce",
    description:
      "Customer experience and back office operations that stay stable during seasonal peaks and promotions.",
    focusAreas: [
      "Omnichannel experiences that connect stores and digital.",
      "Payment security and fraud monitoring integration.",
      "Analytics for basket size, conversion, and inventory health.",
    ],
  },
  {
    title: "Manufacturing",
    description:
      "Bringing plant networks and business systems together in a way that respects safety and uptime needs.",
    focusAreas: [
      "Segmentation between operational technology and office networks.",
      "Secure remote access for vendors and engineers.",
      "Telemetry for quality, output, and predictive maintenance.",
    ],
  },
  {
    title: "Startups And SaaS",
    description:
      "Foundations that let teams ship quickly while keeping access controls, data, and observability in place.",
    focusAreas: [
      "Infrastructure as code and repeatable environments.",
      "Single sign on and device standards from early stages.",
      "Monitoring and alerting tuned to what the product needs.",
    ],
  },
  {
    title: "Public Sector",
    description:
      "Helping agencies modernize systems while staying within policy, budget, and procurement constraints.",
    focusAreas: [
      "Identity first designs for staff, citizens, and partners.",
      "Continuity plans that are realistic to test and maintain.",
      "Procurement friendly designs that still deliver value.",
    ],
  },
];

const IndustriesPage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Industries We Serve</h1>
        <p className="text-gray-600 text-lg mb-10 text-center max-w-3xl mx-auto">
          Each industry carries its own mix of regulations, customer expectations, and
          operational habits. We adjust our playbooks so they fit those realities rather
          than forcing a one size pattern.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title}>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-700 mb-3">{industry.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                {industry.focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Not Sure Where You Fit</h2>
          <p className="text-gray-600">
            Many organizations do not sit neatly in one category. If your work crosses
            multiple sectors or you have a unique setup, we can still map out your
            environment and design a plan that fits your reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;

// Notes:
// Industry details are kept in a simple array so we can add or adjust sectors without touching layout logic.
// Each card shows a short description plus focus areas so visitors can quickly see if our experience matches their needs.
// The closing section addresses teams that do not fall into a single industry which comes up often in practice.
