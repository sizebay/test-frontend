import React from "react";
import { Plus } from "lucide-react";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "@/components";

describe("Button", () => {
  it("Deve exibir o botão com texto", () => {
    render(<Button>clicar</Button>);
    const button = screen.getByText(/clicar/i);
    expect(button).toBeInTheDocument();
  });

  it("Deve executar o click do botão", async () => {
    const handleClickMock = jest.fn();

    render(<Button onClick={handleClickMock}>clicar</Button>);
    const button = screen.getByRole("button", { name: /clicar/i });
    await userEvent.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  it("Deve estar desabilitado se a prop 'disabled' for true", () => {
    render(<Button disabled>clicar</Button>);
    const button = screen.getByRole("button", { name: /clicar/i });
    expect(button).toBeDisabled();
  });

  it("Deve renderizar icone a esquerda", () => {
    render(
      <Button leftIcon={<Plus aria-label="ícone de adicionar" />}>
        clicar
      </Button>
    );
    const button = screen.getByRole("button", { name: /clicar/i });
    const icon = within(button).getByLabelText("ícone de adicionar");

    expect(icon).toBeInTheDocument();
  });

  it("Deve renderizar icone a direita", () => {
    render(
      <Button rightIcon={<Plus aria-label="ícone de adicionar" />}>
        clicar
      </Button>
    );
    const button = screen.getByRole("button", { name: /clicar/i });
    const icon = within(button).getByLabelText("ícone de adicionar");

    expect(icon).toBeInTheDocument();
  });
});
