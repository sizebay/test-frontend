"use client";

import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/utils";

export type BadgeVariants = "default" | "secondary";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariants;
};

const badgeVariants = cva(
  "flex flex-row items-center justify-center gap-2 px-2 py-0.5 whitespace-nowrap rounded-md text-xs font-medium cursor-default",
  {
    variants: {
      variant: {
        default: "bg-neutral-800 text-background",
        secondary: "bg-neutral-300 text-foreground border-neutral-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Badge({ variant = "default", ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(badgeVariants({ variant }), props.className)}
    />
  );
}
