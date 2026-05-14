import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Education from "@/components/Education";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className="relative flex-1 w-full">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-surface-container-high focus:text-on-surface focus:rounded-md-sm"
      >
        Skip to content
      </a>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <About />
      <Education />
      <Connect />
    </main>
  );
}
