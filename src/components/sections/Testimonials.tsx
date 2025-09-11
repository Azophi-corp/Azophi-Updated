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

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  image,
  rating = 5
}) => {
  return (
    <div className="p-8 md:p-10 bg-white rounded-xl shadow-lg">
      <div className="flex mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8">{quote}</blockquote>
      <div className="flex items-center">
        <img
          src={image}
          alt={`${author}'s profile`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
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
      rating: 5
    },
    {
      quote: "The cybersecurity solutions implemented by Azophi have given us peace of mind. Their team is responsive, knowledgeable, and always ahead of emerging threats.",
      author: "Michael Chen",
      position: "IT Director",
      company: "FinServe Partners",
      image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5
    },
    {
      quote: "Our cloud migration with Azophi was seamless. They understood our business needs and designed a solution that has improved our scalability while reducing costs.",
      author: "Lisa Rodriguez",
      position: "Operations Manager",
      company: "TechStart Innovations",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Hear from the businesses we've helped transform with our IT solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Case Study Highlights */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">Featured Case Studies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration for Financial Services Firm",
                result: "40% reduction in infrastructure costs",
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Cybersecurity Overhaul for Healthcare Provider",
                result: "Zero breaches since implementation",
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Digital Transformation for Retail Chain",
                result: "28% increase in online sales",
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((casestudy, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={casestudy.image}
                    alt={casestudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-xl mb-2">{casestudy.title}</h4>
                  <p className="text-blue-600 font-medium mb-4">{casestudy.result}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;