import React from "react";
import CatalogueButton from "../Buttons/CatalogueButton";
import MainArticleLink from "./MainArticleLink";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

function SummaryCatalogue({ linkTitle, posts }) {
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

	const mainMenuLinks = {
		"On Self": { fileName: "self", setup: "right-[-100px]" },
		"Justice and Society": { fileName: "society", setup: "-right-20" },
		Tenets: { fileName: "tenets", setup: "-right-20" },
		Statecraft: { fileName: "statecraft", setup: "-right-10" },
		Stratagems: { fileName: "security", setup: "right-10" },
	};

	return (
		<>
			<Mobile>
				<div className="h-[1000px] w-screen flex flex-col items-start justify-start">
					{/* Heading */}

					<h1 className="text-white font-serif font-medium text-[40px] h-[70px] w-screen flex items-center px-7 mb-[40px] md:px-0 md:ml-12">
						{linkTitle}
					</h1>

					{/* Sections */}
					<div className="flex flex-col items-center px-7 gap-[50px] md:gap-[35px]">
						{posts.map((eachPost, i) => (
							<MainArticleLink key={i} data={eachPost} />
						))}
					</div>

					{/* Catalogue Button */}

					<div className="h-auto w-full px-7 mt-10 md:ml-12 md:px-0">
						<CatalogueButton />
					</div>
				</div>
			</Mobile>

			<Tablet>
				<div className="h-[1000px] w-screen flex flex-col items-start justify-start">
					{/* Heading */}

					<h1 className="text-white font-serif font-medium text-[40px] h-[70px] w-screen flex items-center px-7 mb-[40px] md:px-0 md:ml-12">
						{linkTitle}
					</h1>

					{/* Sections */}
					<div className="flex flex-col items-center px-7 gap-[50px] md:gap-[35px]">
						{posts.map((eachPost, i) => (
							<MainArticleLink key={i} data={eachPost} />
						))}
					</div>

					{/* Catalogue Button */}

					<div className="h-auto w-full px-7 mt-10 md:ml-12 md:px-0">
						<CatalogueButton />
					</div>
				</div>
			</Tablet>

			<Desktop>
				<div className="w-screen h-auto flex flex-row items-center justify-between relative">
					<div className="h-[1000px] w-screen flex flex-col items-start justify-start">
						{/* Heading */}

						<h1 className="text-white font-serif font-medium text-[40px] h-[70px] w-screen flex items-center px-7 mb-[40px] md:px-0 md:ml-12">
							{linkTitle}
						</h1>

						{/* Sections */}
						<div className="flex flex-col items-center px-7 gap-[50px] md:gap-[35px]">
							{posts.map((eachPost, i) => (
								<MainArticleLink key={i} data={eachPost} />
							))}
						</div>

						{/* Catalogue Button */}

						<div className="h-auto w-full px-7 mt-10 md:ml-12 md:px-0">
							<CatalogueButton />
						</div>
					</div>

					<div
						className={`absolute ${mainMenuLinks[linkTitle].setup} top-0`}
					>
						<Image
							src={`/assets/mainPage/${mainMenuLinks[linkTitle].fileName}.png`}
							alt=""
							priority
							height={500}
							width={500}
							objectFit="contain"
						/>
					</div>
				</div>
			</Desktop>
		</>
	);
}

export default SummaryCatalogue;
