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

<<<<<<< HEAD
=======
import Buttontest from "./component/ButtonCreateAccount";
import ButtonGoogleLogin from "./component/ButtonGoogleLogin";
import ButtonLogin from "./component/ButtonLogin";
import CardHome from "./component/CardHome";
>>>>>>> 46c2306204a41a511600fb2fa03423c02660b297
function App() {
  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
=======
    // <div className="App">
    //   <ButtonLogin
    //     height="57px"
    //     width="141px"
    //     borderRadius="15px"
    //     background="linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)"
    //     color="white"
    //     text="Login"
    //   />
    // </div>

    <>
      <CardHome Name="Pizza Hut (พิซซ่าฮัท) - กทม." Time="12" Distance="3.5" />
    </>
>>>>>>> 46c2306204a41a511600fb2fa03423c02660b297
  );
}

export default App;
