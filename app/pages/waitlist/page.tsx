'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    monthlyAdBudget: '',
    businessType: '',
    challenges: ''
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
    console.log('Waitlist signup:', formData);
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
                Welcome to the Clover Waitlist!
              </h1>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in Clover. We&apos;ll notify you as soon as we launch and send you exclusive early access.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Keep an eye on your inbox for updates and special offers.
              </p>
              <div className="space-y-3">
                <Link href="/" className="bg-gradient-green text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 block">
                  Back to Home
                </Link>
                <Link href="/pages/about" className="text-green-600 hover:text-green-700 font-medium block">
                  Learn More About Clover
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the <span className="gradient-text-hero">Clover Waitlist</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be among the first to experience event-driven ad management. Get early access to Clover and transform how you run ad campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reserve Your Spot</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 ">
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
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 text-gray-900">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 text-gray-900">
                <div>
                  <label htmlFor="monthlyAdBudget" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Ad Budget
                  </label>
                  <select
                    id="monthlyAdBudget"
                    name="monthlyAdBudget"
                    value={formData.monthlyAdBudget}
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
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select business type</option>
                    <option value="restaurant">Restaurant/Food Service</option>
                    <option value="retail">Retail</option>
                    <option value="services">Professional Services</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saas">SaaS/Tech</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="text-gray-900">
                <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Advertising Challenges
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  rows={4}
                  value={formData.challenges}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What are your biggest challenges with current advertising efforts?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-success text-white px-6 py-4 rounded-lg font-semibold transition-colors hover:opacity-90 text-lg"
              >
                Join the Waitlist
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                No spam, ever. We&apos;ll only email you about Clover updates and your early access.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Early Access <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600">
              Be among the first to experience the future of ad management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Priority Access Card */}
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 rounded-xl shadow-lg hover:from-amber-100 hover:to-orange-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {/* Subtle pulsing effect */}
                  <div className="absolute -inset-1 bg-amber-400 rounded-full animate-ping opacity-40 -z-10"></div>
                  <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 16H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                {/* VIP badge */}
                <div className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  VIP
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">Priority Access</h3>
              <p className="text-gray-700 font-medium mb-4">
                Get first access to Clover when we launch, ahead of the general public.
              </p>
              {/* Access indicator */}
              <div className="bg-white bg-opacity-60 rounded-lg p-3">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-amber-700">First in Line</span>
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Special Pricing Card */}
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 rounded-xl shadow-lg hover:from-emerald-100 hover:to-green-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                {/* Discount badge */}
                <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  50% OFF
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">Special Pricing</h3>
              <p className="text-gray-700 font-medium mb-4">
                Lock in exclusive early bird pricing and save on your subscription.
              </p>
              {/* Pricing comparison */}
              <div className="bg-white bg-opacity-60 rounded-lg p-3">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gray-400 line-through text-lg">$50</span>
                    <span className="text-2xl font-bold gradient-text">$25</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Early bird pricing</div>
                </div>
              </div>
            </div>
            
            {/* Direct Input Card */}
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-100 border border-indigo-200 rounded-xl shadow-lg hover:from-indigo-100 hover:to-purple-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                {/* Feedback badge */}
                <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  BETA
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">Direct Input</h3>
              <p className="text-gray-700 font-medium mb-4">
                Help shape Clover with your feedback and feature requests.
              </p>
              {/* Collaboration indicator */}
              <div className="bg-white bg-opacity-60 rounded-lg p-3">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-indigo-700">Your Voice Matters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 