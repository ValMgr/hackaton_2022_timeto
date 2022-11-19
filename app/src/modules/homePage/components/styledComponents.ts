import styled from 'styled-components'

export const MainContainer = styled.main`
	width: 100vw;
	height: 100vh;
	background-color: #074D43;
	padding: 2rem;
	box-sizing: border-box;
	text-align: center;
	position: relative;
`

export const ContainerContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export const MainTitle = styled.h1`
	font-family: 'Euphemia';
	font-weight: 500;
	color: #F3EFDC;
	font-size: 75px;
	margin: 0 auto 2rem auto;
	text-align: center;

	button {
		width: fit-content;
		max-width: 200px;
		margin: 0.5rem auto;
	}
`

export const ContainerInputs = styled.div`
	width: 100%;
	margin: 2rem auto;
	padding: 2rem 17%;
	box-sizing: border-box;
	justify-content: center;
	display: flex;
	flex-direction: column;
	background-color: #FEFCF2;
	border-radius: 10px;
	align-items: center;
	button {
		background-color: #C1B5F1;
		color: #000;
		border: 1px solid #000;
	}
`

export const InputElement = styled.input`
	width: 100%;
	height: 44px;
	font-family: 'Euphemia';
	background-color: #ffffff;
	border: 1px solid #074D43;
	border-radius: 10px;
	margin: 1rem 0;
	padding: 0.5rem;
	box-sizing: border-box;
	color: #074D43;
`