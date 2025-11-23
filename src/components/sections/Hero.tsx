import React from "react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  const go = (hash: string) => {
    const element = document.getElementById(hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 bg-gradient-to-r from-brand-900 to-brand-800 text-white">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
        {/* Top text + buttons */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            A Single View Of Your Technology Health
          </h1>
          <p className="text-lg md:text-xl text-brand-100/90 mb-8">
            We bring cloud, security, and support into one plan so you know where you
            stand each quarter. No scattered spreadsheets or mystery projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="shadow-lg shadow-brand-500/30"
              onClick={() => go("#services")}
            >
              Explore Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => go("#contact")}
            >
              Talk To Our Team
            </Button>
          </div>
        </div>

        {/* Image left, card right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: hero image */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-brand-900/40 border border-white/10">
              <img
                src="/images/home/hero-network.jpg"
                alt="Modern network and devices representing connected IT environments"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: technology health card */}
          <div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-white/10 max-w-xl ml-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                A Single View Of Your Technology Health
              </h2>
              <p className="text-brand-100 mb-6">
                We bring cloud, security, and support into one plan so you always know
                what is healthy, what needs attention, and what is coming next.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4">
                  <h3 className="font-semibold mb-1">Service Quality</h3>
                  <p className="text-sm text-brand-100">
                    Ticket trends, uptime, and satisfaction tracked in one place.
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <h3 className="font-semibold mb-1">Cloud Readiness</h3>
                  <p className="text-sm text-brand-100">
                    Spend, performance, and risk scored so you can prioritize calmly.
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <h3 className="font-semibold mb-1">Security Posture</h3>
                  <p className="text-sm text-brand-100">
                    Identity, endpoints, and backups reviewed on a regular schedule.
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <h3 className="font-semibold mb-1">Roadmap Progress</h3>
                  <p className="text-sm text-brand-100">
                    Quarterly reviews that connect technical work to business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Notes for developers:
// This hero keeps the original gradient and call to actions but removes the scroll animation logic so content is always visible.
// Layout: text and buttons at the top, then a two column section with an image on the left and the summary card on the right.
// The hero image is loaded from /images/home/hero-network.jpg under the public folder so it can be replaced without code changes.
