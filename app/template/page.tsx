"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Github,
    Globe,
    Mail,
    Terminal,
    Code2,
    Circle,
    FolderGit2,
    User,
    Layers,
    ExternalLink,
    Star,
    GitFork,
    ChevronRight,
    FileCode2,
} from "lucide-react";
import { useState, useEffect } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TYPING_TEXT = "building things that matter.";

const skills = [
    { label: "TypeScript", color: "text-blue-400" },
    { label: "React", color: "text-cyan-400" },
    { label: "Next.js", color: "text-white" },
    { label: "Node.js", color: "text-green-400" },
    { label: "PostgreSQL", color: "text-sky-400" },
    { label: "Docker", color: "text-blue-300" },
    { label: "Tailwind", color: "text-teal-400" },
    { label: "Prisma", color: "text-indigo-400" },
];

const stats = [
    { label: "projects", value: "12+" },
    { label: "commits", value: "1.4k" },
    { label: "years", value: "3+" },
];

const navItems = [
    { id: "projects", icon: FolderGit2, label: "projects" },
    { id: "about", icon: User, label: "about" },
    { id: "stack", icon: Layers, label: "stack" },
];

const projects = [
    {
        id: "proj-1",
        name: "devflow",
        description:
            "A real-time collaborative code editor with execution sandboxing, syntax highlighting for 40+ languages, and live cursor presence.",
        stack: ["Next.js", "TypeScript", "WebSockets", "Docker"],
        stars: 284,
        forks: 31,
        live: "#",
        repo: "https://github.com",
        color: "emerald",
    },
    {
        id: "proj-2",
        name: "kibo-cms",
        description:
            "Headless CMS built for developers. Type-safe schema definitions, REST & GraphQL APIs, and a clean admin UI built on Radix.",
        stack: ["Node.js", "PostgreSQL", "GraphQL", "React"],
        stars: 149,
        forks: 18,
        live: "#",
        repo: "https://github.com",
        color: "sky",
    },
    {
        id: "proj-3",
        name: "pulse-analytics",
        description:
            "Lightweight, privacy-first analytics SDK. Drop-in script tag, zero cookies, GDPR compliant with a beautiful dashboard.",
        stack: ["TypeScript", "Cloudflare Workers", "D3.js"],
        stars: 97,
        forks: 11,
        live: "#",
        repo: "https://github.com",
        color: "violet",
    },
    {
        id: "proj-4",
        name: "nx-auth",
        description:
            "Production-ready auth starter for Next.js. Supports OAuth, magic links, TOTP 2FA, and session management out of the box.",
        stack: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
        stars: 212,
        forks: 44,
        live: "#",
        repo: "https://github.com",
        color: "amber",
    },
];

const stackDetails = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js 14", note: "App Router, RSC" },
            { name: "TypeScript", note: "strict mode" },
            { name: "Tailwind CSS", note: "v3 + plugins" },
            { name: "Framer Motion", note: "animations" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", note: "v20 LTS" },
            { name: "Prisma ORM", note: "PostgreSQL" },
            { name: "tRPC", note: "end-to-end types" },
            { name: "Redis", note: "caching & queues" },
        ],
    },
    {
        category: "DevOps",
        items: [
            { name: "Docker", note: "compose + swarm" },
            { name: "GitHub Actions", note: "CI/CD" },
            { name: "Vercel", note: "frontend hosting" },
            { name: "Railway", note: "backend hosting" },
        ],
    },
];

type ColorKey = "emerald" | "sky" | "violet" | "amber";
const colorMap: Record<ColorKey, { border: string; text: string; bg: string; badge: string }> = {
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
};

// ─── RIGHT PANEL VIEWS ────────────────────────────────────────────────────────

