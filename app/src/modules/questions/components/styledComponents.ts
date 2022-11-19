import styled from 'styled-components';

interface IButtonProps {
  selected: boolean;
}

export const ContainerButton = styled.button<IButtonProps>`
  background-color: #F3EFDC;
  color: #074D43;
  border : 1px solid #074D43;
  padding: 20px 24px;
  width: 100%;
  height: 145px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 16px;
  line-height: 22px;
  border-radius: 5px;
  background-color: ${prop => prop.selected ? '#D6E787' : '#F3EFDC'};
  &:disabled {
    background-color: transparent;
    color: #BCBCBC;
    border: 1px solid #BCBCBC
  }
`;
export const ContainerQuestion = styled.div`
  background-color: #FEFCF2;
  border : 1px solid #074D43;
  margin: 0 2rem;
  padding: 65px 85px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  position: relative;
  width: 50%;
  @media screen and (max-width: 960px) {
		margin: 0;
    width: auto;
    padding: 50px;
    padding-top: 75px;
	}
`;

export const ContainerButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 56px;
  width: 100%;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
	}
`;

export const QuestionTitle = styled.div`
  font-size: 20px;
  font-family: EuphemiaBold;
  color: #074D43;
  text-align: left;
`;

export const QuestionText = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: normal;
  color: #074D43;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 40px;
`;
export const TimerContainer = styled.div`
  font-size: 32px;
  font-family: EuphemiaBold;
  color: #DF6734;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  gap: 15px;
  position: absolute;
  top: 22px;
  right: 22px;
  span {
    width: 50px;
  }
  img {
    max-width: 50px;
  }
`;