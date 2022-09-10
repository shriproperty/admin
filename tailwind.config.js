/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#9e7160",
				secondary: "rgba(0, 0, 0, 0.85)",
			},
		},
	},
	plugins: [],
};
