import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Website from './Website';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Link } from 'react-router-dom';
import Login from './Login';
import Sinup from './Sinup';
import Horror from './Horror';
import Thriller from './Thriller';
import Fantasy from './Fantasy';
import Since from './Since';
import Advanture from './Advanture';
import Poetry from './Poetry';
import AddtocartHorror from './AddtocartHorror';
import Buy from './Buy';
import { createContext, useState } from 'react';

export let Userlogin = createContext()


// installation:-

// ==> npm i bootstrap
// ==> npm i react-bootstrap
// ==> npm i react-redux
// ==> npm i react-router-dom
// ==> npm i react-toastify
// ==> npm i @reduxjs/toolkit
// ==> npm i json-server
// ==> npm i json-server --watch horror.json --port 4003
// ==> npm i json-server --watch addtocart.json --port 4009



function App() {
  
  let [loginname,setloginname] = useState("")
  let [price,setprice] = useState("")
  let [logoutuser,setlogoutuser] = useState(true)

console.log(price)
  return (

    <div className="App">



      <BrowserRouter>
        <Link to={"/"}></Link>

        <Userlogin.Provider value={{loginname,setloginname,logoutuser,setlogoutuser,setprice,price}}>
          <Routes>

            <Route path={"/"} element={<Website />}></Route>
            <Route path={"/login"} element={<Login />}></Route>
            <Route path={"/singup"} element={<Sinup />}></Route>
            <Route path={"/horror"} element={<Horror />}></Route>
            <Route path={"/thriller"} element={<Thriller />}></Route>
            <Route path={"/fantasy"} element={<Fantasy />}></Route>
            <Route path={"/since"} element={<Since />}></Route>
            <Route path={"/adnavture"} element={<Advanture />}></Route>
            <Route path={"/poetry"} element={<Poetry />}></Route>

            <Route path={"/addtocart"} element={<AddtocartHorror />}></Route>
            <Route path={"/addthril"} element={<AddtocartHorror />}></Route>
            <Route path={"/addfant"} element={<AddtocartHorror />}></Route>
            <Route path={"/addsince"} element={<AddtocartHorror />}></Route>
            <Route path={"/advantur"} element={<AddtocartHorror />}></Route>
            <Route path={"/poetry1"} element={<AddtocartHorror />}></Route>
            <Route path={"/buy/:buyid"} element={<Buy/>}></Route>
          </Routes>

        </Userlogin.Provider>

      </BrowserRouter>



    </div>

  );
}

export default App;
