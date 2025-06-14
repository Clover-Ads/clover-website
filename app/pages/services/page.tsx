"use client";

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

// Note: Since this is a client component, we'll add metadata via a separate metadata.js file
// For now, we'll focus on semantic HTML improvements and alt texts

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
    <ul className="space-y-4" role="list">
      {features[key].map((feature: { title: string; description: string; icon: string }) => (
        <li key={feature.title} className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" role="img" aria-label={`${feature.title} icon`}>
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
    <section className="py-20 bg-white" aria-labelledby="service-features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="service-features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for successful ad campaigns, automated and optimized.
          </p>
        </header>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center border-b border-gray-200 mb-8" role="tablist" aria-label="Service feature categories">
            <button 
              onClick={() => setActiveTab('management')} 
              className={`px-6 py-3 text-lg font-medium transition-colors ${activeTab === 'management' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-green-500'}`}
              role="tab"
              aria-selected={activeTab === 'management'}
              aria-controls="management-panel"
              id="management-tab"
            >
              Campaign Management
            </button>
            <button 
              onClick={() => setActiveTab('creation')} 
              className={`px-6 py-3 text-lg font-medium transition-colors ${activeTab === 'creation' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-green-500'}`}
              role="tab"
              aria-selected={activeTab === 'creation'}
              aria-controls="creation-panel"
              id="creation-tab"
            >
              Content Creation
            </button>
          </div>

          <div 
            className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-lg border border-green-100"
            role="tabpanel"
            id={`${activeTab}-panel`}
            aria-labelledby={`${activeTab}-tab`}
          >
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
      {/* Structured Data for Services Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Clover Ad Management Services",
            "description": "Comprehensive event-driven ad management solutions for SMBs including campaign management, content creation, and multi-platform optimization",
            "provider": {
              "@type": "Organization",
              "name": "Clover",
              "url": "https://clover-ads.com"
            },
            "serviceType": "Digital Marketing Services",
            "audience": {
              "@type": "Audience",
              "audienceType": "Small and Medium Businesses"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ad Management Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Campaign Management",
                    "description": "Real-time ROI optimization and event-based campaigning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Creation",
                    "description": "AI-generated video ads with brand consistency"
                  }
                }
              ]
            }
          })
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <header className="pt-20 bg-gradient-hero">
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
      </header>

      {/* Service Features */}
      <ServiceFeatures />

      {/* Platform Coverage */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50" aria-labelledby="platform-coverage-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 id="platform-coverage-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Multi-Platform</span> Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We optimize your campaigns across all major short-video platforms with intelligent automation and real-time performance tracking.
            </p>
          </header>
          
          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" role="list" aria-label="Platform statistics">
            <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200" role="listitem">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">4+</div>
              <div className="text-sm text-gray-600">Platforms</div>
            </div>
            <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200" role="listitem">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Optimization</div>
            </div>
            <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200" role="listitem">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">3.2B+</div>
              <div className="text-sm text-gray-600">Daily Users</div>
            </div>
            <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200" role="listitem">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Coverage Rate</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list" aria-label="Supported platforms">
            {/* TikTok Card */}
            <article className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-purple-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden" role="listitem">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transform transition-transform duration-300" role="img" aria-label="TikTok platform logo">
                  <svg width="60px" height="60px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true">
                    <title>Tiktok</title>
                    <g id="Icon/Social/tiktok-color" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Group-7" transform="translate(8.000000, 6.000000)">
                            <path d="M29.5248245,9.44576327 C28.0821306,9.0460898 26.7616408,8.29376327 25.6826204,7.25637551 C25.5109469,7.09719184 25.3493143,6.92821224 25.1928245,6.75433469 C23.9066204,5.27833469 23.209151,3.38037551 23.2336408,1.42290612 L17.3560898,1.42290612 L17.3560898,23.7086204 C17.3560898,27.7935184 15.1520082,29.9535184 12.416498,29.9535184 C11.694049,29.9611102 10.9789469,29.8107429 10.3213959,29.5124571 C9.6636,29.2144163 9.07951837,28.7758041 8.60955918,28.2272327 C8.1398449,27.6789061 7.79551837,27.0340898 7.60180408,26.3385796 C7.4078449,25.6430694 7.36890612,24.9132735 7.48743673,24.2008653 C7.60596735,23.4884571 7.87902857,22.8105796 8.28751837,22.2154776 C8.69625306,21.6198857 9.23037551,21.1212735 9.85241633,20.7546612 C10.474702,20.3878041 11.1694776,20.1617633 11.8882531,20.0924571 C12.6070286,20.023151 13.3324163,20.1122939 14.0129878,20.3535184 L14.0129878,14.3584163 C13.4889061,14.2430694 12.9530694,14.1862531 12.416498,14.1894367 L12.3917633,14.1894367 C10.2542939,14.1943347 8.16604898,14.8325388 6.39127347,16.0234776 C4.61649796,17.2149061 3.23429388,18.9051918 2.41976327,20.8812735 C1.60523265,22.8578449 1.39486531,25.0310694 1.8151102,27.1269061 C2.2351102,29.2227429 3.2671102,31.1469061 4.78033469,32.6564571 C6.29380408,34.1660082 8.22066122,35.1933551 10.3174776,35.6082122 C12.4142939,36.0230694 14.5870286,35.8073143 16.561151,34.9878857 C18.5355184,34.1682122 20.2226204,32.7820898 21.409151,31.0041306 C22.5959265,29.2264163 23.2289878,27.136702 23.228498,24.9992327 L23.228498,12.8155592 C25.5036,14.392702 28.2244163,15.134498 31.1289061,15.1886204 L31.1289061,9.68551837 C30.5869469,9.66568163 30.049151,9.5851102 29.5248245,9.44576327" id="Fill-1" fill="#FE2C55"></path>
                            <path d="M25.195102,6.75428571 C24.7946939,6.47510204 24.4148571,6.1675102 24.0587755,5.83346939 C22.8210612,4.66016327 22.0062857,3.11020408 21.7420408,1.42530612 C21.6622041,0.954367347 21.6220408,0.47755102 21.6220408,0 L15.7444898,0 L15.7444898,22.6408163 C15.7444898,27.5069388 13.5404082,28.5183673 10.804898,28.5183673 C10.0829388,28.5262041 9.36783673,28.3758367 8.71028571,28.0773061 C8.0524898,27.7792653 7.46791837,27.3406531 6.99820408,26.7920816 C6.5282449,26.2437551 6.18440816,25.5989388 5.99044898,24.9034286 C5.7964898,24.2079184 5.75755102,23.4781224 5.87583673,22.7657143 C5.99461224,22.053551 6.26767347,21.3756735 6.67640816,20.7800816 C7.08489796,20.1847347 7.61902041,19.6861224 8.24106122,19.3195102 C8.86334694,18.952898 9.55787755,18.7266122 10.276898,18.6573061 C10.9959184,18.588 11.7208163,18.6773878 12.4016327,18.9183673 L12.4016327,12.9328163 C5.40489796,11.8236735 0,17.4783673 0,23.5760816 C0.00465306122,26.4426122 1.14514286,29.1898776 3.17191837,31.216898 C5.19869388,33.2434286 7.94595918,34.3839184 10.8124898,34.3885714 C16.7730612,34.3885714 21.6220408,30.7444898 21.6220408,23.5760816 L21.6220408,11.3924082 C23.8995918,12.9795918 26.6204082,13.7142857 29.524898,13.7632653 L29.524898,8.26040816 C27.9658776,8.18914286 26.4617143,7.66604082 25.195102,6.75428571" id="Fill-3" fill="#25F4EE"></path>
                            <path d="M21.6220653,23.5764245 L21.6220653,11.392751 C23.8996163,12.9794449 26.6204327,13.7141388 29.5251673,13.7633633 L29.5251673,9.44581224 C28.0822286,9.04613878 26.7617388,8.29381224 25.6824735,7.25617959 C25.5110449,7.09724082 25.3494122,6.92826122 25.1926776,6.75438367 C24.7922694,6.4752 24.4126776,6.16736327 24.056351,5.83356735 C22.8186367,4.66026122 22.0041061,3.11030204 21.7396163,1.42540408 L17.3730857,1.42540408 L17.3730857,23.7111184 C17.3730857,27.7957714 15.1690041,29.9560163 12.4334939,29.9560163 C11.6569224,29.9538122 10.8918612,29.7681796 10.2005143,29.414302 C9.50941224,29.0601796 8.91186122,28.5476082 8.45635102,27.9182204 C7.49071837,27.3946286 6.72712653,26.5636898 6.2865551,25.5571592 C5.84573878,24.5508735 5.75341224,23.4260571 6.02377959,22.3609959 C6.29390204,21.2959347 6.91177959,20.3516082 7.77896327,19.6771592 C8.64639184,19.0027102 9.71365714,18.6365878 10.8122694,18.6365878 C11.3564327,18.6412408 11.8961878,18.7362612 12.4090041,18.9182204 L12.4090041,14.1894857 C10.304351,14.1921796 8.24647347,14.8093224 6.48786122,15.9657306 C4.72924898,17.1221388 3.3470449,18.7666286 2.51047347,20.6978939 C1.67390204,22.6291592 1.41969796,24.7627102 1.77896327,26.8362612 C2.13822857,28.9098122 3.09553469,30.8334857 4.53308571,32.3704653 C6.36271837,33.6848327 8.55945306,34.3906286 10.8122694,34.3884296 C16.7730857,34.3884296 21.6220653,30.7445878 21.6220653,23.5764245" id="Fill-5" fill="#000000"></path>
                        </g>
                    </g>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">TikTok</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Viral short-form content optimized for trending hashtags and sounds.</p>
                
                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mr-2"></div>
                    <span>1B+ Monthly Users</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mr-2"></div>
                    <span>Trend Detection AI</span>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Instagram Card */}
            <article className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-pink-500 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden" role="listitem">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transform transition-transform duration-300" role="img" aria-label="Instagram platform logo">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">Instagram</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Reels and Stories with advanced creator economy integration.</p>
                
                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                    <span>2B+ Monthly Users</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                    <span>Creator Partnerships</span>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Facebook Card */}
            <article className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden" role="listitem">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transform transition-transform duration-300" role="img" aria-label="Facebook platform logo">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Facebook</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Precise local targeting with detailed demographic insights.</p>
                
                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>2.9B+ Monthly Users</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>Local Targeting</span>
                  </div>
                </div>
              </div>
            </article>
            
            {/* YouTube Shorts Card */}
            <article className="group relative bg-white p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-red-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden" role="listitem">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600 rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transform transition-transform duration-300" role="img" aria-label="YouTube Shorts platform logo">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">YouTube Shorts</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">Vertical video discovery leveraging YouTube&apos;s massive reach.</p>
                
                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span>2.7B+ Monthly Users</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span>Algorithm Mastery</span>
                  </div>
                </div>
              </div>
            </article>
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