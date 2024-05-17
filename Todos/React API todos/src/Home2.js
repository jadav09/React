import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Table2 from "./Table2";
import Form2 from "./Form2";
import View2 from "./View2";
import Edit2 from "./Edit2";

function Home2() {
  return( 
  <div>
    <Link to={"/"}>Home</Link>
<Routes>
  <Route path="/" element={<Table2/>}></Route>
  <Route path="/form" element={<Form2/>}></Route>
  <Route path="/view/:id" element={<View2/>}></Route>
  <Route path="/Edit/:editid" element={<Edit2/>}></Route>
</Routes>

  </div>
  )
}

export default Home2;
