module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000000",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#4F46E5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#111111",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#22C55E",
          foreground: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["PP Neue Montreal", "system-ui", "sans-serif"],
        display: ["PP Editorial New", "serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};