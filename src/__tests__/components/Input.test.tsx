import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../../components/ui/input";

describe("Input", () => {
  it("should render correctly with default props", () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    // Input não tem type="text" por padrão, é undefined
    expect(input).not.toHaveAttribute("type", "text");
  });

  it("should render with custom type", () => {
    render(<Input type="email" placeholder="Enter email" />);

    const input = screen.getByPlaceholderText("Enter email");
    expect(input).toHaveAttribute("type", "email");
  });

  it("should render with custom className", () => {
    render(
      <Input className="custom-class" placeholder="Custom input" />
    );

    const input = screen.getByPlaceholderText("Custom input");
    expect(input).toHaveClass("custom-class");
  });

  it("should handle value changes", () => {
    render(<Input placeholder="Test input" />);

    const input = screen.getByPlaceholderText("Test input");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(input).toHaveValue("new value");
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Input disabled placeholder="Disabled input" />);

    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });

  it("should have correct default classes", () => {
    render(<Input placeholder="Test input" />);

    const input = screen.getByPlaceholderText("Test input");
    // Verificar apenas algumas classes principais que sabemos que existem
    expect(input).toHaveClass(
      "flex",
      "w-full",
      "rounded-md",
      "border"
    );
  });

  it("should pass through all HTML input attributes", () => {
    render(
      <Input
        name="test-input"
        id="test-id"
        placeholder="Test input"
        data-testid="test-input"
        aria-label="Test input"
        required
        maxLength={50}
      />
    );

    const input = screen.getByPlaceholderText("Test input");
    expect(input).toHaveAttribute("name", "test-input");
    expect(input).toHaveAttribute("id", "test-id");
    expect(input).toHaveAttribute("data-testid", "test-input");
    expect(input).toHaveAttribute("aria-label", "Test input");
    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("maxLength", "50");
  });

  it("should handle focus and blur events", () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();

    render(
      <Input
        placeholder="Test input"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );

    const input = screen.getByPlaceholderText("Test input");

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("should handle key events", () => {
    const handleKeyDown = jest.fn();
    const handleKeyUp = jest.fn();

    render(
      <Input
        placeholder="Test input"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
    );

    const input = screen.getByPlaceholderText("Test input");

    fireEvent.keyDown(input, { key: "Enter" });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(input, { key: "Enter" });
    expect(handleKeyUp).toHaveBeenCalledTimes(1);
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<Input placeholder="Default size" />);

    let input = screen.getByPlaceholderText("Default size");
    // Verificar se tem a classe h-9 (altura padrão atual)
    expect(input).toHaveClass("h-9");

    rerender(<Input placeholder="Small size" className="h-8" />);
    input = screen.getByPlaceholderText("Small size");
    expect(input).toHaveClass("h-8");

    rerender(<Input placeholder="Large size" className="h-12" />);
    input = screen.getByPlaceholderText("Large size");
    expect(input).toHaveClass("h-12");
  });
});
