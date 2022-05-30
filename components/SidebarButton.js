import React from "react";
import Link from "next/dist/client/link";
import { useState, useEffect } from "react";
import styled from "styled-components";

function SidebarButton({ eachPage }) {
	const { title, slug } = eachPage;
	let pageslug = slug;

	// console.log(eachPage);

	return (
		<Link href="/[pageslug]" as={`/${pageslug}`} passHref>
			<SidebarBtnWrapper>
			<div className="w-[15px] mr-6">

				<div className="h-[0.5px] mr-3 bg-black symbol"></div>
			</div>
				{/* <p className="text-white font-serif opacity-40 font-light text-[18px]  hover:bg-[#ffffff13] hover:text-[#e2e2e2] hover:opacity-100 duration-200 flex items-center justify-left pl-6 rounded-[20px]"> */}
				{title}
				{/* Hello */}
				{/* </p> */}
			</SidebarBtnWrapper>
		</Link>
	);
}

export default SidebarButton;

const SidebarBtnWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 10px;
	&:hover {
		cursor: pointer;
	}
	&&& {
		border: none;
		border-radius: 20px !important;
		font-family: serif !important;
		text-transform: capitalize !important;
		font-size: 16px;
		font-weight: 100 !important;
		color: #848484 !important;
		padding-right: 0px !important;
		padding-left: 10px !important;
		/* background-color: #fcfcfc11 !important; */
		/* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
			rgba(0, 0, 0, 0.23) 0px 6px 6px; */

		display: flex;
		justify-content: flex-start;

		height: 40px;
		width: 135px;

		margin-bottom: 8px;
		margin-left: 14px;

		/* background-color: #fcfcfc11 !important; */
		svg {
			opacity: 0.7;
		}

		
		.symbol {
			opacity: 0;
			width: 0px;
			transition: 0.3s !important;
		}
		transition: 0.3s !important;
		
		&:hover {
			.symbol {
				opacity: 0.4;
				width: 15px;
				transition: 0.3s !important;
			}
			/* background-color: #fcfcfc24 !important; */
			border: none;
			cursor: pointer;
			transition: 0.1s;
			color: black !important;
			
		}
	}
`;
