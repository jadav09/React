import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar1 from "./Navbar1";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Registraion from "./Registraion";
import Login from "./Login";
import { createContext, useState } from "react";

export let userLogin = createContext()

function App() {

  let [login, setlogin] = useState("")
  let [edit, setedit] = useState(true)

  return (

    <div className="app">

      <BrowserRouter>
        <Link to={"/"}></Link>

        <userLogin.Provider value={{ login, setlogin, edit, setedit }}>


          <Routes>

            <Route path="/" element={<Navbar1 />}></Route>
            <Route path="/regi" element={<Registraion />}></Route>
            <Route path="/log" element={<Login />}></Route>

          </Routes>
        </userLogin.Provider>
      </BrowserRouter>



    </div>

  );
}

export default App;
