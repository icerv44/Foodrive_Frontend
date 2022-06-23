import { createTheme, ThemeProvider, colors } from "@mui/material";
import Router from "./route/Router";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "IBM Plex Sans",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        style: {
          fontSize: "30px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
