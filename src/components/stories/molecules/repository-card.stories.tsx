import type { Meta, StoryObj } from "@storybook/nextjs";

import { RepositoryCard } from "@/components";
import {
  makeFakeGithubRepositoryDTO,
  makeFakeGithubUserDTO,
} from "@/__test__/mocks";
import { GithubRepositoriesMapper } from "@/utils";

const meta = {
  title: "Molecules/RepositoryCard",
  component: RepositoryCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente **RepositoryCard** é utilizado para realizar buscas em um serviço.",
      },
    },
  },
  argTypes: {
    repository: {
      control: "object",
      description: "Repositório a ser exibido no card.",
      table: {
        type: { summary: "TGithubRepository" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RepositoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    repository: GithubRepositoriesMapper.toFrontend(
      makeFakeGithubRepositoryDTO(makeFakeGithubUserDTO())
    ),
  },
};
