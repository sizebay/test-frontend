import { FolderX } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  type EmptyStateProps,
  EmptyStateTitle,
} from "../../atoms";

type RepositoryNotFoundEmptyStateProps = EmptyStateProps;

export function RepositoryNotFoundEmptyState(
  props: RepositoryNotFoundEmptyStateProps
) {
  return (
    <EmptyState data-testid="repository-not-found-empty-state" {...props}>
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
