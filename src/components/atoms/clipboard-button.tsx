"use client";

import { cn } from "@/utils";

import { Button, type ButtonProps } from "../atoms";

export type ClipboardButtonProps = ButtonProps & { valueToCopy: string };

export function ClipboardButton({
  valueToCopy,
  ...props
}: ClipboardButtonProps) {
  return (
    <Button
      variant="secondary"
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);
      }}
      {...props}
      className={cn(props.className, "self-start")}
    >
      {props.children}
    </Button>
  );
}
