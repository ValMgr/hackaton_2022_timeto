import styled from 'styled-components'

export const MainContainer = styled.div`
	background-color: #F3EFDC;
	border-radius: 10px;
	padding: 28px;
	max-height: 400px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
  min-width: 190px;
  gap: 15px;
`
export const PeopleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
  gap: 15px;
`
export const PeopleCircle = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  background-color: #D34F16;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: #F3EFDC;
  font-family: EuphemiaBold;
  font-size: 18px;
  `
  
export const PeopleName = styled.div`
	color: #074D43;
  font-size: 18px;
`  
export const OtherPeople = styled.div`
	color: #074D43;
  font-size: 18px;
  font-family: EuphemiaBold;
  text-decoration: underline;
  cursor: pointer;
`