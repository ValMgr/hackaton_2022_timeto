import { useState, useCallback, ChangeEvent } from 'react';

import { useAppContext } from '@/core/providers/AppProvider';
import { MainContainer, MainTitle, ContainerInputs, InputElement, ContainerContent } from '@/modules/homePage/components/styledComponents';

function RoomSelector({ onNameChange, onRoomChange, onJoinRoom, roomValue, nameValue }) {
  return (
    <MainContainer>
			<ContainerContent>
				<MainTitle>Time to [play]</MainTitle>
				<ContainerInputs>
					<InputElement type="text" name="name" placeholder="Nom de joueur"  value={nameValue} onChange={onNameChange} />
					<InputElement type="text" name="room" placeholder="Nom de la session" value={roomValue} onChange={onRoomChange} />
					<button onClick={onJoinRoom}>Rejoindre</button>
				</ContainerInputs>
				{/* <button>Créer un session</button> */}
				</ContainerContent>
		</MainContainer>
  );
}

export default RoomSelector;
