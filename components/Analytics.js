import Script from "next/script";

const Analytics = () => {
	return (
		<div className="container">
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_KEY}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.ANALYTICS_KEY});
        `}
			</Script>
		</div>
	);
};

export default Analytics;
