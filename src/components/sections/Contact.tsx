import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { MapPin, Phone, Mail } from "lucide-react";
import { company } from "../../config/site";

const encode = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    "bot-field": "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setError(null);

    if (formData["bot-field"]) {
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          "bot-field": formData["bot-field"],
        }),
      });

      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        "bot-field": "",
      });
    } catch {
      setError("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let Us Know What You Need
            </h2>
            <p className="text-gray-600 text-lg">
              Share a little about your environment and your goals. We will respond with
              a simple starting point, not a long proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="flex items-start space-x-4">
              <MapPin className="text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p className="text-gray-600">
                  {company.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </Card>

            <Card className="flex items-start space-x-4">
              <Phone className="text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a
                    href={company.phoneHref}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {company.phoneDisplay}
                  </a>
                </p>
              </div>
            </Card>

            <Card className="flex items-start space-x-4">
              <Mail className="text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  <a
                    href={company.emailHref}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {company.email}
                  </a>
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Form</h3>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h4 className="text-green-700 font-semibold text-lg mb-2">
                  Thank You
                </h4>
                <p className="text-green-600 mb-2">
                  Your message has been received. We will reply with next steps soon.
                </p>
                <p className="text-gray-600 text-sm">
                  In the meantime, it can be helpful to gather any recent reports or
                  documentation that describe your current systems.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />

                <p className="hidden">
                  <label>
                    Extra field:
                    <input
                      name="bot-field"
                      value={formData["bot-field"]}
                      onChange={handleChange}
                    />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  />
                  <p className="text-gray-500 text-xs mt-1">
                    Helpful details include: number of users, key systems in use, and any
                    deadlines or audits coming up.
                  </p>
                </div>

                {error && (
                  <p className="text-red-600 text-sm mb-4">
                    {error}
                  </p>
                )}

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// Notes:
// The contact section keeps the Netlify form setup so it can be handled as a static form on build.
// The helper text under the message field nudges visitors to provide context that makes follow up calls more productive.
// On success we give a small hint about preparing information instead of just a generic thank you line.
