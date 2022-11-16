import styled from 'styled-components';

export const ContainerLevel = styled.div`
	width: 26px;
	height: 100%;
	background-color: #FEFCF2;
	margin: 0.5rem auto;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
`

export const Level = styled.div`
	position: absolute;
	bottom: 0;
	width: 26px;
	top: ${props => (1 - props.top / 100) * 100 + '%'};
	background-color: ${props => props.gaugeColor};
	transition: 200ms linear;
`

export const GaugeLabel = styled.div`
	font-size: 14px;
	font-weight: 600;
	color: #074D43;
	transform: rotate(340deg);
	margin-top: 0.5rem;
`

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
`