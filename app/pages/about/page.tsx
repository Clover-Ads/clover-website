'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ProcessPipeline from '../../components/ProcessPipeline';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text-hero">Clover</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re revolutionizing how small and medium businesses approach digital advertising through event-driven, autonomous campaign management.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Clover, we believe every small business deserves access to sophisticated advertising technology. 
                Traditional ad management platforms are either too expensive, too complex, or require too much time 
                – resources that SMBs simply don&apos;t have.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We&apos;ve created the first event-driven ad management platform that automatically optimizes campaigns 
                based on real-time data – weather, holidays, news, and sports events – to ensure your ads run at 
                the perfect moment for maximum impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Short-form Ads?</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Stat Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-transparent hover:border-green-300 transition-colors group">
                  <div className="flex flex-col h-full">
                    <div className="text-3xl font-bold text-green-600">73%</div>
                    <p className="text-sm text-gray-600 mt-1 flex-1">prefer short-form video ads</p>
                    <div className="mt-4">
                      <div className="bg-gray-200 rounded-full h-2 w-full">
                        <div className="bg-green-500 h-2 rounded-full w-[73%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-transparent hover:border-blue-300 transition-colors group">
                  <div className="flex flex-col h-full">
                    <div className="text-3xl font-bold text-blue-600">2.5x</div>
                    <p className="text-sm text-gray-600 mt-1 flex-1">more engagement vs other formats</p>
                    <div className="mt-4">
                       <div className="bg-gray-200 rounded-full h-2 w-full">
                        <div className="bg-blue-500 h-2 rounded-full w-[65%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-transparent hover:border-purple-300 transition-colors group">
                  <div className="flex flex-col h-full">
                    <div className="text-3xl font-bold text-purple-600">10x</div>
                    <p className="text-sm text-gray-600 mt-1 flex-1">less cost per impression</p>
                    <div className="mt-4">
                       <div className="bg-gray-200 rounded-full h-2 w-full">
                        <div className="bg-purple-500 h-2 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-transparent hover:border-red-300 transition-colors group">
                  <div className="flex flex-col h-full">
                    <div className="text-3xl font-bold text-red-600">60%</div>
                    <p className="text-sm text-gray-600 mt-1 flex-1">of SMBs struggle with acquisition</p>
                    <div className="mt-4">
                       <div className="bg-gray-200 rounded-full h-2 w-full">
                        <div className="bg-red-500 h-2 rounded-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Pipeline Flowchart */}
      <section className="py-20 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Process Pipeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our ROI-optimized campaigns leverage real-time data and automated strategy for maximum performance.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ProcessPipeline />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problem We <span className="gradient-text">Solve</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-red-100">
              <h3 className="text-2xl font-semibold text-red-600 mb-6">SMB Pain Points</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Constraints</h4>
                    <p className="text-gray-600">40-44% find marketing tasks time-consuming and procrastinated</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Resource Limitations</h4>
                    <p className="text-gray-600">60% struggle with customer acquisition, 33% with performance measurement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expertise Gap</h4>
                    <p className="text-gray-600">Lack marketing knowledge and time for campaign management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Our Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fully Autonomous</h4>
                    <p className="text-gray-600">Set it and forget it - our AI handles everything from creation to optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Event-Driven Timing</h4>
                    <p className="text-gray-600">Launch campaigns at the perfect moment based on real-time events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable Pricing</h4>
                    <p className="text-gray-600">Starting at just $25/month - accessible for every small business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Event-driven micro-campaigns that capitalize on the perfect moments.
            </p>
          </div>
          
          <div className="bg-gradient-success rounded-2xl p-8 md:p-12 text-white animate-gradient">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Event-Driven Micro-Campaigns
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                We use real-time data to automatically trigger and optimize very short advertising campaigns 
                (1-24 hours) that capitalize on local events, weather patterns, and trending moments when 
                SMBs are most likely to see ROI.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">1-24</div>
                  <div className="text-green-100">Hour Campaigns</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Real-Time</div>
                  <div className="text-green-100">Data Integration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Maximum</div>
                  <div className="text-green-100">ROI Timing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the revolution of event-driven advertising and start seeing better results today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/waitlist" className="bg-gradient-success text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors hover:opacity-90 text-center flex items-center justify-center">
              Join the waitlist
            </Link>
            <Link href="/pages/services" className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors text-center flex items-center justify-center">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 