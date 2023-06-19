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
				blues: '#0d6bf6',
				blueHover: '#074a81',
				rings: '#add7f9',
				whites: '#ffffff',
				blacks: '#000000',
				reds: '#ff0000',
			},
			listStyleImage: {
				checkmark: 'url("/img/checkmark.png")',
			},
		},
	},
	plugins: [require('daisyui')],
}
