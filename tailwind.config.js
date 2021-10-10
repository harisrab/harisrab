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
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
