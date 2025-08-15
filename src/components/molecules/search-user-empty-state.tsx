import { Search } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "../atoms";

export function SearchUserEmptyState() {
  return (
    <EmptyState>
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
