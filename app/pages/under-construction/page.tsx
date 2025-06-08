import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto text-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <div className="mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Clover Logo" 
                width={64} 
                height={64} 
                className="mx-auto"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Under Construction
            </h1>
            
            <p className="text-gray-600 mb-6">
              We&apos;re working hard to bring you something amazing! Our social media pages will be launching soon.
            </p>
            
            <div className="mb-8">
              <div className="flex justify-center space-x-4 mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
              <p className="text-sm text-gray-500">
                Coming Soon: Twitter, LinkedIn, Instagram & GitHub
              </p>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/" 
                className="bg-gradient-success text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block w-full"
              >
                Back to Homepage
              </Link>
              
              <Link 
                href="/pages/waitlist" 
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block w-full"
              >
                Join Our Waitlist for Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 