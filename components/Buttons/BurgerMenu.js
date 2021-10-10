import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function BurgerMenu() {
	const tl = gsap.timeline();
	const parentRef = useRef();
	const firstLine = useRef();
	const secondLine = useRef();

	const onHover = () => {
		tl.to(firstLine.current, { backgroundColor: "white", duration: 0.3 },0);
		tl.to(
			secondLine.current,

			{ width: "100%", backgroundColor: "white", duration: 0.3 },0
		);
		// gsap.to(lineRef.current, {
		// 	width: "100%",
		// 	backgroundColor: "white",
		// 	duration: 0.4,
		// });
		// gsap.to(secondLine.current, {
		// 	backgroundColor: "white",
		// 	duration: 0.4,
		// });
	};

	const onLeave = () => {
		tl.to(
			firstLine.current,

			{
				backgroundColor: "rgba(156, 163, 175, var(--tw-bg-opacity))",
			},0
		);
		tl.to(
			secondLine.current,

			{
				width: "50%",
				backgroundColor: "rgba(156, 163, 175, var(--tw-bg-opacity))",
			},0
		);
		// gsap.to(lineRef.current, {
		// 	width: "50%",
		// 	backgroundColor: "rgba(156, 163, 175, var(--tw-bg-opacity))",
		// 	duration: 0.4,
		// });
		// gsap.to(secondLine.current, {
		// 	backgroundColor: "rgba(156, 163, 175, var(--tw-bg-opacity))",
		// 	duration: 0.4,
		// });
	};

	return (
		<div
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
			ref={parentRef}
			className="w-[25px] h-[25px] flex flex-col items-end justify-center gap-1 hover:cursor-pointer group transition duration-300"
		>
			<div ref={firstLine} className="h-[2px] bg-gray-400 w-[100%]" />
			<div
				ref={secondLine}
				className="h-[2px] bg bg-gray-400 w-[50%] group-hover:w-[100%] transition duration-300"
			/>
		</div>
	);
}

export default BurgerMenu;
