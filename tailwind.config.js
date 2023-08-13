/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        ssm: "340px",
        sm: "480px",
        md: "740px",
        mdp: "1000px",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|green|blue)-(100|200|300|400|500|600|700)/,
      variants: ["mdp", "hover", "mdp:hover:"],
    },
    {
      pattern: /border-(red|green|blue)-(100|200|300|400|500|600|700)/,
      variants: ["mdp", "hover", "mdp:hover:"],
    },
    {
      pattern: /text-(red|green|blue)-(100|200|300|400|500|600|700)/,
      variants: ["mdp", "hover", "mdp:hover:"],
    },
    {
      pattern: /text-(white|black)/,
      variants: ["mdp", "hover", "mdp:hover:"],
    },
  ],
};
