import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";
import SidebarButton from "./SidebarButton";

function Sidebar({ pages }) {
	console.log(pages);
	const slug = pages.slug;

	return (
		<div className="w-[250px] h-[20px] mt-[270px] mr-[100px] ml-[50px] flex flex-col items-center justify-center ">
			{/* <Link href=""> */}
			{pages.map((eachPage, i) => (
				<SidebarButton key={i} eachPage={eachPage} />
			))}
		</div>
	);
}

export default Sidebar;
