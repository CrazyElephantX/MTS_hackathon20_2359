import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        ripple: "ripple-effect 0.9s ease 1 forwards",
      },
      keyframes: {
        "ripple-effect": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(10)",
            opacity: "0.375",
          },
          "100%": {
            transform: "scale(35)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
