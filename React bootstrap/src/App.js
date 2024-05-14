import React from 'react';
import Rout from './3.1 Routing';
import './App.css';
import Drowtable from './5 dataFetchOnTable';
import { BrowserRouter } from 'react-router-dom';
import Links1 from './5.2router';






// import Load from './lazy-load';  // direct impoet kiya to direct hi how karega.

// lazy load ka use hum jab hamara net slow hai tab kuch or content dikhan hai tab use karte ahi.
// import karna hai lekin alga ways main.

// let Load = React.lazy(()=>(import("./4 lazy-load"))) //imort this way

// import ko React.Suspence Components main call karana hai.
// React.Suspense ke prob main net show main jo show karvana hia wo ayeg.



function App() {
  return (
    <>
    {/* <Rout/> */}

    {/* <React.Suspense fallback={<>img,text,comment,etc...</>}> 
      <Load/>
    </React.Suspense> */}

    

    <BrowserRouter>
    <Links1/>
    </BrowserRouter>

    </>
  );
}

export default App;
