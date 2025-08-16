"use client";

import { Github } from "lucide-react";

import { Button, type ButtonProps } from "../atoms";
import { signIn } from "next-auth/react";

type GithubSignInButtonProps = ButtonProps;

export function GithubSignInButton({ ...props }: GithubSignInButtonProps) {
  return (
    <Button
      leftIcon={<Github size={16} />}
      onClick={() => signIn("github", { callbackUrl: "/repositories" })}
      {...props}
    >
      Entrar com Github
    </Button>
  );
}
