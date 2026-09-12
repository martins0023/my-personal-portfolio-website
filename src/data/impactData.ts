import { ImpactMetric } from "@/types";

export const impactData: ImpactMetric[] = [
  {
    id: "speed-index",
    value: "0.8s",
    label: "Speed Index",
    description: "Achieved on ClinicOnlinePlus's patient-facing booking flows.",
    icon: "zap",
    highlightColor: "text-teal-600 dark:text-teal-400",
  },
  {
    id: "lighthouse-perf",
    value: "99/100",
    label: "Lighthouse Performance",
    description: "Measured on ClinicOnlinePlus, alongside a 96% Best Practices score.",
    icon: "activity",
    highlightColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "lighthouse-seo",
    value: "100/100",
    label: "Lighthouse SEO",
    description: "Full SEO score on ClinicOnlinePlus's patient booking experience.",
    icon: "trending-up",
    highlightColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "page-load-cut",
    value: "20%",
    label: "Page Load Time Reduction",
    description: "Delivered while maintaining and upgrading CMS infrastructure for Mommy's Heart Inc.",
    icon: "trending-up",
    highlightColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "years-shipping",
    value: "3+",
    label: "Years Shipping Production Web Apps",
    description: "Building and maintaining live features across telehealth, personal brand, and commerce platforms.",
    icon: "layers",
    highlightColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "products-built",
    value: "4",
    label: "Products Built or In Progress",
    description: "ClinicOnlinePlus, DoctorKays, The GovernedLife, and O2 Foods.",
    icon: "shield",
    highlightColor: "text-amber-600 dark:text-amber-400",
  },
];