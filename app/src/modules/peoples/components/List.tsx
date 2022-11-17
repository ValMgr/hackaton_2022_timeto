import {MainContainer, PeopleContainer, PeopleCircle, PeopleName, OtherPeople} from "./styledComponents";

function List() {

  // str.substring(0, 1)

  return(
    <MainContainer>
      <PeopleContainer>
        <PeopleCircle>M</PeopleCircle>
        <PeopleName>Mickael</PeopleName>
      </PeopleContainer>
      <PeopleContainer>
        <PeopleCircle>L</PeopleCircle>
        <PeopleName>Lara</PeopleName>
      </PeopleContainer>
      <PeopleContainer>
        <PeopleCircle>V</PeopleCircle>
        <PeopleName>Vincent</PeopleName>
      </PeopleContainer>
      <PeopleContainer>
        <PeopleCircle>J</PeopleCircle>
        <PeopleName>Jeanne</PeopleName>
      </PeopleContainer>
      <PeopleContainer>
        <PeopleCircle>A</PeopleCircle>
        <PeopleName>Ainhoa</PeopleName>
      </PeopleContainer>
      <OtherPeople>+ 14 participants</OtherPeople>
    </MainContainer>
  )
}

export default List;