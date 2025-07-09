/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        script: ["var(--font-dancing)", "Dancing Script", "cursive"],
      },
      colors: {
        "warm-white": "#fefdf8",
        "soft-gray": "#f5f4f0",
        charcoal: "#2a2a2a",
        "ash-gray": "#6b6b6b",
        "light-ash": "#9a9a9a",
        "deep-olive": "#556b2f",
        "olive-light": "#6b7f3f",
        "paper-texture": "#faf9f5",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gentle-pulse": "gentlePulse 3s ease-in-out infinite",
        "sketch-draw": "sketchDraw 2s ease-in-out",
        "slide-left": "slideInLeft 1s ease-out",
        "slide-right": "slideInRight 1s ease-out",
        "slide-up": "slideInUp 1s ease-out",
        "fade-in": "fadeIn 1s ease-out",
        wiggle: "wiggle 2s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(0.5deg)" },
          "50%": { transform: "translateY(-15px) rotate(0deg)" },
          "75%": { transform: "translateY(-5px) rotate(-0.5deg)" },
        },
        gentlePulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        sketchDraw: {
          "0%": { strokeDasharray: "0 100" },
          "100%": { strokeDasharray: "100 0" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-100px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(100px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInUp: {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        wiggle: {
          "0%, 7%": { transform: "rotateZ(0)" },
          "15%": { transform: "rotateZ(-2deg)" },
          "20%": { transform: "rotateZ(2deg)" },
          "25%": { transform: "rotateZ(-1deg)" },
          "30%": { transform: "rotateZ(1deg)" },
          "35%": { transform: "rotateZ(-0.5deg)" },
          "40%, 100%": { transform: "rotateZ(0)" },
        },
      },
    },
  },
  plugins: [],
};
