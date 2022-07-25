/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'dark-gold': '#69483c',
				'light-gold':'#eaba6f',
				'med-gold':'#ce9b4b',
			},
			screens:{
				'md': '900px',
			},
		},
	},
	fontFamily:{
		'sans': ['Raleway']
	  },
	plugins: [],
}
