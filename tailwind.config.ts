import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        brand: {
          50: "#f4f3ff",
          100: "#ebe9fe",
          200: "#dad6fe",
          300: "#c0b5fd",
          400: "#a38bfa",
          500: "#875df5",
          600: "#773cec",
          700: "#682bd7",
          800: "#5724b4",
          900: "#492093",
        },
        brandDark: {
          100: "#dedbf6",
          200: "#bdb7eb",
          300: "#9f94e2",
          400: "#8170d8",
          500: "#654dce",
          600: "#513ea5",
          700: "#3d2e7c",
          800: "#271e52",
          900: "#130f2a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
