import React from "react";
import Link from "next/dist/client/link";
import { useState, useEffect } from "react";

function SidebarButton({ eachPage }) {
	const { title, slug } = eachPage;
	let pageslug = slug;

	console.log(eachPage);

	return (
		<a href="">
			<Link href="/[pageslug]" as={`/${pageslug}`}>
				<p className="text-white font-serif opacity-40 font-light text-[18px] h-[40px] w-[160px] hover:bg-[#ffffff13] hover:text-[#e2e2e2] hover:opacity-100 duration-200 flex items-center justify-left pl-6 rounded-[20px]">
					{title}
					{/* Hello */}
				</p>
			</Link>
		</a>
	);
}

export default SidebarButton;
