import Nav from "./components/Nav/Nav";
import Footer from "./components/footer/Footer.jsx";
import myContext from "./components/contextapi/Contextdata.js";
import Container from "./components/contextapi/Container.jsx";
import { useState } from "react";
import {ToastContainer} from "react-toastify"

function App(){
  const [logindata, setLogindata] = useState(
  !!localStorage.getItem("token")
);

  function login(token){
  localStorage.setItem("token", token);
  setLogindata(true);
}

  function logout(){
  localStorage.removeItem("token");
  setLogindata(false);
}

  return (
    <div>
      <ToastContainer/>
      <myContext.Provider value={{logindata, login, logout}}>
        {logindata && <Nav />}
        <Container />
        {logindata && <Footer />}
      </myContext.Provider>
    </div>
  );
}

export default App;