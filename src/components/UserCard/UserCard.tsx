import type { TUserData } from '../../utils/types';
import styles from './UserCard.module.css';

export const UserCard = (data: TUserData) => {
  return (
    <article aria-labelledby={`${data.id}-title`} className={styles.card}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h2 id={`${data.id}-title`} className={styles.name}>
            {data.name}
          </h2>
          <p className={styles.country}>{data.country}</p>
        </div>
      </header>

      <section className={styles.details}>
        <div className={styles.item}>
          <span className={styles.label}>Age:</span>
          <span className={styles.value}>{data.age}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Email:</span>
          <a href={`mailto:${data.email}`} className={styles.value}>
            {data.email}
          </a>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Gender:</span>
          <span className={styles.value}>{data.gender}</span>
        </div>
      </section>
    </article>
  );
};
