import React from "react";
import Button from "../../components/ui/Button";

const DataAnalytics: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Data and Analytics</h1>
        <p className="text-gray-600 text-lg mb-6">
          Azophi helps teams turn scattered data into a clear, shared view of what is
          happening so leaders can make decisions with more confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">What We Deliver</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Data models and pipelines that bring information from key systems into a
                trusted store.
              </li>
              <li>
                Dashboards and reports that highlight important trends and metrics without
                extra clutter.
              </li>
              <li>
                Alerts and basic forecasting around events such as low inventory, delayed
                orders, or rising error rates.
              </li>
              <li>
                Documentation that describes how metrics are defined so conversations use
                the same language.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border bg-white">
            <h2 className="text-2xl font-semibold mb-3">Tools And Platforms</h2>
            <p className="text-gray-700 mb-3">
              We work with common analytics stacks that combine cloud data warehouses,
              transformation tools, and reporting tools. The exact mix depends on what you
              already use and what skills your team has.
            </p>
            <p className="text-gray-700">
              Typical pieces include data warehouse platforms, transformation tools such
              as dbt, and reporting tools such as Power BI, Looker Studio, or Tableau.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-xl border bg-white mb-12">
          <h2 className="text-2xl font-semibold mb-3">How We Structure Analytics Work</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              Identify key decisions you want to support and the metrics that inform
              those decisions.
            </li>
            <li>
              Map data sources, quality issues, and access patterns that surround those
              metrics.
            </li>
            <li>
              Design and implement a simple data model and pipelines that support the
              first use cases.
            </li>
            <li>
              Build initial dashboards or reports, gather feedback, and refine them based
              on how people actually use them.
            </li>
            <li>
              Plan future phases that expand coverage once the first set of metrics is
              stable and trusted.
            </li>
          </ol>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-brand-50 border rounded-xl p-6 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              See Your Numbers In A Clearer Way
            </h3>
            <p className="text-gray-700">
              Tell us which decisions feel hard today and we can suggest a small data
              pilot that targets those questions first.
            </p>
          </div>
          <Button to="/contact">Start a data pilot</Button>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;

// Notes:
// The data and analytics page focuses on decisions and trust instead of only listing tools or technical patterns.
// The process section walks through how we go from questions to models, dashboards, and future phases.
// The call to action invites teams to start with a limited pilot tied to real decisions which keeps scope under control.
