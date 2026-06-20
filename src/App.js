import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Works />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
