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
import { getPosts } from "../lib/posts";

export default function Home({ newPosts }) {
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

			{/* Hero Section */}
			{/* <HeroSection /> */}

			{/* Body */}

			<PostHolder>
				<div className="flex flex-col items-start px-5 my-[150px] gap-[50px] md:gap-[35px] max-w-[1200px] mx-5 sm:mx-2">
					{newPosts.map((eachPost, i) => (
						<MainArticleLink key={i} data={eachPost} />
					))}
				</div>
			</PostHolder>

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

const PostHolder = styled.div`
	width: 100%;
	min-height: 500px;

	background-color: #0b0909;
	/* margin-top: 150px;
	margin-bottom: 150px; */

	display: flex;
	align-items: center;
	justify-content: center;
`;

const HeroWrapper = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;

	background-color: #0b0909;
`;

export async function getStaticProps(context) {
	const posts = await getPosts();

	// console.log(posts);
	// console.log("New Posts ====> ", posts);

	// let newPosts = {
	// 	security: [],
	// 	tenets: [],
	// 	self: [],
	// 	society: [],
	// 	statecraft: [],
	// };

	let newPosts = [];

	posts.forEach((eachPost, i) => {
		const tags = eachPost.tags.map((eachTag) => eachTag.name);

		console.log(eachPost.title);

		if (tags.includes("security")) {
			// newPosts["security"].length <= 3 && newPosts["security"].push(eachPost);
			newPosts.push(eachPost);
		}

		if (tags.includes("tenets")) {
			// newPosts["tenets"].length <= 3 && newPosts["tenets"].push(eachPost);
			newPosts.push(eachPost);
		}

		if (tags.includes("self")) {
			// newPosts["self"].length <= 3 && newPosts["self"].push(eachPost);
			newPosts.push(eachPost);
		}

		if (tags.includes("society")) {
			// newPosts["society"].length <= 3 && newPosts["society"].push(eachPost);
			newPosts.push(eachPost);
		}

		if (tags.includes("statecraft")) {
			// newPosts["statecraft"].length <= 3 && newPosts["statecraft"].push(eachPost);
			newPosts.push(eachPost);
		}
	});

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { newPosts },
	};
}
