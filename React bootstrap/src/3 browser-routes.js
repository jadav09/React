import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function BroserPra() {

  return (

    Rowting
// why use to browsor routing?
// ==> hame ancer tag ko replace karna hia , we need to use browser routin
// ==> routing use to redirect one componet to another component.
// ==> ancer tag se hum one page to anthor page pe ja sak te hai.

// ==> same as structor to BrowserRouter.but deffrent replace tag name with compnonet.

    // <div>
    //   <ul>
    //     <li>
    //         <a href="">home</a>
    //     </li>
    //   </ul>      
    // </div>


// npm install react-router-dom   ==> to use router component.
//                                ==>  witout install not use router component.

// strutor to BrowserRouter component

// <BrowserRouter>           // div

// <Link></Link>            // a 

// <Routes>                // ul
//     <Route> </Route>    //  li
// </Routes>

// </BrowserRouter>

  )
}

export default BroserPra
