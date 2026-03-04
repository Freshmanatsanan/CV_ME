import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaPhp } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", level: 50, icon: <FaReact className="text-cyan-400" />, color: "bg-cyan-400" },
    { name: "MySQL", level: 70, icon: <SiMysql className="text-blue-500" />, color: "bg-blue-500" },
    { name: "Python", level: 60, icon: <FaPython className="text-yellow-400" />, color: "bg-yellow-400" },
    { name: "PHP", level: 20, icon: <FaPhp className="text-indigo-400" />, color: "bg-indigo-400" },
    { name: "Tailwind CSS", level: 60, icon: <SiTailwindcss className="text-sky-400" />, color: "bg-sky-400" },
    { name: "JavaScript", level: 70, icon: <SiJavascript className="text-yellow-300" />, color: "bg-yellow-300" },
  ];

  // แปลงเปอร์เซ็นต์เป็น 3 ระดับ (English Version)
  const getSkillLabel = (level) => {
    if (level >= 80) return "Professional";
    if (level >= 40) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-2 font-sans">Skills & Expertise</h2>
        <div className="h-1 w-20 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className="text-4xl p-2 transition-transform duration-500 group-hover:scale-125">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{skill.name}</h4>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-2 py-0.5 rounded-md">
                      {getSkillLabel(skill.level)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full ${skill.color} shadow-[0_0_12px_rgba(0,0,0,0.5)]`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}