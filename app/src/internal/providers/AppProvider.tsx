import { useContext, createContext, useState, useMemo, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

export type AppContextType = {
  room: string;
  name: string;
  setName: (name: string) => void;
  setRoom: (room: string) => void;
  socket: Socket;
  sessionId: string | null;
};

const AppContext = createContext<AppContextType>({
  room: '',
  name: '',
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

  useEffect(() => {
    socket.on('connect', () => {
      setSessionId(socket.id);
    });

    socket.on('disconnect', () => {
      setSessionId(null);
    });

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
    };
  }, [room, setRoom, socket, sessionId, name, setName]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
