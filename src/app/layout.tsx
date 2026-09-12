import type { Metadata, Viewport } from "next";
// CSS is processed by Next.js at build time; TypeScript has no module declaration for it.
// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Miracle | Principal Frontend Engineer & Systems Architect",
  description:
    "I am a software engineer who works with founders, vision and mission-driven brands to turn a personal idea or identity into something real.",
  keywords: [
    "Frontend Engineer",
    "Systems Engineer",
    "Next.js",
    "TypeScript",
    "ClinicOnlinePlus",
    "DoctorKays",
    "The GovernedLife",
    "O2 Foods",
    "Design Systems",
    "WebRTC",
  ],
  authors: [{ name: "Miracle Oladapo" }],
  creator: "Miracle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Miracle Oladapo.dev",
    title: "Miracle Oladapo | Principal Frontend Engineer & Systems Architect",
    description:
      "I am a software engineer who works with founders, vision and mission-driven brands to turn a personal idea or identity into something real",
    siteName: "Miracle Oladapo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miracle Oladapo | Principal Frontend Engineer",
    description:
      "I am a software engineer who works with founders, vision and mission-driven brands to turn a personal idea or identity into something real.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white dark:bg-[#090d16] text-neutral-900 dark:text-neutral-50 selection:bg-blue-600 selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
