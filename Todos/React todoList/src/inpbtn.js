import { useState } from "react"

function Inp({OnAdd})

{
    const [val,setval] = useState("")

    return(
        <div>
        <input type="text" name="" value={val} onChange={(e)=>{setval(e.target.value)}}/>
        <button onClick={()=>{
            OnAdd(val)
        }}>Add</button>
        </div>
    )

}
export default Inp