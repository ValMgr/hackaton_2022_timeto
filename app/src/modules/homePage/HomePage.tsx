import { useMemo } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';
import RoomSelector from './components/RoomSelector';
import Questions from '../questions/Questions';
import Gauges from '../gauges/Gauges';
import { MainContainer } from './styledComponents';

export function HomePage() {
  const { room, name } = useAppContext();

  const isRoomCreated = useMemo(() => name && room, [name, room]);

  return (
    <>
      {isRoomCreated ? (
        <MainContainer>
          <Gauges />
          <Questions />
        </MainContainer>
      ) : (
        <RoomSelector />
      )}
    </>
  );
}

export default HomePage;
