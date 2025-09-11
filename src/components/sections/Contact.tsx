import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { company } from '../../config/site';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${formData.name} (${formData.company || 'No company'})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Discuss Your IT Needs</h2>
            <p className="text-gray-600 text-lg">Whether you're looking for a complete IT overhaul or just want to learn more, our team is ready to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="flex items-start space-x-4">
              <MapPin className="text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p className="text-gray-600">{company.addressLines.map(l => (<span key={l}>{l}<br /></span>))}</p>
              </div>
            </Card>

            <Card className="flex items-start space-x-4">
              <Phone className="text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-600"><a href={company.phoneHref} className="hover:text-brand-600 transition-colors">{company.phoneDisplay}</a></p>
              </div>
            </Card>

            <Card className="flex items-start space-x-4">
              <Mail className="text-brand-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600"><a href={company.emailHref} className="hover:text-brand-600 transition-colors">{company.email}</a></p>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h3>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h4 className="text-green-700 font-semibold text-lg mb-2">Thank You!</h4>
                <p className="text-green-600">Your message has been prepared in your email client. Send it to reach our consultants.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500" />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-brand-500"></textarea>
                </div>

                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
