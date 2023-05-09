import { render, screen } from '@testing-library/react';
import ProjectCard from '../../pages/Projects/ProjectCards';

describe('ProjectCard', () => {

  // define the props for the ProjectCard component
  const props = {
    title: 'Test Project',
    description: 'This is a test project.',
    image: 'test-image.jpg',
    deployed: 'http://example.com',
    repo: 'http://github.com/test/test-project',
  };

   // test that the component renders the title
  it('renders the title', () => {
    render(<ProjectCard {...props} />);
    const title = screen.getByText('Test Project');
    expect(title).toBeInTheDocument();
  });

  // test that the component renders the description
  it('renders the description', () => {
    render(<ProjectCard {...props} />);
    const description = screen.getByText('This is a test project.');
    expect(description).toBeInTheDocument();
  });

  // test that the component renders the image
  it('renders the image', () => {
    render(<ProjectCard {...props} />);
    const image = screen.getByAltText('screenshot of Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  // test that the component renders the deployed link
  it('renders the deployed link', () => {
    render(<ProjectCard {...props} />);
    const deployedLink = screen.getByRole('link', { name: 'See it live!' });
    expect(deployedLink).toBeInTheDocument();
    expect(deployedLink).toHaveAttribute('href', 'http://example.com');
  });

  // test that the component renders the repo link
  it('renders the repo link', () => {
    render(<ProjectCard {...props} />);
    const repoLink = screen.getByRole('link', {
      name: 'View the GitHub repository!',
    });
    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute(
      'href',
      'http://github.com/test/test-project');
  });
});
