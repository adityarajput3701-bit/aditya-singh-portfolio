import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function Tag({ children, className, ...rest }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-charcoal/60 px-3.5 py-1.5",
        "font-mono text-xs tracking-wide text-text-dim transition-colors duration-300",
        "hover:border-gold/40 hover:text-gold",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
