import { User } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "../atoms";

export function UserNotFoundEmptyState() {
  return (
    <EmptyState data-testid="user-not-found-empty-state">
      <EmptyStateBody>
        <EmptyStateIcon>
          <User />
        </EmptyStateIcon>
        <EmptyStateTitle>Usuário não encontrado</EmptyStateTitle>
        <EmptyStateDescription>
          Tente novamente mais tarde ou repita a busca com novos parâmetros
        </EmptyStateDescription>
      </EmptyStateBody>
    </EmptyState>
  );
}
