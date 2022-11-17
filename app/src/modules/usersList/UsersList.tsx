import { useState, useMemo } from 'react';

import { MainContainer, PeopleContainer, PeopleCircle, PeopleName, OtherPeople } from "@/modules/usersList/styledComponents";
import { useAppContext } from '@/core/providers/AppProvider';

function UsersList() {
  const { users } = useAppContext();
  const [hideUsers, setHideUsers] = useState(0);
  const [displayHideUsers, setDisplayHideUsers] = useState(false);

  const colors:string[] = ['#074D43', '#EA6446', '#DF6734', '#C1B5F1'];

  return(
    <MainContainer>
      {users.map(user => (
      <PeopleContainer key={user.id}>
        <PeopleCircle backgroundColor={colors[(Math.floor(Math.random() * colors.length))]}>{user.username[0].toUpperCase()}</PeopleCircle>
        <PeopleName>{user.username}</PeopleName>
      </PeopleContainer>
      ))}
      {displayHideUsers && <OtherPeople>+ {hideUsers} participants</OtherPeople>}
    </MainContainer>
  )
} 
export default UsersList;