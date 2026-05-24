"use client";

import { useState } from "react";
import ProjectsPanel from "./panels/project-panel";
import ProjectDetailPanel from "./panels/project-details";
import AboutPanel from "./panels/about";
import ExperiencePanel from "./panels/experience";

interface RightPanelProps {
    activeNav: string;
}

export default function RightPanel({ activeNav }: RightPanelProps) {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    return (
        <div className="h-full flex flex-col">
            {activeNav === "projects" && !selectedProject && (
                <ProjectsPanel onSelect={setSelectedProject} />
            )}
            {activeNav === "projects" && selectedProject && (
                <ProjectDetailPanel
                    projectId={selectedProject}
                    onBack={() => setSelectedProject(null)}
                />
            )}
            {activeNav === "about" && <AboutPanel />}
            {activeNav === "experience" && <ExperiencePanel />}
        </div>
    );
}