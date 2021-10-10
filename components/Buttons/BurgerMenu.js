import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function BurgerMenu() {
	const parentRef = useRef();
	const firstLine = useRef();
	const secondLine = useRef();

	const onHover = () => {
		gsap.to(secondLine.current, {
			width: "100%",
			backgroundColor: "white",
			duration: 0.4,
			ease: "power2",
			opacity: 1,
		});
		gsap.to(firstLine.current, {
			backgroundColor: "white",
			duration: 0.4,
			ease: "power2",
			opacity: 1,
		});
	};

	const onLeave = () => {
		gsap.to(secondLine.current, {
			width: "50%",
			opacity: 0.7,
			duration: 0.4,
			ease: "power2",
		});
		gsap.to(firstLine.current, {
			opacity: 0.7,
			duration: 0.4,
			ease: "power2",
		});
	};

	return (
		<div
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
			ref={parentRef}
			className="w-[25px] h-[25px] flex flex-col items-end justify-center gap-1 hover:cursor-pointer"
		>
			<div
				ref={firstLine}
				className="h-[2px] bg-white w-[100%] opacity-70"
			/>
			<div
				ref={secondLine}
				className="h-[2px] bg bg-white w-[50%] opacity-70"
			/>
		</div>
	);
}

export default BurgerMenu;
