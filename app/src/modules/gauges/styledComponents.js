import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
	background-color: #F3EFDC;
	border-radius: 5px;
	padding: 3rem;
`

export const ContainerGauge = styled.div`
	display: flex;
	height: 400px;
	width: fit-content;
	border-radius: 5px;
	color: #074D43;
`

export const TitleContainerGauge = styled.h2`
	font-size: 18px;
	color: #074D43;
`

export const EnvelopValue = styled.span`
	font-size: 24px;
	color: #074D43;
	display: block;
	font-weight: 600;
	margin: 2rem 0 0.5rem 0;
`