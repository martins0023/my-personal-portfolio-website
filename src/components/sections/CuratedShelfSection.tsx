"use client";

import * as React from "react";
import { curationData } from "@/data/curationData";
import { ShelfCategory } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  BookOpen,
  Headphones,
  Mic,
  Wrench,
  ArrowUpRight,
  ToolCase,
  PilcrowRight,
} from "lucide-react";

const CATEGORIES: { label: ShelfCategory; icon: any }[] = [
  { label: "Books", icon: BookOpen },
  { label: "Audiobooks", icon: Headphones },
  { label: "Podcasts", icon: Mic },
  // { label: "Key Talks", icon: Video },
  // { label: "Tools", icon: ToolCase },
  { label: "Resources", icon: Wrench },
  { label: "Events", icon: PilcrowRight },
];

export function CuratedShelfSection() {
  const [activeTab, setActiveTab] = React.useState<ShelfCategory>("Books");

  const filteredItems = React.useMemo(() => {
    return curationData.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section id="shelf" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader
          title="Curated Shelf & Core Influences"
          subtitle="A hand-picked collection of books, podcasts, events, and resources that have inspired and influenced my journey."
          className="mb-0"
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Category Tabs */}
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-neutral-100/80 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 whitespace-nowrap">
              {CATEGORIES.map(({ label, icon: Icon }) => {
                const isActive = activeTab === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActiveTab(label)}
                    className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Shelf Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              radius="3xl"
              className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-neutral-900/80 hover:shadow-card-hover transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="purple" size="sm">
                    {item.tag}
                  </Badge>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      aria-label={`External link for ${item.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    By {item.creator}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-100 dark:border-neutral-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    Why It Shaped My Perspective
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    "{item.takeaway}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
