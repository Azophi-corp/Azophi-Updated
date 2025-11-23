import React from "react";
import { Link } from "react-router-dom";
import {
  Server,
  Cloud,
  Shield,
  Database,
  BarChart2,
  LineChart,
} from "lucide-react";
import Card from "../../components/ui/Card";

type ServiceItem = {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const items: ServiceItem[] = [
  {
    to: "/services/it-consulting",
    title: "IT Consulting",
    icon: <BarChart2 />,
    desc: "Roadmaps, audits, and executive guidance that connect technology plans to real business goals.",
  },
  {
    to: "/services/managed-services",
    title: "Managed Services",
    icon: <Server />,
    desc: "Monitoring, patching, and support for your users, devices, and core systems with clear reporting.",
  },
  {
    to: "/services/cloud-solutions",
    title: "Cloud Solutions",
    icon: <Cloud />,
    desc: "Migrations, modernization, and cost control so cloud usage stays healthy instead of chaotic.",
  },
  {
    to: "/services/cybersecurity",
    title: "Cybersecurity",
    icon: <Shield />,
    desc: "Risk assessments, endpoint protection, and response planning aligned with how your team works.",
  },
  {
    to: "/services/digital-transformation",
    title: "Digital Transformation",
    icon: <Database />,
    desc: "Process redesign, automation, and integrations that turn scattered systems into smoother workflows.",
  },
  {
    to: "/services/data-analytics",
    title: "Data and Analytics",
    icon: <LineChart />,
    desc: "Data models, pipelines, and dashboards that help leaders see what is happening and what to do next.",
  },
];

const ServicesIndex: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-gray-600 text-lg">
            Azophi covers strategy, daily operations, cloud, security, and data under one
            umbrella. You can start small in one area or design a combined plan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {items.map((item) => (
            <Card key={item.to} variant="active" className="text-center">
              <div className="mx-auto bg-brand-100 text-brand-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <Link
                to={item.to}
                className="text-brand-600 font-medium hover:text-brand-800"
              >
                View details
              </Link>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-3 text-center">
            Choosing A Starting Point
          </h2>
          <p className="text-gray-600 mb-3 text-center">
            If you are not sure where to begin, it can help to think about where pain
            shows up today. Some teams feel it in outages, others in high ticket volume,
            and others in audits or unclear data.
          </p>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              If you need a clear technology plan and language for leadership,
              <span className="font-semibold"> IT Consulting</span> is usually the first
              step.
            </li>
            <li>
              If your staff is stretched by tickets and routine tasks,
              <span className="font-semibold"> Managed Services</span> can reduce noise
              and stabilize the environment.
            </li>
            <li>
              If cloud spend, performance, or security feels out of control,
              <span className="font-semibold"> Cloud Solutions</span> and
              <span className="font-semibold"> Cybersecurity</span> are good places to
              focus.
            </li>
            <li>
              If leaders lack clear numbers,
              <span className="font-semibold"> Data and Analytics</span> helps build a
              trustworthy view of what is happening.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesIndex;

// Notes:
// This index page gives visitors a quick overview of all service lines with consistent card styling.
// The bottom section explains how to pick a starting point since many visitors are not sure which service fits first.
// Titles and descriptions are written to match the deeper detail pages so the journey from list to detail feels natural.
