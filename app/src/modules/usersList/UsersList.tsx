import { MainContainer, PeopleContainer, PeopleCircle, PeopleName } from "@/modules/usersList/styledComponents";
import { useAppContext } from '@/core/providers/AppProvider';

export type UserType = {
  id: string;
  username: string;
}

function UsersList() {
  const { users } = useAppContext();

  const colors:string[] = ['#074D43', '#EA6446', '#DF6734', '#C1B5F1'];

  return(
    <MainContainer>
      {users.map(user => (
      <PeopleContainer key={user.id}>
        <PeopleCircle backgroundColor={colors[(Math.floor(Math.random() * colors.length))]}>{user.username[0].toUpperCase()}</PeopleCircle>
        <PeopleName>{user.username}</PeopleName>
      </PeopleContainer>
      ))}
    </MainContainer>
  )
} 
export default UsersList;