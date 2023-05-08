import { render, screen } from "@testing-library/react";
import App from "./App";

// tests for the App component
describe("App component", () => {
  
  // tests if the navbar component renders
  it("renders the navbar", () => {
    render(<App />);
    const navbarElement = screen.getByTestId("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  //  tests if the theme toggle component/button renders
  it("renders the theme toggle button", () => {
    render(<App />);
    const themeToggleElement = screen.getByTestId("theme-toggle-button");
    expect(themeToggleElement).toBeInTheDocument();
  });

  // tests if the about component renders
  it("renders the about section by default", () => {
    render(<App />);
    const aboutElement = screen.getByTestId("about-section");
    expect(aboutElement).toBeInTheDocument();
  });

  // tests if the footer component renders
  it("renders the footer", () => {
    render(<App />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
