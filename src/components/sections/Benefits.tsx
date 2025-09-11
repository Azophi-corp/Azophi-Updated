import React, { useEffect, useRef, useState } from 'react';

type StatCounterProps = {
  value: number;
  suffix: string;
  title: string;
};

const StatCounter: React.FC<StatCounterProps> = ({ value, suffix, title }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const duration = 2000; // 2 seconds
        const step = Math.ceil(value / (duration / 16)); // 16ms is approx one frame at 60fps
        
        const timer = setInterval(() => {
          start += step;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div className="text-center" ref={countRef}>
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const partners = [
    {
      name: 'AWS',
      logo: 'https://d0.awsstatic.com/logos/powered-by-aws.png'
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg'
    },
    {
      name: 'SentinelOne',
      logo: 'https://assets.brandfetch.io/idW8PNv29Z/idUZkVxZVY.svg'
    },
    {
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg'
    },
    {
      name: 'Lenovo',
      logo: 'https://download.lenovo.com/lenovo/logo/lenovo-logo-red.svg'
    },
    {
      name: 'HP',
      logo: 'https://www.hp.com/content/dam/sites/worldwide/hp-logo.svg'
    },
    {
      name: 'Palo Alto Networks',
      logo: 'https://www.paloaltonetworks.com/etc/clientlibs/clean/imgs/pan-logo-badge-blue.svg'
    },
    {
      name: 'Fortinet',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg'
    },
    {
      name: 'VMware',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">
            We have a proven track record of delivering exceptional IT services and solutions to businesses across industries.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <StatCounter value={100} suffix="+" title="Clients Served" />
          <StatCounter value={25} suffix="+" title="Years Experience" />
          <StatCounter value={98} suffix="%" title="Client Retention" />
          <StatCounter value={1000} suffix="+" title="Projects Completed" />
        </div>
        
        {/* Partner Ecosystem */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-10">Partner Ecosystem</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;