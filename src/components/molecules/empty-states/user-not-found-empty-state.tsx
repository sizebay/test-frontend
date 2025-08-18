import { User } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  type EmptyStateProps,
  EmptyStateTitle,
} from "../../atoms";

type UserNotFoundEmptyStateProps = EmptyStateProps;

export function UserNotFoundEmptyState(props: UserNotFoundEmptyStateProps) {
  return (
    <EmptyState data-testid="user-not-found-empty-state" {...props}>
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
