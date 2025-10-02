import React from "react";
import Button from "../../components/ui/Button";

const DataAnalytics: React.FC = () => (
    <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h1 className="text-4xl font-bold mb-4">Data &amp; Analytics</h1>
            <p className="text-gray-600 text-lg mb-6">
                Turn scattered data into decisions—build a trustworthy foundation, clear dashboards, and smart automation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 rounded-xl border bg-white">
                    <h2 className="text-2xl font-semibold mb-3">What we deliver</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Data foundation: models, pipelines, quality checks</li>
                        <li>Business intelligence: KPI design, self-serve dashboards</li>
                        <li>Operational analytics: alerts, forecasting, anomaly detection</li>
                        <li>Integration: APIs, webhooks, iPaaS &amp; event streams</li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border bg-white">
                    <h2 className="text-2xl font-semibold mb-3">Tooling &amp; platforms</h2>
                    <p className="text-gray-700">
                        Power BI, Looker/Looker Studio, Tableau • dbt, Fivetran/Azure Data Factory •
                        Snowflake, BigQuery, Redshift, Azure Synapse • Databricks • SQL Server.
                    </p>
                </div>
            </div>

            <div className="p-6 rounded-xl border bg-white mb-12">
                <h2 className="text-2xl font-semibold mb-3">Our approach</h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Identify decisions that matter and the KPIs behind them</li>
                    <li>Map sources and establish a governed, tested data model</li>
                    <li>Automate pipelines and publish trusted datasets</li>
                    <li>Ship actionable dashboards; iterate with stakeholders</li>
                    <li>Enablement &amp; handoff: playbooks, SLAs, and training</li>
                </ol>
            </div>

            <div className="flex items-center justify-between bg-brand-50 border rounded-xl p-6">
                <div>
                    <h3 className="text-xl font-semibold mb-1">See your numbers clearly</h3>
                    <p className="text-gray-700">We’ll stand up a pilot dashboard that moves a KPI in weeks, not months.</p>
                </div>
                <Button to="/contact">Start a data pilot</Button>
            </div>
        </div>
    </section>
);

export default DataAnalytics;
