import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

function CatalogueButton() {
	return <ButtonWrapper variant="outlined">Catalogue</ButtonWrapper>;
}

export default CatalogueButton;

const ButtonWrapper = styled(Button)`
	border: 1px solid #fcfcfcd3;
	border-radius: 20px;
	font-family: serif;
	text-transform: capitalize;
	color: #fcfcfcd3;
	padding-right: 20px;
	padding-left: 20px;

	background-color: #fcfcfc11;
	transition: 0.3s;

	&:hover {
		background-color: #fcfcfc24;
		border: 1px solid #fcfcfcd3;
	}
`;
