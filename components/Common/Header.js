import Logo from "../Logo/Logo";
import BurgerMenu from "../Buttons/BurgerMenu";

function Header() {
	return (
		<div className="h-20 flex items-center px-5 justify-between">
			<Logo />
			<BurgerMenu />
		</div>
	);
}

export default Header;
