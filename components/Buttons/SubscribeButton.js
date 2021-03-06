import React from "react";
import styled from "styled-components";

function CatalogueButton({ isMenuVisible, setIsMenuVisible }) {
	const toggleMenu = () => {
		// console.log("Toggle");
		setIsMenuVisible(!isMenuVisible);
	};

	return (
		<ButtonWrapper onClick={toggleMenu} variant="outlined">
			subscribe
		</ButtonWrapper>
	);
}

export default CatalogueButton;

const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	&&& {
		border: 1px solid black;
		border-radius: 20px !important;
		font-family: "Roboto" sans-serif !important;
		text-transform: capitalize !important;
		color: black !important;
		padding-right: 15px !important;
		padding-left: 15px !important;
		font-size: 13px !important;
		font-weight: 300 !important;

		height: 32px;

		background-color: #fcfcfc11 !important;
		transition: 0.3s !important;

		&:hover {
			cursor: pointer;
			background-color: #fcfcfc24 !important;
			border: 1px solid #343434 !important;
		}
	}
`;
