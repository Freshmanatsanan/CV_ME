import React from 'react';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { WavyBackground } from "../ui/wavy-background";
import { SparklesCore } from "../ui/sparkles";
import HPImage from "../assets/HP.png";
import HP1Image from "../assets/webHP.png";
import { LaptopMockup, MobileMockup } from "./DeviceMockup"; 
import { useState } from "react";
import { link } from 'framer-motion/client';
const Experience = () => {

    const [selectedExperience, setSelectedExperience] = useState(null);
  
  const workExperience = [
    {
      title: "Web Developer Intern",
      company: "Suwannaphum Hospital",
      image: HP1Image,
      device: "laptop",
      period: "Nov 2068 – Mar 2069",
      description: "Refactored legacy code and redesigned UI/UX to improve web accessibility.",
      link: "https://cupsuwan101.moph.go.th/",
      tools: ["Figma", "PHP", "JavaScript", "SQL", "XAMPP"]
    }
  ];

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

                

          


    <section  className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* Work Experience Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold border-b-4 border-blue-500 pb-2 mb-6">Work Experience</h2>
        {workExperience.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-blue-700">{exp.title}</h3>
              <span className="text-sm font-semibold text-gray-500 italic">{exp.period}</span>
            </div>
            <p className="font-semibold text-gray-700">{exp.company}</p>
                        <div className="mb-8">
              {exp.device === "laptop" ? (
                <LaptopMockup imgSrc={exp.image} />
              ) : (
                <MobileMockup imgSrc={exp.image} />
              )}
            </div>


            <p className="my-2 text-gray-600">{exp.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {exp.tools.map(tool => (
                <span key={tool} className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full uppercase font-bold">
                  {tool}
                </span>
              ))}
            </div>
                        <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 mt-3 font-semibold text-sm text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              ดูรายละเอียด
            </a>
          </div>
        ))}
      </div>

    </section>
    </div>
  );
};

export default Experience;