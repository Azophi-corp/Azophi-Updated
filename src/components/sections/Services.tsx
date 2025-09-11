import React from 'react';
import Card from '../ui/Card';
import { Server, Cloud, Shield, Database, BarChart } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card variant="active" className="text-center flex flex-col items-center">
      <div className="bg-blue-100 p-4 rounded-full mb-6 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 font-medium hover:text-blue-800 mt-auto">
        Learn More →
      </a>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'IT Consulting',
      description: 'Strategic technology planning and roadmapping to align IT with business goals and maximize ROI.',
      icon: <BarChart size={28} />,
    },
    {
      title: 'Managed Services',
      description: 'Proactive monitoring, management, and support for your entire IT infrastructure, 24/7.',
      icon: <Server size={28} />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure, scalable, and cost-effective cloud services, from migration to ongoing management.',
      icon: <Cloud size={28} />,
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats and vulnerabilities.',
      icon: <Shield size={28} />,
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end solutions to modernize your business processes and drive innovation.',
      icon: <Database size={28} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Comprehensive Services</h2>
          <p className="text-gray-600 text-lg">
            We provide end-to-end IT solutions tailored to your business needs, helping you navigate the complex technology landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;