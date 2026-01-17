export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        blush: "#FDE2E4",
        "blush-dark": "#F9BEC7",
        lavender: "#E2E2FF",
        mint: "#E2F4F1",
        "soft-gray": "#F8F9FA",
        "accent-pink": "#E19898",
        "text-main": "#3D3D3D",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
};
