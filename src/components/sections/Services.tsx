import React from "react";
import Card from "../ui/Card";
import { Server, Cloud, Shield, Database, BarChart } from "lucide-react";
import { services } from "../../config/site";

const icons: Record<string, React.ReactNode> = {
  "IT Consulting": <BarChart size={28} />,
  "Managed Services": <Server size={28} />,
  "Cloud Solutions": <Cloud size={28} />,
  Cybersecurity: <Shield size={28} />,
  "Digital Transformation": <Database size={28} />,
};

const ServiceCard: React.FC<{ title: string; description: string; id: string }> = ({
  title,
  description,
  id,
}) => (
  <Card id={id} variant="active" className="text-center flex flex-col items-center scroll-mt-28">
    <div className="bg-brand-100 p-4 rounded-full mb-6 text-brand-600">{icons[title]}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="text-brand-600 font-medium hover:text-brand-800 mt-auto"
    >
      Learn More →
    </a>
  </Card>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Comprehensive Services</h2>
          <p className="text-gray-600 text-lg">
            End-to-end IT solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} id={s.id} title={s.title} description={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
