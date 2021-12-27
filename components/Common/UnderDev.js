import React from "react";

function FeaturedTag() {
	return (
		<div className="h-[22px] w-auto flex items-center bg-[#f7c02a] bg-opacity-[0.15] border-[1px] border-[#f7c02a] text-[#f7c02a] rounded-[11px] pr-[2px]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>

			<p className="text-[11px] mx-[5px] mr-[7px]">Under development</p>
		</div>
	);
}

export default FeaturedTag;
