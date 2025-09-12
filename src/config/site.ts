// src/config/site.ts
export const company = {
    name: 'Azophi',
    addressLines: ['5250 Old Orchard Rd', 'Suite 300', 'Skokie, IL 60077'],
    phoneDisplay: '(312) 725-9197',
    phoneHref: 'tel:+13127259197',
    email: 'info@azophi.com',
    emailHref: 'mailto:info@azophi.com',
};

export const social = {
    facebook: 'https://facebook.com/',
    twitter: 'https://twitter.com/',
    linkedin: 'https://linkedin.com/company/',
    instagram: 'https://instagram.com/',
};

export const nav = [
    {
        name: 'Services',
        to: '/services',
        dropdown: [
            { name: 'IT Consulting', to: '/services/it-consulting' },
            { name: 'Managed Services', to: '/services/managed-services' },
            { name: 'Cloud Solutions', to: '/services/cloud-solutions' },
            { name: 'Cybersecurity', to: '/services/cybersecurity' },
            { name: 'Digital Transformation', to: '/services/digital-transformation' },
        ],
    },
    { name: 'About', to: '/about' },
    { name: 'Industries', to: '/industries' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Contact', to: '/contact' },
];

// used by Home services grid
export const services = [
    { id: 'it-consulting', title: 'IT Consulting', desc: 'Strategic planning and roadmaps aligned to business KPIs.' },
    { id: 'managed-services', title: 'Managed Services', desc: '24/7 monitoring, help desk, patching and proactive care.' },
    { id: 'cloud-solutions', title: 'Cloud Solutions', desc: 'Migrations, modern architectures, and FinOps optimization.' },
    { id: 'cybersecurity', title: 'Cybersecurity', desc: 'Assessments, endpoint protection, SIEM/SOC, IR playbooks.' },
    { id: 'digital-transformation', title: 'Digital Transformation', desc: 'Workflow redesign, automation, data platforms and APIs.' },
];
