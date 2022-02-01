import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { getPageBySlug } from "../lib/posts";
import styled from "styled-components";
import Header from "../components/Common/Header";
import PostHero from "../components/PostHero";
import Footer from "../components/Common/Footer";
import ScrollToTopButton from "../components/Buttons/ScrollToTopButton";
import RelatedPosts from "../components/RelatedPosts";

export const getStaticProps = async ({ params }) => {
	let page = null;
	console.log("PARAMS =====> ", params);

	try {
		page = await getPageBySlug(params.pageslug);
	} catch (err) {
		console.error(err);
	}

	console.log("PAGE =====> ", page);

	return {
		props: { page },
		revalidate: 10,
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

function Page({ page }) {
	const router = useRouter();

	let heroData = {};

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	} else {
		heroData = {
			title: page.title,
			excerpt: page.custom_excerpt,
			published_at: page.published_at,
			reading_time: page.reading_time,
		};

		console.log("Page Data ===> ", page);
	}

	// return <div>Hello</div>;
	if (page) {
		return (
			<div className="w-screen bg-[#0b0909] flex flex-col justify-start relative items-center overflow-hidden">
				<Header />
				<ScrollToTopButton />
				<PostHero heroData={heroData} />
				<Content
					dangerouslySetInnerHTML={{ __html: page.html }}
					className="font-serif"
				></Content>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className="text-white w-full px-10 my-20 mb-30 max-w-[700px]"
					src="/assets/end-of-post-2.svg"
					alt=""
				/>
				{/* <RelatedPosts /> */}
				<Footer />
			</div>
		);
	} else {
		return (
			<>
				<p>Error</p>
			</>
		);
	}
}

export default Page;

const Content = styled.div`
	max-width: 700px;
	background-color: #0b0909;
	color: #d8d8d8;
	padding-left: 35px;
	padding-right: 35px;

	h1 {
		color: white;
		font-size: 27px;
		margin-bottom: 30px;
	}

	h2 {
		color: white;
		font-size: 21px;
		margin-bottom: 20px;
		margin-top: 50px;
	}

	h3 {
		color: white;
		font-size: 20px;
		margin-bottom: 20px;
		margin-top: 50px;
	}

	h4 {
		color: white;
		font-size: 21px;
		margin-bottom: 20px;
		margin-top: 50px;
	}

	p {
		font-size: 20px;
		margin-bottom: 25px;
	}

	hr {
		margin-top: 40px;
		margin-bottom: 40px;
		opacity: 0.2;
	}

	blockquote {
		p {
			color: #33ff00;
			font-style: italic;
			/* max-width: 400px; */
			width: 100%;

			padding-left: 20px;
			padding-right: 20px;

			text-align: center;

			margin-top: 40px;
			margin-bottom: 40px;
		}
	}

	ul {
		margin-top: 20px;
		margin-bottom: 20px;

		padding-left: 30px;
		li {
			list-style-type: disc;
			margin-top: 5px;
			margin-bottom: 5px;
			padding-left: 10px;
			font-size: 20px;
		}
	}

	ol {
		margin-top: 20px;
		margin-bottom: 20px;
		padding-left: 30px;

		li {
			list-style-type: decimal;
			padding-left: 10px;
			margin-top: 5px;
			margin-bottom: 5px;
		}
	}

	figure {
		margin-bottom: 20px;
		margin-top: 20px;

		figcaption {
			font-style: italic;
			padding-top: 5px;
			padding-bottom: 5px;
			display: flex;
			align-items: center;
			padding-left: 5px;
			font-family: "Roboto", sans-serif;
			font-size: 12px;
			font-weight: 300;
			background-color: #ffffff14;
		}

		.iframe {
			/* height: 600px; */
			width: 100% !important;
			/* position: relative; */
		}
	}


	a {
		text-decoration: underline;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 35px;
		}

		h2 {
			font-size: 25px;
		}

		p {
			font-size: 22px;
		}
	}
`;
