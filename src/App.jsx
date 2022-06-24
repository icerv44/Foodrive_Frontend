import { createTheme, ThemeProvider, colors } from "@mui/material";
import Router from "./route/Router";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: colors.blue[500],
  //   },
  // },
  components: {
    MuiContainer: {
      defaultProps: {
        style: {
          width: "375px",
          height: "812px",
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
