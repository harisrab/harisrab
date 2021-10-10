import Logo from "../Logo/Logo";
import BurgerMenu from "../Buttons/BurgerMenu";

function Header() {
	return (
		<div className="w-screen h-[60px] flex items-center px-5 pl-0 justify-between bg-black border-b-[1px] border-opacity-10 border-white fixed top-0 z-50 filter drop-shadow-2xl">
			<Logo />
			<BurgerMenu />
		</div>
	);
}

export default Header;
