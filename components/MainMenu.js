import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BgImage from "./BgImage";
import Link from "next/link";
// import { addMember } from "../lib/ghost";

function MainMenu({ isMenuVisible }) {
	const mainMenuLinks = [
		{ display: "Home", link: "/" },
		{ display: "On Self", link: "/self" },
		{ display: "Tenets", link: "/tenets" },
		{ display: "Statecraft", link: "/statecraft" },
		{ display: "On Justice and Society", link: "/society" },
		{ display: "On Military and Strategy", link: "/security" },
	];

	const menuBGRef = useRef();
	const menuRef = useRef();

	let tl = gsap.timeline({
		delay: 0,
		paused: false,
		smoothChildTiming: true,
	});

	useEffect(() => {
		if (isMenuVisible === true) {
			// gsap.to(menuRef.current, { opacity: 1, visibility: "visible" });

			tl.to(menuRef.current, {
				opacity: 1,
				visibility: "visible",
				duration: 0.3,
			});
		} else {
			// gsap.to(menuRef.current, { opacity: 0 });

			tl.to(menuRef.current, { opacity: 0, duration: 0.3 }).to(
				menuRef.current,
				{
					visibility: "hidden",
				}
			);
		}
	}, [isMenuVisible]);



	return (
		<div
			ref={menuRef}
			className="absolute top-0 left-0 w-screen h-screen z-5 invisible opacity-0 md:-left-6"
		>
			<div className="w-full h-full relative">
				<BgImage menuBGRef={menuBGRef} />

				<div className="h-full w-full bg-black bg-opacity-90 flex flex-col items-center justify-center absolute z-5">
				
					{/* <ul className="flex flex-col items-center justify-center ">
						{mainMenuLinks.map((eachLink, i) => (
							<li
								className="text-white py-4 opacity-70 font-serif font-light text-[20px] hover:opacity-100 cursor-pointer w-full p-5 flex items-center justify-center transition-opacity duration-200"
								key={i}
							>
								<Link href={`${eachLink.link}`}>
									<a>{eachLink.display}</a>
								</Link>
							</li>
						))}
					</ul> */}
				</div>
			</div>
		</div>
	);
}

export default MainMenu;
