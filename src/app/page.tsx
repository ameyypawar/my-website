import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import PlayBreakout from "@/components/PlayBreakout";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full max-w-[1024px] mx-auto px-6 sm:px-10 py-24">
        <Hero />
        <FeaturedProjects />
        <Experience />
        <Skills />
        <OpenSource />
      </main>
      <PlayBreakout />
    </>
  );
}
