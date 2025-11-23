import React from "react";

type PartnerLogo = {
  src: string;
  alt: string;
};

const partnerLogos: PartnerLogo[] = [
  { src: "/partners/partner-1.png", alt: "Cloud partner logo 1" },
  { src: "/partners/partner-2.png", alt: "Security partner logo 2" },
  { src: "/partners/partner-3.png", alt: "Device partner logo 3" },
  { src: "/partners/partner-4.png", alt: "Network partner logo 4" },
  { src: "/partners/partner-5.png", alt: "Data and analytics partner logo 5" },
];

const PartnerEcosystem: React.FC = () => {
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <div className="mt-4">
      <div className="partner-marquee border border-gray-200 rounded-2xl bg-white py-4">
        <div className="partner-marquee-track items-center">
          {doubled.map((partner, index) => (
            <div key={`${partner.alt}-${index}`} className="partner-marquee-item">
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-3">
        We work with a focused set of vendors so we know the platforms well and can
        support them with confidence.
      </p>
    </div>
  );
};

export default PartnerEcosystem;

// Notes:
// The logos are read from the public/partners directory so you can easily swap in your own image files.
// We duplicate the list to create a continuous marquee effect without needing any external libraries.
// If the partner list changes later you only need to adjust the partnerLogos array in this one component.
