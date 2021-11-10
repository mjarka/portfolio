import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  shape: {
    borderRadius: 18,
  },
  palette: {
    primary: {
      main: "#fea907",
    },
    background: {
      default: "#565352",
    },
  },
  typography: {
    button: {
      fontWeight: 500,
      fontFamily: "Barlow",
      fontSize: [13, "!important"],
    },
    h1: {
      fontWeight: 700, // or 'bold'
      fontSize: [70, "!important"],
      color: "#efebe5",
    },
    h3: {
      fontWeight: 700,
      color: "#efebe5",
      lineHeight: 1,
    },
    body1: {
      fontWeight: 500,
      color: "#efebe5",
      fontSize: [25, "!important"],
      lineHeight: 1.1,
    },
    body2: {
      fontFamily: "Barlow",
      fontWeight: 500,
      color: "#efebe5",
      fontSize: [14, "!important"],
      lineHeight: 1.2,
    },
    fontFamily: [
      "Barlow Condensed",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
theme = responsiveFontSizes(theme);
export default theme;
