export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        navy: {
          dark: '#0a192f',
          medium: '#112240',
          light: '#1b2a41',
        },
        accent: {
          gold: '#d4a574',
          amber: '#f59e0b',
        },
        cream: '#f4f1e8',
        slate: '#8892b0',
      },
    },
  },
  plugins: [],
}