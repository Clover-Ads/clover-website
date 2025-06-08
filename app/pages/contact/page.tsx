'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navigation />
        
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="max-w-md mx-auto text-center px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Contacting Us!
              </h1>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your message and will get back to you within 24 hours.
              </p>
              <div className="space-y-3">
                <Link href="/" className="bg-gradient-green text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 block">
                  Back to Home
                </Link>
                <Link href="/pages/waitlist" className="text-green-600 hover:text-green-700 font-medium block">
                  Join Our Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="gradient-text-hero">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your advertising with event-driven campaigns? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-gray-900">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="text-gray-900">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div className="text-gray-900">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                
                <div className="text-gray-900">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Advertising Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="over-25000">Over $25,000</option>
                  </select>
                </div>
                
                <div className="text-gray-900">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your business and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-success text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-green-radial rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@clover-ads.com</p>
                    <p className="text-gray-600">support@clover-ads.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-green-radial rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">New Haven, CT</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-green-radial rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                    <p className="text-gray-600">Monday - Friday</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prefer to start right away?</h3>
                <Link href="/pages/waitlist" className="bg-gradient-green text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block">
                  Join Our Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Clover
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How does event-driven advertising work?
              </h3>
              <p className="text-gray-600">
                Clover monitors real-time data sources (weather, news, sports, holidays) and automatically triggers 
                short-term campaigns (1-24 hours) when events create optimal advertising opportunities for your business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What platforms do you support?
              </h3>
              <p className="text-gray-600">
                Currently, we focus on short-video platforms: TikTok, Instagram (Stories & Reels), and Facebook. 
                We&apos;re expanding to YouTube Shorts, Snapchat, and other platforms based on user demand.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do I need to create ads myself?
              </h3>
              <p className="text-gray-600">
                No! Clover automatically generates video ads based on your business profile and current events. 
                Our AI creates multiple variants and tests them to find the best-performing content.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does Clover cost?
              </h3>
              <p className="text-gray-600">
                Clover starts at just $25/month, making it the most affordable autonomous ad management platform. 
                This includes unlimited campaigns, AI-generated content, and real-time optimization.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I get started?
              </h3>
              <p className="text-gray-600">
                Join our waitlist to get early access when we launch. We&apos;ll notify you as soon as Clover is available 
                and provide exclusive onboarding support for waitlist members.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 