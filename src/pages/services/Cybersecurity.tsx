import React from "react";
import Button from "../../components/ui/Button";

const Cybersecurity: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Cybersecurity</h1>
        <p className="text-gray-600 text-lg mb-6">
          Azophi helps you reduce risk by combining sensible controls, clear procedures,
          and visibility into what is happening across your environment.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Assess And Prioritize",
              items: [
                "Threat modeling tailored to your size and industry.",
                "Gap analysis against common frameworks such as NIST or CIS.",
                "Testing such as vulnerability scans, basic pen tests, and phishing runs.",
              ],
            },
            {
              title: "Protect And Detect",
              items: [
                "Endpoint and email security that fits your device mix.",
                "Identity hardening with multi factor and conditional access patterns.",
                "Log collection and alerting through SIEM and monitoring tools.",
              ],
            },
            {
              title: "Respond And Recover",
              items: [
                "Incident response runbooks that match your staffing reality.",
                "Ransomware and outage playbooks tested through tabletop exercises.",
                "Backup and recovery validation for critical applications and data.",
              ],
            },
          ].map((block) => (
            <div key={block.title} className="p-6 rounded-xl border bg-white">
              <h2 className="text-xl font-semibold mb-3">{block.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">Security That Fits Daily Work</h2>
          <p className="text-gray-700 mb-3">
            Strong controls only help if people can live with them. We look at how staff
            log in, move data, and collaborate, then shape policies and tools around that
            reality instead of creating constant friction.
          </p>
          <p className="text-gray-700">
            That might mean adjusting access patterns for remote work, creating simple
            guidance for handling sensitive data, or rethinking how administrative access
            is requested and approved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-brand-50 border rounded-xl p-6 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Start With A Clear View Of Risk
            </h3>
            <p className="text-gray-700">
              We can begin with a focused assessment and then build a plan that moves the
              most important controls into place first.
            </p>
          </div>
          <Button to="/contact">Book a risk assessment</Button>
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;

// Notes:
// The cybersecurity page is broken into assess, protect, and respond sections so it is easy to locate where you need help.
// Emphasis is on matching controls to real world work patterns instead of only listing tools or frameworks.
// The call to action encourages a small starting step which is usually easier to approve than a large multi year program.
