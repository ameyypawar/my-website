import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const [tubio, gitfix] = featuredProjects;
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-32 sm:py-40">
      <div className="max-w-[1080px] mx-auto px-6 sm:px-12">
        <Reveal>
          <h2 id="projects-heading" className="text-headline-lg font-semibold mb-12">
            Featured work
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5 md:aspect-square">
          <Reveal className="md:col-span-2 md:row-span-2">
            <ProjectCard project={tubio} size="lg" />
          </Reveal>
          <Reveal className="md:col-span-1 md:row-span-2">
            <ProjectCard project={gitfix} size="md" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
