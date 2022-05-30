import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import BurgerMenu from "../Buttons/BurgerMenu";
import MainMenu from "../MainMenu";
import SubscribeButton from "../Buttons/SubscribeButton";
import UnderDev from "../Common/UnderDev";
import SubscribeModal from "../SubscribeModal";

function Header() {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	useEffect(() => {
		// console.log("Menu Visibility: ", isMenuVisible);
	}, [isMenuVisible]);

	return (
		<div className="w-screen h-[60px] flex items-center px-5 pl-0 bg-[#ececec] border-b-[1px] border-opacity-5 border-[#878787] fixed top-0 left-0 z-50 filter drop-shadow-sm bg-opacity-70 md:px-6 filter backdrop-blur-sm">
			<div className="w-full h-full flex items-center justify-between relative ">
				<Logo />
				{/* <BurgerMenu
					isMenuVisible={isMenuVisible}
					setIsMenuVisible={setIsMenuVisible}
				/> */}

				{/* <SubscribeButton
					isMenuVisible={isMenuVisible}
					setIsMenuVisible={setIsMenuVisible}
				/>

				<SubscribeModal
					isMenuVisible={isMenuVisible}
					setIsMenuVisible={setIsMenuVisible}
				/> */}

				{/* <MainMenu isMenuVisible={isMenuVisible} /> */}
				{/* <UnderDev /> */}
			</div>
		</div>
	);
}

export default Header;
