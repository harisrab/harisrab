import React from "react";
import Link from "next/dist/client/link";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

function SidebarButton({ eachPage }) {
	const { title, slug } = eachPage;
	let pageslug = slug;

	console.log(eachPage);

	return (
		<Link href="/[pageslug]" as={`/${pageslug}`} passHref>
			<SidebarBtnWrapper variant="outlined">
				{/* <p className="text-white font-serif opacity-40 font-light text-[18px]  hover:bg-[#ffffff13] hover:text-[#e2e2e2] hover:opacity-100 duration-200 flex items-center justify-left pl-6 rounded-[20px]"> */}
				{title}
				{/* Hello */}
				{/* </p> */}
			</SidebarBtnWrapper>
		</Link>
	);
}

export default SidebarButton;

const SidebarBtnWrapper = styled(Button)`
	&&& {
		border: none;
		border-radius: 20px !important;
		font-family: serif !important;
		text-transform: capitalize !important;
		font-size: 16px;
		font-weight: 100 !important;
		color: #fcfcfcd3 !important;
		padding-right: 0px !important;
		padding-left: 0px !important;

		height: 40px;
		width: 130px;

		margin-left: 14px;

		/* background-color: #fcfcfc11 !important; */
		transition: 0.3s !important;

		&:hover {
			background-color: #fcfcfc24 !important;
			border: none;
		}
	}
`;
