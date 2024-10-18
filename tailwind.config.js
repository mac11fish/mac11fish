const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    fontSize: {
      xs: ['9px', '20px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'bounce-fast': 'bounce-fast 1s linear infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
darkTheme: "darkx",
  darkMode: ["selector", "[data-theme='darkx']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        darkx: {
          primary: "#f0f",
          "primary-content": "#fff",
          secondary: "#f08",
          "secondary-content": "#fff",
          accent: "#0ff",
          "accent-content": "#00f",
          neutral: "#888",
          "neutral-content": "#ffffff",
          "base-100": "#000",
          "base-200": "#000",
          "base-300": "#000",
          "base-content": "#f0f",

          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },

        {lightx: {
          primary: "#ff0",
          "primary-content": "#fff",
          secondary: "#80f",
          "secondary-content": "#fff",
          accent: "#ff0",
          "accent-content": "#00f",
          neutral: "#888",
          "neutral-content": "#ffffff",
          "base-100": "#00f",
          "base-200": "#000",
          "base-300": "#000",
          "base-content": "#fff",

          
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
        
      },
    ],
  },


};



