import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders tagline text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/AROUND YOU/i);
  expect(linkElement).toBeInTheDocument();
});
