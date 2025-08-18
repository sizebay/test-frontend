import { Search } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  type EmptyStateProps,
  EmptyStateTitle,
} from "../../atoms";

type UserSearchEmptyStateProps = EmptyStateProps;

export function UserSearchEmptyState(props: UserSearchEmptyStateProps) {
  return (
    <EmptyState data-testid="search-user-empty-state" {...props}>
      <EmptyStateBody>
        <EmptyStateIcon>
          <Search />
        </EmptyStateIcon>
        <EmptyStateTitle>Procure por usuários</EmptyStateTitle>
        <EmptyStateDescription>
          Pesquise o nome do usuário para listar seus repositórios
        </EmptyStateDescription>
      </EmptyStateBody>
    </EmptyState>
  );
}
