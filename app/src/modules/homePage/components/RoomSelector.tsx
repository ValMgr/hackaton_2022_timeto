import { MainContainer, MainTitle, ContainerInputs, InputElement, ContainerContent } from './styledComponents';

function RoomSelector({ onNameChange, onRoomIdChange, onJoinRoom, roomIdValue, nameValue }) {
  return (
    <MainContainer>
			<ContainerContent>
				<MainTitle>Time to [play]</MainTitle>
				<ContainerInputs>
					<InputElement type="text" name="name" placeholder="Nom de la session"  value={nameValue} onChange={onNameChange} />
					<InputElement type="text" name="room_id" placeholder="Code de la session" value={roomIdValue} onChange={onRoomIdChange} />
					<button onClick={onJoinRoom}>Rejoindre</button>
				</ContainerInputs>
				{/* <button>Créer un session</button> */}
				</ContainerContent>
		</MainContainer>
  );
}

export default RoomSelector;
