import { Button } from "@/components/atoms/button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("Happy path: should render and execute action correctly", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique aqui</Button>);
    fireEvent.click(screen.getByText("Clique aqui"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });

  it("Loading: should render loading state", () => {
    render(<Button disabled>Carregando...</Button>);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should render as Slot when asChild=true is passed", () => {
    render(
      <Button asChild>
        <a>Link child</a>
      </Button>
    );
    const anchor = screen.getByText(/link child/i);
    expect(anchor.closest('[data-slot="button"]')).toBeInTheDocument();
  });
});
