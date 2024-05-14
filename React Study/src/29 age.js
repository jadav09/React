import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers"
import { useReducer } from "react"

function Redu()
{

    let val = {
        name:"",
        age:26
    }

    let fun = (state,action)=>{

        console.log(action.type)
        switch(action.type)
        {
            case "xyz" :
                return{
                    ...state,       
                    name:action.ontyppe
                }
            case "cng":
                return{
                    ... state,        // witout copy object click pe other data(name vala) remove hoga.
                    age:state.age+1}
        }
        
    }

    let [state,dispatch] = useReducer(fun,val)


let hendle = (e)=>{
    dispatch({type:"xyz",ontyppe:e.target.value})
}
let changeAge = (c)=>{

    dispatch({type:"cng"})
}

    
 return(
    <>
<input type="" name="" value={state.name} onChange={hendle}/>
<button onClick={changeAge}>Age</button>
<h4>your name is {state.name}</h4>
<h3>your age is = {state.age}</h3>

    </>
 )
}

export default Redu