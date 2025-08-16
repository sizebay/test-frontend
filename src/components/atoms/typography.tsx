"use client";

import { ElementType, HTMLAttributes, HTMLElementType } from "react";

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
  as?: ElementType;
};

const sizeMap: Record<TypographySizes, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
};

const typographyMap: Record<TypographySizes, ElementType> = {
  sm: "p",
  md: "p",
  lg: "h6",
  xl: "h5",
  "2xl": "h4",
  "3xl": "h3",
  "4xl": "h2",
  "5xl": "h1",
};

export function Typography({ size = "md", as, ...props }: TypographyProps) {
  const Comp = as ?? typographyMap[size];

  return (
    <Comp
      {...props}
      className={cn(
        sizeMap[size],
        "text-foreground font-main",
        props.className
      )}
    />
  );
}
