"use client";

import * as React from "react";
import Image from "next/image";
import { nowData } from "@/data/nowData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ArrowDown,
  ArrowUpRight,
  Layers,
  Search,
  Compass,
  Clock,
  Radio,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, GoogleDevIcon } from "@/components/ui/Icons";

export function HeroNowSection() {
  return (
    <section id="now" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Hero Header: Grid with Profile Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary Calls-to-Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Status Pill Tag */}
            <div className="flex flex-wrap items-center gap-3">

              <Badge variant="neutral" size="sm">
                <Clock className="w-3 h-3 text-neutral-500" />
                Updated {nowData.lastUpdated}
              </Badge>
            </div>

            {/* Core Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
              Architecting narrative web platforms,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 dark:from-blue-400 dark:via-indigo-300 dark:to-teal-300">
                resilient systems
              </span>
              , & human-centered experiences.
            </h1>

            {/* Subtitle / Positioning Statement */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              I am a Principal Frontend Engineer & Systems Architect dedicated to crafting high-performance, accessible digital infrastructures. Bridging the gap between complex backend architectures and tactile, fluid user interfaces.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects">
                <Button size="lg" variant="primary" className="shadow-md">
                  <span>Explore Featured Work</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Verified Social Profiles */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              <a
                href="https://g.dev/miracle-oladapo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs transition-colors"
                title="Google Developer Profile"
              >
                <GoogleDevIcon className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-medium">Google Dev Profile</span>
              </a>
              <a
                href="https://github.com/martins0023"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-white shadow-xs transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/miracle-oladapo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile & Public Speaking Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Ambient lighting bloom */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-teal-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none -z-10" />

              {/* Framed Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900 shadow-2xl group transition-all duration-300">
                {/* 4:5 Aspect Ratio Container for Profile Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src="/images/profile-image.jpg"
                    alt="Miracle Oladapo - Principal Frontend Engineer & Tech Speaker"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 420px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Scrim for Top & Bottom Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/15 to-neutral-950/30 pointer-events-none" />

                  {/* Top Floating Badge: Keynote Speaker & Public Presence */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <a
                      href="https://g.dev/miracle-oladapo"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-600/90 hover:bg-blue-600 backdrop-blur-md text-white border border-blue-400/30 shadow-xs transition-colors"
                      title="Google Developer Profile (g.dev)"
                    >
                      <GoogleDevIcon className="w-3 h-3" />
                      <span>g.dev</span>
                    </a>
                  </div>

                  {/* Bottom Metadata: Identity & Speaking Availability */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-indigo-950 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-semibold tracking-tight leading-tight">
                          Miracle Oladapo
                        </h2>
                        <span className="text-[11px] font-mono">
                          Principal Engineer & Speaker
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The /now Snapshot Surface Card */}
        <Card
          radius="3xl"
          className="p-6 sm:p-8 md:p-10 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-50/80 dark:from-neutral-900/90 dark:via-neutral-900/60 dark:to-neutral-950/80 shadow-card border border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-neutral-200/80 dark:border-neutral-800">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">
                Active Focus & Current Pursuits
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Based in {nowData.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* What I am Building */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-900 dark:text-white">
                  Building
                </h3>
              </div>
              <ul className="space-y-3.5">
                {nowData.building.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800/80 shadow-xs space-y-1"
                  >
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I am Researching */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                  <Search className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-900 dark:text-white">
                  Researching
                </h3>
              </div>
              <ul className="space-y-3.5">
                {nowData.researching.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800/80 shadow-xs space-y-1"
                  >
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I am Exploring */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-900 dark:text-white">
                  Exploring
                </h3>
              </div>
              <ul className="space-y-3.5">
                {nowData.exploring.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800/80 shadow-xs space-y-1"
                  >
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
