export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "45p": "45%",
      },
      boxShadow: {
        shade1:
          "0px 8px 12px -6px rgba(35, 21, 91, 0.05), 0px 14px 64px -4px rgba(35, 21, 91, 0.05)",
      },
      colors: {
        grey1: "#928CAB",
        primary: "#8053FF",
        "primary-dark": "#23155B",
        "primary-light": "#FBFAFF",
      },
    },
  },
  plugins: [],
};
