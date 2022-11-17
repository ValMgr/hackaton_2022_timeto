import { useCallback, useState, ChangeEvent } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';
import GameProvider from '@/core/providers/GameProvider';
import RoomSelector from '@/modules/homePage/components/RoomSelector';
import Questions from '@/modules/questions/Questions';
import Gauges from '@/modules/gauges/Gauges';
import UsersList from '@/modules/usersList/UsersList';
import { MainContainer } from '@/modules/homePage/styledComponents';

export function HomePage() {
	const { room, name } = useAppContext();

  return (
    <>
      {name && room ? (
        <GameProvider>
          <MainContainer>
            <Gauges />
            <Questions />
            <UsersList />
          </MainContainer>
        </GameProvider>
      ) : (
        <RoomSelector />
      )}
    </>
  );
}

export default HomePage;
