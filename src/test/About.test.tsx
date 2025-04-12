import { render, screen } from '@testing-library/react';
import About from '@/components/About.tsx';

describe('<About />', () => {
  it('renders all headings', () => {
    render(<About />);

    expect(screen.getByRole('heading', { level: 1, name: /hello/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /my name is kornelia/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /i am a fullstack developer/i }),
    ).toBeInTheDocument();
  });
});
