import styled from "styled-components";
import Link from "next/link";

function Logo() {
	return (
		<div className="flex items-center justify-center py-1 px-2 bg-transparent w-40 z-10">
			<Link href="/">
				<a>
					<h1 className="text-logo font-serif text-white font-light">
						Des Lettres.
					</h1>
				</a>
			</Link>
		</div>
	);
}

export default Logo;
