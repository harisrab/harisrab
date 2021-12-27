import { useEffect, useRef, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import styled from "styled-components";

// Component Imports
import HiddenHeader from "../components/HiddenHeader";
import Header from "../components/Common/Header";
import Logo from "../components/Logo/Logo";
import HeroSection from "../components/MainPage/HeroSection";
import SummaryCatalogue from "../components/MainPage/SummaryCatalogue";
import Footer from "../components/Common/Footer";
import ScrollToTopButton from "../components/Buttons/ScrollToTopButton";
import screenfull from "screenfull";
import MainArticleLink from "../components/MainPage/MainArticleLink";

// Get Utility for Getting Ghost Posts
import { getPosts, getPages } from "../lib/posts";

import Analytics from "../components/Analytics";
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from "react-responsive";

export default function Home({ newPosts, newPages }) {
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 });
		return isDesktop ? children : null;
	};

	const mainMenuLinks = [
		{ display: "On Self", link: "self" },
		{ display: "Justice and Society", link: "society" },
		{ display: "Tenets", link: "tenets" },
		{ display: "Statecraft", link: "statecraft" },
		{ display: "Stratagems", link: "security" },
	];

	console.log("Title ===> ", newPosts[0].title);

	return (
		<div className="bg-[#0B0909] h-auto flex flex-col items-center overflow-hidden">
			{/* Header */}
			<HiddenHeader />
			<Header />
			<ScrollToTopButton />

			<Analytics />

			{/* Hero Section */}
			{/* <HeroSection /> */}

			{/* Body */}

			<div className="w-full min-h-[500px] flex">
				<Desktop>
					<Sidebar pages={newPages} />
				</Desktop>
				<div className="flex flex-col object-contain items-start px-5 my-[150px] gap-[50px] md:gap-[35px] max-w-[1200px] mx-5 sm:mx-2">
					{newPosts.map((eachPost, i) => (
						<MainArticleLink key={i} data={eachPost} />
					))}
				</div>
			</div>

			{/* 
			<ul className="mt-[150px]">
				{mainMenuLinks.map((eachLink, i) => (
					<SummaryCatalogue
						key={i}
						linkTitle={eachLink.display}
						posts={newPosts[eachLink.link]}
					/>
				))}
			</ul> */}

			{/* Footer */}
			<Footer />
		</div>
	);
}

export async function getStaticProps(context) {
	const posts = await getPosts();
	const pages = await getPages();

	let newPosts = [];
	let newPages = [];

	posts.forEach((eachPost, i) => {
		newPosts.push(eachPost);
	});

	pages.forEach((eachPage, i) => {
		newPages.push(eachPage);
	});

	if (!posts) {
		return {
			notFound: true,
		};
	}

	if (!pages) {
		return {
			notFound: true,
		};
	}

	return {
		props: { newPosts, newPages },
	};
}
