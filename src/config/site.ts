export const company = {
    name: "Azophi",
    addressLines: ["5250 Old Orchard Rd", "Suite 300", "Skokie, IL 60077"],
    phoneDisplay: "(312) 725-9197",
    phoneHref: "tel:+13127259197",
    email: "info@azophi.com",
    emailHref: "mailto:info@azophi.com",
};


export const social = {
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/company/",
    instagram: "https://instagram.com/",
};


export const nav = [
    {
        name: "Services", href: "#services", dropdown: [
            { name: "IT Consulting", href: "#it-consulting" },
            { name: "Managed Services", href: "#managed-services" },
            { name: "Cloud Solutions", href: "#cloud-solutions" },
            { name: "Cybersecurity", href: "#cybersecurity" },
            { name: "Digital Transformation", href: "#digital-transformation" },
        ]
    },
    { name: "About", href: "#about" },
    { name: "Industries", href: "#industries" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
];


export const services = [
    { id: "it-consulting", title: "IT Consulting", desc: "Strategic technology planning and roadmapping to align IT with business goals and maximize ROI." },
    { id: "managed-services", title: "Managed Services", desc: "Proactive monitoring, management, and support for your entire IT infrastructure, 24/7." },
    { id: "cloud-solutions", title: "Cloud Solutions", desc: "Secure, scalable, and cost-effective cloud services—from migration to ongoing management." },
    { id: "cybersecurity", title: "Cybersecurity", desc: "Comprehensive security solutions to protect your business from evolving threats and vulnerabilities." },
    { id: "digital-transformation", title: "Digital Transformation", desc: "End-to-end solutions to modernize your business processes and drive innovation." },
];