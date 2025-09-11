import React from "react";

const items = [
    { title: "Financial Services", text: "Compliance-first architectures, data protection, and cloud governance." },
    { title: "Healthcare", text: "HIPAA-aligned controls, secure access, and resilient infrastructure." },
    { title: "Retail & eCommerce", text: "Omnichannel platforms, analytics pipelines, and cost-optimized cloud." },
    { title: "Manufacturing", text: "Secure OT/IT convergence, IoT telemetry, and modern ERP integrations." },
    { title: "Startups & SaaS", text: "Foundations for rapid iteration, observability, and security by default." },
    { title: "Public Sector", text: "Identity-centric controls, continuity, and budget-aware modernization." },
];

const Industries: React.FC = () => {
    return (
        <section id="industries" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
                    <p className="text-gray-600 text-lg">Proven playbooks adapted to your regulatory and operational realities.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((i) => (
                        <div key={i.title} className="p-6 rounded-lg border bg-white shadow-sm">
                            <h3 className="font-semibold text-xl mb-2">{i.title}</h3>
                            <p className="text-gray-600">{i.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
