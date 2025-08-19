"use client";

import { CircleX, RotateCcw } from "lucide-react";

import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  type EmptyStateProps,
  EmptyStateTitle,
} from "../../atoms";

type RepositoryErrorStateProps = EmptyStateProps & {
  onReset: VoidFunction;
};

export function RepositoryErrorState({
  onReset,
  ...props
}: RepositoryErrorStateProps) {
  return (
    <EmptyState {...props}>
      <EmptyStateBody>
        <EmptyStateIcon className="bg-red-300">
          <CircleX className=" text-red-500" />
        </EmptyStateIcon>
        <EmptyStateTitle className=" text-red-500">
          Erro ao carregar o repositório
        </EmptyStateTitle>
        <Button
          variant="secondary"
          leftIcon={<RotateCcw />}
          onClick={() => onReset()}
        >
          Tentar novamente
        </Button>
      </EmptyStateBody>
    </EmptyState>
  );
}
