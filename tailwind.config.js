module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorsmint: "var(--colorsmint)",
        colorsorange: "var(--colorsorange)",
        colorsteal: "var(--colorsteal)",
        "dark-modedark-mode-50": "var(--dark-modedark-mode-50)",
        "errorred-400": "var(--errorred-400)",
        "errorred-600": "var(--errorred-600)",
        "light-green": "var(--light-green)",
        "neutral-gray-100": "var(--neutral-gray-100)",
        "neutral-gray-300": "var(--neutral-gray-300)",
        "neutral-gray-400": "var(--neutral-gray-400)",
        "neutral-gray-50": "var(--neutral-gray-50)",
        "neutral-gray-500": "var(--neutral-gray-500)",
        "neutral-gray-600": "var(--neutral-gray-600)",
        "neutral-gray-700": "var(--neutral-gray-700)",
        "neutral-gray-900": "var(--neutral-gray-900)",
        "neutralgray-200": "var(--neutralgray-200)",
        "primaryblue-100": "var(--primaryblue-100)",
        "primaryblue-50": "var(--primaryblue-50)",
        "project-blue": "var(--project-blue)",
        "project-green": "var(--project-green)",
        "project-primary-dark": "var(--project-primary-dark)",
        "shade-project-blue": "var(--shade-project-blue)",
        shadesblack: "var(--shadesblack)",
        shadeswhite: "var(--shadeswhite)",
        "tint-project-blue": "var(--tint-project-blue)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
      },
      fontFamily: {
        "caption-semi-bold": "var(--caption-semi-bold-font-family)",
        "footer-CAP": "var(--footer-CAP-font-family)",
        "heading-h1-semi-bold": "var(--heading-h1-semi-bold-font-family)",
        "heading-h2-bold": "var(--heading-h2-bold-font-family)",
        "heading-h2-small-bold": "var(--heading-h2-small-bold-font-family)",
        "heading-h2-small-semi-bold":
          "var(--heading-h2-small-semi-bold-font-family)",
        "heading-h3-semi-bold": "var(--heading-h3-semi-bold-font-family)",
        "heading-h3-small-bold": "var(--heading-h3-small-bold-font-family)",
        "heading-h3-small-semi-bold":
          "var(--heading-h3-small-semi-bold-font-family)",
        "heading-h4-bold": "var(--heading-h4-bold-font-family)",
        "heading-h4-semi-bold": "var(--heading-h4-semi-bold-font-family)",
        "heading-h4-small-semi-bold":
          "var(--heading-h4-small-semi-bold-font-family)",
        "heading-h5-bold": "var(--heading-h5-bold-font-family)",
        "heading-h5-semi-bold": "var(--heading-h5-semi-bold-font-family)",
        "heading-h6-semi-bold": "var(--heading-h6-semi-bold-font-family)",
        "paragraph-p1-regular": "var(--paragraph-p1-regular-font-family)",
        "paragraph-p2-regular": "var(--paragraph-p2-regular-font-family)",
        "paragraph-p2-semi-bold": "var(--paragraph-p2-semi-bold-font-family)",
        "paragraph-p3-regular": "var(--paragraph-p3-regular-font-family)",
        "paragraph-p3-semi-bold": "var(--paragraph-p3-semi-bold-font-family)",
        "subheading-semi-bold": "var(--subheading-semi-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "shadow-XS": "var(--shadow-XS)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
