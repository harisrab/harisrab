import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

function CatalogueButton() {
	return <ButtonWrapper variant="outlined">Catalogue</ButtonWrapper>;
}

export default CatalogueButton;

const ButtonWrapper = styled(Button)`
	&&&{
		border: 1px solid #fcfcfcd3;
		border-radius: 20px !important;
		font-family: serif !important;
		text-transform: capitalize !important;
		color: #fcfcfcd3 !important;
		padding-right: 20px !important;
		padding-left: 20px !important;

		background-color: #fcfcfc11 !important;
		transition: 0.3s !important;

		&:hover {
			background-color: #fcfcfc24 !important;
			border: 1px solid #fcfcfcd3 !important;
		}
	}
`;
