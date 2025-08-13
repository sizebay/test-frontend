import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/helpers";

const buttonVariants = cva(
  "flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-neutral-800 text-background hover:bg-neutral-800/90",
        secondary:
          "bg-neutral-100 text-foreground hover:bg-accent-100 border border-neutral-400",
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

export type ButtonVariants = "default" | "secondary";
export type ButtonSizes = "default";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
};

export function Button({
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant, size }))} />
  );
}
