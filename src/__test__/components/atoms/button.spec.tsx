import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "@/components";

describe("Button", () => {
  it("Deve exibir o botão com texto", () => {
    render(<Button>Botão</Button>);
    const button = screen.getByRole("button", { name: /Botão/i });
    expect(button).toBeInTheDocument();
  });

  it("Deve estar desabilitado se a prop 'disabled' for true", () => {
    render(<Button disabled>Desabilitado</Button>);
    const button = screen.getByRole("button", { name: /desabilitado/i });
    expect(button).toBeDisabled();
  });
});
