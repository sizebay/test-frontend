import { Input } from "@/components/atoms/input";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input", () => {
  it("should be rendered with the correct initial value", () => {
    render(<Input value="valor" onChange={() => {}} />);
    expect(screen.getByDisplayValue("valor")).toBeInTheDocument();
  });

  it("should call onChange when typing", () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "novo" },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it("should be disabled when disabled prop is passed", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
