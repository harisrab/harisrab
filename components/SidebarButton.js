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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 mr-[10px] "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 7l5 5m0 0l-5 5m5-5H6"
					/>
				</svg>
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
		padding-right: 5px !important;
		padding-left: 0px !important;
		background-color: #fcfcfc11 !important;
		box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
		
		height: 40px;
		width: 135px;

		margin-left: 14px;

		/* background-color: #fcfcfc11 !important; */
		svg {
			opacity: 0.7
		}

		transition: 0.3s !important;
		
		&:hover {
			background-color: #fcfcfc24 !important;
			border: none;
			
			svg {
				opacity: 1;
				transition: 0.3s !important;
			}
			
		}
	}
`;
