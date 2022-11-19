import styled from 'styled-components'

export const MainContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #FEFCF2;
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	box-sizing: border-box;
	@media screen and (max-width: 960px) {
		flex-direction: column;
	}
`;