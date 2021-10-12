import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

function ScrollToTopButton({ scrollPos }) {
	const circleRef = useRef();

	useEffect(() => {
		if (scrollPos > 150) {
			const circumference = 150.796;
			const pageHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const offset =
				circumference - (scrollPos / pageHeight) * circumference;

			gsap.to(circleRef.current, {
				strokeDashoffset: offset,
				duration: 0.3,
			});
		}
	}, [scrollPos]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{scrollPos > 150 ? (
				<div
					onClick={scrollToTop}
					className="fixed text-white bottom-5 right-5 h-[50px] w-[50px] bg-[#00000048] rounded-full flex items-center justify-center filter backdrop-blur-sm border-[1px] border-[#ffffff13] hover:bg-[#ffffff1e] cursor-pointer transition-all duration-300"
				>
					<div className="h-full w-full relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M7 11l5-5m0 0l5 5m-5-5v12"
							/>
						</svg>
						<svg className="progress-ring" width="50" height="50">
							<Circle
								className="progress-ring__circle text-white flex items-center justify-center"
								stroke="white"
								strokeWidth="1"
								fill="transparent"
								r="24"
								cx="26"
								cy="24"
								ref={circleRef}
							/>
						</svg>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}

export default ScrollToTopButton;

const Circle = styled.circle`
	stroke-dasharray: 150.796 150.796;
	stroke-dashoffset: 150.796;

	transform: rotate(-90deg) !important;
	transform-origin: 50% 50% !important;

	will-change: transform;
`;
