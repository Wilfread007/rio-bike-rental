/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0b1f3a", lane: "#ff5a36", sea: "#0e9f7e", paper: "#f4faf7", dusk: "#14304f" },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      keyframes: {
        ride: { "0%": { transform: "translateX(-300px)" }, "100%": { transform: "translateX(calc(100vw + 300px))" } },
        dash: { to: { transform: "translateX(-96px)" } },
        drift: { "0%": { transform: "translateX(-20vw)" }, "100%": { transform: "translateX(120vw)" } },
        sunrise: { "0%": { transform: "translateY(120px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
        bounce2: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-3px)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        pop: { "0%": { transform: "scale(.9)", opacity: "0" }, "100%": { transform: "scale(1)", opacity: "1" } },
        sway: { "0%,100%": { transform: "rotate(-2deg)" }, "50%": { transform: "rotate(2deg)" } },
      },
      animation: {
        ride: "ride 12s linear infinite",
        dash: "dash 1.2s linear infinite",
        drift: "drift 60s linear infinite",
        sunrise: "sunrise 2.4s ease-out both",
        wheel: "spin .6s linear infinite",
        bob: "bounce2 .5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pop: "pop .8s ease-out both",
        sway: "sway 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
