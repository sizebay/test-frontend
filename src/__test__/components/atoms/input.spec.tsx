import React from "react";
import { render, screen } from "@testing-library/react";

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
});
