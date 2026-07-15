/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#ffffff',
        'bg-secondary': '#f8fafc',
        'bg-tertiary': '#f1f5f9',
        'bg-card': '#ffffff',
        'accent-blue': '#0ea5e9',
        'accent-sky': '#38bdf8',
        'accent-light': '#e0f2fe',
        'accent-green': '#22c55e',
        'accent-red': '#ef4444',
        'accent-yellow': '#eab308',
        'accent-purple': '#a855f7',
        'accent-pink': '#ec4899',
        'accent-teal': '#14b8a6',
        'accent-peach': '#f97316',
        'text-primary': '#0f172a',
        'text-secondary': '#475569',
        'text-muted': '#94a3b8',
        'border': '#e2e8f0',
        'border-hover': '#cbd5e1',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
