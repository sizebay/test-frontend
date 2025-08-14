"use client";

import { ButtonHTMLAttributes, cloneElement, JSX } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/helpers";

export type ButtonVariants = "default" | "secondary" | "tertiary";
export type ButtonSizes = "default";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const buttonVariants = cva(
  "flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-neutral-800 text-background hover:bg-neutral-800/90",
        secondary:
          "bg-neutral-100 text-foreground hover:bg-accent-100 border border-neutral-400",
        tertiary: "bg-transparent text-foreground hover:bg-accent-100",
      },
      size: {
        default: "h-9 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const renderButtonIcon = (icon: JSX.Element) =>
  cloneElement(icon, {
    size: 16,
  });

export function Button({
  variant = "default",
  size = "default",
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size }), props.className)}
    >
      {leftIcon && renderButtonIcon(leftIcon)}
      {children}
      {rightIcon && renderButtonIcon(rightIcon)}
    </button>
  );
}
