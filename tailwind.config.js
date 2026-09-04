/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        mj: {
          bg: 'var(--mj-bg)',
          elevated: 'var(--mj-bg-elevated)',
          subtle: 'var(--mj-bg-subtle)',
          accent: 'var(--mj-accent)',
          text: 'var(--mj-text)',
          muted: 'var(--mj-muted)',
          faint: 'var(--mj-faint)',
        },
      },
      borderColor: {
        mj: 'var(--mj-border)',
        'mj-strong': 'var(--mj-border-strong)',
      },
    },
  },
  plugins: [],
};
