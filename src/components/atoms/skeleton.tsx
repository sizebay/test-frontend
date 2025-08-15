"use client";

import { cn } from "@/helpers";
import { HTMLAttributes } from "react";

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton(props: SkeletonProps) {
  return (
    <div
      {...props}
      className={cn("bg-neutral-400 animate-pulse rounded-md", props.className)}
    />
  );
}
