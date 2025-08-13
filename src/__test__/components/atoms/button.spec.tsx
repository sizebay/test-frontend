import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "@/components";

describe("Button", () => {
  it("Deve exibir o botão com texto", () => {
    render(<Button>Botão</Button>);
    const button = screen.getByText(/Botão/i);
    expect(button).toBeInTheDocument();
  });

  it("Deve executar o click do botão", async () => {
    const handleClickMock = jest.fn();

    render(<Button onClick={handleClickMock}>Botão</Button>);
    const button = screen.getByText(/Botão/i);
    await userEvent.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  it("Deve estar desabilitado se a prop 'disabled' for true", () => {
    render(<Button disabled>Desabilitado</Button>);
    const button = screen.getByRole("button", { name: /desabilitado/i });
    expect(button).toBeDisabled();
  });
});
