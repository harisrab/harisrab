import Head from "next/head";

function HiddenHeader() {
	return (
		<Head>
			<title>Des Lettres</title>
			<meta
				name="A hot-bed of literary expressions, opinions, and agitated feelings"
				content="Authored for the love of feelings and great ideas"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default HiddenHeader;
