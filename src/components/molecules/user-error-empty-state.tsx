"use client";

import { CircleX, RotateCcw } from "lucide-react";

import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateTitle,
} from "../atoms";

type UserErrorEmptyStateProps = {
  onReset: VoidFunction;
};

export function UserErrorEmptyState({ onReset }: UserErrorEmptyStateProps) {
  return (
    <EmptyState>
      <EmptyStateBody>
        <EmptyStateIcon className="bg-red-300">
          <CircleX className=" text-red-500" />
        </EmptyStateIcon>
        <EmptyStateTitle className=" text-red-500">
          Erro ao buscar repositórios
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
