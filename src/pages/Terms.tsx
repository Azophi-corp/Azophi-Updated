import React from "react";

const Terms: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-6">
          These terms explain how you may use this site and any content provided through
          it. By using the site you agree to these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Use Of The Site</h2>
        <p className="text-gray-700 mb-3">
          You may browse the site and use it to learn about our services or contact us.
          You agree not to misuse the site, attempt to gain unauthorized access, or use
          it in a way that could harm the site or other users.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Content And Accuracy</h2>
        <p className="text-gray-700 mb-3">
          Information on this site is provided for general guidance. We try to keep it
          accurate and current, but it may not always reflect the latest changes in
          technology, pricing, or service details.
        </p>
        <p className="text-gray-700">
          Any decisions or actions based on information from this site should be reviewed
          with us directly or with your own advisors before you rely on them.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Links To Other Sites</h2>
        <p className="text-gray-700 mb-3">
          Our site may include links to third party sites for convenience. We do not
          control those sites and are not responsible for their content or practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation Of Liability</h2>
        <p className="text-gray-700">
          To the extent permitted by law, Azophi and its team are not liable for any
          indirect, incidental, or consequential losses arising from your use of this
          site. Our direct liability related to the site is limited to the amount you
          paid, if any, to access it.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Changes To These Terms</h2>
        <p className="text-gray-700 mb-3">
          We may update these terms from time to time. When we do, we will post the new
          version on this page. Continued use of the site after an update means that you
          accept the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
        <p className="text-gray-700">
          If you have questions about these terms, you can contact us at{" "}
          <a className="text-brand-600" href="mailto:info@azophi.com">
            info@azophi.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Terms;

// Notes:
// The terms page is intentionally simple so small teams and readers without legal training can still understand it.
// It covers the basic expectations around use, accuracy, links, and liability for a marketing site.
// Any future changes, such as new products or account features, can be reflected here in their own sections.
