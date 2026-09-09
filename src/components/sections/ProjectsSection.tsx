"use client";

import * as React from "react";
import { projectsData } from "@/data/projectsData";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCategory } from "@/types";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "HealthTech",
  "Brand & Systems",
  "CivicTech",
  "Agri-Commerce",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    React.useState<ProjectCategory>("All");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader
          title="Featured Projects & Production Systems"
          subtitle="Deep architectural case studies spanning digital healthcare, authority personal branding, civic governance intelligence, and decentralized agri-commerce."
          className="mb-0"
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Filter Pills: Horizontal scroll on mobile, natural flex layout on desktop */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-neutral-100/80 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 whitespace-nowrap">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === cat).length;

                const isActive = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 flex-shrink-0 flex items-center gap-1.5 select-none ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-neutral-800 text-neutral-300 dark:bg-neutral-200 dark:text-neutral-800"
                          : "bg-neutral-200/70 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featuredIndex={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
