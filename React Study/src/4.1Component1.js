import React from "react"  //  without import React file Class component ERROR show karega.React.Component React file se a raha ahi.


// syntax of class Component:-


export default class Compo1 extends React.Component        // calss ko extends nahi to calss component show the ERROR.
{
    render()

    {
        return(
        <>
        

        <h1>Hello Class</h1>
        {/* <Compo2/>            call the function */}

        </>
        )
    }
}


export function Compo2()    // you can use maltiple export but call the app.js

{

return(
    <>
    <h1>Hello Function</h1>
    </>
)

}



// export default Compo1      // calss main inline export bhi kar sak te hahi.or direct bhi

// class or function main se ek hi export defualt hoga.
// ager kisi ek to export default  kiya to dusre ko call karna padega.