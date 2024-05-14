import { useContext } from "react"
import { Property } from "./22 usecontextHooks"

function Child3()
{
    let p = useContext(Property)
    
    return(
        <>
        <h1>Child3 have property of {p}</h1>
        </>
    )
}
export default Child3