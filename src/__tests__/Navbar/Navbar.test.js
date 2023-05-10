import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from '../../components/Navbar';

jest.mock("react-spring", () => ({
  ...jest.requireActual("react-spring"),
  useSpring: () => ({ opacity: 1, from: { opacity: 0 } }),
}));

describe('Navbar', () => {
  // Test that the component renders without crashing
  it('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

it("displays the name properly", async () => {
    const { getByTestId } = render(<Navbar />);
    const name = getByTestId("name");

    await waitFor(() => {
      expect(name).toBeInTheDocument();
    });
  });

it("renders the large buttons properly", () => {
    const { getByTestId } = render(<Navbar />);
    const projectsButton = getByTestId("projects-button-large");
    const skillsButton = getByTestId("skills-button-large");
    const contactButton = getByTestId("contact-button-large");

    expect(projectsButton).toBeInTheDocument();
    expect(skillsButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
  });

it("handles section change when About Me button is clicked", () => {
    const handleSectionChange = jest.fn();
    const { getByTestId } = render(
      <Navbar activeSection="skills" handleSectionChange={handleSectionChange} />
    );
    const aboutButton = getByTestId("about-button-large");
  
    fireEvent.click(aboutButton);
    expect(handleSectionChange).toHaveBeenCalledWith("about");
  });
  
  it("handles section change when Projects button is clicked", () => {
    const handleSectionChange = jest.fn();
    const { getByTestId } = render(
      <Navbar activeSection="about" handleSectionChange={handleSectionChange} />
    );
    const projectsButton = getByTestId("projects-button-large");
  
    fireEvent.click(projectsButton);
    expect(handleSectionChange).toHaveBeenCalledWith("projects");
  });
  
  it("handles section change when Skills button is clicked", () => {
    const handleSectionChange = jest.fn();
    const { getByTestId } = render(
      <Navbar activeSection="about" handleSectionChange={handleSectionChange} />
    );
    const skillsButton = getByTestId("skills-button-large");
  
    fireEvent.click(skillsButton);
    expect(handleSectionChange).toHaveBeenCalledWith("skills");
  });
  
  it("handles section change when Contact Me button is clicked", () => {
    const handleSectionChange = jest.fn();
    const { getByTestId } = render(
      <Navbar activeSection="about" handleSectionChange={handleSectionChange} />
    );
    const contactButton = getByTestId("contact-button-large");
  
    fireEvent.click(contactButton);
    expect(handleSectionChange).toHaveBeenCalledWith("contact");
  });


});