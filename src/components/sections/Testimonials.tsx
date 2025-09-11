import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating?: number;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, image, rating = 5 }) => {
  return (
    <div className="p-8 md:p-10 bg-white rounded-xl shadow-lg">
      <div className="flex mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8">{quote}</blockquote>
      <div className="flex items-center">
        <img src={image} alt={`${author}'s profile`} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{position}, {company}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Azophi transformed our IT infrastructure. Their managed services have significantly reduced our downtime and our team is now much more productive.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "Global Retail Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      quote: "The cybersecurity solutions implemented by Azophi have given us peace of mind. Their team is responsive, knowledgeable, and always ahead of emerging threats.",
      author: "Michael Chen",
      position: "IT Director",
      company: "FinServe Partners",
      image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
    {
      quote: "Our cloud migration with Azophi was seamless. They understood our business needs and designed a solution that has improved our scalability while reducing costs.",
      author: "Lisa Rodriguez",
      position: "Operations Manager",
      company: "TechStart Innovations",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
    },
  ];

  const nextSlide = () => setActiveIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  const prevSlide = () => setActiveIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section className="py-20 bg-brand-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">Don't just take our word for it. Hear from the businesses we've helped transform.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <Testimonial {...t} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white shadow-md hover:bg-brand-600 hover:text-white transition-colors" aria-label="Previous testimonial">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeIndex === i ? 'bg-brand-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white shadow-md hover:bg-brand-600 hover:text-white transition-colors" aria-label="Next testimonial">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
