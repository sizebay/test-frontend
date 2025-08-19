import { Download, Github, Share } from "lucide-react";
import { HTMLAttributes } from "react";

import { TGithubRepository } from "@/types";

import {
  ClipboardButton,
  LinkButton,
  type LinkButtonProps,
  type ClipboardButtonProps,
} from "../atoms";

type RepositoryShareButtonProps = Omit<ClipboardButtonProps, "valueToCopy"> & {
  repository: TGithubRepository;
};

export function RepositoryShareButton({
  repository,
  ...props
}: RepositoryShareButtonProps) {
  return (
    <ClipboardButton
      {...props}
      valueToCopy={repository.cloneUrl}
      variant="secondary"
      leftIcon={<Share />}
      className="grow"
    >
      Compartilhar
    </ClipboardButton>
  );
}

type RepositoryCloneButtonProps = Omit<ClipboardButtonProps, "valueToCopy"> & {
  repository: TGithubRepository;
};

export function RepositoryCloneButton({
  repository,
  ...props
}: RepositoryCloneButtonProps) {
  return (
    <ClipboardButton
      {...props}
      valueToCopy={repository.sshUrl}
      variant="secondary"
      leftIcon={<Download />}
      className="grow"
    >
      Clonar
    </ClipboardButton>
  );
}

type RepositoryLinkButtonProps = Omit<LinkButtonProps, "href"> & {
  repository: TGithubRepository;
};

export function RepositoryLinkButton({
  repository,
  ...props
}: RepositoryLinkButtonProps) {
  return (
    <LinkButton
      {...props}
      href={repository.cloneUrl}
      variant="secondary"
      leftIcon={<Github />}
      className="grow"
    >
      Ver no github
    </LinkButton>
  );
}

type RepositoryActionsProps = HTMLAttributes<HTMLDivElement> & {
  repository: TGithubRepository;
};

export function RepositoryActions({
  repository,
  ...props
}: RepositoryActionsProps) {
  return (
    <div className="flex gap-2 w-full lg:w-fit flex-wrap" {...props}>
      <RepositoryShareButton repository={repository} />
      <RepositoryCloneButton repository={repository} />
      <RepositoryLinkButton repository={repository} />
    </div>
  );
}
