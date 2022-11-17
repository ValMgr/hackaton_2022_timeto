import { useMemo } from 'react';
import { useAppContext } from '@/internal/providers/AppProvider';

export type UserType = {
  id: string;
  username: string;
};

function UserList() {
  const { users } = useAppContext();

  const renderList = useMemo(() => {
    return users.map((user) => {
      return <li key={user.id}>{user.username}</li>;
    });
  }, [users]);

  return (
    <div>
      <h3>Users</h3>
      <ul>{renderList}</ul>
    </div>
  );
}

export default UserList;
