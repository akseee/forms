import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';
import { mockCharacter } from '../../utils/mocks';

describe('UserCard', () => {
  test('should render correct data', () => {
    render(<UserCard user={mockCharacter} last={false} />);
    expect(screen.getByText(/TestUser/)).toBeInTheDocument();
    expect(screen.getByText(/25/)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
    expect(screen.getByText(/male/)).toBeInTheDocument();
  });
  test('should highlight card if its last added', () => {
    render(<UserCard user={mockCharacter} last={true} />);

    const article = screen.getByRole('article');
    expect(article.className).toMatch(/highlight/);
  });
});
