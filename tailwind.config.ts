import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/client/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Radiance", "Noto Sans", "sans-serif"],
      },
      colors: {
        primaryBlack: "#1e2328",
        primaryColor: "#ffffff",
        secondaryColor: "#9b9b9b",
        tertiaryColor: "#454545",
        containerGradientLeft: "#252728",
        containerGradientRight: "#101415",
        hpBarGradientLeft: "#286323",
        hpBarGradientRight: "#7af03c",
        manaBarGradientLeft: "#1056db",
        manaBarGradientRight: "#73f5fe",
      },
    },
  },
  plugins: [],
};
export default config;
