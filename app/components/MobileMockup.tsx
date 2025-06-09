import React from 'react';
import { IPhoneMockup } from 'react-device-mockup';

// --- Helper Components for True-to-iOS UI ---

// iOS-style Icon Component
const Icon = ({ path, className = 'w-6 h-6' }: { path: string; className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// --- Main Mobile Mockup ---

const CampaignScreen = () => (
  <div className="h-full bg-white flex flex-col">
    {/* Navigation Bar */}
    <div className="border-b border-gray-200 flex-shrink-0">
      <div className="h-[44px] flex items-center justify-between px-2">
        <button className="text-blue-500 text-[16px] min-w-[44px] min-h-[44px] flex items-center">
          <Icon path="M15 19l-7-7 7-7" className="w-5 h-5"/>
        </button>
        <h1 className="text-black text-[16px] font-semibold absolute left-1/2 -translate-x-1/2">
          New Campaign
        </h1>
      </div>
    </div>
    
    {/* Main Content */}
    <div className="flex-1 overflow-y-auto p-4 flex flex-col">
      <div className="space-y-5">
        {/* Banner */}
        <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3">
            <Icon path="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" className="text-gray-600 w-5 h-5"/>
            <p className="text-gray-800 text-[14px] font-medium flex-1">Foot traffic +30% since 10 AM</p>
        </div>

        {/* Video Carousel */}
        <div>
          <h2 className="text-gray-500 text-[12px] font-semibold uppercase tracking-wide px-1 mb-2">Creative</h2>
          <div className="flex space-x-2 overflow-x-auto pb-1">
            {[1, 2, 3].map(i => (
              <div key={i} className={`relative w-[120px] h-[75px] rounded-md flex-shrink-0 bg-gray-300 ring-2 ring-offset-2 ring-white ${i === 1 ? 'ring-blue-500' : 'ring-transparent'}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
                        <Icon path="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" className="text-white w-6 h-6"/>
                    </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-black/60 px-1 py-0.5 rounded text-white text-[9px] font-semibold">0:15</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Settings List */}
        <div className="space-y-2">
            <h3 className="text-gray-500 text-[12px] font-semibold uppercase tracking-wide px-1">Settings</h3>
            <div className="bg-gray-100/60 rounded-lg">
                {/* Budget Row */}
                <div className="flex items-center justify-between p-3 border-b border-gray-200/70">
                    <span className="text-gray-800 text-[15px]">Budget</span>
                    <div className="flex items-center gap-3">
                        <button className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[18px] text-blue-500 active:bg-gray-300">-</button>
                        <div className="text-gray-800 text-[15px] w-12 text-center">$50</div>
                        <button className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[18px] text-blue-500 active:bg-gray-300">+</button>
                    </div>
                </div>
                {/* Duration Row */}
                <div className="flex items-center justify-between p-3">
                    <span className="text-gray-800 text-[15px]">Duration</span>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-[15px]">1 hour</span>
                        <Icon path="M9 5l7 7-7 7" className="text-gray-300 w-4 h-4"/>
                    </div>
                </div>
            </div>
             <p className="text-gray-400 text-center text-[12px] px-2 pt-1">
                Estimated reach: ~1,250 impressions.
            </p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="mt-auto pt-4 flex-shrink-0">
          <div className="flex gap-3">
              <button className="w-full h-[44px] bg-gray-200 rounded-lg text-black text-[15px] font-semibold active:bg-gray-300">Preview Ad</button>
              <button className="w-full h-[44px] bg-blue-500 rounded-lg text-white text-[15px] font-semibold active:bg-blue-600">Launch Now</button>
          </div>
      </div>
    </div>
  </div>
);

const MobileMockup = () => {
  return (
    <div className="relative">
      <IPhoneMockup
        screenWidth={280}
        screenType="island"
        frameColor="#1a1a1a"
        hideStatusBar
      >
        <div className="h-full bg-black flex flex-col ios-system-font">
          <CampaignScreen />
        </div>
      </IPhoneMockup>

      <style jsx>{`
        .ios-system-font,
        .ios-system-font * {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default MobileMockup; 