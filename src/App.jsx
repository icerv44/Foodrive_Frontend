import { createTheme, ThemeProvider } from "@mui/material";
import Router from "./route/Router";
import { CssVarsProvider } from "@mui/joy/styles";
import { DeliveryContextProvider } from "./contexts/DeliveryContext";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        desktop: 375,
      },
    },
    palette: {
      gray: { main: "#858786" },
      lightGray: "#fafdff",
      red: {
        main: "#FF1D1D",
        light: "#fcd7d4",
      },
      heart: "#FF1D1D",
      green: { main: "#15BE77", light: "#dcf5eb" },
      brown: { main: "#DA6317", light: "#fbf4ec" },
    },
    components: {
      MuiModal: { styleOverrides: { root: { zIndex: 100 } } },

      MuiContainer: {
        defaultProps: {
          style: {
            width: "375px",
          },
        },
      },
    },
  });
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
