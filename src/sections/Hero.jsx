"use client";
import meImage from "../assets/me4.png";
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
<section className="pt-90 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-400 font-mono mb-4 text-sm tracking-widest uppercase">
              Software Developer 
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Developing <span className="text-cyan-400">Beyond</span> Code.
            </h1>
          </motion.div>
            <p className="text-gray-300 max-w-2xl mx-auto text-xs leading-relaxed">
    Hello, I am currently seeking an opportunity to work as a Software Developer. 
    I am passionate about learning new technologies and continuously improving my skills. 
    I am eager to apply my software development knowledge to create high-quality solutions 
    and contribute to the team. I also look forward to learning from experienced colleagues 
    and growing together with the organization.
  </p>
         
<CardContainer className="inter-var py-4 -mt-10 z-20"> {/* เพิ่ม py เพื่อลดช่องว่างบนล่าง */}            
<CardBody className="bg-gray-50/60 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[22rem] h-90 rounded-xl p-5 border ">              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={meImage}
                  height="800"
                  width="800"
                  className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              {/* ส่วนปุ่มกด */}
              <div className="flex justify-center items-center mt-4">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="text-white bg-cyan-500/90 hover:bg-cyan-400 transition-colors duration-200 font-mono mb-4 text-sm tracking-widest uppercase px-4 py-2 rounded-lg shadow-lg z-20"
                >
                  Manatsanan Kaewpraiwan
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