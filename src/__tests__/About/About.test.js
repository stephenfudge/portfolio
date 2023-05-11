import { render, screen } from "@testing-library/react";
import About from "../../pages/About";

// this is added because the useWindowSize hook is used in the About component
jest.mock("react-use", () => ({
  useWindowSize: jest.fn(),
}));

describe("About component", () => {
  // tests that the component renders
  it("renders without crashing", () => {
    const mockUseWindowSize = {
      width: 800,
    };
    jest
      .requireMock("react-use")
      .useWindowSize.mockReturnValue(mockUseWindowSize);

    render(<About />);
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  // tests that the component displays the correct text
  it("displays correct text", () => {
    const mockUseWindowSize = {
      width: 800,
    };
    jest
      .requireMock("react-use")
      .useWindowSize.mockReturnValue(mockUseWindowSize);

    render(<About />);
    expect(screen.getByText(/Hey hey, I'm Stephen/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Full Stack Web Development Certificate/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, SQL/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Assistant Instructor with 2U/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/delivering exceptional customer service/i)
    ).toBeInTheDocument();
  });

  // tests that the component displays the correct image at a mobile sized screen
  it('renders with "w-2/3" image width when window width is less than 768', async () => {
    const mockUseWindowSize = {
      width: 500,
    };
    jest
      .requireMock("react-use")
      .useWindowSize.mockReturnValue(mockUseWindowSize);

    const { getByTestId } = render(<About />);
    const aboutSection = getByTestId("about-section");
    const image = await screen.findByAltText("Stephen Fudge profile pic");

    expect(aboutSection).toBeInTheDocument();
    expect(image).toHaveClass("w-2/3");
  });

  // tests that the component displays the correct image at a desktop sized screen
  it('renders with "w-5/8" image width when window width is greater than or equal to 768', async () => {
    const mockUseWindowSize = {
      width: 800,
    };
    jest
      .requireMock("react-use")
      .useWindowSize.mockReturnValue(mockUseWindowSize);

    const { getByTestId } = render(<About />);
    const aboutSection = getByTestId("about-section");
    const image = await screen.findByAltText("Stephen Fudge profile pic");

    expect(aboutSection).toBeInTheDocument();
    expect(image).toHaveClass("w-5/8");
  });
});
