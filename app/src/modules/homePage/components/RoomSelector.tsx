import { useState, useCallback, ChangeEvent } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';

import { MainContainer, MainTitle, ContainerInputs, InputElement, ContainerContent } from './styledComponents';

function RoomSelector() {
  const [roomId, setRoomId] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const { setRoom, setName } = useAppContext();

  const handleJoinRoom = useCallback(() => {
    if (roomId && username) {
      setName(username);
      setRoom(roomId);
    }
  }, [setRoom, roomId, username, setName]);

  const handleChangeRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  return (
    <MainContainer>
      <ContainerContent>
        <MainTitle>Time to [play]</MainTitle>
        <ContainerInputs>
          <InputElement type='text' name='name' placeholder="Nom d'utilisateur" value={username} onChange={handleChangeName} />
          <InputElement
            type='text'
            name='room_id'
            placeholder='N° de la salle'
            value={roomId}
            onChange={handleChangeRoomId}
          />
          <button onClick={handleJoinRoom}>Rejoindre</button>
        </ContainerInputs>
      </ContainerContent>
    </MainContainer>
  );
}

export default RoomSelector;
