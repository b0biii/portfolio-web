// ─── TYPES ────────────────────────────────────────────────────────────────────

export type ColorKey = "emerald" | "sky" | "violet" | "amber" | "cyan" | "rose" | "slate";

export interface Project {
    id: string;
    name: string;
    description: string;
    stack: string[];
    stars: number;
    forks: number;
    live: string;
    repo: string;
    color: ColorKey;
}

export interface SkillItem {
    label: string;
    color: string;
}

export interface StatItem {
    label: string;
    value: string;
}

export interface ExpGroup {
    category: string;
    items: { name: string; note: string }[];
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

export const TYPING_TEXT = "building something, then seeing it make a difference.";

export const skills: SkillItem[] = [
    { label: "TypeScript", color: "text-blue-400" },
    { label: "React", color: "text-cyan-400" },
    { label: "Next.js", color: "text-white" },
    { label: "Shopify", color: "text-green-400" },
    { label: "Node.js", color: "text-green-200" },
    { label: "PostgreSQL", color: "text-sky-400" },
    { label: "Docker", color: "text-blue-300" },
    { label: "Tailwind", color: "text-teal-400" },
    { label: "Prisma", color: "text-indigo-400" },
];

export const stats: StatItem[] = [
    { label: "projects", value: "12+" },
    { label: "commits", value: "1.4k" },
    { label: "years", value: "3+" },
];

export const projects: Project[] = [
    {
        id: "proj-1",
        name: "Truckd",
        description:
            "A real-time collaborative code editor with execution sandboxing, syntax highlighting for 40+ languages, and live cursor presence.",
        stack: ["Next.js", "Drizzle", "PostgreSQL", "ShadCN", "Supabase"],
        stars: 284,
        forks: 31,
        live: "#",
        repo: "https://github.com",
        color: "sky",
    },
    {
        id: "proj-2",
        name: "Automated Trucking Billing System",
        description:
            "A real-time collaborative code editor with execution sandboxing, syntax highlighting for 40+ languages, and live cursor presence.",
        stack: ["Excel Visual Basic for Applications (VBA)", "Excel", "Power BI"],
        stars: 284,
        forks: 31,
        live: "#",
        repo: "https://github.com",
        color: "emerald",
    },
    {
        id: "proj-3",
        name: "Hotel Property Management System",
        description:
            "Headless CMS built for developers. Type-safe schema definitions, REST & GraphQL APIs, and a clean admin UI built on Radix.",
        stack: ["Next.js", "TailwindCSS", "PostgreSQL", "ShadCN", "Prisma", "Zod", "Docker", "Resend", "Socket.io"],
        stars: 149,
        forks: 18,
        live: "#",
        repo: "https://github.com",
        color: "amber",
    },
    {
        id: "proj-4",
        name: "DataCamp Data Engineering Guided Projects",
        description:
            "Compilation of my hands-on data engineering projects, demonstrating practical skills and knowledge I've gained in the process of obtaining my Data Engineer certification on DataCamnp.",
        stack: ["SQL", "Python", "Pandas", "Numpy", "Matplotlib"],
        stars: 97,
        forks: 11,
        live: "#",
        repo: "https://github.com/b0biii/datacamp-data-eng-projects",
        color: "emerald",
    },
    {
        id: "proj-5",
        name: "eSURO",
        description:
            "An offline application for the math teachers in the different municipalities of Ifugao. It consists of educational tools, as requested by our client, to make teaching Mathematics more fun and interactive.",
        stack: ["Electron", "Prisma", "PostgreSQL", "TypeScript"],
        stars: 212,
        forks: 44,
        live: "#",
        repo: "https://github.com/essiddp/eSURO",
        color: "emerald",
    },
    {
        id: "proj-6",
        name: "127Co Database System (Finance Module)",
        description:
            "Production-ready auth starter for Next.js. Supports OAuth, magic links, TOTP 2FA, and session management out of the box.",
        stack: ["Svelte", "MySQL"],
        stars: 212,
        forks: 44,
        live: "#",
        repo: "https://github.com",
        color: "amber",
    },
    {
        id: "proj-7",
        name: "Ian's Peripherals Dump",
        description:
            "A website I've built during my first years in college. A simple site built with vanilla HTML, CSS, and JavaScript.",
        stack: ["HTML", "CSS", "JavaScript"],
        stars: 212,
        forks: 44,
        live: "https://b0biii.github.io/machineproblem1-cmsc110/",
        repo: "https://github.com/b0biii/machineproblem1-cmsc110",
        color: "emerald",
    },
    {
        id: "proj-8",
        name: "Family Tree Website Using Vanilla HTML",
        description:
            "One of the first websites I built in my first year in college. A simple family tree site built with vanilla HTML, CSS, and JavaScript. My first proper introduction to web development.",
        stack: ["HTML", "CSS", "JavaScript"],
        stars: 212,
        forks: 44,
        live: "#",
        repo: "https://github.com",
        color: "emerald",
    },
];

export const expDetails: ExpGroup[] = [
    {
        category: "work experience",
        items: [
            { name: "Part-time Data Automation Developer", note: "SJE Enterprises" },
            { name: "Freelance Full-Stack Developer", note: "Apo Idon Beach Hotel Pagudpud" },
            { name: "Software Developer Intern", note: "Department of Science and Technology" },
        ],
    },
    {
        category: "Education",
        items: [
            { name: "University of the Philippines - Baguio", note: "Bachelor of Science" },
            { name: "Don Bosco Technical Institute - Tarlac", note: "High School" },
            { name: "College of the Holy Spirit - Tarlac", note: "Elementary" },
        ],
    },
    {
        category: "Certifications & Courses",
        items: [
            { name: "Associate Data Engineer - DataCamp", note: "August 2025" },
            { name: "Data Engineer - DataCamp", note: "In Progress" },
            { name: "Vercel", note: "frontend hosting" },
        ],
    },
];

// ─── COLOR MAP ────────────────────────────────────────────────────────────────

export const colorMap: Record<
    ColorKey,
    { border: string; text: string; bg: string; badge: string }
> = {
    emerald: {
        border: "border-emerald-400/30 hover:border-emerald-400/60",
        text: "text-emerald-400",
        bg: "bg-emerald-400/5",
        badge: "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
    },
    sky: {
        border: "border-sky-400/30 hover:border-sky-400/60",
        text: "text-sky-400",
        bg: "bg-sky-400/5",
        badge: "border-sky-400/30 text-sky-400 bg-sky-400/5",
    },
    violet: {
        border: "border-violet-400/30 hover:border-violet-400/60",
        text: "text-violet-400",
        bg: "bg-violet-400/5",
        badge: "border-violet-400/30 text-violet-400 bg-violet-400/5",
    },
    amber: {
        border: "border-amber-400/30 hover:border-amber-400/60",
        text: "text-amber-400",
        bg: "bg-amber-400/5",
        badge: "border-amber-400/30 text-amber-400 bg-amber-400/5",
    },
    cyan: {  // bridges sky & teal, good for inline code/tags
        border: "border-cyan-400/30 hover:border-cyan-400/60",
        text: "text-cyan-400",
        bg: "bg-cyan-400/5",
        badge: "border-cyan-400/30 text-cyan-400 bg-cyan-400/5",
    },
    rose: {  // strong contrast accent — good for "open to work" / status indicators
        border: "border-rose-400/30 hover:border-rose-400/60",
        text: "text-rose-400",
        bg: "bg-rose-400/5",
        badge: "border-rose-400/30 text-rose-400 bg-rose-400/5",
    },
    slate: {  // for muted/secondary text elements like commit counts
        border: "border-slate-400/30 hover:border-slate-400/60",
        text: "text-slate-400",
        bg: "bg-slate-400/5",
        badge: "border-slate-400/30 text-slate-400 bg-slate-400/5",
    },
};