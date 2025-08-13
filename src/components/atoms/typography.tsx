"use client";

import { HTMLAttributes, HTMLElementType } from "react";

import { cn } from "@/helpers";

export type TypographySizes =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export type TypographyProps = HTMLAttributes<HTMLHeadingElement> & {
  size?: TypographySizes;
  as?: HTMLElementType;
};

export function Typography({
  size = "md",
  as = undefined,
  ...props
}: TypographyProps) {
  const typrographyMap: Record<TypographySizes, HTMLElementType> = {
    sm: "p",
    md: "p",
    lg: "h6",
    xl: "h5",
    "2xl": "h4",
    "3xl": "h3",
    "4xl": "h2",
    "5xl": "h1",
  };

  const Comp = as ? as : typrographyMap[size];

  return <Comp {...props} className={cn(`text-${size}`, props.className)} />;
}
