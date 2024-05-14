import { useReducer } from "react"
import { act } from "react-dom/test-utils"

function UseReducerHook()
{
    let intialval = {num : 0}

    let reducerFun =(sta,act)=>{   // sta = intioalval

        switch(act.type)
        {
            case "inc" : return {num:sta.num+1}
            case "dec" : return {num:sta.num-1}
            default : return    {sta}

        }
    }

      useReducer(reducerFun,intialval)  

      const [state,setstate] = useReducer(reducerFun,intialval)  // stor reducer val to desturcuring assingment.

//   consept :-

  // Usereducer() can tak two peramiters.
  // state == intialval
  // reducerFun can tak two paramitters.
  // reducerFun ka first Parameter == always intialval  (STATE )
  // reducerFun ka secound Parameter == ACTION
  // dispach hoti hai button click pe ==> action =>{} ==> secound perameter

    return(
        <>

        <button onClick={()=>{setstate({type:"inc"})}}>+</button>

        <h1>{state.num}</h1>

        <button onClick={()=>{setstate({type:"dec"})}}>-</button>

        </>
    )
}

export default UseReducerHook
