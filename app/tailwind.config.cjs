/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      title: '60px',
      'm-title': '48px',
      's-title': '30px',
      'ss-title': '21px',
      'm-s-title': '20px',
      'm-ss-title': '15px',
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
      'transparent': 'transparent',
      'gray-1': '#262626',
      'gray-2': '#333333',
      'gray-3': '#d6d6d6',
      'gray-4': '#282828',
      'gray-5': '#272727',
      'white': '#ffffff',
      'orange-1': '#d15000',
      'orange-2': "#ea5a00",
      'orange-1-t': 'rgba(234, 90, 0, 0.1)',
      'orange-1-md': 'rgba(234, 90, 0, 0.4)'
    },
    screens: {
      max:{ min: "1024px" },
      xxl:{ max: "1700px"},
			xl: { max: "1500px" },
			// => @media (max-width: 1279px) { ... }
			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }
			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }
			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
    dropShadow: {
      '3xl': '0 0 0.75rem rgba crimson',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },

    boxShadow: {
      '3xl': "120px 80px 40px 20px #d15000"
    }
  },
  plugins: [],
}
