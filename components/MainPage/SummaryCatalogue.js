import React from "react";
import CatalogueButton from "../Buttons/CatalogueButton";
import MainArticleLink from "./MainArticleLink";

function SummaryCatalogue({ linkTitle }) {
	const tempData = [
		{
			title: "Honing an immesurable self-control",
			date: "",
			readingTime: "",
			featured: true,
		},
		{
			title:
				"Cultivating an irrepressible desire to read books. They’ve intoxiated me!",
			date: "",
			readingTime: "",
			featured: false,
		},
		{
			title: "Integrating a spartan culture in my modern life.",
			date: "",
			readingTime: "",
			featured: true,
		},

		{
			title:
				"Seeping into the cracks of love , And oh, for the first time!",
			date: "",
			readingTime: "",
			featured: true,
		},
	];

	return (
		<div className="h-[850px] w-screen">
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
			<div className="h-auto w-full px-7 mt-8">
				<CatalogueButton />
			</div>
		</div>
	);
}

export default SummaryCatalogue;
