import { useMemo } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';
import GameProvider from '@/core/providers/GameProvider';
import RoomSelector from '@/modules/homepage/components/RoomSelector';
import Questions from '@/modules/questions/Questions';
import Gauges from '@/modules/gauges/Gauges';
import { MainContainer } from './styledComponents';

export function HomePage() {
  const { room, name } = useAppContext();

  const isRoomCreated = useMemo(() => name && room, [name, room]);

  return (
    <>
      {isRoomCreated ? (
        <GameProvider>
          <MainContainer>
            <Gauges />
            <Questions />
          </MainContainer>
        </GameProvider>
      ) : (
        <RoomSelector />
      )}
    </>
  );
}

export default HomePage;
