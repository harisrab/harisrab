import React from "react";
import { format, localeFormat } from "light-date";
import screenfull from "screenfull";
import { isMobile } from "react-device-detect";

function PostHero({ heroData }) {
	const interimDate = new Date(heroData.published_at);

	// console.log("Hero Data ===> ", heroData);

	const goFullScreen = () => {
		if (screenfull.isEnabled) {
			// screenfull.request(document.body, { navigationUI: "hide" });
			if (isMobile) {
				screenfull.request();
			}
		}
	};
	return (
		<div
			onClick={goFullScreen}
			className="w-screen h-screen bg-[#ececec] max-h-screen flex flex-col items-center justify-center"
		>
			<h1 className="text-black font-serif text-[30px] flex justify-center items-center text-center px-7 md:text-[40px] max-w-4xl">
				{heroData.title}
			</h1>
			<p className="font-serif text-black text-[18px] text-center px-10 my-5 opacity-60 max-w-2xl">
				{heroData.excerpt}
			</p>
			<div className="text-black font-serif flex gap-5 justify-between items-center text-[20px]">
				{/* <div className="time"></div> */}
				<div className="publishing_date text-black font-serif">
					{format(interimDate, "{dd}") +
						" " +
						localeFormat(interimDate, "{MMM}") +
						", " +
						format(interimDate, "{yyyy}")}
				</div>

				<p className="flex">•</p>

				<div>{`${heroData.reading_time} mins`}</div>
			</div>
		</div>
	);
}

export default PostHero;
