import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer.tsx';

describe('<Footer />', () => {
  it('renders the current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
  });
});
