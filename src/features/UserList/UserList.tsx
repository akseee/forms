import {
  getAllCharacters,
  getLastAddedId,
} from '../../app/store/characterSlice';
import { useSelector } from '../../app/store/store';
import { UserCard } from '../../components/UserCard/UserCard';
import styles from './UserList.module.css';

export const UserList = () => {
  const data = useSelector(getAllCharacters);
  const lastAddedId = useSelector(getLastAddedId);

  return (
    <ul className={styles.list}>
      {data.map((user) => (
        <UserCard key={user.id} user={user} last={lastAddedId === user.id} />
      ))}
    </ul>
  );
};
