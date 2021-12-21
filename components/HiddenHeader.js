import Head from "next/head";
import Script from "next/script";

function HiddenHeader() {
	return (
		<Head>
			<title>Haris Rashid</title>
			<meta
				name="A hot-bed of literary expressions, opinions, and agitated feelings"
				content="Authored for the love of feelings and great ideas"
			/>
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default HiddenHeader;
