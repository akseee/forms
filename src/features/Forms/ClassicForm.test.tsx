import { vi } from 'vitest';
import { ClassicForm } from './ClassicForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ClassicForm', () => {
  test('should render with all required fields', () => {
    const handleSubmitData = vi.fn();
    render(<ClassicForm handleSubmitData={handleSubmitData} />);
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm password:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Profile picture:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/I accept/i)).toBeInTheDocument();
  });

  test('should show validation errors when submitting empty form', async () => {
    const handleSubmitData = vi.fn();
    render(<ClassicForm handleSubmitData={handleSubmitData} />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /send/i }));

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Gender is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Country is required/i)).toBeInTheDocument();
  });
});
