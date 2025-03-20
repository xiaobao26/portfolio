import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <Skills />
    </div>
  );
}
