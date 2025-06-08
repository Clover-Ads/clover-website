'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Link from 'next/link';
import AdMockup from './components/AdMockup';
import AnalyticsMockup from './components/AnalyticsMockup';
import MobileMockup from './components/MobileMockup';
import MetricsGrid from './components/MetricsGrid';

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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-heading">
                Run ads in the 
                <span className="flex flex-col">
                  <span className="gradient-text-hero p-2">right place</span>
                  <span className="gradient-text-hero p-2">at the right time</span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                ROI-optimized campaigns, automated for SMBs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/pages/waitlist" className="bg-gradient-success text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors hover:opacity-90">
                  Join Our Waitlist
                </Link>
                <Link href="/pages/services" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                  Learn More
                </Link>
              </div>
              <div className="mt-12">
                <MetricsGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              <span className="gradient-text">Event-Driven</span> Ad Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform automatically creates and optimizes campaigns based on real-time events to maximize your ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card text-center p-6 rounded-lg">
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
            
            <div className="feature-card text-center p-6 rounded-lg">
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
            
            <div className="feature-card text-center p-6 rounded-lg">
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

      {/* Platform Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Powerful <span className="gradient-text">Platform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              An intuitive interface that puts the power of event-driven advertising at your fingertips.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transform hover:scale-105 transition-transform duration-500">
              <AdMockup />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-500">
              <AnalyticsMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Experience Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-500 font-medium text-sm tracking-wider uppercase mb-2 block">Real-Time Intelligence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Your Business, <span className="gradient-text">Always Alert</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Instant notifications and smart recommendations keep you ahead of every opportunity.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* iOS Notification */}
            <div className="transform hover:-translate-y-2 transition-transform duration-500 lg:order-1">
              <div className="bg-[rgba(58,58,60,0.9)] backdrop-blur-[40px] rounded-[13px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] max-w-[350px] border border-[rgba(255,255,255,0.15)]">
                <div className="flex items-start space-x-3">
                  <div className="w-[40px] h-[40px] bg-[#34C759] rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <svg className="w-[20px] h-[20px] text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-white text-[15px] font-semibold">
                        Clover
                      </p>
                      <p className="text-[rgba(235,235,245,0.6)] text-[13px] font-normal">
                        now
                      </p>
                    </div>
                    <p className="text-white text-[15px] font-medium leading-[20px] mb-1">
                      Shopping Weekend Alert
                    </p>
                    <p className="text-[rgba(235,235,245,0.6)] text-[13px] font-normal leading-[18px]">
                      Weather + Local Events detected. Your campaign budget should be increased by 40% for optimal reach.
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-3 mt-4 pt-3 border-t border-[rgba(255,255,255,0.1)]">
                  <button className="text-[rgba(235,235,245,0.6)] text-[13px] font-medium bg-[rgba(120,120,128,0.24)] px-3 py-1.5 rounded-[6px]">
                    Dismiss
                  </button>
                  <button className="text-white text-[13px] font-medium bg-[#007AFF] px-3 py-1.5 rounded-[6px]">
                    Optimize Now
                  </button>
                </div>
              </div>
            </div>

            {/* iPhone Mockup */}
            <div className="transform hover:scale-105 transition-transform duration-500 lg:order-2">
              <MobileMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              See <span className="gradient-text">Clover</span> in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real examples of how event-driven campaigns drive results across different industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Retail Example */}
            <div className="feature-card p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Retail Store</h3>
                  <p className="text-sm text-gray-500">Fashion & Accessories</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Event Detection:</strong> Local Fashion Week</p>
                    <p className="text-sm text-gray-500">Targeted ads to fashion enthusiasts within 5-mile radius</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Weather Trigger:</strong> First Sunny Weekend</p>
                    <p className="text-sm text-gray-500">Spring collection promotion to weather-responsive audience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Result:</strong> 47% increase in weekend foot traffic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coffee Shop Example */}
            <div className="feature-card p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Coffee Shop</h3>
                  <p className="text-sm text-gray-500">Beverages & Light Bites</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Event Detection:</strong> Tech Conference Nearby</p>
                    <p className="text-sm text-gray-500">Mobile ads featuring workspace amenities and coffee deals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Time Trigger:</strong> Early Morning Rush</p>
                    <p className="text-sm text-gray-500">Breakfast bundle promotions to commuters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Result:</strong> 2.8x ROI on ad spend</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fitness Studio Example */}
            <div className="feature-card p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Fitness Studio</h3>
                  <p className="text-sm text-gray-500">Health & Wellness</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Seasonal Trigger:</strong> New Year Resolution</p>
                    <p className="text-sm text-gray-500">Targeted membership promotions to resolution-makers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Weather Pattern:</strong> Rainy Season</p>
                    <p className="text-sm text-gray-500">Indoor workout class promotions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Result:</strong> 65% increase in new memberships</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Service Example */}
            <div className="feature-card p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Auto Service</h3>
                  <p className="text-sm text-gray-500">Vehicle Maintenance</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Weather Alert:</strong> First Snow Forecast</p>
                    <p className="text-sm text-gray-500">Winter tire change promotions to local drivers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Event Trigger:</strong> Holiday Travel Season</p>
                    <p className="text-sm text-gray-500">Pre-trip inspection offers to travelers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600"><strong>Result:</strong> 83% booking rate for promotions</p>
                  </div>
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
