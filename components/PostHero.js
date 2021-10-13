import React from "react";
import { format, localeFormat } from "light-date";

function PostHero({ heroData }) {
	const interimDate = new Date(heroData.published_at);

	return (
		<div className="w-screen h-[700px] bg-[#0B0909] max-h-screen flex flex-col items-center justify-center">
			<h1 className="text-white font-serif text-[30px] flex justify-center items-center text-center px-7">
				{heroData.title}
			</h1>
			<p className="font-serif text-white text-[16px] text-center px-10 my-5 opacity-60">
				{heroData.excerpt}
			</p>
			<div className="text-white flex gap-5 justify-between">
				<div className="time"></div>
				<div className="publishing_date text-white font-serif">
					{format(interimDate, "{dd}") +
						" " +
						localeFormat(interimDate, "{MMMM}") +
						", " +
						format(interimDate, "{yyyy}")}
				</div>

				<p className="flex">•</p>

				<div>{""}</div>
			</div>
		</div>
	);
}

export default PostHero;
