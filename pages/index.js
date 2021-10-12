import { useEffect } from "react";
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

// Get Utility for Getting Ghost Posts
import { getPosts } from "../lib/posts";

export default function Home({ newPosts }) {
	const scrollY = useScrollPosition(50);

	useEffect(() => {
		console.log("Posts ===> ", newPosts);
	}, []);

	return (
		<MainWrapper className="bg-black h-auto flex flex-col items-center overflow-hidden scrollbar hover:scrollbar-track-blue-200 hover:scrollbar-red-200">
			<HiddenHeader />
			<Header />
			<ScrollToTopButton scrollPos={scrollY} />

			{/* Hero Section Main Page */}
			<HeroSection />

			{/* Essays Letters Catalogue */}
			<SummaryCatalogue linkTitle="On Self" posts={newPosts["self"]} />
			<SummaryCatalogue linkTitle="Tenets" posts={newPosts["tenets"]} />
			<SummaryCatalogue
				linkTitle="Justice and Society"
				posts={newPosts["society"]}
			/>
			<SummaryCatalogue
				linkTitle="Statecraft"
				posts={newPosts["statecraft"]}
			/>
			<SummaryCatalogue
				linkTitle="Stratagems"
				posts={newPosts["security"]}
			/>

			{/* Footer */}
			<Footer />
		</MainWrapper>
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
		console.log(tags);

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

const MainWrapper = styled.div`
	*::-webkit-scrollbar {
		display: none;
	}
`;
