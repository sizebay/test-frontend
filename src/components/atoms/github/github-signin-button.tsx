"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

import { Button, type ButtonProps } from "..";

type GithubSignInButtonProps = ButtonProps;

export function GithubSignInButton({ ...props }: GithubSignInButtonProps) {
  return (
    <Button
      leftIcon={<Github />}
      onClick={() => signIn("github", { callbackUrl: "/" })}
      {...props}
    >
      Entrar com Github
    </Button>
  );
}
