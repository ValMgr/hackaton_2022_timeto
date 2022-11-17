import styled from 'styled-components';
import img from '../../../assets/svg-background.svg';

export const ContainerAll = styled.div`
  background-color: #F3EFDC;
  border : 1px solid #074D43;
  padding: 55px 55px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 10px;
  position: relative;
  width: 90%
`;

export const Container =styled.div`
	width: 60%;
	margin: 0 15px;
	height: auto;
	padding-right: 80px;
	line-height: 1.6;
`

export const CardContainer = styled.div`
	background-color: #D6E787;
	width: 50%;
	height: auto;
	padding: 10px 35px;
	border-radius: 10px;
`


export const MainContainer = styled.div`
  background-color: #074D43;
  padding: 65px 85px;
  display: flex;
  flex-direction: column;
  width: auto;
	max-width: 100%;
	background-image: url(${img});
	background-repeat-x: no-repeat;
	height: auto
`;

export const TitleContainer = styled.div`
	width: auto;
	height: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 45px;
`;

export const TitlePage = styled.h1`
	font-size: 50px;
	color: #F3EFDC;
	font-family: EuphemiaBold;
	margin-right: 15px;
	`
	
	export const TitleSpan = styled.span`
	font-size: 50px;
	font-family: EuphemiaBold;
	color: #D6E787;
	display: block;
`

export const TextTitle = styled.h2`
 font-size: 24px;
 font-family: EuphemiaBold;
 color: ${({ color = null }) => (color ? "#DF6734" : "#9184C5")};
 margin-bottom: 30px;
`

export const TitleGreen = styled.h2`
 font-size: 24px;
 font-family: EuphemiaBold;
 color: #074D43;
 margin-bottom: 30px;
`

export const Text = styled.div`
 font-size: 16px;
 font-family: Euphemia;
 color: #074D43;
 margin-bottom:30px;
`
