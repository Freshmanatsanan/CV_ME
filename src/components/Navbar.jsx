export default function Navbar() {
  return (
    <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto border-b border-white/10">
      <div className="text-xl font-bold text-cyan-400">PORTFOLIO</div>
      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#skills" className="hover:text-white">Skills</a>
      </div>
    </nav>
  );
}