import { type TGithubRepository } from "@/types";

import {
  Card,
  CardBody,
  CardDetail,
  CardHeader,
  CardProps,
  CardTitle,
  Divider,
} from "../atoms";

export type RepositoryLanguagesProps = CardProps & {
  languages?: Array<string>;
};

export function RepositoryLanguages({
  languages,
  ...props
}: RepositoryLanguagesProps) {
  if (!languages) return null;
  if (!languages.length) return null;
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Linguagens</CardTitle>
      </CardHeader>
      <Divider />
      <CardBody>
        {languages.map((language) => (
          <CardDetail key={language}>
            <div className="w-2 h-2 bg-helper-amber rounded-full" />
            {language}
          </CardDetail>
        ))}
      </CardBody>
    </Card>
  );
}
