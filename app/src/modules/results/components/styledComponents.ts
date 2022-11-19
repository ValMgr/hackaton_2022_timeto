import styled, { css } from 'styled-components';

interface ITitleProps {
  category: string;
  actualCategory: string;
}

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-ites: center;
  margin-left: 12%;
  margin-right: 12%;
`;

export const TitleResults = styled.div`
  font-size: 32px;
  font-family: EuphemiaBold;
  color: #074D43;
  text-align: center;
  margin-bottom: 40px;
  `;
  export const SubTitleResults = styled.div`
  font-size: 20px;
  font-family: EuphemiaBold;
  color: #074D43;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 40px;
`;
  
  
export const Range = styled.div`
  width: 100%;
  height: 20px;
  background-color: #F3EFDC;
  border-radius: 50px;
  position: relative;
  margin-top: 25px;
`;
  
export const RangeProgress = styled.div`
  width: 28%;
  height: 20px;
  background-color: #DF6734;
  border-radius: 50px;
  position: absolute;
  &::before {
    width: 40px;
    height: 40px;
    background-color: #C85828;
    border-radius: 50%;
    position: absolute;
    right: 0;
    content: '';
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
`;
export const ScaleResults = styled.div`
  display: flex;
  flex-directions: row;
  align-items: center;
  justify-content: space-between;
  color: #074D43;
  font-size: 20px;
  font-family: EuphemiaBold;
`;

export const ResultsCategories = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-top-left-radius: 10px;
`;

export const ResultCategory = styled.div<ITitleProps>`
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3EFDC;
  color: #D1CCB5;
  font-size: 20px;
  font-family: EuphemiaBold;
  width: 33%;
  @media screen and (max-width: 960px) {
		font-size: 16px;
    padding-left: 12px;
    padding-right: 12px;
	}

  ${prop => {
    if(prop.category == prop.actualCategory) {
      return css`
        color: #FEFCF2;
        background-color: #C1B5F1;
      `}

    return null;
  }}
  `;
  
  export const ResultContent = styled.div`
  background-color: #FFF;
  padding: 35px 60px;
  overflow-y: auto;
  color: #074D43;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 260px;
  @media screen and (max-width: 960px) {
		padding: 35px 10px;
	}
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .question {
      color: #074D43;
      font-size: 20px;
      gap: 15px;
      .number {
        font-family: EuphemiaBold;
        @media screen and (max-width: 960px) {
          font-size: 14px;
          max-width: 135px;
        }
      }
      .text {
        @media screen and (max-width: 960px) {
          max-width: 115px;
        }
      }
      @media screen and (max-width: 960px) {
        font-size: 12px;
      }
    }
    .point {
      font-family: EuphemiaBold;
      color: #074D43;
      @media screen and (max-width: 960px) {
        font-size: 14px;
      }
    }
  }
`;
