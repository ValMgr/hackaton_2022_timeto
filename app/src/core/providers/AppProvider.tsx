import { useContext, createContext, useState, useMemo, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

import type { UserType } from '@/modules/homePage/components/UserList';

export type AppContextType = {
  room: string;
  name: string;
  users: UserType[];
  setName: (name: string) => void;
  setRoom: (room: string) => void;
  socket: Socket;
  sessionId: string | null;
};

const AppContext = createContext<AppContextType>({
  room: '',
  name: '',
  users: [],
  setName: () => {},
  setRoom: () => {},
  socket: io(),
  sessionId: null,
});

interface IProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => {
  const socket = useMemo(() => io('http://localhost:3000'), []);
  const [room, setRoom] = useState<string>('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    socket.on('connect', () => {
      setSessionId(socket.id);
    });

    socket.on('disconnect', () => {
      setSessionId(null);
    });

    socket.on('playerList', (users: UserType[]) => {
      setUsers(users);
    });

    // @TODO: Remove this
    socket.emit('createRoom', 'R444', `Player ${Math.floor(Math.random() * 100)}`);

    return () => {
      socket.off('connection');
      socket.off('disconnect');
    };
  }, []);

  useEffect(() => {
    if (room && name) {
      socket.emit('createRoom', room, name);
    }
  }, [room]);

  const value = useMemo(() => {
    return {
      room,
      setRoom,
      socket,
      sessionId,
      name,
      setName,
      users,
    };
  }, [room, setRoom, socket, sessionId, name, setName, users]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
