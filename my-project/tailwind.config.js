/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
			Urbanist: ['"Urbanist"', "sans-serif"],
			Fira: ['"Fira Sans"', "sans-serif"],
		},
  },
  plugins: [],
}

