import React from "react";
import FeaturedTag from "../Common/FeaturedTag";
import smartTruncate from "smart-truncate";
import { format, localeFormat } from "light-date";

function MainArticleLink({ data }) {
	const { id, title, featured, reading_time, excerpt, published_at } = data;
	const interimDate = new Date(published_at);


	return (
		<div
			id={id}
			className="h-36 w-full flex flex-col items-start justify-center"
		>
			<h2 className="text-white font-serif text-[20px] font-extralight">
				<a href="#">{title}</a>
			</h2>
			<p className="text-white font-serif opacity-30 text-[14px] my-2">
				{smartTruncate(excerpt, 90)}
			</p>
			<div className="w-full h-[30px] my-[10px] text-white flex items-center gap-6">
				<div className="Date flex items-center opacity-40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-[14px] w-[14px]"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<p className="text-sans text-[14px] font-light ml-1">
						{localeFormat(interimDate, "{MMM}") + " " + format(interimDate, "{dd}")}
					</p>
				</div>
				<div className="Time flex items-center opacity-40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-[14px] w-[14px]"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p className="text-sans text-[14px] font-light ml-1">
						{reading_time} mins
					</p>
				</div>
				{featured && <FeaturedTag />}
			</div>
		</div>
	);
}

export default MainArticleLink;