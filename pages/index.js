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

	return (
		<div className="bg-[#0B0909] h-auto flex flex-col items-center overflow-hidden">
			{/* Header */}
			<HiddenHeader />
			<Header />
			<ScrollToTopButton />

			{/* Hero Section */}
			{/* <HeroSection /> */}

			{/* Body */}

			<ul className="mt-[150px]">
				{mainMenuLinks.map((eachLink, i) => (
					<SummaryCatalogue
						key={i}
						linkTitle={eachLink.display}
						posts={newPosts[eachLink.link]}
					/>
				))}
			</ul>

			{/* Footer */}
			<Footer />
		</div>
	);
}


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

	let newPosts = {
		security: [],
		tenets: [],
		self: [],
		society: [],
		statecraft: [],
	};

	posts.forEach((eachPost, i) => {
		const tags = eachPost.tags.map((eachTag) => eachTag.name);

		console.log(eachPost.title);

		if (tags.includes("security")) {
			newPosts["security"].length <= 3 &&
				newPosts["security"].push(eachPost);
		}

		if (tags.includes("tenets")) {
			newPosts["tenets"].length <= 3 && newPosts["tenets"].push(eachPost);
		}

		if (tags.includes("self")) {
			newPosts["self"].length <= 3 && newPosts["self"].push(eachPost);
		}

		if (tags.includes("society")) {
			newPosts["society"].length <= 3 &&
				newPosts["society"].push(eachPost);
		}

		if (tags.includes("statecraft")) {
			newPosts["statecraft"].length <= 3 &&
				newPosts["statecraft"].push(eachPost);
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
