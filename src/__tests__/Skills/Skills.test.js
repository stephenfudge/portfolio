import { render, screen } from '@testing-library/react';
import Skills from '../../pages/Skills';

describe('Skills component', () => {

  // tests that the Skills component is rendered
  it('renders the Skills section', () => {
    render(<Skills />);
    const skillsSection = screen.getByTestId('skills-section');
    expect(skillsSection).toBeInTheDocument();
  });

  // tests that the frontend skills card is rendered
  it('renders the Frontend skills', () => {
    render(<Skills />);
    const frontendSkills = screen.getByText('Frontend');
    expect(frontendSkills).toBeInTheDocument();
  });

  // tests that the backend skills card is rendered
  it('renders the Backend skills', () => {
    render(<Skills />);
    const backendSkills = screen.getByText('Backend');
    expect(backendSkills).toBeInTheDocument();
  });

  // tests that the other skills card is rendered
  it('renders the Other skills', () => {
    render(<Skills />);
    const otherSkills = screen.getByText('Other');
    expect(otherSkills).toBeInTheDocument();
  });
});
