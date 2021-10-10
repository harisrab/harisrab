import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

// Component Imports
import HiddenHeader from "../components/HiddenHeader";
import Header from "../components/Common/Header";
import Logo from "../components/Logo/Logo";
import HeroSection from "../components/MainPage/HeroSection";
import SummaryCatalogue from "../components/MainPage/SummaryCatalogue";

export default function Home() {
	return (
		<div className="bg-black h-auto flex flex-col items-center">
			<HiddenHeader />
			<Header />

			{/* Hero Section Main Page */}
			<HeroSection />

			{/* Essays Letters Catalogue */}
			<SummaryCatalogue />
		</div>
	);
}
