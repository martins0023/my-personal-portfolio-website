import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  radius?: "2xl" | "3xl" | "4xl";
}

export function Card({
  className,
  hoverEffect = true,
  radius = "3xl",
  children,
  ...props
}: CardProps) {
  const radiusClasses = {
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    "4xl": "rounded-4xl",
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800 backdrop-blur-xs",
        radiusClasses[radius],
        hoverEffect &&
          "transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
