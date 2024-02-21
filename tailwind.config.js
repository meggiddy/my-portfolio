/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  content: [],
  theme: {
    extend: {
      display: ["group-hover"],
      animation: {
        'ping-slow': 'ping 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

