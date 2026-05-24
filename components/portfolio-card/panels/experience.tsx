// Server Component — pure display, no interactivity needed.

import { ScrollArea } from "@/components/ui/scroll-area";
import { Layers } from "lucide-react";
import { expDetails } from "../data";

export default function ExperiencePanel() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#21262d]">
                <Layers className="w-3.5 h-3.5 text-[#484f58]" />
                <span className="text-[10px] text-[#484f58] uppercase tracking-widest">experience</span>
            </div>

            <ScrollArea className="flex-1 min-h-0">
                <div className="p-4 space-y-4">
                    {expDetails.map((group) => (
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