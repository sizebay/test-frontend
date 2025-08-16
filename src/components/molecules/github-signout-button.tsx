"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button, type ButtonProps } from "../atoms";

type GithubSignOutButtonProps = ButtonProps;

export function GithubSignOutButton({ ...props }: GithubSignOutButtonProps) {
  return (
    <Button
      leftIcon={<LogOut size={16} />}
      onClick={() => signOut({ callbackUrl: "/" })}
      {...props}
    >
      Sair
    </Button>
  );
}
