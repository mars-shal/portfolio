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
  github: "https://github.com/AtomicPositron",
  linkedin: "https://www.linkedin.com/in/michael-ibia/",
  email: "mailto:ietorobong@gmail.com",
  twitter: "https://x.com/AtomicPositron",
};

export const currentlyBuilding: Project[] = [
  {
    title: "Dandori",
    type: "Student Productivity App",
    description:
      "Architected and launched a fully functional mobile productivity application from scratch, enabling students to plan classes, organize study sessions, and track academic goals across a multi-screen interface.",
    stack: ["React Native", "Expo", "Mobile UX"],
    href: "https://github.com/AtomicPositron",
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
    href: "https://github.com/AtomicPositron",
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
    href: "https://github.com/AtomicPositron",
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
    teaser: "3+ production apps built and deployed independently.",
    detail:
      "Emora (AI chatbot, live at emoribot.vercel.app), Dandori (React Native productivity app), Yale School of Arts clone, and more. Every project shipped to real users.",
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
    href: "https://github.com/AtomicPositron",
    image: "/project-emora.svg",
    imageAlt: "Chatbot interface mockup for Emora",
    icon: "carbon:logo-vue",
    featured: true,
  },
  {
    number: "02",
    title: "Dandori",
    type: "Student Productivity App",
    description:
      "Architected and launched a fully functional mobile productivity application from scratch enabling students to plan classes, organize study sessions, and track academic goals. Built all front-end components independently with React Native and Expo, designed entirely in Figma first.",
    stack: ["React Native", "Expo", "Mobile UX"],
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
      "Python and FastAPI project with vector search, novelty and popularity scoring.",
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
];
