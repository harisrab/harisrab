import { useEffect, useRef } from "react";
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
	const scrollY = useScrollPosition(50);

	const mainMenuLinks = [
		{ display: "On Self", link: "self" },
		{ display: "Justice and Society", link: "society" },
		{ display: "Tenets", link: "tenets" },
		{ display: "Statecraft", link: "statecraft" },
		{ display: "Stratagems", link: "security" },
	];

	useEffect(() => {
		console.log("Posts ===> ", newPosts);
		window.addEventListener("load", function () {
			// Set a timeout...
			setTimeout(function () {
				// Hide the address bar!
				window.scrollTo(0, 1);
			}, 0);
		});
	}, []);

	return (
		<div className="bg-[#0B0909] h-auto flex flex-col items-center overflow-hidden">
			{/* Header */}
			<HiddenHeader />
			<Header />
			<ScrollToTopButton scrollPos={scrollY} />

			{/* Hero Section */}
			<HeroSection />

			{/* Body */}
			<ul>
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

export async function getStaticProps(context) {
	const posts = await getPosts();

	let newPosts = {
		security: [],
		tenets: [],
		self: [],
		society: [],
		statecraft: [],
	};

	const sections = ["security", "tenets", "self", "society", "statecraft"];

	posts.forEach((eachPost, i) => {
		const tags = eachPost.tags.map((eachTag) => eachTag.name);

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

		if (tags.includes("self")) {
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
