/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ['Cambria', 'Georgia', 'serif'],
      display: ['Cambria', 'Georgia', 'serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.375rem' }],
      base: ['1rem', { lineHeight: '1.625rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.875rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
      '5xl': ['3rem', { lineHeight: '3.25rem' }],
      h3: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
      h2: ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.25', fontWeight: '700' }],
      h1: ['clamp(1.875rem, 4vw, 2.75rem)', { lineHeight: '1.15', fontWeight: '700' }],
      display: ['clamp(2.25rem, 5.5vw, 3.75rem)', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.01em' }],
    },
    extend: {
      colors: {
        brand: {
          purple: '#5A3B5D',
          'purple-700': '#4A2F4D',
          'purple-300': '#AD88C7',
          yellow: '#FFC800',
          'yellow-600': '#E6B500',
          'yellow-100': '#FFF4CC',
          lavender: '#F2EBF4',
          'lavender-soft': '#FAF5FB',
          ink: '#1A1A1A',
          muted: '#6B6470',
        },
      },
      backgroundImage: {
        'number': "url('/number-35.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      maxWidth: {
        prose: '65ch',
        readable: '70ch',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        md: '0.625rem',
        lg: '0.875rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(90,59,93,.06), 0 6px 24px rgba(90,59,93,.08)',
        'card-hover': '0 2px 4px rgba(90,59,93,.08), 0 12px 32px rgba(90,59,93,.14)',
        focus: '0 0 0 3px rgba(255,200,0,.45)',
      },
      transitionDuration: {
        DEFAULT: '180ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(.2,.8,.2,1)',
      },
      ringColor: {
        DEFAULT: '#FFC800',
      },
      ringOffsetWidth: {
        DEFAULT: '2px',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 1.8s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents, theme }) {
      addComponents({
        '.focus-ring': {
          '&:focus-visible': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus'),
            borderRadius: theme('borderRadius.lg'),
          },
        },
        '.card-interactive': {
          transitionProperty: 'transform, box-shadow',
          transitionDuration: theme('transitionDuration.DEFAULT'),
          transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.card-hover'),
          },
          '&:focus-visible': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus'),
          },
        },
      })
    },
  ],
}
