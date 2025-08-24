import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
  let modalRoot: HTMLElement;

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.append(modalRoot);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should render on open', () => {
    render(
      <Modal isOpen={true} handleClose={() => {}}>
        <div>I am modal and i am open?</div>
      </Modal>
    );
    expect(screen.queryByText(/I am modal/)).toBeInTheDocument();
    expect(modalRoot.innerHTML).toContain('I am modal');
  });

  test('should not render', () => {
    render(
      <Modal isOpen={false} handleClose={() => {}}>
        <div>I am modal and i am open?</div>
      </Modal>
    );

    expect(screen.queryByText(/I am modal/)).toBeNull();
  });

  describe('close functionality', () => {
    test('should close on overlay click', async () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} handleClose={handleClose}>
          <div>I am modal and i am open?</div>
        </Modal>
      );
      const overlay = screen.getByTestId('overlay');
      const user = userEvent.setup();

      await user.click(overlay);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('should close on button click', async () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} handleClose={handleClose}>
          <div>I am modal and i am open?</div>
        </Modal>
      );
      const button = screen.getByRole('button');
      const user = userEvent.setup();

      await user.click(button);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test('should close on escape click', async () => {
      const handleClose = vi.fn();
      render(
        <Modal isOpen={true} handleClose={handleClose}>
          <div>I am modal and i am open?</div>
        </Modal>
      );

      const user = userEvent.setup();

      await user.keyboard(`{Escape}`);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
