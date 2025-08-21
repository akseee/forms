import { type JSX } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { UserList } from '../features/UserList/UserList';
import { ControlsList } from '../features/ControlsList/ControlsList';
import { Header } from '../features/Header/Header';
import styles from './App.module.css';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <section className={styles.page}>
        <Header />
        <main className={styles.main}>
          <ControlsList />
          <UserList />
        </main>
      </section>
    </Provider>
  );
};

export default App;
