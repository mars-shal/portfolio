"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Project, QuickFact, Skill, SocialLink } from "@/lib/content";

const bodyFont = { fontFamily: "var(--font-nunito)" };
const displayFont = { fontFamily: "var(--font-jersey)" };

const stackIcons: Record<string, string> = {
  "Electron": "carbon:electron",
  "TypeScript": "nonicons:typescript-16",
  "AI UI": "carbon:machine-learning-model",
  "Bun": "carbon:build-tool",
  "Builder UI": "carbon:code",
  "Vue.js": "nonicons:vue-16",
  "OpenRouter": "carbon:router-wifi",
  "Deployment": "carbon:deploy",
  "React Native": "carbon:logo-react",
  "Mobile UX": "carbon:mobile",
  "Productivity": "carbon:productivity",
  "Python": "nonicons:python-16",
  "FastAPI": "carbon:lightning",
  "fastembed": "carbon:ai-status",
  "HTML5": "carbon:html",
  "CSS3": "simple-icons:css3",
  "JavaScript": "nonicons:javascript-16",
  "React": "nonicons:react-16",
  "Tailwind CSS": "carbon:code",
  "REST API": "carbon:data--1",
  "Expo": "carbon:mobile",
  "Bash": "carbon:terminal",
  "Shell Scripting": "carbon:script",
  "Linux": "carbon:logo-tux",
};

export function ProjectCard({ project }: { project: Project }) {
  const isProfileFallback = project.href === "https://github.com/mars-shal";
  const showGithub = project.href.startsWith("https://github.com/mars-shal/");
  const showLive = !!project.liveUrl;
  const showView = !showGithub && !showLive && !isProfileFallback;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-white/12 bg-white/[0.01] px-6 py-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-3">
        <Icon icon={project.icon} className="h-5 w-5 text-white" />
        <h3 className="text-xl text-white" style={displayFont}>
          {project.title}
        </h3>
      </div>
      <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400" style={bodyFont}>
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            title={item}
            aria-label={item}
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-3 py-1.5"
          >
            <Icon icon={stackIcons[item] || "carbon:code"} className="h-5 w-5 shrink-0 text-gray-300" />
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4">
        {showGithub && (
          <Link
            href={project.href}
            className="group relative inline-flex w-fit items-center pb-1 text-xs uppercase tracking-[0.22em] text-white"
            target="_blank"
          >
            GitHub →
            <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        )}
        {showLive && (
          <Link
            href={project.liveUrl!}
            className="group relative inline-flex w-fit items-center pb-1 text-xs uppercase tracking-[0.22em] text-gray-400 transition-colors hover:text-white"
            target="_blank"
          >
            Live Demo →
            <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        )}
        {showView && (
          <Link
            href={project.href}
            className="group relative inline-flex w-fit items-center pb-1 text-xs uppercase tracking-[0.22em] text-white"
            target="_blank"
          >
            View Project →
            <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        )}
      </div>
    </article>
  );
}

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div
      title={skill.label}
      aria-label={skill.label}
      className="flex w-full flex-col border border-white/15 items-center justify-center gap-2 px-2 py-3 md:px-4 md:py-4 text-white shadow-sm transition hover:-translate-y-1"
    >
      <Icon icon={skill.icon} className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
      <span className="text-center text-[10px] leading-none text-white/85 sm:text-[11px] md:text-xs">
        {skill.label}
      </span>
    </div>
  );
}

export function FactCard({ fact }: { fact: QuickFact }) {
  return (
    <div className="w-full border-b border-white/10 py-4 text-left transition hover:translate-x-1">
      <div className="grid grid-cols-[1rem_minmax(0,1fr)] gap-x-4">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d4d4d4]" />
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl text-white" style={displayFont}>
            {fact.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-300" style={bodyFont}>
            {fact.teaser}
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-400" style={bodyFont}>
            {fact.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SocialChip({ link }: { link: SocialLink }) {
  return (
    <Link
      href={link.href}
      className="group relative inline-flex items-center pb-1 text-sm text-white"
      style={bodyFont}
    >
      <Icon icon={link.icon} className="mr-2 h-4 w-4 shrink-0" />
      {link.label}
      <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Link>
  );
}

import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_ID = "mkolbdpq";

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <p className="text-sm text-gray-300" style={bodyFont}>
        Thanks! I&rsquo;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        name="name"
        required
        placeholder="Name"
        className="h-12 rounded-xl border border-white/15 bg-transparent px-4 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none"
        style={bodyFont}
      />
      <ValidationError field="name" errors={state.errors} />
      <input
        name="email"
        required
        placeholder="Email"
        type="email"
        className="h-12 rounded-xl border border-white/15 bg-transparent px-4 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none"
        style={bodyFont}
      />
      <ValidationError field="email" errors={state.errors} />
      <textarea
        name="message"
        required
        placeholder="Message"
        rows={6}
        className="rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-white focus:outline-none"
        style={bodyFont}
      />
      <ValidationError field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="group relative inline-flex w-fit items-center pb-1 text-sm uppercase tracking-[0.22em] text-white disabled:opacity-40"
        style={bodyFont}
      >
        {state.submitting ? "Sending..." : "Send"}
        <span className="absolute bottom-0 left-0 h-px w-full bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </button>
    </form>
  );
}
