"use client";

import {
  cloneElement,
  InputHTMLAttributes,
  JSX,
  LabelHTMLAttributes,
} from "react";

import { cn } from "@/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

export function Input({ leftIcon, rightIcon, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "border border-neutral-400",
        "flex items-center gap-2 h-8 w-full min-w-0 rounded-md px-2 text-sm bg-neutral-200 transition-all outline-none",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        "hover:bg-background/80",
        "aria-invalid:ring-danger-500/20 aria-invalid:border-danger-500"
      )}
    >
      {leftIcon && (
        <InputIcon data-testid="input-left-icon" htmlFor={props.id}>
          {leftIcon}
        </InputIcon>
      )}
      <input
        {...props}
        className={cn(
          "placeholder:text-neutral-500",
          "selection:bg-primary selection:text-primary-foreground",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:outline-none",
          "w-full",
          props.className
        )}
      />
      {rightIcon && (
        <InputIcon data-testid="input-right-icon" htmlFor={props.id}>
          {rightIcon}
        </InputIcon>
      )}
    </div>
  );
}

function InputIcon(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} className={cn("text-neutral-500", props.className)}>
      {cloneElement(props.children as JSX.Element, {
        size: 16,
      })}
    </label>
  );
}
