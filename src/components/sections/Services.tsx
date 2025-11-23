import React from "react";
import Card from "../ui/Card";
import {
  Server,
  Cloud,
  Shield,
  Database,
  BarChart2,
  LineChart,
} from "lucide-react";
import { services, ServiceEntry } from "../../config/site";

const iconMap: Record<string, React.ReactNode> = {
  "IT Consulting": <BarChart2 size={28} />,
  "Managed Services": <Server size={28} />,
  "Cloud Solutions": <Cloud size={28} />,
  Cybersecurity: <Shield size={28} />,
  "Digital Transformation": <Database size={28} />,
  "Data and Analytics": <LineChart size={28} />,
};

type ServiceCardProps = {
  title: string;
  description: string;
  id: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, id }) => {
  const icon = iconMap[title] ?? <BarChart2 size={28} />;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card
      id={id}
      variant="active"
      className="text-center flex flex-col items-center scroll-mt-28"
    >
      <div className="bg-brand-100 p-4 rounded-full mb-6 text-brand-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#contact"
        onClick={handleClick}
        className="text-brand-600 font-medium hover:text-brand-800 mt-auto"
      >
        Talk about this service
      </a>
    </Card>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-lg">
            From strategy to day to day operations, we focus on the areas that define how
            your team works, how secure your data is, and how reliable your technology
            feels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service: ServiceEntry) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.desc}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-3">
            Designed To Work Together, Not In Isolation
          </h3>
          <p className="text-gray-600 mb-2">
            Consulting, managed services, cloud, security, and data are all connected in
            real life. We design them to support each other instead of creating five
            separate projects that never quite line up.
          </p>
          <p className="text-gray-600">
            Many clients start with a short engagement in one area and then grow into a
            combined plan once trust is built and early results are in place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

// Notes:
// This services section reads from the shared services config so page content stays in sync with deeper service pages.
// The call to action link scrolls down to the contact form which keeps the flow simple for visitors.
// Extra text under the grid explains that services are meant to be combined instead of treated as isolated projects.
