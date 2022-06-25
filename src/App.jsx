import { createTheme, ThemeProvider, colors } from "@mui/material";
import Router from "./route/Router";
import { CssVarsProvider } from "@mui/joy/styles";

const theme = createTheme({
  palette: {
    green: "#15BE77",
    gray: "#858786",
    lightGray: "#fafdff",
    heart: "#FF1D1D",
    lightRed: "#fcd7d4",
    green: "#15BE77",
    lightGreen: "#dcf5eb",
    brown: "#DA6317",
    lightBrown: "#fbf4ec",
  },
  // typography: {},
  components: {
    MuiContainer: {
      defaultProps: {
        style: {
          width: "375px",
        },
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </CssVarsProvider>
  );
}

export default App;
