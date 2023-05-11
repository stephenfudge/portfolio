import { render } from "@testing-library/react";
import Footer from "../../components/Footer";


describe("Footer component", () => {

    // this tests if the footer component renders
    it("renders the footer element", () => {
    const { getByRole } = render(<Footer />);
    const footerElement = getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

//   this tests if the font awesome icon renders AND the link for linkedin
  it("renders the Font Awesome LinkedIn icon with a link", () => {
    const { getByTestId } = render(<Footer />);
    const linkedInIcon = getByTestId("linkedin-icon");
    const linkedInLink = getByTestId("linkedin-link");
    expect(linkedInIcon).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/stephenfudge"
    );
  });

//   this tests if the font awesome icon renders AND the link for github
  it("renders the Font Awesome Github icon with a link", () => {
    const { getByTestId } = render(<Footer />);
    const githubIcon = getByTestId("github-icon");
    const githubLink = getByTestId("github-link");
    expect(githubIcon).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/stephenfudge"
    );
  });

//   this tests if the copywrite statement renders
  it("renders the copyright statement", () => {
    const { getByText } = render(<Footer />);
    const copyrightStatement = getByText(
      `© ${new Date().getFullYear()} Stephen Fudge. All Rights Reserved.`
    );
    expect(copyrightStatement).toBeInTheDocument();
  });
});
