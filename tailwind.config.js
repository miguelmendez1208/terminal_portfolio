import { createThemes } from "tw-colors";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      popOS: {
        bgcol: "#333333",
        shebang: "#4e9a06",
        symbol: "#3465a4",
        command: "rgb(255,255,255)",
        text: "rgb(255,255,255)"
      },
      ubuntu: {
        bgcol: "#300a24",
        shebang: "rgb(22, 101, 52)",
        symbol: "rgb(29, 78, 216)",
        command: "rgb(255,255,255)",
        text: "rgb(255,255,255)"
      },
      matrix: {
        bgcol: "#000",
        shebang: "rgb(13, 238, 22)",
        symbol: "rgb(13, 238, 22)",
        command: "rgb(255,255,255)",
        text: "rgb(255,255,255)"
      },
      arch: {
        bgCol: "rgb(51,51,51)",
        shebang: "rgb(29, 78, 216, 1)",
        symbol: "rgb(13, 238, 22, 1)",
        command: "rgb(255,255,255)", 
        text: "rgb(255,255,255)"
      },
      msdos: {
        bgCol: "#000",
        shebang: "#C0C0C0",
        symbol: "#C0C0C0",
        command: "#C0C0C0", 
        text: "#C0C0C0"
      },
      // Half-Life theme
      halfLife: {
        bgcol: "#1e1e1e", // Dark gray/brown background
        shebang: "#e67e22", // Orange for shebang
        symbol: "#bdc3c7", // Lighter gray for symbols
        command: "#ecf0f1", // Off-white for commands
        text: "#f39c12", // A touch of orange for text
      },
      // Solarized Dark theme (popular in many editors)
      solarizedDark: {
        bgcol: "#002b36",
        shebang: "#859900",
        symbol: "#268bd2",
        command: "#93a1a1",
        text: "#839496",
      },
      // Monokai theme (another popular editor theme)
      monokai: {
        bgcol: "#272822",
        shebang: "#a6e22e",
        symbol: "#f92672",
        command: "#fd971f",
        text: "#f8f8f2",
      },
      // Dracula theme
      dracula: {
        bgcol: "#282a36",
        shebang: "#50fa7b",
        symbol: "#bd93f9",
        command: "#ff79c6",
        text: "#f8f8f2",
      },
      solarizedLight: {
        bgcol: "#fdf6e3",
        shebang: "#859900",
        symbol: "#268bd2",
        command: "#657b83",
        text: "#586e75",
      },
      // Gruvbox Dark theme
      gruvboxDark: {
        bgcol: "#282828",
        shebang: "#98971a",
        symbol: "#458588",
        command: "#d79921",
        text: "#ebdbb2",
      },
      // Gruvbox Light theme
      gruvboxLight: {
        bgcol: "#fbf1c7",
        shebang: "#79740e",
        symbol: "#076678",
        command: "#b57614",
        text: "#3c3836",
      },
      // One Dark theme
      oneDark: {
        bgcol: "#282c34",
        shebang: "#98c379", // Green
        symbol: "#61afef", // Blue
        command: "#e5c07b", // Yellow/Orange
        text: "#abb2bf", // Grey
      },
      // Nord theme
      nord: {
        bgcol: "#2e3440",
        shebang: "#a3be8c", // Green
        symbol: "#81a1c1", // Blue
        command: "#ebcb8b", // Yellow
        text: "#d8dee9", // Light Blue/Grey
      },
    }),
  ],
};
