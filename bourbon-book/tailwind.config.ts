import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: colors.blue[500],
      "dark-blue": colors.blue[900],
      red: colors.red[600],
      white: colors.white,
      green: colors.green[500],
      amber: colors.amber[500],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
