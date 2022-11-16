import { useEffect, useState, useMemo } from 'react';
import { useAppContext } from '@/internal/providers/AppProvider';

export type UserType = {
  id: string;
  username: string;
};

function UserList() {
  const { socket } = useAppContext();
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    socket.on('playerList', (users: UserType[]) => {
      setUsers(users);
    });

    return () => {
      socket.off('playerList');
    };
  }, []);

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
