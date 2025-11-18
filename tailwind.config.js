/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#651fff",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f8f6ff",
          100: "#f0ebff",
          500: "#651fff",
          600: "#5a1ce6",
          700: "#4f18cc",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors - The Comeback Code V1 (Authoritative)
        'cc-blue-royal': '#0B3D91',
        'cc-gold-metal': '#FFD700',
        'cc-blue-deep': '#062B63',
        'cc-gold-light': '#FFE68C',
        'cc-ivory': '#F8F7F2',
        'cc-slate': '#5C6B8A',
        'cc-charcoal': '#333333',
        'cc-white': '#FFFFFF',
        'cc-teal': '#3CAEA3',
        'cc-coral': '#E07A5F',
        'cc-sand': '#EDE6D0',
        'cc-sky': '#BFD7EA',
        'cc-olive': '#C1A66B',
        
        // Legacy compatibility (deprecated - use cc-* tokens)
        comeback: {
          DEFAULT: '#0B3D91',
          50: '#E6F0FF',
          100: '#CCE1FF',
          500: '#0B3D91',
          600: '#062B63',
          700: '#082B70',
        },
        gold: {
          DEFAULT: '#FFD700',
          50: '#FFFEF0',
          100: '#FFE68C',
          500: '#FFD700',
          600: '#FFDF33',
        },
        amethyst: {
          DEFAULT: '#0B3D91',
          50: '#E6F0FF',
          100: '#CCE1FF',
          500: '#0B3D91',
          600: '#062B63',
          700: '#082B70',
        },
        lavender: {
          DEFAULT: "#f8f6ff",
          50: "#fefeff",
          100: "#f8f6ff",
        },
        rose: {
          DEFAULT: "#ffb3a7",
          50: "#fff5f4",
          100: "#ffe5e2",
          400: "#ffb3a7",
          500: "#ff9b8d",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.1)' },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(51 65 85)',
            '--tw-prose-headings': 'rgb(15 23 42)',
            '--tw-prose-links': '#651fff',
            '--tw-prose-code': 'rgb(51 65 85)',
            '--tw-prose-pre-bg': 'rgb(241 245 249)',
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
} 