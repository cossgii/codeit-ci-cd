import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import React from "react";

describe("Home", () => {
  it("renders the page", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    });
  });
});
