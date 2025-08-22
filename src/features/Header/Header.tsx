import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Character creator studio!</h1>
      <p className={styles.text}>
        Create your character in two ways: with a regular form or with the
        super-convenient React Hook Form
      </p>
    </header>
  );
};
