"use client";

import { Button, type ButtonProps } from "../atoms";
import Link, { type LinkProps } from "next/link";

type LinkButton = ButtonProps & LinkProps;

export function LinkButton(props: LinkButton) {
  return (
    <Link href={props.href} className="w-full">
      <Button {...props}>{props.children}</Button>
    </Link>
  );
}
