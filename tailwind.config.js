/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		maxWidth: {
  			"container-max": "1280px",
  		},
  		spacing: {
  			"margin-mobile": "20px",
  			"margin-desktop": "80px",
  			"section-gap": "120px",
  		},
  		fontFamily: {
  			"tk-headline": ['"Noto Serif"', "ui-serif", "Georgia", "serif"],
  			"tk-body": ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
  		},
  		fontSize: {
  			"tk-display-lg": [
  				"64px",
  				{ lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
  			],
  			"tk-headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
  			"tk-headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
  			"tk-headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
  			"tk-body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
  			"tk-body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
  			"tk-label-md": [
  				"14px",
  				{ lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" },
  			],
  		},
  		colors: {
  			tk: {
  				primary: "#012d1d",
  				"primary-container": "#1b4332",
  				background: "#fcf9f8",
  				surface: "#fcf9f8",
  				"surface-container": "#f0eded",
  				"surface-container-high": "#eae7e7",
  				"surface-container-low": "#f6f3f2",
  				"on-surface": "#1b1c1c",
  				"on-surface-variant": "#414844",
  				"on-background": "#1b1c1c",
  				"outline-variant": "#c1c8c2",
  				outline: "#717973",
  				secondary: "#7f552f",
  				"secondary-container": "#ffc697",
  				"on-secondary-container": "#7a512b",
  				"secondary-fixed": "#ffdcc1",
  				"secondary-fixed-dim": "#f3bb8d",
  				"on-secondary-fixed": "#2e1500",
  				tertiary: "#262625",
  				"tertiary-container": "#3c3c3a",
  				"primary-fixed": "#c1ecd4",
  				"primary-fixed-dim": "#a5d0b9",
  				"on-primary-container": "#86af99",
  				"on-primary-fixed": "#002114",
  				"on-primary-fixed-variant": "#274e3d",
  				"on-tertiary-fixed": "#1c1c1a",
  				"on-tertiary-fixed-variant": "#474745",
  				"on-secondary": "#ffffff",
  				"on-tertiary": "#ffffff",
  				"on-primary": "#ffffff",
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};