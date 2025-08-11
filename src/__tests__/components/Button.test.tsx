import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../components/ui/button";

describe("Button", () => {
  it("should render correctly with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-primary",
      "text-primary-foreground"
    );
  });

  it("should render with custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole("button", {
      name: /custom button/i,
    });
    expect(button).toHaveClass("custom-class");
  });

  it("should render all variants correctly", () => {
    const variants = [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
    ];

    variants.forEach((variant) => {
      const { unmount } = render(
        <Button
          variant={
            variant as
              | "default"
              | "destructive"
              | "outline"
              | "secondary"
              | "ghost"
              | "link"
          }
        >
          Variant {variant}
        </Button>
      );

      const button = screen.getByRole("button", {
        name: new RegExp(`variant ${variant}`, "i"),
      });
      expect(button).toBeInTheDocument();

      unmount();
    });
  });

  it("should render all sizes correctly", () => {
    const sizes = ["default", "sm", "lg", "icon"];

    sizes.forEach((size) => {
      const { unmount } = render(
        <Button size={size as "default" | "sm" | "lg" | "icon"}>
          Size {size}
        </Button>
      );

      const button = screen.getByRole("button", {
        name: new RegExp(`size ${size}`, "i"),
      });
      expect(button).toBeInTheDocument();

      unmount();
    });
  });

  it("should handle click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole("button", {
      name: /clickable button/i,
    });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole("button", {
      name: /disabled button/i,
    });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("should not trigger click when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole("button", {
      name: /disabled button/i,
    });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should render as child when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
    expect(link).toHaveClass("bg-primary", "text-primary-foreground");
  });

  it("should pass through all HTML button attributes", () => {
    render(
      <Button
        type="submit"
        name="test-button"
        value="test-value"
        data-testid="test-button"
        aria-label="Test button"
      >
        Test Button
      </Button>
    );

    const button = screen.getByRole("button", {
      name: /test button/i,
    });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("name", "test-button");
    expect(button).toHaveAttribute("value", "test-value");
    expect(button).toHaveAttribute("data-testid", "test-button");
    expect(button).toHaveAttribute("aria-label", "Test button");
  });

  it("should have correct focus styles", () => {
    render(<Button>Focusable Button</Button>);

    const button = screen.getByRole("button", {
      name: /focusable button/i,
    });
    expect(button).toHaveClass(
      "focus-visible:border-ring",
      "focus-visible:ring-ring/50"
    );
  });

  it("should render with icon size correctly", () => {
    render(<Button size="icon">🔍</Button>);

    const button = screen.getByRole("button", { name: /🔍/i });
    expect(button).toHaveClass("size-9");
  });

  it("should handle form submission", () => {
    const handleSubmit = jest.fn();
    render(
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit Button</Button>
      </form>
    );

    const button = screen.getByRole("button", {
      name: /submit button/i,
    });
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
