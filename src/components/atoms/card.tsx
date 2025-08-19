"use client";

import { HTMLAttributes } from "react";

import { cn } from "@/utils";
import { Typography, TypographyProps } from "./typography";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card(props: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col gap-2",
        "w-full",
        "bg-neutral-200",
        "border border-surface-200",
        "rounded-lg",
        "p-4",
        "transition-all",
        "hover:shadow",
        props.className
      )}
    />
  );
}

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export function CardBody(props: CardBodyProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-start justify-start gap-2",
        "w-full",
        props.className
      )}
    />
  );
}

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export function CardHeader(props: CardHeaderProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-between gap-2",
        "w-full",
        props.className
      )}
    />
  );
}

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export function CardFooter(props: CardFooterProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-between",
        "w-full",
        props.className
      )}
    />
  );
}

export type CardTitleProps = TypographyProps;

export function CardTitle(props: CardTitleProps) {
  return (
    <Typography
      {...props}
      className={cn(
        "text-accent-900 font-medium flex items-center justify-center gap-2 truncate",
        props.className
      )}
    />
  );
}

export type CardDescriptionProps = TypographyProps;

export function CardDescription(props: CardDescriptionProps) {
  return (
    <Typography {...props} size="md" className="text-neutral-500 break-words" />
  );
}

export type CardTextProps = TypographyProps;

export function CardText(props: CardTextProps) {
  return <Typography {...props} size="sm" className="text-neutral-600" />;
}

export type CardDetailProps = HTMLAttributes<HTMLDivElement>;

export function CardDetail(props: CardDetailProps) {
  return <div {...props} className={cn("flex items-center gap-2")} />;
}
