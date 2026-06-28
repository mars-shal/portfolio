export type Project = {
  number?: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
  liveUrl?: string;
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
  name: "Michael E. Ibia",
  handle: "Software Developer",
  avatar: "/avatar.png",
  location: "Nigeria",
  current: {
    building: "Dandori",
    previous: "AETECH Research Labs",
  },
  intro:
    "Software developer and Computer Engineering student with a portfolio of self-built, production-deployed applications. Proficient in React.js, React Native, Vue.js, JavaScript (ES6+), HTML5, and CSS3. Experienced integrating REST APIs, designing component-based UIs, and shipping apps to real users all independently.",
  github: "https://github.com/mars-shal",
  linkedin: "https://www.linkedin.com/in/michael-ibia/",
  email: "mailto:ietorobong@gmail.com",
  twitter: "https://x.com/mars-shal",
  cv: "/Michael_Ibia_Resume_.docx",
};

export const currentlyBuilding: Project[] = [
  {
    title: "Dandori",
    type: "Student Productivity App",
    description:
      "Building a mobile-first student productivity app from the ground up with React Native and Expo. Designing and implementing core features for class planning, study session management, and academic goal tracking.",
    stack: ["React Native", "Expo", "Mobile UX"],
    href: "https://github.com/mars-shal",
    image: "/project-dandori.svg",
    imageAlt: "Mobile app mockup for Dandori",
    icon: "carbon:phone",
  },
  {
    title: "Kevora",
    type: "Developer Platform",
    description:
      "An open-source FlutterFlow alternative focused on faster app development with a dark, prompt-driven interface.",
    stack: ["TypeScript", "Builder UI"],
    href: "https://github.com/mars-shal",
    image: "/project-kevora.svg",
    imageAlt: "App builder mockup for Kevora",
    icon: "carbon:logo-react",
  },
  {
    title: "F.R.I.D.A.Y",
    type: "Desktop Assistant",
    description:
      "Siri-style Bun assistant with a glass-and-ember interface for fast, conversational workflows.",
    stack: ["Bun", "TypeScript", "AI UI"],
    href: "https://github.com/mars-shal",
    image: "/project-friday.svg",
    imageAlt: "Desktop assistant mockup for F.R.I.D.A.Y",
    icon: "carbon:code",
  },
];

export const tools: Skill[] = [
  { label: "JavaScript", icon: "nonicons:javascript-16" },
  { label: "TypeScript", icon: "nonicons:typescript-16" },
  { label: "React", icon: "nonicons:react-16" },
  { label: "React Native", icon: "carbon:logo-react" },
  { label: "Vue.js", icon: "nonicons:vue-16" },
  { label: "HTML5", icon: "carbon:html" },
  { label: "CSS3", icon: "simple-icons:css3" },
  { label: "Tailwind CSS", icon: "carbon:code" },
  { label: "Expo", icon: "carbon:mobile" },
  { label: "Vite", icon: "carbon:lightning" },
  { label: "Git", icon: "carbon:logo-git" },
  { label: "Python", icon: "nonicons:python-16" },
];

export const quickFacts: QuickFact[] = [
  {
    title: "Work Experience",
    teaser: "Frontend engineering intern at AETECH Research Labs, Abuja (Sep 2025 – Apr 2026).",
    detail:
      "Built and maintained web interfaces using React.js and TypeScript. Used TypeScript to improve code reliability and reduce runtime errors. Implemented responsive UI components with Tailwind CSS and translated design mockups into functional web pages.",
  },
  {
    title: "Education",
    teaser: "B.Eng Computer Engineering @ Bells University of Technology, Ogun. – In view",
    detail:
      "Coursework in Data Structures, Computer Systems, and Programming Fundamentals. Building production-deployed applications alongside studies.",
  },
  {
    title: "Projects Shipped",
    teaser: "8+ projects built and deployed independently.",
    detail:
      "Emora (AI chatbot, live at emoribot.vercel.app), Litmus (AI vector search), Dandori (React Native productivity app), StrideForge (fitness tracker), Yale School of Arts clone, Anime Discovery, and more. Every project shipped to real users.",
  },
];

