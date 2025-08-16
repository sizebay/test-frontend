import { TGithubRepository } from "@/types";

import { Card, CardBody, CardProps } from "../atoms";
import {
  RepositoryCardDescription,
  RepositoryCardFooter,
  RepositoryCardHeader,
} from "../molecules";

type RepositoryCardProps = CardProps & {
  repository: TGithubRepository;
};

export function RepositoryCard({ repository, ...props }: RepositoryCardProps) {
  return (
    <Card {...props} data-testid="repository-card">
      <RepositoryCardHeader repository={repository} />
      <CardBody className="h-24 ">
        <div className="w-full h-20 overflow-hidden">
          <RepositoryCardDescription repository={repository} />
        </div>
      </CardBody>
      <RepositoryCardFooter repository={repository} />
    </Card>
  );
}
