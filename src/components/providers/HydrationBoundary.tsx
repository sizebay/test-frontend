"use client";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { ReactNode } from "react";
import { serverQueryClient } from "@/lib/prefetch";

interface HydrationBoundaryProps {
  children: ReactNode;
}

export function HydrationBoundaryWrapper({
  children,
}: HydrationBoundaryProps) {
  return (
    <HydrationBoundary state={dehydrate(serverQueryClient)}>
      {children}
    </HydrationBoundary>
  );
}
