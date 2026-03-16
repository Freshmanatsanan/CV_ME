import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // ตรวจสอบสถานะเริ่มต้น (ถ้าเคยตั้งไว้ในเครื่องให้ดึงมาใช้)
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // ฟังก์ชันสลับโหมด
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto border-b border-white/10 dark:border-gray-800 transition-colors duration-300">
      <div className="text-xl font-bold text-cyan-500 dark:text-cyan-400">PORTFOLIO</div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          <a href="#Experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
        </div>

        {/* ปุ่มสลับโหมด Dark/Light */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-cyan-400 transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <span className="text-lg">☀️</span> // ไอคอนพระอาทิตย์เมื่ออยู่โหมดมืด
          ) : (
            <span className="text-lg">🌙</span> // ไอคอนพระจันทร์เมื่ออยู่โหมดสว่าง
          )
          }
        </button>
      </div>
    </nav>
  );
}