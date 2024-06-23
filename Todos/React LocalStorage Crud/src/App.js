import React from 'react'
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Add from './Add'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Edit from './Edit'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Link to={"/add"}></Link>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/edit/:eid' element={<Edit/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>



  )
}

export default App