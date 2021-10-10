import gsap from "gsap";
import { useRef, useEffect } from "react";

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

	return (
		<div className="text-white flex flex-col items-center justify-center h-[40px] mt-12">
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
	);
}

export default JumpingArrow;
