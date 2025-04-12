import { render, screen } from '@testing-library/react';
import { socialMedia } from '@/variables';
import Work from '@/components/Work.tsx';

describe('<Work />', () => {
  it('renders the heading', () => {
    render(<Work />);
    expect(
      screen.getByRole('heading', { level: 3, name: /check out my github/i }),
    ).toBeInTheDocument();
  });

  it('renders the GitHub link with the correct URL', () => {
    render(<Work />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', socialMedia[0].url);
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders the GitHub icon with alt text', () => {
    render(<Work />);
    const image = screen.getByAltText(/github icon/i);
    expect(image).toBeInTheDocument();
  });
});
