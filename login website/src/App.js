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
import AddtocartThriller from './AddtocartThriller';
import AddtocartFantasy from './AddtocartFantasy';
import AddtocartSince from './AddtocartSince';
import AddtocartAdvanture from './AddtocartAdvanture';
import AddtocardPoetry from './AddtocardPoetry';


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Link to={"/"}></Link>
        <Routes>

          <Route path={"/"} element={<Website />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/singup"} element={<Sinup/>}></Route>
          <Route path={"/horror"} element={<Horror/>}></Route>
          <Route path={"/thriller"} element={<Thriller/>}></Route>
          <Route path={"/fantasy"} element={<Fantasy/>}></Route>
          <Route path={"/since"} element={<Since/>}></Route>
          <Route path={"/adnavture"} element={<Advanture/>}></Route>
          <Route path={"/poetry"} element={<Poetry/>}></Route>
          
          <Route path={"/addtocart/:addcardid"} element={<AddtocartHorror/>}></Route>
          <Route path={"/addthril/:thrid"} element={<AddtocartThriller/>}></Route>
          <Route path={"/addfant/:fantsy"} element={<AddtocartFantasy/>}></Route>
          <Route path={"/addsince/:scid"} element={<AddtocartSince/>}></Route>
          <Route path={"/advantur/:advid"} element={<AddtocartAdvanture/>}></Route>
          <Route path={"/poetry/:poid"} element={<AddtocardPoetry/>}></Route>
        </Routes>

      </BrowserRouter>
      


    </div>

  );
}

export default App;
