import { useReducer, useState } from "react"

function Main1()
{
    return(
        <>
        <Call/>
        </>
    )

}

function Inp()
{
    val [edit,setedit] = useState("")
    let [state,dispatch] = useReducer(fun,val)
    return(
        <>
        <input type="" name="" value={state} onClick={(e)=>{dispatch(e.target.value)}}/>
        <button>Add</button>
        </>
    )
}

function Call()
{

    return(
        <>
        <Inp/>
        </>
    )
}