export const featuredProjects: Project[] = [
  {
    number: "01",
    title: "Emora",
    type: "AI Chatbot Web App",
    description:
      "Built and shipped a conversational AI web app with real-time chat UI, auto-scroll, Markdown rendering, and toast notifications using Vue's Composition API. Integrated OpenRouter API with dynamic prompt generation across four personality modes and localStorage-based memory persistence.",
    stack: ["Vue.js", "OpenRouter", "Vite", "Tailwind CSS"],
    href: "https://github.com/mars-shal/Ai_waifu",
    liveUrl: "https://emoribot.vercel.app/",
    image: "/project-emora.svg",
    imageAlt: "Chatbot interface mockup for Emora",
    icon: "carbon:logo-vue",
    featured: true,
  },
  {
    number: "02",
    title: "Litmus",
    type: "AI Search Engine",
    description:
      "Built a semantic search engine using Python and FastAPI with vector embeddings via fastembed. Features novelty and popularity scoring, ranked result filtering, and a clean REST API — deployed and serving real queries.",
    stack: ["Python", "FastAPI", "fastembed"],
    href: "https://github.com/mars-shal/litmus",
    liveUrl: "https://litmus-sooty-delta.vercel.app/",
    image: "/project-litmus.svg",
    imageAlt: "Search interface mockup for Litmus",
    icon: "carbon:search",
    featured: true,
  },
  {
    number: "03",
    title: "StrideForge",
    type: "Fitness Tracker",
    description:
      "A fitness tracking landing page and dashboard built with vanilla HTML, CSS, and JavaScript. Features workout logging, progress visualization, and a fully responsive design across devices.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    href: "https://mars-shal.github.io/StrideForge/",
    image: "/project-strideforge.svg",
    imageAlt: "Fitness tracker mockup for StrideForge",
    icon: "carbon:health-cross",
    featured: true,
  },
];

export const moreProjects: Project[] = [
  {
    title: "Yale School of Art Clone",
    type: "Design Recreation",
    description:
      "A pixel-perfect recreation of the Yale School of Art homepage using semantic HTML and modern CSS. Demonstrates advanced layout techniques including CSS Grid, flexbox, and responsive breakpoints.",
    stack: ["HTML5", "CSS3"],
    href: "https://mars-shal.github.io/Yale_school_of_arts_clone/",
    image: "/project-yale.svg",
    imageAlt: "Website clone mockup for Yale School of Art",
    icon: "carbon:palette",
  },
  {
    title: "System Admin Dashboard",
    type: "Admin Panel",
    description:
      "A shell-based system administration dashboard for monitoring server health, managing users, and automating routine system tasks via the command line.",
    stack: ["Bash", "Shell Scripting", "Linux"],
    href: "https://github.com/mars-shal/System-Admin-Dashboard",
    image: "/project-sysadmin.svg",
    imageAlt: "Dashboard interface mockup",
    icon: "carbon:terminal",
  },
  {
    title: "Client Dashboard (AETECH)",
    type: "Client Portal",
    description:
      "Production dashboard for AETECH Research Labs. Built with React and TypeScript to manage client data, track project milestones, and generate status reports for stakeholders.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/mars-shal/client-dashboard",
    image: "/project-clientdash.svg",
    imageAlt: "Client portal dashboard mockup",
    icon: "carbon:enterprise",
  },
  {
    title: "Anime Discovery",
    type: "Anime Explorer",
    description:
      "A Vue.js-powered anime discovery app that lets users search, filter, and explore anime titles using the Jikan API. Features responsive cards, genre filtering, and detailed view pages for each title.",
    stack: ["Vue.js", "REST API", "CSS3"],
    href: "https://anime-discovery-ten.vercel.app/",
    image: "/project-anime.svg",
    imageAlt: "Anime discovery app mockup",
    icon: "carbon:movie",
  },
  {
    title: "Rex Website",
    type: "Brand Landing Page",
    description:
      "A modern React-based landing page for Rex featuring sleek animations, responsive layouts, and a polished visual identity. Built with attention to performance and mobile-first design.",
    stack: ["React", "Tailwind CSS"],
    href: "https://rex-5pxm6tqdm-michaelibia12s-projects.vercel.app/",
    image: "/project-rex.svg",
    imageAlt: "Rex brand landing page mockup",
    icon: "carbon:rocket",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  ...currentlyBuilding,
  ...moreProjects,
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "carbon:logo-github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "carbon:logo-linkedin" },
];
