/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)', 
      brightRedSupLight: 'hsl(12, 88%, 95%)',
      darkBlue: 'hsl(222, 26%, 23%)', 
      darkGrayishBlue: 'hsl(210, 14%, 61%)', 
      veryDarkBlue: 'hsl(234, 12%, 13%)', 
      veryPaleRed: 'hsl(6, 53%, 96%)', 
      veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}

