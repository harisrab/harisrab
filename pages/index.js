import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// Component Imports
import HiddenHeader from "../components/HiddenHeader";
import Header from "../components/Common/Header";
import Logo from "../components/Logo/Logo";

export default function Home() {
	return (
		<HomeWrapper className="bg-black h-screen">
			<HiddenHeader />
			<Header />
		</HomeWrapper>
	);
}

const HomeWrapper = styled.div``;
