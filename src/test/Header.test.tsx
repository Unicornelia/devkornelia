import { render, screen } from '@testing-library/react';
import { navLinks } from '../variables';
import { Header } from '@/components/Header.tsx';

describe('<Header />', () => {
  it('renders logo image with alt text', () => {
    render(<Header />);
    const logo = screen.getByAltText(/icon letter k in a colourful neon design/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    navLinks.forEach(({ name }) => {
      expect(screen.getByRole('link', { name })).toBeInTheDocument();
    });
  });
});
