import React from 'react';
import { IPhoneMockup } from 'react-device-mockup';

const MobileMockup = () => {
  return (
    <div className="relative">
      <IPhoneMockup
        screenWidth={280}
        screenType="island"
        frameColor="#1a1a1a"
        hideStatusBar={false}
        hideNavBar={false}
      >
        {/* iOS App Interface with System Fonts */}
        <div className="h-full bg-[#f2f2f7] flex flex-col ios-system-font">
          {/* iOS Navigation Header */}
          <div className="bg-[rgba(248,248,248,0.94)] backdrop-blur-[20px] border-b border-[rgba(60,60,67,0.12)]">
            <div className="flex items-center justify-between px-4 py-4">
              <button className="text-[#007AFF] text-[17px] font-normal">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-[17px] font-semibold text-black tracking-[-0.4px]">
                Campaign Builder
              </h1>
              <button className="text-[#007AFF] text-[17px] font-normal">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="12" cy="19" r="2"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Main Content with iOS Scroll View */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto px-4 py-6 space-y-4">
              {/* iOS Campaign Card */}
              <div className="bg-white rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden">
                {/* Card Header */}
                <div className="px-4 py-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-[44px] h-[44px] bg-[#34C759] rounded-[12px] flex items-center justify-center">
                      <svg className="w-[22px] h-[22px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[17px] font-semibold text-black tracking-[-0.4px]">
                        Shopping Weekend Alert
                      </h3>
                      <p className="text-[15px] text-[#8E8E93] mt-1 tracking-[-0.24px]">
                        Ready to launch • High Impact
                      </p>
                    </div>
                    <div className="w-[30px] h-[30px] bg-[#F2F2F7] rounded-full flex items-center justify-center">
                      <svg className="w-[16px] h-[16px] text-[#8E8E93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* iOS List Style Details */}
                  <div className="space-y-0">
                    <div className="flex justify-between items-center py-3 border-b border-[#E5E5EA] last:border-b-0">
                      <span className="text-[17px] text-black tracking-[-0.4px] font-normal">Trigger</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[17px] text-[#8E8E93] tracking-[-0.4px] font-normal">Weather + Events</span>
                        <svg className="w-[14px] h-[14px] text-[#C7C7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[#E5E5EA] last:border-b-0">
                      <span className="text-[17px] text-black tracking-[-0.4px] font-normal">Budget</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[17px] text-[#8E8E93] tracking-[-0.4px] font-normal">$500</span>
                        <svg className="w-[14px] h-[14px] text-[#C7C7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-[17px] text-black tracking-[-0.4px] font-normal">Reach</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-[17px] text-[#8E8E93] tracking-[-0.4px] font-normal">2,500 people</span>
                        <svg className="w-[14px] h-[14px] text-[#C7C7CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iOS Grouped Table Style Performance */}
              <div className="space-y-1">
                <h4 className="text-[15px] font-normal text-[#8E8E93] uppercase tracking-[-0.24px] px-1 mb-2">
                  EXPECTED PERFORMANCE
                </h4>
                <div className="bg-white rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="divide-y divide-[#E5E5EA]">
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-[29px] h-[29px] bg-[#007AFF] rounded-full flex items-center justify-center">
                          <svg className="w-[16px] h-[16px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="text-[17px] text-black tracking-[-0.4px] font-normal">Impressions</span>
                      </div>
                      <span className="text-[17px] text-[#8E8E93] tracking-[-0.4px] font-normal">12.5K</span>
                    </div>
                    
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-[29px] h-[29px] bg-[#34C759] rounded-full flex items-center justify-center">
                          <svg className="w-[16px] h-[16px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        </div>
                        <span className="text-[17px] text-black tracking-[-0.4px] font-normal">Clicks</span>
                      </div>
                      <span className="text-[17px] text-[#8E8E93] tracking-[-0.4px] font-normal">375</span>
                    </div>
                    
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-[29px] h-[29px] bg-[#FF9500] rounded-full flex items-center justify-center">
                          <svg className="w-[16px] h-[16px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span className="text-[17px] text-black tracking-[-0.4px] font-normal">CTR</span>
                      </div>
                      <span className="text-[17px] text-[#8E8E93] tracking-[-0.4px] font-normal">3.0%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* iOS Style Action Button */}
              <div className="pt-2">
                <button className="w-full bg-[#007AFF] rounded-[12px] py-4 flex items-center justify-center shadow-[0_1px_3px_rgba(0,122,255,0.3)]">
                  <span className="text-white text-[17px] font-semibold tracking-[-0.4px]">Activate Campaign</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </IPhoneMockup>

      {/* System Font Styles */}
      <style jsx>{`
        .ios-system-font,
        .ios-system-font * {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}</style>
    </div>
  );
};

export default MobileMockup; 