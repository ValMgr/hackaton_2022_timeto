import { useState, useCallback, ChangeEvent } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';
import RoomSelector from './components/RoomSelector';
import Questions from '../questions/Questions';
import Gauges from '../gauges/Gauges';
import { MainContainer } from './styledComponents';

export function HomePage() {
	const [roomId, setRoomId] = useState<string>('');
  const { setRoom, name, setName, room } = useAppContext();

	const handleJoinRoom = useCallback(() => {
		if(roomId && name) {
			setRoom(roomId);
		}
  }, [setRoom, roomId]);
  
  const handleChangeRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

	return (
		<>
		{name && room ? (
			<MainContainer>
				<Gauges />
				<Questions />
			</MainContainer>
			) : (
			<RoomSelector
				onNameChange={handleChangeName}
				onRoomIdChange={handleChangeRoomId}
				onJoinRoom={handleJoinRoom}
				roomIdValue={roomId}
				nameValue={name}
			/>
		)}
		</>
	)
}

export default HomePage;