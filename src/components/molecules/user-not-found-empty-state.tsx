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
    <EmptyState>
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
