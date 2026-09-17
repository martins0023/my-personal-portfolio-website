import * as React from "react";
import Image from "next/image";
import { Mail, Rss } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  GoogleDevIcon,
} from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 py-14 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <Image
                  src="/images/profile-image.jpg"
                  alt="Miracle"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-neutral-900 dark:text-white tracking-tight">
                Miracle Oladapo
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              I am a software engineer who works with founders, vision and
              mission-driven brands to turn a personal idea or identity into
              something real.
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#now"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#shelf"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Curated Shelf
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Feeds */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Contact
            </h3>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://g.dev/miracle-oladapo"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/50 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="Google Developer Profile"
                title="Google Developer Profile (g.dev/miracle-oladapo)"
              >
                <GoogleDevIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/martins0023"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/miracle-oladapo"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/miracle1oladapo"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="Twitter / X Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@miracleoladapo.com"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              {/* whatsapp */}
              <a
                href="https://wa.me/+2348162275527"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="WhatsApp Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.06L2 22l4.94-1.36C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.58-.5-5.06-1.36L4 20l1.36-4.94C3.5 15.58 3 13.85 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm-.5-13h1v6h-1V7zm0 8h1v2h-1v-2z" />
                </svg>
              </a>

              {/* sitemap */}
              <a
                href="/sitemap.xml"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                aria-label="Sitemap / Feed"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>
            © {new Date().getFullYear()} Miracle Oladapo . Built with Next.js,
            React 19, Tailwind CSS & Antigravity.
          </p>
          <div className="flex items-center gap-4">
            <span>•</span>
            <span>
              Inspired by{" "}
              <a href="https://developers.google.com">developers.google.com</a>{" "}
              & <a href="https://ai.google">ai.google</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
