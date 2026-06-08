"use client";

import { Badge } from "@/components/ui/badge";
import { FolderGit2, Star, GitFork, ChevronRight, FileCode2 } from "lucide-react";
import { projects, colorMap, type ColorKey } from "../data";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectsPanelProps {
    onSelect: (id: string) => void;
}

export default function ProjectsPanel({ onSelect }: ProjectsPanelProps) {
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
            <ScrollArea className="flex-1 min-h-0">
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
                                        {p.stack.slice(0, 3).map((s) => (
                                            <Badge
                                                key={s}
                                                variant="outline"
                                                className={`text-[9px] px-1.5 py-0 ${c.badge}`}
                                            >
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