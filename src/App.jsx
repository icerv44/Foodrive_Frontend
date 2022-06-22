import { useState } from "react";

import "./App.css";

import Buttontest from "./component/ButtonCreateAccount";
import ButtonGoogleLogin from "./component/ButtonGoogleLogin";
import ButtonLogin from "./component/ButtonLogin";
import CardHome from "./component/CardHome";
function App() {
  // const [count, setCount] = useState(0);

  return (
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
  );
}

export default App;
