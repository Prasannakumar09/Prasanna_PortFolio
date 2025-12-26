/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#22D3EE',
        accent: '#A855F7',
      }
    },
  },
  safelist: [
    // Backgrounds
    'bg-white',
    'bg-white/70',
    'bg-blue-50',
    'bg-gradient-to-b',
    'bg-gradient-to-t',

    // Gradients
    'from-white',
    'from-blue-50',
    'to-white',

    // Text colors
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-gray-900',
    'text-primary',
    'text-secondary',
    'text-accent',

    // Borders & shadows
    'border',
    'border-gray-200',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',

    // Effects
    'backdrop-blur-xl',
  ],
  plugins: [],
}
