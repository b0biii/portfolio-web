"use client";

// Top-level orchestrator. Manages only the active nav tab.
// Everything else is delegated to LeftPanel and RightPanel.

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Terminal } from "lucide-react";
import LeftPanel from "./left-card";
import RightPanel from "./right-card";

export default function PortfolioCard() {
    const [activeNav, setActiveNav] = useState("about");

    return (
        <Card className="relative w-full max-w-7xl bg-[#0d1117] border border-[#21262d] shadow-2xl shadow-black/60 overflow-hidden">
            {/* Top accent glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-sky-400/70 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-10 bg-sky-400/8 blur-2xl rounded-full" />

            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 pb-3 border-b border-[#21262d]">
                <Circle className="w-3 h-3 fill-red-500 text-red-500" />
                <Circle className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <Circle className="w-3 h-3 fill-emerald-400 text-emerald-400" />
                <span className="ml-3 text-xs text-[#484f58] select-none tracking-wide">
                    ~/ian/portfolio/page.tsx
                </span>
                <Terminal className="w-3.5 h-3.5 text-[#484f58] ml-auto" />
            </div>

            <CardContent className="p-0">
                <div className="flex h-[75vh]">
                    <LeftPanel activeNav={activeNav} onNavClick={setActiveNav} />
                    <div className="flex-1 flex flex-col bg-[#0a0d12] overflow-hidden">
                        <RightPanel activeNav={activeNav} />
                    </div>
                </div>

                {/* Status bar */}
                <div className="px-5 py-2 border-t border-[#21262d] bg-[#080b12] flex items-center gap-4 text-[10px] text-[#484f58]">
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        online
                    </span>
                    <span className="text-[#21262d]">|</span>
                    <span>{activeNav}</span>
                    <span className="ml-auto">UTC+8 · Tarlac, PH</span>
                </div>
            </CardContent>
        </Card>
    );
}