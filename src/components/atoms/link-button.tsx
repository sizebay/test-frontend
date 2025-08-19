"use client";

import { useRouter } from "next/navigation";

import { Button, type ButtonProps } from "../atoms";

export type LinkButtonProps = ButtonProps & { href: string };

export function LinkButton({ href, ...props }: LinkButtonProps) {
  const router = useRouter();
  return (
    <Button variant="secondary" onClick={() => router.replace(href)} {...props}>
      {props.children}
    </Button>
  );
}
