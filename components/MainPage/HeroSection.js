import Image from "next/image";
import JumpingArrow from "../Common/JumpingArrow";

function HeroSection() {
	return (
		<div className="w-full h-[100vh] flex flex-col items-center justify-center relative">
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
				<br />
				can bear almost any how.
			</h1>
			<p className="font-serif opacity-70 text-white italic font-light mt-4">
				Nietzsche
			</p>

			{/* Jumping Arrow */}
			<JumpingArrow className=""/>
		</div>
	);
}

export default HeroSection;
