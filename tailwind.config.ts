import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f2ea",
        warm: "#ebe2d5",
        ink: "#2e2f2c",
        stone: "#6d6a63",
        line: "#d8cec0",
        brass: "#a98858"
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          '"PingFang TC"',
          '"Microsoft JhengHei"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: ['"Noto Serif TC"', '"Songti TC"', "serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(46, 47, 44, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
