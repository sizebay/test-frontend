import type { Meta, StoryObj } from "@storybook/nextjs";

import { RepositoriesList } from "@/components";
import {
  makeFakeGithubRepositories,
  makeFakeGithubRepositoryDTO,
  makeFakeGithubUserDTO,
} from "@/__test__/mocks";
import { GithubRepositoriesMapper } from "@/utils";

const meta = {
  title: "Organisms/RepositoriesList",
  component: RepositoriesList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente **RepositoriesList** é utilizado para realizar buscas em um serviço.",
      },
    },
  },
  argTypes: {
    repositories: {
      control: "object",
      description: "Repositórios a serem exibidos na listagem.",
      table: {
        type: { summary: "Array<TGithubRepository>" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RepositoriesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    repositories: makeFakeGithubRepositories(5, makeFakeGithubUserDTO()).map(
      GithubRepositoriesMapper.toFrontend
    ),
  },
};
