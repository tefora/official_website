// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         dark: "#020202",
//         primary: "#05F1FE",
//         "grey-200": "#a2a3ac",
//         "grey-400": "#ADADAD",
//       },
//       backgroundImage: {
//         "hero-pattern": "url('./assets/bg-img.jpg')",
//         "cta-bg": "url('./assets/bg-2.jpg')",
//         "bg-service":"url('./assets/bg-service.jpg')",
//         "bg-web":"url('./assets/bg-web.png')"
//       },
//       opacity: {
//         "01": "0.1",
//       },
//     },
//     plugins: [],
//   },
// };


const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#020202",
        primary: "#05F1FE",
        "grey-200": "#a2a3ac",
        "grey-400": "#ADADAD",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/bg-img.png')",
        "cta-bg": "url('./assets/bg-2.jpg')",
        "bg-service":"url('./assets/bg-service.png')",
        "bg-web":"url('./assets/bg-web.png')"
      },
      opacity: {
        "01": "0.1",
      }, fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
    plugins: [],
  },
});