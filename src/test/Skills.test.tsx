import { render, screen } from '@testing-library/react';
import { skills } from '@/variables';
import dayjs from 'dayjs';
import Skills from '@/components/Skills.tsx';

describe('<Skills />', () => {
  it('renders correct number of years since 2018', () => {
    render(<Skills />);
    const currentYear = dayjs().year();
    const expectedText = `Some technologies I’ve been working with over the last ${currentYear - 2018} years:`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('renders all skills from the list', () => {
    render(<Skills />);
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
