"use client";

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const ServiceFeatures = () => {
  const [activeTab, setActiveTab] = useState<'management' | 'creation'>('management');

  const features: { [key: string]: { title: string; description: string; icon: string }[] } = {
    management: [
      { title: "Short-term Campaigns (1-24 hours)", description: "Perfect timing for maximum impact.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Real-time ROI Optimization", description: "Continuous budget reallocation for best performance.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
      { title: "Event-based Campaigning", description: "Unique to Clover - campaigns triggered by real events.", icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 18.331v-5.447c0-.828.672-1.5 1.5-1.5h2.5a2 2 0 100-4h-2.5a2 2 0 00-2 2v2.414a2.5 2.5 0 01-1.28 2.131L3 16.331V10.5a2 2 0 012-2h2.5a2 2 0 100-4H5a2 2 0 00-2 2v12a2 2 0 002 2h7.586l3.5-7-2.086-4z" },
      { title: "Fully Autonomous Operation", description: "Set it once, let AI handle the rest.", icon: "M10 20l4-16m4 4l-4 4-4-4 4-4" }
    ],
    creation: [
      { title: "AI-Generated Video Ads", description: "Professionally crafted short-form content.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
      { title: "Brand Consistency", description: "All content matches your brand guidelines.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
      { title: "Event-Contextual Messaging", description: "Content tailored to current events and trends.", icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
      { title: "A/B Testing", description: "Multiple variants tested for optimal performance.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
    ]
  };

  const renderFeatures = (key: 'management' | 'creation') => (
    <ul className="space-y-4">
      {features[key].map((feature: { title: string; description: string; icon: string }) => (
        <li key={feature.title} className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for successful ad campaigns, automated and optimized.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center border-b border-gray-200 mb-8">
            <button 
              onClick={() => setActiveTab('management')} 
              className={`px-6 py-3 text-lg font-medium transition-colors ${activeTab === 'management' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-green-500'}`}
            >
              Campaign Management
            </button>
            <button 
              onClick={() => setActiveTab('creation')} 
              className={`px-6 py-3 text-lg font-medium transition-colors ${activeTab === 'creation' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-green-500'}`}
            >
              Content Creation
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-lg border border-green-100">
            {activeTab === 'management' ? renderFeatures('management') : renderFeatures('creation')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text-hero">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ad management solutions designed specifically for SMBs with limited budgets and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <ServiceFeatures />

      {/* Platform Coverage */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Multi-Platform</span> Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We optimize your campaigns across all major short-video platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* TikTok Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-transparent hover:border-black transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TikTok</h3>
              <p className="text-gray-600">Viral short-form content optimized for trending hashtags and sounds.</p>
            </div>
            
            {/* Instagram Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-transparent hover:border-pink-500 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600">Reels and Stories with advanced creator economy integration.</p>
            </div>
            
            {/* Facebook Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-transparent hover:border-blue-600 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600">Precise local targeting with detailed demographic insights.</p>
            </div>
            
            {/* YouTube Shorts Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-transparent hover:border-red-600 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">YouTube Shorts</h3>
              <p className="text-gray-600">Vertical video discovery leveraging YouTube&apos;s massive reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, <span className="gradient-text">Affordable</span> Pricing
            </h2>
            <p className="text-xl text-gray-600">
              The most affordable autonomous ad management platform in the market.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-green-100 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Clover Pro</h3>
              <p className="text-lg text-gray-600 mb-6">
                Everything you need to run successful event-driven ad campaigns, bundled into one simple plan.
              </p>
              <ul className="space-y-3 text-left max-w-md mx-auto md:mx-0 text-black">
              <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited event-driven campaigns</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>AI-generated video content</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Real-time optimization</span>
              </li>
              <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>24/7 customer support</span>
              </li>
            </ul>
            </div>
            <div className="md:w-1/2 flex-shrink-0">
              <div className="bg-gradient-to-br from-gray-50 to-green-100 rounded-xl p-8 text-center shadow-inner">
                <div className="mb-4">
                  <span className="text-6xl font-bold gradient-text">$25</span>
                  <span className="text-xl text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">No setup fees • Cancel anytime</p>
                <Link href="/pages/waitlist" className="bg-gradient-success text-white px-10 py-4 rounded-lg text-lg font-bold transition-transform hover:scale-105 inline-block w-full">
                  Join the Waitlist
            </Link>
                <p className="text-xs text-gray-500 mt-4">Early access for waitlist members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}  
      <section className="py-20 bg-gradient-success animate-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join SMBs who are ready to see better ROI with Clover&apos;s event-driven advertising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/waitlist" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors text-center flex items-center justify-center">
              Join the waitlist
            </Link>
            <Link href="/pages/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors text-center flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 