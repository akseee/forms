import { UserCard } from '../../components/UserCard/UserCard';

const user = {
  id: 'id',
  name: 'name',
  age: 42,
  email: 'email',
  gender: 'man',
  country: 'RU',
  avatar: 'htttps://avatar',
  terms: true,
  isNew: true,
};

export const UserList = () => {
  return (
    <div>
      <h2>Created characters</h2>
      <ul>
        <UserCard user={user} />
      </ul>
    </div>
  );
};
