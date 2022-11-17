import styled from 'styled-components'

export const MainContainer = styled.div`
	background-color: #F3EFDC;
	border-radius: 10px;
	padding: 42px;
	max-height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ContainerGauge = styled.div`
	display: flex;
	height: 300px;
	width: fit-content;
	border-radius: 5px;
	color: #074D43;
`

export const TitleContainerGauge = styled.h2`
	font-size: 18px;
	color: #074D43;
	font-family: EuphemiaBold;
	`
	
	export const EnvelopValue = styled.span`
	font-size: 24px;
	font-family: EuphemiaBold;
	color: #074D43;
	display: block;
	font-weight: 600;
	margin: 2rem 0 0.5rem 0;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 5px;
	img {
		max-width: 35px;
	}
`