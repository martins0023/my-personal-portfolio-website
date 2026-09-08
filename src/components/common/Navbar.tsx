"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Overview & Now", href: "#now" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Impact Metrics", href: "#impact" },
  { label: "Curated Shelf", href: "#shelf" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-card border border-neutral-200/80 dark:border-neutral-800"
              : "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/60"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo & Status Dot */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full pr-2"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-bold text-xs tracking-wider transition-transform group-hover:scale-105 shrink-0">
              <Image
                src="/images/profile-image.jpg"
                alt="Miracle"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                  Miracle
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[10px] uppercase font-mono text-neutral-500 dark:text-neutral-400 hidden sm:inline">
                Principal Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-100/70 dark:bg-neutral-800/60 p-1 rounded-full border border-neutral-200/60 dark:border-neutral-700/50">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium px-4 py-1.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-900/90 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <div className="hidden sm:block">
              <a href="#contact">
                <Button size="sm" variant="primary" className="rounded-full shadow-xs">
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-3xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-xl transition-all">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button size="md" variant="primary" className="w-full justify-center">
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
