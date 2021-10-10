import React from "react";
import MainArticleLink from "./MainArticleLink";

function SummaryCatalogue({linkTitle}) {
	const tempData = [
		{ title: "Honing an immesurable self-control" },
		{
			title:
				"Cultivating an irrepressible desire to read books. They’ve intoxiated me!",
		},
		{ title: "Integrating a spartan culture in my modern life." },
		{
			title:
				"Seeping into the cracks of love , And oh, for the first time!",
		},
	];

	return (
		<div className="h-[800px] w-screen">
			{/* Heading */}
			<h1 className="text-white font-serif font-medium text-[40px] h-[70px] w-screen flex items-center px-7">
				{linkTitle}
			</h1>
			{/* Sections */}
			<div className="flex flex-col items-center px-7 gap-1">
				{tempData.map((eachLink, i) => (
					<MainArticleLink key={i} data={eachLink} />
				))}
			</div>

			{/* Catalogue Button */}
		</div>
	);
}

export default SummaryCatalogue;
