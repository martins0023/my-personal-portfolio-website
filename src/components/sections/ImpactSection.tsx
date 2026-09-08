"use client";

import * as React from "react";
import { impactData } from "@/data/impactData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Users, Activity, TrendingUp, Shield, Layers, Zap } from "lucide-react";

const ICON_MAP = {
  users: Users,
  activity: Activity,
  "trending-up": TrendingUp,
  shield: Shield,
  layers: Layers,
  zap: Zap,
};

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50/60 dark:bg-neutral-950/40 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto space-y-14">
        <SectionHeader
          title="What Impact I Am Making & Have Made"
          subtitle="Engineering is ultimately judged by measurable resilience, throughput, and human lives affected. Here is the quantified footprint across products I've architected."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactData.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || Zap;

            return (
              <Card
                key={item.id}
                radius="3xl"
                className="p-8 space-y-6 bg-white dark:bg-neutral-900/80 hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                    Verified
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {item.value}
                  </div>
                  <div className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                    {item.label}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
