import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Addemp from './Addemp';
import Home from './Home';
import View from './View';
import Edit from './Edit';


function App() {
  return (
    <div className="App">
      

<BrowserRouter>
<Link to={"/"}>Home</Link>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/addemp" element={<Addemp/>}></Route>
  <Route path="/view/:vid" element={<View/>}></Route>
  <Route path="/edit/:eid" element={<Edit/>}></Route>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
