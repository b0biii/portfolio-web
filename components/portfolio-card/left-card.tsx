"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Github,
    Linkedin,
    Globe,
    Mail,
    Code2,
    FolderGit2,
    User,
    BookUser,
    ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { skills, stats, TYPING_TEXT } from "./data"

const navItems = [
    { id: "about", icon: User, label: "about" },
    { id: "projects", icon: FolderGit2, label: "projects" },
    { id: "experience", icon: BookUser, label: "experience" },
];

const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/b0biii" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/injlapuz/" },
    { icon: Globe, label: "Website", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

interface LeftPanelProps {
    activeNav: string;
    onNavClick: (id: string) => void;
}

export default function LeftPanel({ activeNav, onNavClick }: LeftPanelProps) {
    const [displayed, setDisplayed] = useState("");
    const [cursor, setCursor] = useState(true);

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

    return (
        <div className="w-72 min-h-screen shrink-0 border-r border-[#21262d] flex flex-col">

            {/* JSDoc header */}
            <div className="px-5 pt-5 pb-3 text-xs leading-relaxed">
                <span className="text-[#6e7681]">{"/**"}</span><br />
                <span className="text-[#6e7681]">{" * @author"}</span>
                <span className="text-sky-400"> Ian Nathaniel Lapuz</span><br />
                <span className="text-[#6e7681]">{" * @focus"}</span>
                <span className="text-yellow-400"> data | full stack</span><br />
                <span className="text-[#6e7681]">{" * @status"}</span>
                <span className="text-emerald-400"> seeking new roles</span><br />
                <span className="text-[#6e7681]">{" */"}</span>
            </div>

            <Separator className="bg-[#21262d]" />

            {/* Profile */}
            <div className="px-5 py-4 flex items-center gap-3">
                <div className="relative">
                    <Avatar className="w-17 h-17 border-2 border-sky-400/30 ring-2 ring-[#21262d]">
                        <AvatarImage src="/me.jpg" alt="Ian" />
                        <AvatarFallback className="bg-[#161b22] text-sky-400 text-base font-bold">
                            {"O_O"}
                        </AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0d1117] animate-pulse" />
                </div>
                <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <h1 className="text-sm font-bold text-white">Ian Lapuz</h1>
                        <Badge
                            variant="outline"
                            className="text-[9px] px-1.5 py-0 border-emerald-400/40 text-emerald-400 bg-emerald-400/5"
                        >
                            available
                        </Badge>
                    </div>
                    <p className="text-[11px] text-[#6e7681] mt-0.5">injlapuz@gmail.com</p>
                    <p className="mt-1.5 text-[11px] text-[#8b949e] h-12">
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

            {/* Stats
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

            */}

            {/* Nav */}
            <div className="border-y border-[#21262d]">
                {navItems.map(({ id, icon: Icon, label }) => (
                    <button
                        key={id}
                        onClick={() => onNavClick(id)}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-xs transition-colors border-b border-[#21262d] last:border-b-0 ${activeNav === id
                            ? "bg-[#161b22] text-sky-400"
                            : "text-[#484f58] hover:text-white hover:bg-[#0f1320]"
                            }`}
                    >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-widest">{label}</span>
                        {activeNav === id && <ChevronRight className="w-3 h-3 ml-auto" />}
                    </button>
                ))}
            </div>

            {/* Skills */}
            <div className="mb-auto px-5 py-4">
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

            {/* Social + CTA */}
            <div className="px-4 py-3 border-t border-[#21262d] flex items-center gap-2">
                <TooltipProvider delayDuration={100}>
                    {socialLinks.map(({ icon: Icon, label, href }) => (
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
                            <TooltipContent
                                side="top"
                                className="text-xs bg-[#161b22] border-[#21262d] text-white"
                            >
                                {label}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
                <Button
                    size="sm"
                    className="ml-auto h-7 text-[10px] bg-sky-400 text-black hover:bg-sky-300 font-bold tracking-wide px-3"
                >
                    Resume
                </Button>
            </div>
        </div>
    );
}