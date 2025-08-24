import { vi } from 'vitest';
import { QuickForm } from './QuickForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('QuickForm', () => {
  const handleSubmitData = vi.fn();
  test('should render with all required fields', () => {
    render(<QuickForm handleSubmitData={handleSubmitData} />);
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm password:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Profile picture:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/I accept/i)).toBeInTheDocument();
  });

  test('should have submit button disabled', () => {
    render(<QuickForm handleSubmitData={handleSubmitData} />);

    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeDisabled();
  });

  describe('errors', () => {
    const user = userEvent.setup();

    test('shows error for name', async () => {
      render(<QuickForm handleSubmitData={handleSubmitData} />);

      const input = screen.getByLabelText(/Name:/i);
      await user.type(input, 'te');

      expect(
        await screen.findByText(/Name must start with an uppercase letter/i)
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send/i })).toBeDisabled();
    });

    test('shows error for invalid age', async () => {
      render(<QuickForm handleSubmitData={handleSubmitData} />);

      const input = screen.getByLabelText(/Age:/i);
      await user.type(input, '1333');

      expect(await screen.findByText(/Age must be real/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send/i })).toBeDisabled();
    });

    test('shows error for invalid email', async () => {
      render(<QuickForm handleSubmitData={handleSubmitData} />);

      const input = screen.getByLabelText(/Email:/i);
      await user.type(input, 'test-email');

      expect(
        await screen.findByText(/Invalid email address/i)
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Send/i })).toBeDisabled();
    });
  });
});
