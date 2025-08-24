import { test, vi } from 'vitest';
import type { TUserData } from '../../utils/types';
import type { RootState } from '../../app/store/store';
import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from '../../app/store/characterSlice';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { UserList } from './UserList';

vi.mock('../../components/UserCard/UserCard', () => ({
  UserCard: ({ user, last }: { user: TUserData; last: boolean }) => {
    return (
      <div data-testid="user-card">
        {user.name} - {last ? 'last' : 'not-last'}
      </div>
    );
  },
}));

test('UserList renders UserCards with correct lastAddedId', () => {
  const preloadedState: RootState = {
    characters: {
      data: [
        {
          id: '1',
          name: 'Test1',
          age: 42,
          email: 'test1@test.com',
          password: 'Testtttt12!@',
          gender: 'male',
          terms: true,
          country: 'USA',
          picture: '',
        },
        {
          id: '2',
          name: 'Test2',
          age: 42,
          email: 'test2@test.com',
          password: 'Testtttt12!@',
          gender: 'female',
          terms: true,
          country: 'USA',
          picture: '',
        },
      ],
      lastAddedId: '2',
    },
  };

  const store = configureStore({
    reducer: { characters: charactersReducer },
    preloadedState,
  });

  render(
    <Provider store={store}>
      <UserList />
    </Provider>
  );

  const cards = screen.getAllByTestId('user-card');
  expect(cards).toHaveLength(2);
  expect(cards[0]).toHaveTextContent('Test1 - not-last');
  expect(cards[1]).toHaveTextContent('Test2 - last');
});
