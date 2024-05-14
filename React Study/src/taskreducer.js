import { useReducer } from "react"

let val = {num:1}

function Reduser()
{
    let fun = (state,action)=>{
  
        switch(action.name)
        {
            case "jadav" : return {num:state.num+1}
            case "jadav1" : return {num:state.num-1}
        }

    }

    let [state,dispatch] = useReducer(fun,val)

    return(    
        <>
        <button onClick={()=>dispatch({name:"jadav"})}>+</button>

        {state.num}

        <button onClick={()=>dispatch({name:"jadav1"})}>-</button>
        </>
    )
}

export default Reduser