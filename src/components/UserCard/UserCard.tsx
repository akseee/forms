import type { TUserData } from '../../utils/types';
import styles from './UserCard.module.css';

export const UserCard = (data: TUserData) => {
  return (
    <article aria-labelledby={`${data.id}-title`} className={styles.card}>
      <div className={styles.image}></div>
      <div>
        <header className={styles.header}>
          <div className={styles.info}>
            <h2 id={`${data.id}-title`} className={styles.name}>
              <span className={styles.span}> {data.name},</span>
              <span className={styles.span}>{data.country}</span>
            </h2>
            <p className={styles.age}>{data.age} years old</p>
          </div>
        </header>

        <section className={styles.details}>
          <div className={styles.item}>
            <span className={styles.label}></span>
            <a href={`mailto:${data.email}`} className={styles.value}>
              {data.email}
            </a>
          </div>
          <div className={styles.item}>
            <span className={styles.label}></span>
            <span className={styles.value}>{data.gender}</span>
          </div>
        </section>
      </div>
    </article>
  );
};
