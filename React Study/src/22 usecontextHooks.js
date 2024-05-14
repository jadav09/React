import { createContext, useContext } from "react"
import ParentsPro from "./22.1parentComp"



export  let Property = createContext() 
     // first create propety. use bad main karegne.
     // without export property hum another file main nahi le ja sak te hai.

function UseContextHooks()
{
    return(
        <>
    <Property.Provider value={12000}>  {/* provide propety to Parents */}
    {/*value attribute main kuch bhi pass kar sa te hai. string,number,array object any thing */}
        <ParentsPro/>
    </Property.Provider>

    

        </>
    )
}

export default UseContextHooks


//   useContextHook se hum kisi bhi component mian data pass kar sak te hai.
//=> you can pass data any component or child.

// step:-

// first:- creatContext() se data creat karenge. first create bad main useContextHooks.
// secound:- data provider tag se data provide karna padega.tab parent ke pass property ayegi.
// ab parent direct child 3 ko property de sak te hai.