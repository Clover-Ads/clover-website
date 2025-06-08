import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

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

      {/* Core System Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How <span className="gradient-text">Clover</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 7-step automated process delivers results while you focus on running your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Event Data Integration</h3>
              <p className="text-gray-600">
                Real-time monitoring of weather, holidays, news, and sports events
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Branding Profile</h3>
              <p className="text-gray-600">
                Custom business profile creation tailored to your brand
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Generated Campaign Strategy</h3>
              <p className="text-gray-600">
                Automated campaign planning based on events and your business
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Generated Ads</h3>
              <p className="text-gray-600">
                Auto-created short-video content optimized for engagement
              </p>
            </div>
            
            {/* Step 5 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Budget Reallocation</h3>
              <p className="text-gray-600">
                Dynamic spending optimization across platforms
              </p>
            </div>
            
            {/* Step 6 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow border border-green-100">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Monitoring</h3>
              <p className="text-gray-600">
                Cross-platform performance tracking and analytics
              </p>
            </div>
            
            {/* Step 7 */}
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow lg:col-span-3 max-w-sm mx-auto border border-green-100">
              <div className="w-16 h-16 bg-gradient-green-radial rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ROI-Optimized Campaigns</h3>
              <p className="text-gray-600">
                Continuous optimization loop for maximum return on investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Coverage */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Multi-Platform</span> Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We optimize your campaigns across all major short-video platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">TikTok</h3>
              <p className="text-gray-600">Reach Gen Z and millennials with engaging short-form content</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600">Stories, Reels, and feed posts for visual storytelling</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600">Reach local audiences with targeted video campaigns</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100">
              <div className="w-12 h-12 bg-gradient-green rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">More Platforms</h3>
              <p className="text-gray-600">Expanding to YouTube Shorts, Snapchat, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for successful ad campaigns, automated and optimized
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-lg border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Campaign Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Short-term Campaigns (1-24 hours)</h4>
                    <p className="text-gray-600">Perfect timing for maximum impact</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time ROI Optimization</h4>
                    <p className="text-gray-600">Continuous budget reallocation for best performance</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Event-based Campaigning</h4>
                    <p className="text-gray-600">Unique to Clover - campaigns triggered by real events</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fully Autonomous Operation</h4>
                    <p className="text-gray-600">Set it once, let AI handle the rest</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-lg border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Creation</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Generated Video Ads</h4>
                    <p className="text-gray-600">Professionally crafted short-form content</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Brand Consistency</h4>
                    <p className="text-gray-600">All content matches your brand guidelines</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Event-Contextual Messaging</h4>
                    <p className="text-gray-600">Content tailored to current events and trends</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">A/B Testing</h4>
                    <p className="text-gray-600">Multiple variants tested for optimal performance</p>
                  </div>
                </li>
              </ul>
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
              The most affordable autonomous ad management platform in the market
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-green-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Clover Pro</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold gradient-text">$25</span>
              <span className="text-xl text-gray-600">/month</span>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Everything you need to run successful event-driven ad campaigns
            </p>
            
            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto text-black">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited event-driven campaigns</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>AI-generated video content</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-time optimization</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Multi-platform deployment</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Performance analytics</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 customer support</span>
              </li>
            </ul>
            
            <Link href="/pages/waitlist" className="bg-gradient-success text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors hover:opacity-90 inline-block">
              Join Our Waitlist
            </Link>
            <p className="text-sm text-gray-500 mt-4">No setup fees • Cancel anytime • Early access for waitlist members</p>
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
            Join SMBs who are ready to see better ROI with Clover's event-driven advertising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/waitlist" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Join Our Waitlist
            </Link>
            <Link href="/pages/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 