import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from './sections/Experience'


function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;