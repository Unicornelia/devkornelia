import { render, screen } from '@testing-library/react';
import { Layout } from '@/components/Layout.tsx';

describe('Layout component', () => {
  it('renders header, main content, and footer', () => {
    render(
      <Layout>
        <p>Test Content</p>
      </Layout>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
