import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  { title: "FSI: Cloud Migration", result: "40% infra cost reduction; DR from days → hours", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { title: "Healthcare: Zero Trust", result: "Zero breaches; MFA & device compliance org-wide", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { title: "Retail: DX & Analytics", result: "28% online sales lift; faster releases with CI/CD", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
];

const CaseStudies: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map(c => (
          <div key={c.title} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-xl mb-2">{c.title}</h4>
              <p className="text-brand-600 font-medium mb-4">{c.result}</p>
              <a href="/contact" className="text-brand-600 hover:text-brand-800 font-medium inline-flex items-center">
                Start your project <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default CaseStudies;
