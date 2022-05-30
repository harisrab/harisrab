function Footer() {
	const links = [
		"Homepage",
		"Facebook",
		"Twitter",
		"Instagram",
	];

	return (
		// <div className="h-[750px] w-screen bg-red-600 ">

		// </div>
		<div className="bg-[#F5F5F5] w-screen h-[750px] px-10 flex flex-col items-center justify-center gap-5 md:h-[250px] md:flex-row md:justify-between sm:pb-[30px]">
			<div className="w-full h-[150px] flex flex-col items-center justify-center md:w-[35%] md:items-start md:ml-10">
				<h3 className="font-serif text-[33px] font-medium">
					Haris Rashid
				</h3>
				<p className="font-serif text-[15px] mt-2 opacity-50">
					© 2022 Haris Rashid. All rights reserved.
				</p>
			</div>

			{/* <div className="md:flex md:gap-5 md:w-[45%] md:h-[70%] md:items-center md:mt-6">
				<ul className="flex flex-col items-center gap-4 md:items-start md:flex-wrap md:h-full md:gap-3">
					{links.map((eachLink, i) => (
						<li
							className="opacity-[0.6] py-1 px-4 font-serif md:text-[13px] md:ml-2 hover:opacity-[1] transition-all duration-300 hover:cursor-pointer"
							key={i}
						>
							<a>{eachLink}</a>
						</li>
					))}
				</ul>
			</div> */}
		</div>
	);
}

export default Footer;
