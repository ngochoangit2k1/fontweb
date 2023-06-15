/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				xxl: '1px 4px 4px rgba(0, 0, 0, 0.4);',
			},
			colors: {
				oranges: '#ff5d38',
			},
			listStyleImage: {
				checkmark: 'url("/img/checkmark.png")',
			},
		},
	},
	plugins: [require('daisyui')],
}
