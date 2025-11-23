import React, { useEffect, useRef, useState } from "react";
import PartnerEcosystem from "./PartnerEcosystem";

type StatCounterProps = {
  value: number;
  suffix?: string;
  title: string;
};

const StatCounter: React.FC<StatCounterProps> = ({ value, suffix = "", title }) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(value / (duration / 16));

        const timer = setInterval(() => {
          start += step;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

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
      <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Teams Work With Us</h2>
          <p className="text-gray-600 text-lg">
            We blend consulting, managed services, and security into one plan so
            technology becomes a steady part of how your team operates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCounter value={100} suffix="+" title="Organizations Supported" />
          <StatCounter value={20} suffix="+" title="Years Of Combined Experience" />
          <StatCounter value={98} suffix="%" title="Client Retention Rate" />
          <StatCounter value={1000} suffix="+" title="Projects And Changes Shipped" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Business Value First</h3>
            <p className="text-gray-600 mb-3">
              We look at what leaders are measured on and what frontline teams deal with
              every day. That shapes the roadmap more than a list of tools or trends.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Focus on metrics like uptime, resolution time, and customer impact.</li>
              <li>Shorter projects that can be evaluated instead of huge multi year bets.</li>
              <li>Regular reviews where plans are adjusted based on results, not guesses.</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Built For Real World Teams</h3>
            <p className="text-gray-600 mb-3">
              Most teams are juggling existing work, audits, and growth projects at the
              same time. We design operating rhythms that can survive that reality.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Standard runbooks that make onboarding new staff easier.</li>
              <li>Clear paths for escalating incidents and making improvement requests.</li>
              <li>Documentation that points to the truth instead of creating more noise.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">
            A Focused Partner Ecosystem
          </h3>
          <PartnerEcosystem />
        </div>
      </div>
    </section>
  );
};

export default Benefits;

// Notes:
// This benefits section combines simple animated stats, deeper explanation cards, and the partner logo slider.
// The language is written for business and technical readers so both can understand the value quickly.
// PartnerEcosystem is kept in a separate component so the logo logic stays isolated and easy to swap.
