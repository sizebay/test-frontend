"use client";

import { cn } from "@/utils";

import { useState } from "react";

import { Button, type ButtonProps } from "../atoms";
import { Check } from "lucide-react";

export type ClipboardButtonProps = ButtonProps & { valueToCopy: string };

export function ClipboardButton({
  valueToCopy,
  ...props
}: ClipboardButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(valueToCopy);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Button
      variant="secondary"
      onClick={handleCopy}
      {...props}
      className={cn(
        props.className,
        "self-start",
        isCopied && "text-helper-green"
      )}
      leftIcon={isCopied && props.leftIcon ? <Check /> : props.leftIcon}
      rightIcon={isCopied && props.rightIcon ? <Check /> : props.rightIcon}
    >
      {props.children}
    </Button>
  );
}
