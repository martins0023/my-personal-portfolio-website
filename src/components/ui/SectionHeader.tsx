import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "neutral" | "blue" | "emerald" | "purple" | "amber";
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  badgeVariant = "neutral",
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14 space-y-3",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
