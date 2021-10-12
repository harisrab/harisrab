import Image from "next/image";
import JumpingArrow from "../Common/JumpingArrow";
import { layoutGenerator } from "react-break";

function HeroSection() {
	const layout = layoutGenerator({
		mobile: 0,
		tablet: 768,
	});

	const OnMobile = layout.is("mobile");
	const OnAtLeastTablet = layout.isAtLeast("tablet");

	return (
		<div className="w-full h-[100vh] flex flex-col items-center justify-center relative">
			<OnMobile>
				<div className="flex flex-col items-center justify-center">
					<div className="h-[320.14px] w-[210.4px] relative ">
						<Image
							className=""
							src="/assets/hero-image.png"
							alt=""
							layout="fill"
						/>
					</div>
					<h1 className="text-white font-serif font-extralight text-[23px]">
						He who has a why to live
						<br className="text-white md:hidden" />
						can bear almost any how.
					</h1>
					<p className="font-serif opacity-70 text-white italic font-light mt-4">
						Nietzsche
					</p>
					{/* Jumping Arrow */}
					<JumpingArrow className="" />
				</div>
			</OnMobile>

			<OnAtLeastTablet>
				<div className="h-full w-screen flex justify-between items-center px-12">
					<h1 className="text-white font-serif font-extralight text-[24px]">
						He who has a why to live
					</h1>
					<div className="h-[320.14px] w-[210.4px] relative scale-[1.3]">
						<Image
							className=""
							src="/assets/hero-image.png"
							alt=""
							layout="fill"
						/>
					</div>
					<h1 className="text-white font-serif font-extralight text-[24px]">
						can bear almost any how.
					</h1>
				</div>
				{/* Jumping Arrow */}
				<JumpingArrow className="" />
			</OnAtLeastTablet>
		</div>
	);
}

export default HeroSection;
