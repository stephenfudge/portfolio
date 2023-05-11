import { render, fireEvent, act } from "@testing-library/react";
import ThemeToggle from "../../components/ThemeToggle";

describe("ThemeToggle", () => {
  // Clears the localStorage before each test
  beforeEach(() => {
    localStorage.clear();
  });

  // Verifies that the component renders without errors
  it("should render the component", () => {
    const { getByTestId } = render(<ThemeToggle />);
    expect(getByTestId("theme-toggle-button")).toBeInTheDocument();
  });

  // Verifies that the initial theme is set correctly based on the localStorage value
  it("should set the initial theme based on local storage", () => {
    // Sets the localStorage value to "true"
    localStorage.setItem("isDarkMode", "true");
    // Renders the component and updates the class list based on the localStorage value
    act(() => {
      render(<ThemeToggle />);
    });
    // Verifies that the "dark" class is present in the class list
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  // Verifies that the theme is toggled correctly when the button is clicked
  it("should toggle the theme when clicked", () => {
    const { getByTestId } = render(<ThemeToggle />);
    const button = getByTestId("theme-toggle-button");
    // Clicks the button to toggle the theme to "light"
    act(() => {
      fireEvent.click(button);
    });
    // Verifies that the "dark" class is not present in the class list
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    // Clicks the button again to toggle the theme back to "dark"
    act(() => {
      fireEvent.click(button);
    });
    // Verifies that the "dark" class is present in the class list
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  // Verifies that the localStorage value is updated correctly when the button is clicked
  it("should set local storage when the theme is toggled", () => {
    const { getByTestId } = render(<ThemeToggle />);
    const button = getByTestId("theme-toggle-button");
    // Clicks the button to toggle the theme to "light"
    fireEvent.click(button);
    // Verifies that the localStorage value is set to "true"
    expect(localStorage.getItem("isDarkMode")).toBe("true");
    // Clicks the button again to toggle the theme back to "dark"
    fireEvent.click(button);
    // Verifies that the localStorage value is set to "false"
    expect(localStorage.getItem("isDarkMode")).toBe("false");
  });
});
