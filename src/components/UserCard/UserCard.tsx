import { useEffect, useState } from 'react';
import type { TUserData } from '../../utils/types';
import styles from './UserCard.module.css';
import clsx from 'clsx';

export const UserCard = ({
  user,
  last,
}: {
  user: TUserData;
  last: boolean;
}) => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (last) {
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [last]);

  return (
    <article
      aria-labelledby={`${user.id}-title`}
      className={clsx(styles.card, highlight && styles.highlight)}
    >
      <div className={styles.image}></div>
      <div>
        <header className={styles.header}>
          <div className={styles.info}>
            <h2 className={styles.name}>
              <span className={styles.span}> {user.name},</span>
              <span className={styles.span}>{user.country}</span>
            </h2>
            <p className={styles.age}>{user.age} years old</p>
          </div>
        </header>

        <section className={styles.details}>
          <div className={styles.item}>
            <span className={styles.label}></span>
            <a href={`mailto:${user.email}`} className={styles.value}>
              {user.email}
            </a>
          </div>
          <div className={styles.item}>
            <span className={styles.label}></span>
            <span className={styles.value}>{user.gender}</span>
          </div>
        </section>
      </div>
    </article>
  );
};
