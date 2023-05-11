import { render, fireEvent, waitFor } from "@testing-library/react";
import NavBar from "../../components/Navbar";
import { useSpring } from "react-spring";

// mock the useSpring hook from react-spring
jest.mock("react-spring", () => ({
  ...jest.requireActual("react-spring"),
  useSpring: jest.fn((animationConfig) => animationConfig.to),
}));

describe("Navbar", () => {
  // tests for functionality on larger screens
  describe("Large Screens", () => {
    // test that the component renders without crashing
    it("renders the component without crashing", () => {
      const { getByTestId } = render(<NavBar />);
      const navbar = getByTestId("navigation");
      expect(navbar).toBeInTheDocument();
    });

    // test animation behaviour for name
    it("applies animation to the name when rendered", () => {
      render(<NavBar />);
      expect(useSpring).toHaveBeenCalledWith({
        from: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
        to: { transform: "translate3d(10, 0, 0)", opacity: 1 },
        config: { duration: 1000 },
      });
    });

    // test that the name is showing up
    it("displays the name properly", () => {
      const { getByTestId } = render(<NavBar />);
      const name = getByTestId("name");
      expect(name).toBeInTheDocument();
    });

    // test that all the buttons show up
    it("renders the large buttons properly", () => {
      const { getByTestId } = render(<NavBar />);
      const aboutButton = getByTestId("about-button-large");
      const projectsButton = getByTestId("projects-button-large");
      const skillsButton = getByTestId("skills-button-large");
      const contactButton = getByTestId("contact-button-large");

      expect(aboutButton).toBeInTheDocument();
      expect(projectsButton).toBeInTheDocument();
      expect(skillsButton).toBeInTheDocument();
      expect(contactButton).toBeInTheDocument();
    });

    // tests that the handle section change works when clicking on each button
    it("handles section change and load the correct section", () => {
      const handleSectionChangeMock = jest.fn();
      const { getByTestId } = render(
        <NavBar handleSectionChange={handleSectionChangeMock} />
      );

      const aboutButtonLarge = getByTestId("about-button-large");
      fireEvent.click(aboutButtonLarge);

      const projectsButtonLarge = getByTestId("projects-button-large");
      fireEvent.click(projectsButtonLarge);

      const skillsButtonLarge = getByTestId("skills-button-large");
      fireEvent.click(skillsButtonLarge);

      const contactButtonLarge = getByTestId("contact-button-large");
      fireEvent.click(contactButtonLarge);

      expect(handleSectionChangeMock).toHaveBeenCalledTimes(4);
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(1, "about");
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(2, "projects");
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(3, "skills");
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(4, "contact");
    });
  });

  // tests for functionality on smaller screens
  describe("Smaller Screens", () => {
    // set the window width to 600px to simulate a smaller screen
    beforeEach(() => {
      global.innerWidth = 600;
    });

    // reset the window width after each test
    afterEach(() => {
      global.innerWidth = window.innerWidth;
    });

    // test that the component renders without crashing
    it("renders the component without crashing", () => {
      const { getByTestId } = render(<NavBar />);
      const navbar = getByTestId("navigation");
      expect(navbar).toBeInTheDocument();
    });

    // test animation behaviour for the name
    it("applies animation to the name when rendered", () => {
      render(<NavBar />);
      expect(useSpring).toHaveBeenCalledWith({
        from: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
        to: { transform: "translate3d(10, 0, 0)", opacity: 1 },
        config: { duration: 1000 },
      });
    });

    // tests that the name shows up
    it("displays the name", () => {
      const { getByTestId } = render(<NavBar />);
      const name = getByTestId("name");
      expect(name).toBeInTheDocument();
    });

    // test that the hamburger button shows up
    it("displays the hamburger button", () => {
      const { getByTestId } = render(<NavBar />);
      const hamburger = getByTestId("hamburger-button");
      expect(hamburger).toBeInTheDocument();
    });

    // test that the toggle works for open and close for the hamburger menu
    it("should toggle the hamburger menu between open and close", () => {
      const { getByTestId } = render(<NavBar />);
      const hamburgerButton = getByTestId("hamburger-button");

      fireEvent.click(hamburgerButton);
      const openHamburgerMenu = getByTestId("hamburger-menu");
      expect(openHamburgerMenu).toBeInTheDocument();

      fireEvent.click(openHamburgerMenu);
      waitFor(() => {
        const closedHamburgerMenu = getByTestId("hamburger-menu");
        expect(closedHamburgerMenu).toBeInTheDocument();
      });
    });

    // test that the handle section change works when clicking on each button
    it("should handle section change when the menu is open on smaller screens", () => {
      const handleSectionChangeMock = jest.fn();
      const { getByTestId } = render(
        <NavBar handleSectionChange={handleSectionChangeMock} />
      );
      const hamburgerButton = getByTestId("hamburger-button");

      fireEvent.click(hamburgerButton);

      const aboutButtonSmall = getByTestId("about-button-small");
      fireEvent.click(aboutButtonSmall);

      const projectsButtonSmall = getByTestId("projects-button-small");
      fireEvent.click(projectsButtonSmall);

      const skillsButtonSmall = getByTestId("skills-button-small");
      fireEvent.click(skillsButtonSmall);

      const contactButtonSmall = getByTestId("contact-button-small");
      fireEvent.click(contactButtonSmall);

      expect(handleSectionChangeMock).toHaveBeenCalledTimes(4);
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(1, "about");
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(2, "projects");
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(3, "skills");
      expect(handleSectionChangeMock).toHaveBeenNthCalledWith(4, "contact");
    });
  });
});
