import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function BurgerMenu({ isMenuVisible, setIsMenuVisible }) {
	const parentRef = useRef();
	const firstLine = useRef();
	const secondLine = useRef();

	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible);
	};

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

	const onOpenLeave = () => {
		gsap.to(secondLine.current, {
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
			onMouseLeave={isMenuVisible ? onOpenLeave : onLeave}
			onClick={toggleMenu}
			ref={parentRef}
			className="w-[25px] h-[25px] flex flex-col items-end justify-center gap-1 hover:cursor-pointer z-10"
		>
			{isMenuVisible ? (
				<>
					<div
						ref={firstLine}
						className="h-[2px] bg-white w-full opacity-70"
					/>
					<div
						ref={secondLine}
						className="h-[2px] bg bg-white w-full opacity-70"
					/>
				</>
			) : (
				<>
					<div
						ref={firstLine}
						className="h-[2px] bg-white w-[100%] opacity-70"
					/>
					<div
						ref={secondLine}
						className="h-[2px] bg bg-white w-[50%] opacity-70"
					/>
				</>
			)}
		</div>
	);
}

export default BurgerMenu;
