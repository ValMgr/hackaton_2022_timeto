import { useCallback, useState, ChangeEvent } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';
import GameProvider from '@/core/providers/GameProvider';
import RoomSelector from '@/modules/homePage/components/RoomSelector';
import Questions from '@/modules/questions/Questions';
import Gauges from '@/modules/gauges/Gauges';
import UsersList from '@/modules/usersList/UsersList';
import { MainContainer } from '@/modules/homePage/styledComponents';

export function HomePage() {
  const { setRoom, room, setName, name } = useAppContext();
	const [roomId, setRoomId] = useState<string>('');

	const handleJoinRoom = useCallback(() => {
		setRoom(roomId);
  }, [setRoom, roomId]);
  
  const handleChangeRoom = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

	return (
		<>
		{name && room ? (
			<MainContainer>
				<GameProvider>
					<Gauges />
					<Questions />
					<UsersList />
				</GameProvider>
			</MainContainer>
			) : (
			<RoomSelector
				onNameChange={handleChangeName}
				onRoomChange={handleChangeRoom}
				onJoinRoom={handleJoinRoom}
				nameValue={name}
			/>
		)}
		</>
	)
}

export default HomePage;
