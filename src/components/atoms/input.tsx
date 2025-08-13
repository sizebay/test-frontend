"use client";

import { InputHTMLAttributes } from "react";

import { cn } from "@/helpers";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "border border-ring flex h-9 w-full min-w-0 rounded-md px-3 text-sm bg-neutral-50 transition-all outline-none",
        "placeholder:text-neutral-500",
        "selection:bg-primary selection:text-primary-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-danger-500/20 aria-invalid:border-danger-500",
        "hover:bg-background/80",
        props.className
      )}
    />
  );
}
