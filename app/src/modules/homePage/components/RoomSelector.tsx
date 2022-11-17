import { useState, useCallback, ChangeEvent } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';
import {
  MainContainer,
  MainTitle,
  ContainerInputs,
  InputElement,
  ContainerContent,
} from '@/modules/homePage/components/styledComponents';

function RoomSelector() {
  const { setRoom, setName } = useAppContext();
  const [roomId, setRoomId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const handleJoinRoom = useCallback(() => {
    setName(userName);
    setRoom(roomId);
  }, [setRoom, roomId]);

  const handleChangeRoom = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <MainContainer>
      <ContainerContent>
        <MainTitle>Time to [play]</MainTitle>
        <ContainerInputs>
          <InputElement type='text' name='name' placeholder='Nom de joueur' value={userName} onChange={handleChangeName} />
          <InputElement type='text' name='room' placeholder='Nom de la session' value={roomId} onChange={handleChangeRoom} />
          <button onClick={handleJoinRoom}>Rejoindre</button>
        </ContainerInputs>
        {/* <button>Créer un session</button> */}
      </ContainerContent>
    </MainContainer>
  );
}

export default RoomSelector;
