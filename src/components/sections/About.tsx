import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Azophi
        </h2>
        <p className="text-gray-600 text-lg mb-6 text-center">
          Azophi is an IT consulting and managed services partner that focuses on steady,
          practical improvements instead of one time projects that fade away.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Help growing organizations use technology to serve customers better,
              protect data, and give employees a smoother work day.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Our Approach</h3>
            <p className="text-gray-600">
              Start with goals and constraints, then design small steps that are measurable
              and do not overload the team that has to run them.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Our Team</h3>
            <p className="text-gray-600">
              Architects, engineers, and support leads who have worked inside in house IT
              teams and know the pressure of real incidents and deadlines.
            </p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <h4 className="font-semibold text-lg mb-2">What Clients Notice First</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Meetings that translate technical details into business language.</li>
              <li>Clear accountability around who owns which systems and outcomes.</li>
              <li>Roadmaps that balance long term improvements with quick wins.</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <h4 className="font-semibold text-lg mb-2">How We Measure Success</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Less unplanned downtime and fewer recurring incidents.</li>
              <li>Better security posture with fewer urgent surprises.</li>
              <li>Leaders who can explain the technology plan in simple terms.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Notes:
// This about section is the concise version that appears on the home page and links into the deeper About page.
// The copy focuses on how we work and what clients feel rather than long history so it reads quickly.
// Extra cards at the bottom give a bit more detail to help the page scroll and feel more substantial.
