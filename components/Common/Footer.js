function Footer() {
	const links = [
		"Homepage",
		"On Self",
		"Tenets",
		"On Justice and Society",
		"Statecraft",
		"Military, Security, and Strategems",
		"Contact us",
		"About us",
		"Privacy Policy",
		"Facebook",
		"Twitter",
		"Instagram",
	];

	return (
		// <div className="h-[750px] w-screen bg-red-600 ">

		// </div>
		<div className="bg-[#F5F5F5] w-screen h-[750px] px-10 flex flex-col items-center justify-center gap-5">
			<div className="w-full h-[150px] flex flex-col items-center justify-center">
				<h3 className="font-serif text-[33px] font-medium">Des Lettres</h3>
				<p className="font-serif text-[15px] mt-2 opacity-50">
					© 2021 Des Lettres. All rights reserved.
				</p>
			</div>

			<div className="">
				<ul className="flex flex-col items-center gap-4">
					{links.map((eachLink, i) => (
						<li className="font-serif" key={i}><a>{eachLink}</a></li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Footer;
