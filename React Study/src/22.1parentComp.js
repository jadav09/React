import { useContext } from "react"
import Child1 from "./22.2child1"
import Child2 from "./22.2child2"
import Child3 from "./22.3child3"

import { Property } from "./22 usecontextHooks"


function ParentsPro()
{

    let stor = useContext(Property)   // paraent property

    return(
        <>
        <div>
        <h1> Parents have a property of {stor}</h1> 
        <Child1/>
        <Child2/>
        <Child3/>

        </div>
        </>
    )
}

export default ParentsPro