import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";

import NotificationsIcon from "@mui/icons-material/Notifications";
import LottieAnimation from "./Lottie";
import tickMark from "./lottie/tickmark.json";

const useStyles = makeStyles((theme) => ({
	customHoverFocus: {
		"&:hover, &.Mui-focusVisible": { backgroundColor: "#36363686" },
	},
}));

function NewsletterPopup({ isMenuVisible, setIsMenuVisible }) {
	const classes = useStyles();

	const [status, setStatus] = useState("");
	const [email, setEmail] = useState("");
	const [emailValid, setEmailValid] = useState("");
	const inputElm = useRef(null);

	const handleEmail = (e) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		setEmail(e.target.value);

		if (re.test(String(e.target.value).toLowerCase())) {
			setEmailValid(true);
		} else if (e.target.value === "") {
			setEmailValid("");
		} else {
			setEmailValid(false);
		}
	};

	const handleSubscription = async (e) => {
		e.preventDefault();
		console.log("Subscription Button Clicked");

		if (emailValid) {
			const res = await fetch("/api/subscribe", {
				body: JSON.stringify({
					"email": email,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();

			if (error) {
				// 4. If there was an error, update the message in state.
				console.log(error)
				return;
			} else {
				setStatus(true);
			}
		}
	};

	const close = () => {
		setIsMenuVisible(false);
	};

	return (
		<Wrapper showNewsletter={isMenuVisible}>
			<div className="upper">
				{!status ? <p>Subscribe To</p> : <p>Subscribed</p>}
				<h2>Haris Rashid</h2>
				{!status && (
					<p className="text-center text-[13px] mx-7 mt-2">
						Enter your email address to get email alerts about new
						posts on this site.
					</p>
				)}
			</div>

			<div className="bottom">
				{!status ? (
					<form onSubmit={handleSubscription}>
						<input
							type="text"
							placeholder="Email address"
							onChange={handleEmail}
							value={email}
							ref={inputElm}
							style={
								emailValid === ""
									? {
											borderColor: "#1d1d1d",
									  }
									: emailValid === true
									? { borderColor: "#219e02" }
									: {
											borderColor: "#cc1414",

											boxShadow: "#cc1414",
									  }
							}
						/>
						{/* <Button type="submit">
						</Button> */}
						<Button>
							<NotificationsIcon className="bell-icon" />
						</Button>
					</form>
				) : (
					<div className="registered-wrapper">
						{/* <h4>
							You've been successfully registered! Check your
							email for confirmation.
						</h4> */}
						<LottieAnimation
							lotti={tickMark}
							height={70}
							width={70}
						/>
					</div>
				)}
			</div>
			<IconButtonWrapper
				onClick={close}
				className={classes.customHoverFocus}
			>
				<CloseIconWrapper />
			</IconButtonWrapper>
		</Wrapper>
	);
}

export default NewsletterPopup;

const Button = styled.button`
	visibility: visible;
	opacity: 1;
	height: 28px;
	width: 28px;

	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);

	border-radius: 50%;
	outline: none;
	border: none;
	background-color: #c90404;
	color: white;

	transition: 0.3s ease-out;

	.bell-icon {
		font-size: 18px;
	}

	&:hover {
		background-color: #b90303;
		cursor: pointer;
	}

	&:focus {
		border: 1px solid #aaaaaa;
	}
`;

const Wrapper = styled.div`
	height: auto;
	width: 300px;
	background-color: #1a1a1afc;
	/* 
	position: absolute;
	top: 50%;
	right: 50%; */

	position: absolute;
	right: 10px;
	top: 100px;

	z-index: 50;
	border: #272727 1px solid;
	border-radius: 5px;

	box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
		rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
		rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding: 30px 0px;

	.upper {
		color: #eeeeee;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: "Spectral", sans-serif;
		width: 100%;

		p {
			font-weight: 200;
		}

		h2 {
			font-weight: 300;
			font-size: 25px;

			span {
				color: var(--main-color-red);
			}
		}

		h3 {
			color: white;
			font-weight: 300;
			font-size: 20px;
			margin-top: 10px;
			height: 40px;

			background-color: #363636;
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.bottom {
		width: 100%;
		margin-top: 20px;

		.registered-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 100%;
			margin-bottom: 10px;

			h4 {
				color: #eeeeee;
				font-family: "Spectral", sans-serif;
				font-weight: 300;
				font-size: 15px;
				width: 80%;

				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		form {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			font-family: "Spectral", sans-serif;

			margin-right: 25px;
			margin-left: 25px;

			input {
				font-family: "Spectral", sans-serif;
				height: 35px;
				width: 100%;
				background-color: transparent;
				outline: none;
				border: 2px solid #202020;

				border-radius: 20px;
				padding-left: 15px;
				color: #eeeeee;
				transition: 0.3s ease-in-out;

				&:focus {
					box-shadow: 0 0 0 3px rgb(200, 200, 200, 0.2);
				}
			}
		}
	}

	display: ${(props) => (props.showNewsletter ? "flex" : "none")};

	@media only screen and (max-device-width: 480px) {
		position: absolute;
		left: 52%;
		top: 100px;

		transform: translateX(-50%);

		z-index: 50;
		/* border: #eeeeee 1px solid; */
		box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;

		border-radius: 5px;
		background-color: #1a1a1a;
	}
`;

const IconButtonWrapper = styled(IconButton)`
	position: absolute !important;
	top: 5px;
	right: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CloseIconWrapper = styled(CloseIcon)`
	color: #e0e0e0;
	font-size: 15px !important;
`;
