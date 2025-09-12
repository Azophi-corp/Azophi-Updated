import React from "react";
import { Link } from "react-router-dom";
import { Server, Cloud, Shield, Database, BarChart } from "lucide-react";
import Card from "../../components/ui/Card";

type ServiceItem = {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const items: ServiceItem[] = [
  { to: "/services/it-consulting", title: "IT Consulting", icon: <BarChart />, desc: "Roadmaps, audits, and executive guidance aligned to KPIs." },
  { to: "/services/managed-services", title: "Managed Services", icon: <Server />, desc: "24/7 monitoring, patching, help desk, and proactive care." },
  { to: "/services/cloud-solutions", title: "Cloud Solutions", icon: <Cloud />, desc: "Migrations, modern architectures, and cost optimization." },
  { to: "/services/cybersecurity", title: "Cybersecurity", icon: <Shield />, desc: "Risk assessments, endpoint protection, SOC, and IR playbooks." },
  { to: "/services/digital-transformation", title: "Digital Transformation", icon: <Database />, desc: "Workflow redesign, automation, data strategy, and integrations." },
];

const ServicesIndex: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-gray-600 text-lg">
            Practical expertise and a partner mindset. Explore our core offerings below.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <Card key={i.to} variant="active" className="text-center">
              <div className="mx-auto bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {i.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{i.title}</h3>
              <p className="text-gray-600 mb-4">{i.desc}</p>
              <Link to={i.to} className="text-blue-600 font-medium hover:text-blue-800">
                View details →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIndex;
