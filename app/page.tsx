'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Run Ads in the 
                <span className="flex flex-col">
                  <span className="gradient-text-hero p-2">Right Place</span>
                  <span className="gradient-text-hero p-2">Right Time</span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Clover uses real-time event data (weather, holidays, news, sports) to automatically optimize short-video ads for SMBs with limited budgets and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pages/waitlist" className="bg-gradient-success text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors hover:opacity-90">
                  Join Our Waitlist
                </Link>
                <Link href="/pages/services" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Event-Driven</span> Ad Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform automatically creates and optimizes campaigns based on real-time events to maximize your ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-float">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Optimization</h3>
              <p className="text-gray-600">
                Automatically adjust ad spend and targeting based on live events, weather, and trending topics.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-float" style={{animationDelay: '0.5s'}}>
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Short-Video Focus</h3>
              <p className="text-gray-600">
                2.5x more engagement than other formats with 10x less cost per impression across all platforms.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-float" style={{animationDelay: '1s'}}>
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Starting at just $25/month - the most affordable autonomous ad management platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See <span className="gradient-text">Clover</span> in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real examples of how event-driven campaigns drive results for small businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nice Day Chinese Restaurant</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600"><strong>Event Detection:</strong> Harvard-Yale Game in New Haven</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600"><strong>Timing:</strong> Ads launched days before the game</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600"><strong>Result:</strong> Increased foot traffic and visibility</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
              <h4 className="font-semibold text-gray-900 mb-3">Generated Campaign Examples:</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded border-l-4 border-blue-400">
                  <p className="text-sm text-gray-700">"Rainy days call for Nice Day delivery" - Soup & noodle focus</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded border-l-4 border-purple-400">
                  <p className="text-sm text-gray-700">"Who said 2AM can't be yummy?" - Late night targeting</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded border-l-4 border-green-400">
                  <p className="text-sm text-gray-700">"Game day fuel for Yale fans!" - Sports event targeting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-success animate-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Ad Campaigns?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join SMBs who are ready to see better ROI with event-driven advertising.
          </p>
          <Link href="/pages/waitlist" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block">
            Join Our Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
