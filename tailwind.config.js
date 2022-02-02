module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#313131',
        'dark-secondary': '#131723',
        'yellow-primary': '#F7B733',
        'red-velvet': '#FC4A1A',
        'grey-secondary': '#E5E5E5',
        'pink-primary': '#FF7171',
        'blue-indigo': '#3D495E',
        'cta-bg': '#bbd0ff',
        'card-bg': '#1e293c',
        'accent-bg': '#666d7a',
        'tertiary-text': '#acb1b8',
        'secondary-text': '#cfd2d6',
        'silver-grey': '#bbd0ff',
        'cyan-light': '#00FFEB',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      animation: {
        bounce200: 'bounce 1s linear infinite 200ms',
        bounce400: 'bounce 1s linear infinite 400ms',
        bounce600: 'bounce 1s linear infinite 600ms',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
