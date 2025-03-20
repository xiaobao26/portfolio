import Hero from "./components/main/Hero";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
