"use client";

import * as React from "react";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Award,
  ChevronDown,
  Layers,
  ExternalLink,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featuredIndex?: number;
}

export function ProjectCard({ project, featuredIndex }: ProjectCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card
      radius="3xl"
      className="overflow-hidden border border-neutral-200/90 dark:border-neutral-800 transition-all duration-300 hover:shadow-card-hover"
    >
      <div className="p-6 sm:p-8 md:p-10 space-y-8">
        {/* Top Header: Meta, Category, and Role */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="blue" size="sm">
              {project.category}
            </Badge>
            {project.clientOrOrg && (
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {project.clientOrOrg}
              </span>
            )}
            <span className="text-xs text-neutral-400 dark:text-neutral-600 hidden sm:inline">•</span>
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              {project.period}
            </span>
          </div>

          <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/80 px-3 py-1 rounded-full w-fit">
            {project.role}
          </div>
        </div>

        {/* Project Title & Summary */}
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-base sm:text-lg font-medium text-neutral-700 dark:text-neutral-300">
            {project.tagline}
          </p>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            {project.summary}
          </p>
        </div>

        {/* Measurable Impact Metrics Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800/80">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                {metric.label}
              </div>
              {metric.change && (
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                  {metric.change}
                </div>
              )}
            </div>
          ))}
        </div> */}

        {/* Problem → Solution → Outcome Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Problem Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/70 space-y-2.5">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                The Problem
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/70 space-y-2.5">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Lightbulb className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                The Solution
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Outcome Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/70 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Award className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Measurable Outcome
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Expandable Technical Highlights */}
        {expanded && (
          <div className="p-6 rounded-2xl bg-neutral-100/50 dark:bg-neutral-950/80 border border-neutral-200/80 dark:border-neutral-800 space-y-4 transition-all">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Engineering & Architectural Highlights</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags & Action Links */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions: Details toggle + External links */}
          <div className="flex flex-wrap items-center gap-3">
            {/* <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-medium px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
            >
              <span>{expanded ? "Less Details" : "Architecture Specs"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button> */}

            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
              >
                <Button
                  size="sm"
                  variant={link.type === "live" ? "primary" : "outline"}
                  className="rounded-full shadow-xs"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
