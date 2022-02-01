module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			serif: ["Cormorant Garamond", "serif", "system-ui"],
			sans: ["Roboto", "sans-serif"],
			spectral: ["Spectral", "serif"]
		},
		fontSize: {
			h1: ".75rem",
			h2: ".75rem",
			h3: ".75rem",
			h4: ".75rem",
			h5: ".75rem",
			h6: ".75rem",
			body: ".75rem",
			"p-h1": "1.69em",
			"p-blurb": "1.125em",
			"p-body": "1.25em",
			logo: "1.5575em",
		},
		backgroundImage: {
			"mainImage-home": "url('/assets/mainMenu/home-bg.jpg')",
			"mainImage-society": "url('/assets/mainMenu/society-bg.png')",
			"mainImage-statecraft": "url('/assets/mainMenu/statecraft-bg.png')",
			"mainImage-tenets": "url('/assets/mainMenu/tenets-bg.jpg')",
			"mainImage-security": "url('/assets/mainMenu/security-bg.jpg')",
			"mainImage-self": "url('/assets/mainMenu/self-bg.jpg')",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("ps-scrollbar-tailwind")],
};
