import { render, screen } from '@testing-library/react';
import { email } from '@/variables';
import Contact from '@/components/Contact.tsx';

describe('<Contact />', () => {
  it('renders Resume and Email buttons with correct links', () => {
    render(<Contact />);

    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toHaveAttribute('href', '/resume.pdf');
    expect(resumeLink).toHaveAttribute('target', '_blank');

    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', `mailto:${email}`);
  });

  it('renders both buttons', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /email/i })).toBeInTheDocument();
  });
});
