import Link from "next/link";
import PixelBlast from "@/components/PixelBlast";
import { Section } from "@/components/section";
import { ScrollTint } from "@/components/scroll-tint";
import {
  ContactForm,
  FactCard,
  ProjectCard,
  SkillChip,
  SocialChip,
} from "@/components/ui";
import {
  currentlyBuilding,
  featuredProjects,
  profile,
  quickFacts,
  socialLinks,
  tools,
} from "@/lib/content";

export default function Home() {
  const year = new Date().getFullYear();
  const displayFont = { fontFamily: "var(--font-jersey)" };
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
        <section className="isolate px-5 mt-16 md:mt-30 md:px-10">
          <div
            className="mx-auto flex max-w-5xl flex-col justify-center gap-y-5 pt-16 pb-8"
          >
          <div className="flex flex-col gap-3">
            <h1
              className="text-left text-[clamp(3.5rem,9vw,6rem)] leading-[0.8] text-white"
              style={displayFont}
            >
              Michael Ibia
            </h1>
            <p
              className="mt-3 text-left text-base font-bold uppercase tracking-[0.35em] text-gray-200 md:text-lg"
              style={bodyFont}
            >
              {profile.handle}
            </p>
          </div>
          <p
            className="max-w-4xl text-left text-[11px] font-medium leading-7 tracking-[0em] text-gray-300 md:text-sm"
            style={bodyFont}
          >
            {profile.intro}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            {socialLinks.slice(0, 3).map((link) => (
              <SocialChip key={link.label} link={link} />
            ))}
          </div>

         
          </div>
        </section>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 md:gap-20">
        <Section id="facts">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-3">
            {quickFacts.map((fact) => (
              <FactCard key={fact.title} fact={fact} />
            ))}
          </div>
        </Section>

        <Section id="tools" title="Tools & Frameworks">
          <div className="grid w-full max-w-5xl grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {tools.map((tool) => (
              <SkillChip key={tool.label} skill={tool} />
            ))}
          </div>
        </Section>

        <Section id="current" title="Currently Building">
          <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
            {currentlyBuilding.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="group relative inline-flex items-center pb-1 text-sm uppercase tracking-[0.22em] text-white"
              style={bodyFont}
            >
              View more
              <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          </div>
        </Section>

        <Section id="featured" title="Featured Projects">
          <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="group relative inline-flex items-center pb-1 text-sm uppercase tracking-[0.22em] text-white"
              style={bodyFont}
            >
              View more
              <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          </div>
        </Section>

        <Section id="contact" title="Get in touch">
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </Section>

        <footer
          className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.25em] text-gray-400 md:flex-row md:items-center md:justify-between"
          style={bodyFont}
        >
          <p>&copy; {year} Michael Ibia</p>
         
        </footer>
      </div>
      </div>
    </main>
  );
}
