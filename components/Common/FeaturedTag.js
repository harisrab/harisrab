import React from "react";

function FeaturedTag() {
	return (
		<div className="h-[17px] w-auto flex items-center bg-[#13e3001f] bg-opacity-20 border-[1px] border-[#0b8800] text-[#0b8000] rounded-[10px]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-[15px] w-[15px]"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clipRule="evenodd"
				/>
			</svg>
            <p className="text-[11px] mx-[5px] mr-[7px]">Featured</p>
		</div>
	);
}

export default FeaturedTag;
