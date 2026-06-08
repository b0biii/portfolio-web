"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectsPanel from "./panels/project-panel";
import ProjectDetailPanel from "./panels/project-details";
import AboutPanel from "./panels/about";
import ExperiencePanel from "./panels/experience";

interface RightPanelProps {
    activeNav: string;
}

export default function RightPanel({ activeNav }: RightPanelProps) {
    const [selectedElement, setSelectedElement] = useState<string | null>(null);

    return (
        <div className="h-full flex flex-col">
            {activeNav === "about" && <AboutPanel />}
            {activeNav === "experience" && !selectedElement && (
                <ExperiencePanel/>
            )}
            {activeNav === "projects" && !selectedElement && (
                <ProjectsPanel onSelect={setSelectedElement} />
            )}
            {activeNav === "projects" && selectedElement && (
                <ProjectDetailPanel
                    projectId={selectedElement}
                    onBack={() => setSelectedElement(null)}
                />
            )}
        </div>
    );
}