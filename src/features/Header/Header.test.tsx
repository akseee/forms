import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('renders the title and text correctly', () => {
    render(<Header />);

    const title = screen.getByRole('heading', {
      name: /character creator studio!/i,
    });
    expect(title).toBeInTheDocument();
    const text = screen.getByText(/create your character in two ways/i);
    expect(text).toBeInTheDocument();
  });

  it('renders the github link', () => {
    render(<Header />);

    const link = screen.getByRole('link', { name: /@akseee/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/akseee/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });
});
