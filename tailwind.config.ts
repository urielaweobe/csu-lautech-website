import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "csu-blue": "#007bff",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
