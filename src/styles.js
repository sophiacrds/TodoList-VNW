import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
	:root{
		--appColor: #b9c5c6ff;
		--cardColor: #dce4e4;
		--bgColor: #a86335;
		--secColor: ;
		--highlightColor: #b7aa76;
		--titleFontS: 2.5rem;
		--entryH: 2.5rem;
		--entryFontS: 1.3rem;
		--tasklistFontS: 1.5rem;
		--check: 1.25rem;
		--icons: 1.4rem;
		--appSize: 550px;
		--shadow: 1px 3px 7px 0 #00000073;
		--titleFont: 'Acme', sans-serif;
		--basicFont: 'Sawarabi Gothic', sans-serif;
	}
   body{
        width: 100%;
        height: 100%;
        background-color: var(--bgColor);
    }
	@media (max-width: 600px){
		:root{
			--entryFontS: 1.2rem;
			--tasklistFontS: 1.2rem;
		}
	}
	@media (max-width: 480px){
		body{
			background-color: var(--appColor);
		}
	}
	@media (max-width: 340px){
		:root{
			--titleFontS: 2rem;
			--entryH: 2.3rem;
			--entryFontS: 1.1rem;
			--tasklistFontS: 1.1rem;
			--check: 0.9rem;
			--icons: 1.2rem;
		}
	}
`;

export const Main = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: var(--basicFont);
`;

export const MainContainer = styled.section`
	width: 80%;
	max-width: var(--appSize);
	height: fit-content;
	padding: 20px;
	margin: 10% auto;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--appColor);
	box-shadow: var(--shadow);

	h1 {
		margin: 10px;
		font-size: var(--titleFontS);
		font-family: var(--titleFont) !important;
		text-transform: uppercase;
		text-align: center;
	}

	@media (max-width: 480px) {
		width: 100%;
		margin: 0;
		height: 100%;
		box-shadow: none;
	}
`;

export const EntryBox = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0 20px;

	input,
	button {
		height: var(--entryH);
		border-radius: 2px;
	}

	input {
		width: 75%;
		border: none;
		box-shadow: var(--shadow);
		padding: 0 10px;
		font-size: var(--entryFontS);
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;

export const Add = styled.button`
	width: 20%;
	text-align: center;
	transition: all 0.5s ease-in-out;
	color: white;
	border: none;
	box-shadow: var(--shadow);
	background-color: transparent;
	background-image: linear-gradient(to right, #7f9596 0%, #6c97b1 100%);
	:hover {
		background-color: #0000004d;
		background-blend-mode: overlay;
		border-radius: 30px;
	}
	:active {
		background-color: #ffffff7b;
		color: #000000;
	}
`;

export const Cards = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	width: 90%;
	height: fit-content;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px 0px 20px;
	margin: 10px 0;
	font-size: var(--tasklistFontS);
	background: var(--cardColor);
	clip-path: polygon(0% 0%, 100% 0%, 95% 50%, 100% 100%, 0% 100%);

	input {
		display: none;
	}
	label {
		cursor: pointer;
		width: 75%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.8rem;
	}
	span {
		width: var(--check);
		height: var(--check);
		background: transparent;
		border-radius: 20px;
		border: 2px solid black;
	}
	input[type="checkbox"]:checked + label span {
		border: none;
	}
	input[type="checkbox"]:checked + label span::after {
		position: absolute;
		bottom: 10px;
		content: "✓";
		color: var(--highlightColor);
	}
	input[type="checkbox"]:checked + label p {
		text-decoration: line-through;
		color: var(--highlightColor);
	}
	p {
		padding: 10px 0;
	}
	div {
		width: fit-content;
		display: flex;
		gap: 5px;
	}
	button {
		width: 30px;
		border: none;
		background: transparent;
		cursor: pointer;
	}
	img {
		width: var(--icons);
		transition: all 0.5s cubic-bezier(0.3, 0.04, 0.44, 1);
	}
	img:hover {
		transform: rotate(360deg);
	}

	@media (max-width: 600px) {
		padding: 0 20px 0px 5px;
		gap: 1rem;

		img {
			transition: none;
		}
	}
	@media (max-width: 480px) {
		width: 100%;
	}
	@media (max-width: 340px) {
		gap: 0;
	}
`;
