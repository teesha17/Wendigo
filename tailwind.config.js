// tailwind.config.js
export default  {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dot-grid":
          "radial-gradient(#dbeafe 2px, transparent 2px)",
      },
      backgroundSize: {
        "dot-grid": "24px 24px",
      },
      colors: {
        card: "#ffffff",
        muted: "#6b7280",
        primary: "#2563eb",
        iconBg: "#e0edff",
      },
    },
  },
  plugins: [],
};
