import { render, screen } from "@testing-library/react";
import Projects from "../../pages/Projects";

describe("Projects", () => {
  // test that the component renders
  it("renders the component", () => {
    render(<Projects />);
    const projectsSection = screen.getByTestId("projects-section");
    expect(projectsSection).toBeInTheDocument();
  });

  // test that the component renders the section heading
  it("renders the section heading", () => {
    render(<Projects />);
    const heading = screen.getByRole("heading", { name: "Projects" });
    expect(heading).toBeInTheDocument();
  });

  // test that the component renders the section description
  it("renders the section description", () => {
    render(<Projects />);
    const description = screen.getByText(
      "Here are some projects that I have been involved in creating."
    );
    expect(description).toBeInTheDocument();
  });

  // test that the component renders at least one project card
  it("renders at least one project card", () => {
    render(<Projects />);
    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards.length).toBeGreaterThan(0);
  });
});
