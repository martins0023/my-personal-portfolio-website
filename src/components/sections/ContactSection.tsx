"use client";

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);
  const email = "hello@miracleoladapo.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card
          radius="4xl"
          className="p-8 sm:p-12 md:p-16 bg-neutral-900 via-neutral-900 to-black text-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black border-neutral-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-8">

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                Let’s build something impactful together.
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                Whether you are launching a complex multi-tenant health platform, codifying an enterprise design system, or architecting a civic-tech public utility, my inbox is always open.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={`mailto:${email}`}>
                <Button
                  size="lg"
                  className="bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg px-7 py-3.5"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Send an Email</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3.5 rounded-full border border-neutral-700 hover:border-neutral-500 bg-neutral-800/60 hover:bg-neutral-800 transition-colors text-neutral-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied {email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
              <div>
                <span className="font-semibold text-neutral-300 block mb-1">Timezone</span>
                <span>West Africa Time (WAT) / UTC+1</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-300 block mb-1">Preferred Channels</span>
                <span>Email, GitHub, Google Dev (g.dev)</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-300 block mb-1">Response Time</span>
                <span>Within 24 hours</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
