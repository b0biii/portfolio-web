// Server Component — no interactivity, no hooks needed.
// The "onBack" handler is passed down from the parent Client Component.
// Since this receives a function prop, the parent must be "use client",
// but this file itself stays a pure Server Component.

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    ExternalLink,
    Star,
    GitFork,
    FileCode2,
    Github,
} from "lucide-react";
import { projects, colorMap, type ColorKey } from "../data";

interface ProjectDetailPanelProps {
    projectId: string;
    onBack: () => void;
}

export default function ProjectDetailPanel({
    projectId,
    onBack,
}: ProjectDetailPanelProps) {
    const p = projects.find((x) => x.id === projectId)!;
    const c = colorMap[p.color as ColorKey];

    return (
        <div className="flex flex-col h-full">
            {/* Breadcrumb header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#21262d]">
                <button
                    onClick={onBack}
                    className="text-[#484f58] hover:text-white transition-colors text-[10px] flex items-center gap-1 uppercase tracking-widest"
                >
                    <span>←</span> back
                </button>
                <span className="text-[#21262d] mx-1">/</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${c.text}`}>
                    {p.name}
                </span>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-5">
                    {/* Card header */}
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
                        <div className="text-[10px] text-[#484f58] uppercase tracking-widest mb-2">
                            Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                                <Badge
                                    key={s}
                                    variant="outline"
                                    className={`text-xs px-2.5 py-1 ${c.badge}`}
                                >
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