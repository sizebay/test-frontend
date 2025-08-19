import { CodeXml } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  type EmptyStateProps,
  EmptyStateTitle,
} from "../../atoms";

type RepositoryLanguagesEmptyStateProps = EmptyStateProps;

export function RepositoryLanguagesEmptyState(
  props: RepositoryLanguagesEmptyStateProps
) {
  return (
    <EmptyState data-testid="repository-languages-empty-state" {...props}>
      <EmptyStateBody>
        <EmptyStateIcon>
          <CodeXml />
        </EmptyStateIcon>
        <EmptyStateTitle>Repositório não possui linguagens</EmptyStateTitle>
        <EmptyStateDescription>
          O Repositório não possui linguages específicas para listar
        </EmptyStateDescription>
      </EmptyStateBody>
    </EmptyState>
  );
}
