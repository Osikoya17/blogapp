import React, { useContext } from "react";
import Home from "../src/pages/Homepage/Home"
// eslint-disable-next-line no-unused-vars
import Login from "./pages/Login/Login";
import {UserContext} from "./Context/Context";
const App = ()=> {  
  const usercontext  = useContext(UserContext)
  console.log(usercontext);
  return (
    <>
    {/* { usercontext.user ? <Home /> :<Login/>} */}
    <Home/>
    </>
  )
}
export default App;
