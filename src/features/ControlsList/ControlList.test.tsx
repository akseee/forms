import { test, vi } from 'vitest';
import type { IQuickFormProps } from '../Forms/QuickForm';
import type { IClassicFormProps } from '../Forms/ClassicForm';
import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from '../../app/store/characterSlice';
import { Provider } from 'react-redux';
import { ControlsList } from './ControlsList';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { AppStore, RootState } from '../../app/store/store';

vi.mock('../Forms/QuickForm', () => ({
  QuickForm: ({ handleSubmitData }: IQuickFormProps) => {
    return (
      <button
        onClick={() =>
          handleSubmitData({
            id: '1',
            name: 'Alex',
            age: 25,
            email: 'test@test.com',
            password: '123Abc$%',
            gender: 'male',
            terms: true,
            country: 'USA',
            picture: '',
          })
        }
      >
        Submit Quick
      </button>
    );
  },
}));

vi.mock('../Forms/ClassicForm', () => ({
  ClassicForm: ({ handleSubmitData }: IClassicFormProps) => {
    return (
      <button
        onClick={() =>
          handleSubmitData({
            id: '1',
            name: 'Test',
            age: 42,
            email: 'test@test.com',
            password: 'Testttt123$%',
            gender: 'female',
            terms: true,
            country: 'USA',
            picture: '',
          })
        }
      >
        Submit Classic
      </button>
    );
  },
}));

describe('ControlList and store', () => {
  let modalRoot: HTMLElement;
  let store: AppStore;

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.append(modalRoot);

    store = configureStore({
      reducer: { characters: charactersReducer },
    }) as AppStore;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should update store state after QuickForm submission', async () => {
    render(
      <Provider store={store}>
        <ControlsList />
      </Provider>
    );
    const user = userEvent.setup();

    await user.click(screen.getByText(/Quick way/i));
    await user.click(screen.getByText('Submit Quick'));

    await waitFor(() => {
      const state: RootState = store.getState();

      expect(state.characters.data).toHaveLength(1);
      expect(state.characters.lastAddedId).toBe('1');
    });
  });

  test('should update store state after ClassicForm submission', async () => {
    render(
      <Provider store={store}>
        <ControlsList />
      </Provider>
    );
    const user = userEvent.setup();

    await user.click(screen.getByText(/Classic way/i));
    await user.click(screen.getByText('Submit Classic'));

    await waitFor(() => {
      const state: RootState = store.getState();

      expect(state.characters.data).toHaveLength(1);
      expect(state.characters.lastAddedId).toBe('1');
    });
  });
});
