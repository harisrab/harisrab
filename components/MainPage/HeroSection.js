import Image from "next/image";
import JumpingArrow from "../Common/JumpingArrow";
import MediaQuery from "react-responsive";

import { useMediaQuery } from "react-responsive";
import screenfull from "screenfull";

function HeroSection() {
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 });
		return isDesktop ? children : null;
	};
	const Tablet = ({ children }) => {
		const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
		return isTablet ? children : null;
	};
	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({ maxWidth: 767 });
		return isMobile ? children : null;
	};

	return (
		<>
			<Mobile>
				<div className="w-full h-[100vh] flex flex-col items-center justify-center relative">
					<div className="h-full w-full flex justify-center items-center">
						<div className="flex flex-col items-center justify-center">
							<Image
								className=""
								src="/assets/hero-image.png"
								alt=""
								height={330.14}
								width={210.4}
								priority
							/>
							<h1 className="text-white font-serif font-extralight text-[23px]">
								He who has a why to live
								<br className="text-white md:hidden" />
								can bear almost any how.
							</h1>
							<p className="font-serif opacity-70 text-white italic font-light mt-4">
								Nietzsche
							</p>
						</div>
					</div>
					<JumpingArrow />
				</div>
			</Mobile>

			<Tablet>
				<div className="w-full h-[100vh] flex flex-col items-center justify-center relative">
					<div className="h-full w-full flex items-center justify-center">
						<div className="w-full h-auto flex items-center justify-between px-12">
							<h1 className="text-white font-serif font-extralight text-[24px]">
								He who has a why to live
							</h1>
							<Image
								src="/assets/hero-image.png"
								alt=""
								height={400.175}
								width={262.675}
								priority
							/>
							<h1 className="text-white font-serif font-extralight text-[24px]">
								can bear almost any how.
							</h1>
						</div>
					</div>
					<JumpingArrow />
				</div>
			</Tablet>

			<Desktop>
				<div className="w-full h-[100vh] flex flex-col items-center justify-center relative">
					<div className="h-full w-full flex items-center justify-center">
						<div className="w-full h-auto flex items-center justify-center">
							<h1 className="text-white font-serif font-extralight text-[28px] mr-6">
								He who has a why to live
							</h1>
							<Image
								src="/assets/hero-image.png"
								alt=""
								height={480.21}
								width={315.6}
								priority
							/>
							<h1 className="text-white font-serif font-extralight text-[28px] ml-6">
								can bear almost any how.
							</h1>
						</div>
					</div>
					<JumpingArrow />
				</div>
			</Desktop>
		</>
	);
}

export default HeroSection;
