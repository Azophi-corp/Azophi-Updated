import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Azophi</h2>
                <p className="text-gray-600 text-lg mb-6 text-center">
                    Azophi is an IT consulting and managed services partner helping SMBs and enterprises modernize, secure, and scale their technology.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 rounded-lg border bg-white shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
                        <p className="text-gray-600">Deliver measurable business impact through pragmatic technology adoption and first-class support.</p>
                    </div>
                    <div className="p-6 rounded-lg border bg-white shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">Our Approach</h3>
                        <p className="text-gray-600">Strategy first. We align initiatives to KPIs, reduce risk, and prioritize secure, scalable architectures.</p>
                    </div>
                    <div className="p-6 rounded-lg border bg-white shadow-sm">
                        <h3 className="font-semibold text-xl mb-2">Our Team</h3>
                        <p className="text-gray-600">Certified cloud, security, and infrastructure specialists with decades of combined experience.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
