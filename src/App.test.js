import { render, screen, act, waitFor } from "@testing-library/react";
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

  // tests if the about component renders by default
  it("renders the about section by default", () => {
    render(<App />);
    const aboutElement = screen.getByTestId("about-section");
    expect(aboutElement).toBeInTheDocument();
  });

  // tests if the projects component renders
  it('renders the projects section when clicked', () => {
    render(<App />);
    // Find the projects button and click it
  const projectsButton = screen.getByTestId('projects-button-large') || screen.getByTestId('projects-button-small');
  act(() => {
    projectsButton.click();
  });
  // Wait for the projects section to be rendered
  waitFor(() => {
    const projectsElement = screen.queryByTestId('projects-section');
    expect(projectsElement).toBeInTheDocument();
  });
});


  // tests if the skills component renders
  it('renders the skills section when clicked', () => {
    render(<App />);
    // Find the skills button and click it
  const skillsButton = screen.getByTestId('skills-button-large') || screen.getByTestId('skills-button-small');
  act(() => {
    skillsButton.click();
  });
  // Wait for the skills section to be rendered
  waitFor(() => {
    const skillsElement = screen.queryByTestId('skills-section');
    expect(skillsElement).toBeInTheDocument();
  });
});

  // tests if the contact component renders
  it('renders the contact section when clicked', () => {
    render(<App />);
    // Find the contact button and click it
  const contactButton = screen.getByTestId('contact-button-large') || screen.getByTestId('contact-button-small');
  act(() => {
    contactButton.click();
  });
  // Wait for the contact section to be rendered
  waitFor(() => {
    const contactElement = screen.queryByTestId('contact-section');
    expect(contactElement).toBeInTheDocument();
  });
});

  // tests if the footer component renders
  it("renders the footer", () => {
    render(<App />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
