export const UserCard = (user) => {
  return (
    <article
      className={`card ${user.isNew ? 'is-new' : ''}`}
      aria-labelledby={`${user.id}-title`}
      aria-describedby={`${user.id}-desc`}
    >
      <header>
        <figure className="avatar" aria-hidden="true">
          <img
            src={user.avatar}
            alt={`Profile picture of ${user.name}`}
            width={64}
            height={64}
          />
          <figcaption className="sr-only">Profile picture</figcaption>
        </figure>

        <div className="headings">
          <h2 id={`${user.id}-title`} className="name">
            {user.name}
          </h2>
          <p id={`${user.id}-desc`} className="meta">
            {user.isNew && (
              <span className="badge" aria-label="Новая запись">
                New
              </span>
            )}
            {user.country}
          </p>
        </div>
      </header>

      <section className="content" aria-label="Основная информация">
        <dl className="dl">
          <dt className="dt">Age</dt>
          <dd className="dd">{user.age}</dd>

          <dt className="dt">Email</dt>
          <dd className="dd">
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </dd>

          <dt className="dt">Gender</dt>
          <dd className="dd">{user.gender}</dd>

          <dt className="dt">Country</dt>
          <dd className="dd">{user.country}</dd>
        </dl>
      </section>
    </article>
  );
};
