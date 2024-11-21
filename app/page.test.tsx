import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home", () => {
  it("renders the page", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    });
  });
});