function ProjectsPanel({ onSelect }: { onSelect: (id: string) => void }) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#21262d]">
                <FolderGit2 className="w-3.5 h-3.5 text-[#484f58]" />
                <span className="text-[10px] text-[#484f58] uppercase tracking-widest">projects</span>
                <Badge
                    variant="outline"
                    className="ml-auto text-[9px] px-1.5 py-0 border-[#21262d] text-[#484f58]"
                >
                    {projects.length}
                </Badge>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4 flex flex-col gap-2.5">
                    {projects.map((p) => {
                        const c = colorMap[p.color as ColorKey];
                        return (
                            <button
                                key={p.id}
                                onClick={() => onSelect(p.id)}
                                className={`text-left w-full rounded-md border ${c.border} ${c.bg} p-3.5 transition-all group`}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <FileCode2 className={`w-4 h-4 ${c.text} shrink-0`} />
                                        <span className={`text-sm font-bold ${c.text} font-mono`}>{p.name}</span>
                                    </div>
                                    <ChevronRight
                                        className={`w-3.5 h-3.5 ${c.text} opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5`}
                                    />
                                </div>
                                <p className="text-[11px] text-[#6e7681] mt-1.5 leading-relaxed line-clamp-2">
                                    {p.description}
                                </p>
                                <div className="flex items-center gap-3 mt-2.5">
                                    <span className="flex items-center gap-1 text-[10px] text-[#484f58]">
                                        <Star className="w-3 h-3" /> {p.stars}
                                    </span>
                                    <span className="flex items-center gap-1 text-[10px] text-[#484f58]">
                                        <GitFork className="w-3 h-3" /> {p.forks}
                                    </span>
                                    <div className="flex gap-1.5 ml-auto">
                                        {p.stack.slice(0, 2).map((s) => (
                                            <Badge key={s} variant="outline" className={`text-[9px] px-1.5 py-0 ${c.badge}`}>
                                                {s}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );
}

function ProjectDetailPanel({ projectId, onBack }: { projectId: string; onBack: () => void }) {
    const p = projects.find((x) => x.id === projectId)!;
    const c = colorMap[p.color as ColorKey];

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#21262d]">
                <button
                    onClick={onBack}
                    className="text-[#484f58] hover:text-white transition-colors text-[10px] flex items-center gap-1 uppercase tracking-widest"
                >
                    <span>←</span> back
                </button>
                <span className="text-[#21262d] mx-1">/</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${c.text}`}>{p.name}</span>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-5">
                    {/* Header */}
                    <div className={`rounded-lg border ${c.border} ${c.bg} p-4 mb-5`}>
                        <div className="flex items-center gap-2 mb-2">
                            <FileCode2 className={`w-5 h-5 ${c.text}`} />
                            <h2 className={`text-lg font-bold font-mono ${c.text}`}>{p.name}</h2>
                        </div>
                        <p className="text-xs text-[#8b949e] leading-relaxed">{p.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                        <div className="rounded border border-[#21262d] bg-[#0d1117] p-3 flex items-center gap-2">
                            <Star className={`w-4 h-4 ${c.text}`} />
                            <div>
                                <div className="text-sm font-bold text-white">{p.stars}</div>
                                <div className="text-[10px] text-[#484f58] uppercase tracking-wider">Stars</div>
                            </div>
                        </div>
                        <div className="rounded border border-[#21262d] bg-[#0d1117] p-3 flex items-center gap-2">
                            <GitFork className={`w-4 h-4 ${c.text}`} />
                            <div>
                                <div className="text-sm font-bold text-white">{p.forks}</div>
                                <div className="text-[10px] text-[#484f58] uppercase tracking-wider">Forks</div>
                            </div>
                        </div>
                    </div>

                    {/* Stack */}
                    <div className="mb-5">
                        <div className="text-[10px] text-[#484f58] uppercase tracking-widest mb-2">Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                                <Badge key={s} variant="outline" className={`text-xs px-2.5 py-1 ${c.badge}`}>
                                    {s}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                        <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 rounded border ${c.border} ${c.bg} py-2 text-xs ${c.text} hover:brightness-125 transition-all font-mono`}
                        >
                            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                        <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 rounded border border-[#21262d] bg-[#161b22] py-2 text-xs text-[#8b949e] hover:text-white hover:border-[#484f58] transition-all font-mono"
                        >
                            <Github className="w-3.5 h-3.5" /> Source
                        </a>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}

function AboutPanel() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#21262d]">
                <User className="w-3.5 h-3.5 text-[#484f58]" />
                <span className="text-[10px] text-[#484f58] uppercase tracking-widest">about.md</span>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-5 text-xs text-[#8b949e] leading-relaxed space-y-5 font-mono">
                    <div>
                        <p className="text-emerald-400 font-bold mb-2">## Hello, World 👋</p>
                        <p>
                            I&apos;m a full-stack developer based in the Philippines who loves building tools that
                            help other developers move faster and ship better software.
                        </p>
                    </div>
                    <div>
                        <p className="text-sky-400 font-bold mb-2">## What I do</p>
                        <p>
                            I specialize in building production-grade web applications — from database schema to
                            pixel-perfect UI. I care deeply about developer experience, type safety, and
                            performance.
                        </p>
                    </div>
                    <div>
                        <p className="text-violet-400 font-bold mb-2">## Currently</p>
                        <ul className="space-y-1.5">
                            {[
                                "→ Open to new opportunities",
                                "→ Building open-source tools",
                                "→ Learning Rust & WebAssembly",
                                "→ Based in Tarlac, PH 🇵🇭",
                            ].map((item) => (
                                <li key={item} className="text-[#6e7681]">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-amber-400 font-bold mb-2">## When not coding</p>
                        <p>
                            You&apos;ll find me tinkering with mechanical keyboards, drinking too much coffee, or
                            deep in a rabbit hole on Hacker News.
                        </p>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}

function StackPanel() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#21262d]">
                <Layers className="w-3.5 h-3.5 text-[#484f58]" />
                <span className="text-[10px] text-[#484f58] uppercase tracking-widest">stack</span>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-4">
                    {stackDetails.map((group) => (
                        <div key={group.category}>
                            <div className="text-[10px] text-[#484f58] uppercase tracking-widest mb-2 px-1">
                                {group.category}
                            </div>
                            <div className="rounded-md border border-[#21262d] overflow-hidden">
                                {group.items.map((item, i) => (
                                    <div
                                        key={item.name}
                                        className={`flex items-center justify-between px-3.5 py-2.5 text-xs ${i !== group.items.length - 1 ? "border-b border-[#21262d]" : ""
                                            } hover:bg-[#161b22] transition-colors`}
                                    >
                                        <span className="text-white font-mono font-medium">{item.name}</span>
                                        <span className="text-[#484f58] font-mono">{item.note}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function PortfolioCard() {
    const [displayed, setDisplayed] = useState("");
    const [cursor, setCursor] = useState(true);
    const [activeNav, setActiveNav] = useState("projects");
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= TYPING_TEXT.length) {
                setDisplayed(TYPING_TEXT.slice(0, i));
                i++;
            } else clearInterval(interval);
        }, 60);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const blink = setInterval(() => setCursor((c) => !c), 530);
        return () => clearInterval(blink);
    }, []);

    const handleNavClick = (id: string) => {
        setActiveNav(id);
        setSelectedProject(null);
    };

    const renderRightPanel = () => {
        if (activeNav === "projects") {
            if (selectedProject) {
                return (
                    <ProjectDetailPanel
                        projectId={selectedProject}
                        onBack={() => setSelectedProject(null)}
                    />
                );
            }
            return <ProjectsPanel onSelect={setSelectedProject} />;
        }
        if (activeNav === "about") return <AboutPanel />;
        if (activeNav === "stack") return <StackPanel />;
    };

    return (
        <div className="min-h-screen bg-[#080b12] flex items-center justify-center p-6 font-mono">
            {/* Grid background */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#1a2035 1px, transparent 1px), linear-gradient(90deg, #1a2035 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    opacity: 0.35,
                }}
            />

            <Card className="relative w-full max-w-4xl bg-[#0d1117] border border-[#21262d] shadow-2xl shadow-black/60 overflow-hidden">
                {/* Top accent glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-10 bg-emerald-400/8 blur-2xl rounded-full" />

                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#21262d]">
                    <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                    <Circle className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <Circle className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                    <span className="ml-3 text-xs text-[#484f58] select-none tracking-wide">
                        ~/portfolio/me.tsx
                    </span>
                    <Terminal className="w-3.5 h-3.5 text-[#484f58] ml-auto" />
                </div>

                <CardContent className="p-0">
                    <div className="flex" style={{ minHeight: "560px" }}>

                        {/* ── LEFT PANEL ── */}
                        <div className="w-72 shrink-0 border-r border-[#21262d] flex flex-col">

                            {/* JSDoc */}
                            <div className="px-5 pt-5 pb-3 text-xs leading-relaxed">
                                <span className="text-[#6e7681]">{"/**"}</span><br />
                                <span className="text-[#6e7681]">{" * @author"}</span>
                                <span className="text-emerald-400"> Your Name</span><br />
                                <span className="text-[#6e7681]">{" * @role"}</span>
                                <span className="text-sky-400"> Full-Stack Dev</span><br />
                                <span className="text-[#6e7681]">{" * @status"}</span>
                                <span className="text-yellow-400"> open to work</span><br />
                                <span className="text-[#6e7681]">{" */"}</span>
                            </div>

                            <Separator className="bg-[#21262d]" />

                            {/* Profile */}
                            <div className="px-5 py-4 flex items-start gap-3">
                                <div className="relative">
                                    <Avatar className="w-14 h-14 border-2 border-emerald-400/30 ring-2 ring-[#21262d]">
                                        <AvatarImage src="/avatar.png" alt="Your Name" />
                                        <AvatarFallback className="bg-[#161b22] text-emerald-400 text-base font-bold">
                                            YN
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0d1117] animate-pulse" />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <h1 className="text-sm font-bold text-white">Your Name</h1>
                                        <Badge
                                            variant="outline"
                                            className="text-[9px] px-1.5 py-0 border-emerald-400/40 text-emerald-400 bg-emerald-400/5"
                                        >
                                            available
                                        </Badge>
                                    </div>
                                    <p className="text-[11px] text-[#6e7681] mt-0.5">@yourhandle</p>
                                    <p className="mt-1.5 text-[11px] text-[#8b949e]">
                                        <span className="text-[#6e7681]">&gt;&nbsp;</span>
                                        <span className="text-white">{displayed}</span>
                                        <span
                                            className={`inline-block w-1.5 h-3 bg-emerald-400 ml-0.5 align-middle transition-opacity ${cursor ? "opacity-100" : "opacity-0"
                                                }`}
                                        />
                                    </p>
                                </div>
                            </div>

                            <Separator className="bg-[#21262d]" />

                            {/* Stats */}
                            <div className="grid grid-cols-3 divide-x divide-[#21262d]">
                                {stats.map(({ label, value }) => (
                                    <div key={label} className="flex flex-col items-center py-3">
                                        <span className="text-sm font-bold text-white">{value}</span>
                                        <span className="text-[9px] text-[#484f58] uppercase tracking-widest mt-0.5">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Separator className="bg-[#21262d]" />

                            {/* Skills */}
                            <div className="px-5 py-4">
                                <div className="flex items-center gap-2 mb-2.5">
                                    <Code2 className="w-3.5 h-3.5 text-[#484f58]" />
                                    <span className="text-[10px] text-[#484f58] uppercase tracking-widest">tech</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {skills.map(({ label, color }) => (
                                        <span
                                            key={label}
                                            className={`text-[10px] px-2 py-1 rounded bg-[#161b22] border border-[#21262d] ${color} cursor-default hover:border-current/40 transition-colors`}
                                        >
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Nav */}
                            <div className="mt-auto border-t border-[#21262d]">
                                {navItems.map(({ id, icon: Icon, label }) => (
                                    <button
                                        key={id}
                                        onClick={() => handleNavClick(id)}
                                        className={`w-full flex items-center gap-3 px-5 py-3 text-xs transition-colors border-b border-[#21262d] last:border-b-0 ${activeNav === id
                                            ? "bg-[#161b22] text-emerald-400"
                                            : "text-[#484f58] hover:text-white hover:bg-[#0f1320]"
                                            }`}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                        <span className="uppercase tracking-widest">{label}</span>
                                        {activeNav === id && <ChevronRight className="w-3 h-3 ml-auto" />}
                                    </button>
                                ))}
                            </div>

                            {/* Social + CTA */}
                            <div className="px-4 py-3 border-t border-[#21262d] flex items-center gap-2">
                                <TooltipProvider delayDuration={100}>
                                    {[
                                        { icon: Github, label: "GitHub", href: "https://github.com" },
                                        { icon: Globe, label: "Website", href: "#" },
                                        { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
                                    ].map(({ icon: Icon, label, href }) => (
                                        <Tooltip key={label}>
                                            <TooltipTrigger asChild>
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-7 h-7 flex items-center justify-center rounded border border-[#21262d] bg-[#161b22] text-[#6e7681] hover:text-white hover:border-[#484f58] transition-colors"
                                                >
                                                    <Icon className="w-3.5 h-3.5" />
                                                </a>
                                            </TooltipTrigger>
                                            <TooltipContent side="top" className="text-xs bg-[#161b22] border-[#21262d] text-white">
                                                {label}
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </TooltipProvider>
                                <Button
                                    size="sm"
                                    className="ml-auto h-7 text-[10px] bg-emerald-400 text-black hover:bg-emerald-300 font-bold tracking-wide px-3"
                                >
                                    Hire Me
                                </Button>
                            </div>
                        </div>

                        {/* ── RIGHT PANEL ── */}
                        <div className="flex-1 flex flex-col bg-[#0a0d12] overflow-hidden">
                            {renderRightPanel()}
                        </div>

                    </div>

                    {/* Status bar */}
                    <div className="px-5 py-2 border-t border-[#21262d] bg-[#080b12] flex items-center gap-4 text-[10px] text-[#484f58]">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            online
                        </span>
                        <span className="text-[#21262d]">|</span>
                        <span>
                            {activeNav}
                            {selectedProject
                                ? ` → ${projects.find((p) => p.id === selectedProject)?.name}`
                                : ""}
                        </span>
                        <span className="ml-auto">UTC+8 · Tarlac, PH</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}