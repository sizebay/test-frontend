"use client";

import { CircleX, RotateCcw } from "lucide-react";

import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateTitle,
} from "../atoms";

type UserRepositoryErrorEmptyStateProps = {
  onReset: VoidFunction;
};

export function UserRepositoryErrorEmptyState({
  onReset,
}: UserRepositoryErrorEmptyStateProps) {
  return (
    <EmptyState>
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
