import Image from "next/image";
import JumpingArrow from "../Common/JumpingArrow";
import styled from "styled-components";

const HeroSection = () => {
	return (
		<HeroWrapper>
			{/* <InternalWrapper>
				<Container>
					<h1 className="left"> He who has a why to live</h1>

					<h1 className="right">can bear almost any how.</h1>
				</Container>
			</InternalWrapper> */}
		</HeroWrapper>
	);
};

export default HeroSection;

const HeroWrapper = styled.div`
	height: 15vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;

	background-color: #0b0909;
	position: relative;
`;

const InternalWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (min-width: 768px) and (max-width: 991px) {
		padding-left: 3rem /* 48px */;
		padding-right: 3rem /* 48px */;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;

	background-color: blue;

	.left {
		font-family: "Cormorant Garamond";
		color: white;
		font-weight: 100;
		font-size: 28px;
		margin-right: 1.5rem;
	}

	.right {
		font-family: "Cormorant Garamond";
		color: white;
		font-weight: 100;
		font-size: 28px;
		margin-left: 1.5rem;
	}

	/* 
	@media only screen and (min-width: 768px) and (max-width: 991px) {
		h1 {
			font-size: 24px;
		}

		img {
			height: 400.175px;
			width: 262.675px;
		}
	}

	@media only screen and (max-width: 767px) {
		h1 {
			font-size: 23px;
		}

		img {
		}
	} */
`;
