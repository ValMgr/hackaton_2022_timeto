import { useMemo, useEffect, useState } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';

import RoomSelector from '@/modules/homePage/components/RoomSelector';
import Questions from '@/modules/questions/Questions';
import Gauges from '@/modules/gauges/Gauges';
import UsersList from '@/modules/usersList/UsersList';
import { MainContainer } from '@/modules/homePage/styledComponents';
import Results from '../results/components/Results';

export function HomePage() {
  const { room, name, socket } = useAppContext();
  const [isEndGame, setIsEndGame] = useState<boolean>(false);

  useEffect(() => {
    socket.on('endGame', () => {
      setIsEndGame(true);
    });
  }, []);

  const isRoomSelected = useMemo(() => room && name, [room, name]);

  return (
    <>
      {!isEndGame ? (
        isRoomSelected ? (
          <MainContainer>
            <Gauges />
            <Questions />
            <UsersList />
          </MainContainer>
        ) : (
          <RoomSelector />
        )
      ) : (
        <Results />
      )}
    </>
  );
}

export default HomePage;
