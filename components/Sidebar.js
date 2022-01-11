import React from "react";
import styled from "styled-components";
import Link from "next/dist/client/link";
import SidebarButton from "./SidebarButton";


function Sidebar({ pages }) {
	console.log(pages);
	const slug = pages.slug;

	return (
		<div className="w-full h-auto mt-[130px] ml-6 gap-2 flex flex-col items-start justify-start md:w-[250px] md:h-[20px] md:mt-[290px] md:mr-[100px] md:ml-[50px] md:items-center md:justify-center">
			{/* <Link href=""> */}
			{pages.map((eachPage, i) => (
				<SidebarButton key={i} eachPage={eachPage} />
			))}
		</div>
	);
}

export default Sidebar;
