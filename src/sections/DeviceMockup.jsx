// src/components/DeviceMockup.jsx
import React from "react";

export const LaptopMockup = ({ imgSrc }) => (
  <div className="relative mx-auto max-w-[301px] md:max-w-[512px] group">
    {/* เลเยอร์แสงฟุ้งด้านหลัง (Backlight Glow) */}
    <div className="absolute -inset-1 bg-white/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
    
    <div className="relative border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] md:h-[294px] shadow-[0_0_50px_-12px_rgba(255,255,255,0.8)]">
      <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
        <img src={imgSrc} className="h-full w-full object-cover" alt="Laptop mockup" />
      </div>
      <div className="relative mx-auto bg-gray-900 rounded-b-xl h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]"></div>
    </div>
  </div>
);

export const MobileMockup = ({ imgSrc }) => (
  <div className="relative mx-auto w-[227px] group">
    {/* เลเยอร์แสงฟุ้งด้านหลัง (Backlight Glow) */}
    <div className="absolute -inset-4 bg-white/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

    <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] w-full shadow-[0_0_60px_-15px_rgba(255,255,255,0.8)]">
      {/* ลำโพงสนทนา (Dynamic Island Style) */}
      <div className="w-[80px] h-[18px] bg-gray-800 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-2xl z-20"></div>
      
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative z-10">
        <img src={imgSrc} className="w-full h-full object-cover" alt="Mobile mockup" />
      </div>
    </div>
  </div>
);