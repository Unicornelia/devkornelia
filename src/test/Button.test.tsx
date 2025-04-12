import { render, screen } from '@testing-library/react';
import { Button } from '@/components/Button.tsx';

describe('<Button />', () => {
  it('renders with given text', () => {
    render(<Button text="Click Me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
