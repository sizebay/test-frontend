import { TriangleAlert } from "lucide-react";

import {
  EmptyState,
  EmptyStateBody,
  EmptyStateDescription,
  EmptyStateIcon,
  type EmptyStateProps,
  EmptyStateTitle,
} from "../../atoms";

type UnderConstructionEmptyStateProps = EmptyStateProps;

export function UnderConstructionEmptyState(
  props: UnderConstructionEmptyStateProps
) {
  return (
    <EmptyState {...props}>
      <EmptyStateBody>
        <EmptyStateIcon className="bg-amber-100">
          <TriangleAlert className=" text-amber-500" />
        </EmptyStateIcon>
        <EmptyStateTitle className=" text-amber-500">
          Está página está sob construção
        </EmptyStateTitle>
        <EmptyStateDescription>
          Mais informações sobre o repositório virão em breve
        </EmptyStateDescription>
      </EmptyStateBody>
    </EmptyState>
  );
}
