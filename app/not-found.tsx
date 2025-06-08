import Image from 'next/image';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <div className="mb-6">
              <Image 
                src="/images/3leaf.png" 
                alt="Three Leaf Clover" 
                width={160} 
                height={160} 
                className="mx-auto opacity-75"
              />
            </div>
            
            <h1 className="text-6xl font-bold gradient-text mb-4">
              404
            </h1>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Not so lucky this time huh
            </h2>
            
            <p className="text-gray-600 mb-8">
              Try again
            </p>
            
            <div className="space-y-4">
              <Link 
                href="/" 
                className="bg-gradient-success text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block w-full"
              >
                🍀 Back to Homepage
              </Link>
              
              <div className="flex space-x-3">
                <Link 
                  href="/pages/about" 
                  className="text-green-600 hover:text-green-700 font-medium text-sm flex-1"
                >
                  About Us
                </Link>
                <Link 
                  href="/pages/services" 
                  className="text-green-600 hover:text-green-700 font-medium text-sm flex-1"
                >
                  Our Services
                </Link>
                <Link 
                  href="/pages/waitlist" 
                  className="text-green-600 hover:text-green-700 font-medium text-sm flex-1"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 