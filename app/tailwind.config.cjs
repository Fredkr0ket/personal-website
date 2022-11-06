/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      title: '60px',
      's-title': '25px',
      'ss-title': '21px',
      desc: '18px',
    },
    extend: {},
    // margin: {
    //   '12': '12.5%',
    //   '25': '25%',
    //   '33': '33%',
    //   '50': '50%',
    //   '62': '62.5%',
    //   '75': '75%',
    // },
    // maxWidth: {
    //   '12': '12.5%',
    //   '25': '25%',
    //   '33': '33%',
    //   '50': '50%',
    //   '62': '62.5%',
    //   '75': '75%',
    // },
    colors: {
      'gray-1': '#262626',
      'gray-2': '#333333',
      'gray-3': '#d6d6d6',
      'white': '#ffffff',
      'orange-1': '#d15000',
      'orange-2': "#ea5a00",
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }
			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }
			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }
			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}
