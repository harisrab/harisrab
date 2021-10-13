import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { getPostBySlug } from "../../lib/posts";
import styled from "styled-components";
import Header from "../../components/Common/Header";
import PostHero from "../../components/PostHero";
import Footer from "../../components/Common/Footer";

export const getStaticProps = async ({ params }) => {
	let post = null;
	try {
		post = await getPostBySlug(params.slug);
	} catch (err) {}

	return {
		props: { post },
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

function Post({ post }) {
	const router = useRouter();
	console.log("Post ==> ", post);

	let heroData = {};

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	} else {
		heroData = {
			title: post.title,
			excerpt: post.excerpt,
			published_at: post.published_at,
		};
	}

	if (post) {
		return (
			<div className="w-screen flex flex-col justify-start">
				<Header />
				<PostHero heroData={heroData} />
				<Content
					dangerouslySetInnerHTML={{ __html: post.html }}
					className="font-serif"
				></Content>
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

export default Post;

const Content = styled.div`
	max-width: 700px;
	background-color: #0b0909;
	color: #f5f5f5;
	padding-left: 30px;
	padding-right: 30px;

	h1 {
		font-size: 25px;
		margin-bottom: 30px;
	}

	h2 {
		font-size: 22px;
	}

	p {
		font-size: 16px;
		margin-bottom: 25px;
	}
`;
