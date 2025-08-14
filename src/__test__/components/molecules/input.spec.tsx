import React from "react";
import { Search } from "lucide-react";

import { render, screen, within } from "@testing-library/react";

import { Input } from "@/components";

describe("Input", () => {
  it("Deve exibir o input com placeholder", () => {
    render(<Input placeholder="placeholder" />);
    const input = screen.getByPlaceholderText(/placeholder/i);
    expect(input).toBeInTheDocument();
  });

  it("Deve estar desabilitado se a prop 'disabled' for true", () => {
    render(<Input placeholder="placeholder" disabled />);
    const input = screen.getByPlaceholderText(/placeholder/i);
    expect(input).toBeDisabled();
  });

  it("Deve exibir input com valor", () => {
    render(<Input placeholder="placeholder" defaultValue="value" />);
    const input = screen.getByPlaceholderText(/placeholder/i);
    expect(input).toHaveValue("value");
  });

  it("Deve renderizar icone a esquerda", () => {
    render(
      <Input
        leftIcon={<Search aria-label="ícone de buscar" />}
        placeholder="placeholder"
        id="input-with-left-icon"
      />
    );
    const label = screen.getByTestId("input-left-icon");
    const icon = within(label).getByLabelText("ícone de buscar");

    expect(icon).toBeInTheDocument();
  });

  it("Deve renderizar icone a direita", () => {
    render(
      <Input
        rightIcon={<Search aria-label="ícone de buscar" />}
        placeholder="placeholder"
        id="input-with-right-icon"
      />
    );
    const label = screen.getByTestId("input-right-icon");
    const icon = within(label).getByLabelText("ícone de buscar");

    expect(icon).toBeInTheDocument();
  });
});
