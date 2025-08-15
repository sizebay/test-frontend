import { cloneElement, HTMLAttributes, JSX } from "react";

import { cn } from "@/helpers";

import { Typography, TypographyProps } from "./typography";

export type EmptyStateProps = HTMLAttributes<HTMLDivElement>;

export function EmptyState(props: EmptyStateProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center justify-center",
        "w-full py-20 px-10",
        "bg-neutral-200",
        "border border-surface-200 border-dashed",
        "rounded-lg",
        "transition-all",
        "hover:bg-neutral-300"
      )}
    />
  );
}

export type EmptyStateBodyProps = HTMLAttributes<HTMLDivElement>;

export function EmptyStateBody(props: EmptyStateBodyProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        "w-1/2",
        props.className
      )}
    />
  );
}

export type EmptyStateTitleProps = TypographyProps;

export function EmptyStateTitle(props: EmptyStateTitleProps) {
  return (
    <Typography
      {...props}
      size="xl"
      className={cn(
        "text-neutral-700 font-medium flex items-center justify-center gap-2 text-center",
        props.className
      )}
    />
  );
}

export type EmptyStateDescriptionProps = TypographyProps;

export function EmptyStateDescription(props: EmptyStateDescriptionProps) {
  return (
    <Typography
      {...props}
      size="lg"
      className={cn(
        "text-neutral-500 break-words text-center",
        props.className
      )}
    />
  );
}

export type EmptyStateIconProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: JSX.Element;
};

const renderEmptyStateIcon = (icon: JSX.Element) =>
  cloneElement(icon, {
    size: 32,
  });

export function EmptyStateIcon(props: EmptyStateIconProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-center",
        "rounded-full bg-neutral-300",
        "p-4",
        "text-neutral-500",
        props.className
      )}
    >
      {renderEmptyStateIcon(props.children)}
    </div>
  );
}
