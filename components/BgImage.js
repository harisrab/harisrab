import { useEffect } from "react";
import gsap from "gsap";
import { isMobile } from "react-device-detect";

function BgImage({ menuBGRef }) {
	return (
		<>
			{isMobile ? (
				<div
					ref={menuBGRef}
					className={`absolute top-0 left-0 h-full w-full bg-mainImage-tenets bg-cover bg-no-repeat bg-center z-0`}
				></div>
			) : (
				<div
					ref={menuBGRef}
					className={`absolute top-0 left-0 h-full w-full bg-mainImage-self bg-cover bg-no-repeat bg-center z-0`}
				></div>
			)}
		</>
	);
}

export default BgImage;
