import { render } from "@testing-library/react";
import Page from "@/app/(home-page)/page";

it("Renders homepage", () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
