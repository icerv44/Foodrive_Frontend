import { createTheme, ThemeProvider, colors } from "@mui/material";
import Router from "./route/Router";
import { CssVarsProvider } from "@mui/joy/styles";
import { DeliveryContextProvider } from "./contexts/DeliveryContext";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 375,
    },
  },
  palette: {
    gray: "#858786",
    lightGray: "#fafdff",
    heart: "#FF1D1D",
    lightRed: "#fcd7d4",
    green: "#15BE77",
    lightGreen: "#dcf5eb",
    brown: "#DA6317",
    lightBrown: "#fbf4ec",
  },
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
    <ThemeProvider theme={theme}>
      <CssVarsProvider>
        <DeliveryContextProvider>
          <Router />
        </DeliveryContextProvider>
      </CssVarsProvider>
    </ThemeProvider>
  );
}

export default App;
