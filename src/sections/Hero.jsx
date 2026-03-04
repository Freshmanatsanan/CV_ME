"use client";
import meImage from "../assets/me.png";
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { WavyBackground } from "../ui/wavy-background";
import { SparklesCore } from "../ui/sparkles";

const Hero = () => {
  return (
    // 1. สร้าง Container หลักที่คลุมทั้งหน้าจอ
    <div className="h-full relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      
      {/* 2. วาง SparklesCore ให้ลอยเต็มจอ (Absolute) อยู่ชั้นหลังสุด */}
      <div className="w-full absolute inset-0 h-screen z-1">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* 3. WavyBackground และเนื้อหาหลัก (ตั้งค่า z-index ให้สูงกว่าเพื่อให้อยู่ด้านหน้า) */}
      <WavyBackground 
        containerClassName="min-h-screen" 
        className="max-w-4xl mx-auto pb-40 relative z-10"
      >
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-400 font-mono mb-4 text-sm tracking-widest uppercase">
              FULL-STACK & SECURITY
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Developing <span className="text-cyan-400">Beyond</span> Code.
            </h1>
          </motion.div>

         
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50/60 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={meImage}
                  height="1000"
                  width="1000"
                  className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              {/* ส่วนปุ่มกด */}
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="text-sky-50 font-mono mb-4 text-sm tracking-widest uppercase"
                > Manatsanan Kaewpraiwan
                 
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

        </section>
      </WavyBackground>
    </div>
  );
};

export default Hero;