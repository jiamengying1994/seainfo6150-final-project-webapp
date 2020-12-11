import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

it("renders the contact component correctly", () => {
  const { container } = render(<Contact />);
  expect(container).toMatchSnapshot();
});