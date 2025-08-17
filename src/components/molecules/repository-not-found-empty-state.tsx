import { FolderX } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "../atoms";

export function RepositoryNotFoundEmptyState() {
  return (
    <EmptyState data-testid="user-not-found-empty-state">
      <EmptyStateBody>
        <EmptyStateIcon>
          <FolderX />
        </EmptyStateIcon>
        <EmptyStateTitle>Repositório não encontrado</EmptyStateTitle>
        <EmptyStateDescription>
          Tente novamente mais tarde
        </EmptyStateDescription>
      </EmptyStateBody>
    </EmptyState>
  );
}
