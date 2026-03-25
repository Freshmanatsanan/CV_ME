import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LaptopMockup, MobileMockup } from "./DeviceMockup"; 
import moImage from "../assets/mo.png";
import wImage from "../assets/w.png";
import kImage from "../assets/k.png";
import maImage from "../assets/ma.png";

const Projects = () => {
  // 1. สร้าง State สำหรับเก็บโปรเจกต์ที่กำลังเปิดดู
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "I say ROAR!(Web Application)",
      image: wImage,
      device: "laptop",
      desc: "ระบบจองคอร์สเรียนออนไลน์และซื้อวิดีโอ ที่ออกแบบมาเพื่อการเรียนรู้ที่มีประสิทธิภาพ",
      details: "รายละเอียดเชิงลึก: ระบบนี้รองรับการชำระเงินออนไลน์, การจัดการวิดีโอสตรีมมิ่ง และระบบ Dashboard สำหรับผู้เรียน",
      tech: ["CSS", "HTML", "Python", "Javascript", "Django"],
      // เพิ่มลิงก์ที่นี่
      link: "https://docs.google.com/document/d/102z9b8AEhvSnTcMADPQSDUkJEfUhYPFjXTdIryRDdb4/edit?tab=t.p65uq4boi0uw#heading=h.9ngequ6nc432"
    },
    {
      title: "I say ROAR! (Mobile Application)",
      image: moImage,
      device: "mobile",
      desc: "แอปพลิเคชันสำหรับเข้าถึงบทเรียนผ่านมือถือ",
      details: "รายละเอียดเชิงลึก: พัฒนาด้วย React Native เพื่อให้ใช้งาน Android พร้อมระบบ Push Notification",
      tech: ["React Native", "Express", "Node.js"],
      // เพิ่มลิงก์ที่นี่
      link: "https://docs.google.com/document/d/102z9b8AEhvSnTcMADPQSDUkJEfUhYPFjXTdIryRDdb4/edit?tab=t.p65uq4boi0uw#heading=h.9ngequ6nc432"
    },
    {
      title: "CREPE",
      image: kImage,
      device: "laptop",
      desc: "ระบบสั่งซื้อเครปและแจ้งเตือน",
      details: "รายละเอียดเชิงลึก: ระบบจัดการคิวหน้าร้าน ลดการรอคอยด้วยการแจ้งเตือนผ่าน SMS เมื่อเครปเสร็จพร้อมเสิร์ฟ",
      tech: ["Python", "Django", "Javascript"]
    },
    {
      title: "Mala Queues",
      image: maImage,
      device: "laptop",
      desc: "ระบบสั่งซื้อหม่าล่าและแจ้งเตือน",
      details: "รายละเอียดเชิงลึก: รองรับการเลือกวัตถุดิบแบบ Custom และคำนวณราคาเรียลไทม์ พร้อมระบบคิวห้องครัว",
      tech: ["Python", "Django", "Javascript"]
    },
 
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto relative">
      <h3 className="text-3xl font-bold text-white mb-10">Selected Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectList.map((proj, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }} 
            onClick={() => setSelectedProject(proj)} // 2. คลิกแล้วเซตค่าโปรเจกต์
            className="flex flex-col cursor-pointer group"
          >
            <div className="mb-8">
              {proj.device === "laptop" ? (
                <LaptopMockup imgSrc={proj.image} />
              ) : (
                <MobileMockup imgSrc={proj.image} />
              )}
            </div>

            <h4 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors">
              {proj.title}
            </h4>
            <p className="text-slate-400 text-sm mb-4">{proj.desc}</p>
            <div className="flex gap-2">
              {proj.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-slate-800 text-[10px] rounded-md text-slate-300 border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Modal สำหรับแสดงรายละเอียด */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop (พื้นหลังดำใส) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-6 text-slate-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-cyan-400 mb-4">{selectedProject.title}</h2>
              
              <div className="mb-6 rounded-xl overflow-hidden border border-slate-800">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto" />
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>

              {/* เพิ่มปุ่มแสดงลิงก์ หากโปรเจคไหนมี link จะแสดงปุ่มนี้ */}
              {selectedProject.link && (
                <div className="mt-4">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg"
                  >
                    ดูเอกสารเพิ่มเติม
                  </a>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;