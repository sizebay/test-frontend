import React from "react";
import { render, screen } from "@testing-library/react";

import { Typography } from "@/components";

describe("Typography", () => {
  it("Deve exibir o texto", () => {
    render(<Typography>Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toBeInTheDocument();
  });

  it("Deve exibir o componente p para size sm", () => {
    render(<Typography size="sm">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("paragraph");
  });

  it("Deve exibir o componente p para size md", () => {
    render(<Typography size="md">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("paragraph");
  });

  it("Deve exibir o componente h6 para size lg", () => {
    render(<Typography size="lg">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("heading");
  });

  it("Deve exibir o componente h5 para size xl", () => {
    render(<Typography size="xl">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("heading");
  });

  it("Deve exibir o componente h4 para size 2xl", () => {
    render(<Typography size="2xl">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("heading");
  });

  it("Deve exibir o componente h3 para size 3xl", () => {
    render(<Typography size="3xl">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("heading");
  });

  it("Deve exibir o componente h2 para size 4xl", () => {
    render(<Typography size="4xl">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("heading");
  });

  it("Deve exibir o componente h1 para size 5xl", () => {
    render(<Typography size="5xl">Texto</Typography>);
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("heading");
  });

  it("Deve exibir o componente customizado", () => {
    render(
      <Typography size="5xl" as="p">
        Texto
      </Typography>
    );
    const typography = screen.getByText(/Texto/i);
    expect(typography).toHaveRole("paragraph");
  });
});
