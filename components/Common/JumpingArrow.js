import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function JumpingArrow() {
	const arrow = useRef();

	useEffect(() => {
		gsap.to(arrow.current, {
			y: -20,
			repeat: -1,
			duration: 1,
			ease: "circ.out",
			yoyo: true,
		});
	}, []);

	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 });
		return isDesktop ? children : null;
	};
	const Tablet = ({ children }) => {
		const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
		return isTablet ? children : null;
	};
	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({ maxWidth: 767 });
		return isMobile ? children : null;
	};

	return (
		<>
			<Mobile>
				<div className="text-white flex flex-col items-center justify-center h-[40px] mt-12 absolute left-1/2 transform -translate-x-1/2  bottom-[70px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						ref={arrow}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</Mobile>

			<Tablet>
				<div className="text-white flex flex-col items-center justify-center h-[40px] mt-12 absolute left-1/2 transform -translate-x-1/2  bottom-[50px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						ref={arrow}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</Tablet>

			<Desktop>
				<div className="text-white flex flex-col items-center justify-center h-[40px] mt-12 absolute left-1/2 transform -translate-x-1/2  bottom-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						ref={arrow}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</Desktop>
		</>
	);
}

export default JumpingArrow;
