import React from "react";
import { render, screen } from "@testing-library/react";

import NavBar from "./index.js";

describe("Error", () => {
  test("should have header text", () => {
    render(<NavBar />);

    expect(screen.getByText("NavBar")).toBeInTheDocument();
  });
});
