import { ChangeEvent, useCallback, useState } from 'react';
import { useAppContext } from '@/internal/providers/AppProvider';

function RoomSelector() {
  const [roomId, setRoomId] = useState<string>('');
  const { setRoom, name, setName } = useAppContext();

  const handleJoinRoom = useCallback(() => {
    setRoom(roomId);
  }, [setRoom, roomId]);

  const handleChangeRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div className={'d-flex justify-content-center w-100'}>
      <input type='text' name='name' placeholder='Username' onChange={handleChangeName} value={name} />
      <input type='text' name='room_id' placeholder='room ID' onChange={handleChangeRoomId} value={roomId} />
      <button onClick={handleJoinRoom} type='submit'>Join</button>
    </div>
  );
}

export default RoomSelector;
