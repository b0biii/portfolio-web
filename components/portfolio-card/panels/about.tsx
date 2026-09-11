// Server Component — pure display, no interactivity needed.
// No "use client" directive = this renders on the server by default in Next.js.

import { ScrollArea } from "@/components/ui/scroll-area";
import { User } from "lucide-react";

const highlights = [
    "→ Open to new opportunities",
    "→ Optimizing data operations for a local family trucking business, as a gig",
    "→ Exploring Full-Stack Development",
    "→ Obtaining Data Engineer Certification from DataCamp",
    "→ Based in Tarlac, PH",
];

export default function AboutPanel() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#21262d]">
                <User className="w-3.5 h-3.5 text-[#484f58]" />
                <span className="text-[10px] text-[#484f58] uppercase tracking-widest">about.md</span>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-5 text-xs text-[#8b949e] leading-relaxed space-y-5 font-mono">
                    <div>
                        <p className="text-emerald-400 font-bold mb-2">## Hello, World! {":]"}</p>
                        <p>
                            I&apos;m a BS Computer Science graduate from the University of the Philippines - Baguio, currently working as a Software Engineer @ Vyte, who loves being able to build/develop tools and applications
                            that help businesses move faster and optimize their workflows.
                        </p>
                    </div>

                    <div>
                        <p className="text-sky-400 font-bold mb-2">## What I do</p>
                        <p>
                            I design and build the data backbone of modern applications. From database schema architecture to seamless integration with frameworks such as Next.js.
                            Having previous experience in PostgreSQL, Prisma, and data modeling, I focus on creating applications that have scalable, clean, and reliable data architecture.
                        </p>
                    </div>

                    <div>
                        <p className="text-violet-400 font-bold mb-2">## Currently</p>
                        <ul className="space-y-1.5">
                            {highlights.map((item) => (
                                <li key={item} className="text-[#6e7681]">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-amber-400 font-bold mb-2">## When not coding</p>
                        <p>
                            You&apos;ll probably find me sitting in my simulator doing laps on the Nordschleife,
                            or tinkering with electronics or software that spark my curiosity.
                            Well, I may not even be reachable since I might be out there in a mountain, hiking.
                        </p>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}