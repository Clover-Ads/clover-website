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
              Be among the first to experience the future of ad management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Access</h3>
              <p className="text-gray-600">
                Get first access to Clover when we launch, ahead of the general public.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Pricing</h3>
              <p className="text-gray-600">
                Lock in exclusive early bird pricing and save on your subscription.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Input</h3>
              <p className="text-gray-600">
                Help shape Clover with your feedback and feature requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 