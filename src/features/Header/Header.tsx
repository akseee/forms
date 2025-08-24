import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Character creator studio!{' '}
        <span className={styles.span}>
          by{' '}
          <a href="https://github.com/akseee/" target="_blank" rel="noreferrer">
            @akseee
          </a>
        </span>
      </h1>
      <p className={styles.text}>
        Create your character in two ways: with a regular form or with the
        super-convenient React Hook Form
      </p>
    </header>
  );
};
