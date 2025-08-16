"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button, ButtonProps } from "../atoms";

export function GoBackButton(props: ButtonProps) {
  const router = useRouter();
  return (
    <Button
      variant="tertiary"
      onClick={() => router.back()}
      {...props}
      leftIcon={<ArrowLeft />}
    >
      {props.children}
    </Button>
  );
}
