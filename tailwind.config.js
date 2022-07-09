module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}
