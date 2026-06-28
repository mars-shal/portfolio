export type Project = {
  number?: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
  imageAlt: string;
  icon: string;
  featured?: boolean;
};

export type QuickFact = {
  title: string;
  teaser: string;
  detail: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Skill = {
  label: string;
  icon: string;
};

export const profile = {
  name: "Michael Ibia",
  handle: "Software developer",
  avatar: "/avatar.png",
  cv: "/Michael_Ibia_Resume_.docx",
  current: {
    building: "Friday",
    previous: "Litmus",
  },
  intro:
    "A software developer who builds intuitive, reliable, and scalable digital systems that solve real problems and create meaningful user experiences",
  github: "https://github.com/AtomicPositron",
  linkedin: "https://www.linkedin.com/in/michael-ibia/",
  email: "mailto:michael.ibia@example.com",
  twitter: "https://x.com/AtomicPositron",
};

export const currentlyBuilding: Project[] = [
  {
    title: "F.R.I.D.A.Y",
    type: "Desktop Assistant",
    description:
      "Siri-style Bun assistant with a glass-and-ember interface for fast, conversational workflows.",
    stack: ["Bun", "TypeScript", "AI UI"],
    href: "https://github.com/AtomicPositron",
    image: "/project-friday.svg",
    imageAlt: "Desktop assistant mockup for F.R.I.D.A.Y",
    icon: "carbon:code",
  },
  {
    title: "Kevora",
    type: "Developer Platform",
    description:
      "An open-source FlutterFlow alternative focused on faster app development with a dark, prompt-driven interface.",
    stack: ["TypeScript", "Builder UI"],
    href: "https://github.com/AtomicPositron",
    image: "/project-kevora.svg",
    imageAlt: "App builder mockup for Kevora",
    icon: "carbon:logo-react",
  },
];

export const tools: Skill[] = [
  { label: "JavaScript", icon: "nonicons:javascript-16" },
  { label: "TypeScript", icon: "nonicons:typescript-16" },
  { label: "React", icon: "nonicons:react-16" },
  { label: "React Native", icon: "carbon:logo-react" },
  { label: "Vue.js", icon: "nonicons:vue-16" },
  { label: "Next.js", icon: "nonicons:next-16" },
  { label: "Tailwind CSS", icon: "carbon:code" },
  { label: "Node.js", icon: "nonicons:node-16" },
  { label: "Python", icon: "nonicons:python-16" },
  { label: "Bun", icon: "carbon:build-tool" },
  { label: "Supabase", icon: "carbon:database-postgresql" },
  { label: "Git", icon: "carbon:logo-git" },
];

export const quickFacts: QuickFact[] = [
  {
    title: "Work Experience",
    teaser: "Frontend engineering intern at AETECH Research Labs, Abuja.",
    detail:
      "Built and shipped frontend features in a professional engineering team - first real-world exposure to production codebases and team workflows.",
  },
  {
    title: "Education",
    teaser: "Computer Engineering @ Bells University of Technology.",
    detail:
      "Coursework spanning software development, systems programming, and applied math - currently applied through self-directed builds like Friday and Litmus.",
  },
];

export const featuredProjects: Project[] = [
  {
    number: "01",
    title: "Emora",
    type: "Web App",
    description:
      "Vue.js AI chatbot using the OpenRouter API, deployed live with a focused conversational interface.",
    stack: ["Vue.js", "OpenRouter", "Deployment"],
    href: "https://github.com/AtomicPositron",
    image: "/project-emora.svg",
    imageAlt: "Chatbot interface mockup for Emora",
    icon: "carbon:logo-vue",
    featured: true,
  },
  {
    number: "02",
    title: "Dandori",
    type: "Mobile App",
    description:
      "React Native productivity app built around planning, execution, and lightweight task management.",
    stack: ["React Native", "Mobile UX"],
    href: "https://github.com/AtomicPositron",
    image: "/project-dandori.svg",
    imageAlt: "Mobile app mockup for Dandori",
    icon: "carbon:phone",
    featured: true,
  },
  {
    number: "03",
    title: "Litmus",
    type: "AI Search",
    description:
      "Python and FastAPI project with vector search, novelty and popularity scoring, and a bento-grid landing page.",
    stack: ["Python", "FastAPI", "fastembed"],
    href: "https://github.com/AtomicPositron",
    image: "/project-litmus.svg",
    imageAlt: "Landing page mockup for Litmus",
    icon: "carbon:search",
    featured: true,
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "carbon:logo-github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "carbon:logo-linkedin" },
  { label: "Email", href: profile.email, icon: "carbon:email" },
  { label: "Twitter/X", href: profile.twitter, icon: "carbon:logo-x" },
];
