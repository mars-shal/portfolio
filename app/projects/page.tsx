import Link from "next/link";
import type { Metadata } from "next";
import PixelBlast from "@/components/PixelBlast";
import { Section } from "@/components/section";
import { ScrollTint } from "@/components/scroll-tint";
import { Icon } from "@iconify/react";
import { ProjectCard } from "@/components/ui";
import {
  featuredProjects,
  currentlyBuilding,
  moreProjects,
  socialLinks,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects | Michael Ibia",
  description: "All projects by Michael Ibia — shipped apps, tools, and experiments.",
};

export default function ProjectsPage() {
  const year = new Date().getFullYear();
  const bodyFont = { fontFamily: "var(--font-nunito)" };

  return (
    <main className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-10">
      <div className="fixed inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B497CF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
        <ScrollTint />
      </div>
      <div className="relative z-10">
        <section className="isolate px-5 md:px-10">
          <div className="mx-auto flex max-w-5xl flex-col justify-center gap-y-5 pt-24 pb-8">
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-white text-white/60 mb-10 transition-colors">
                <Icon icon="carbon:home" className="h-10 w-10" />
              </Link>
              <h1
                className="text-left text-[clamp(3rem,8vw,5rem)] leading-[0.8] text-white"
                style={{ fontFamily: "var(--font-jersey)" }}
              >
                Projects
              </h1>
              <p
                className="text-left text-xs font-bold uppercase tracking-[0.35em] text-gray-200 md:text-sm"
                style={bodyFont}
              >
                Everything I&apos;ve built
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 md:gap-20">
          <Section id="featured" title="Featured">
            <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section id="building" title="Currently Building">
            <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
              {currentlyBuilding.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section id="more" title="More Projects">
            <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2">
              {moreProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <footer
            className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.25em] text-gray-400 md:flex-row md:items-center md:justify-between"
            style={bodyFont}
          >
           
            <p>&copy; {year} Michael Ibia</p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative inline-flex items-center pb-1 text-sm text-white"
                  style={bodyFont}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
