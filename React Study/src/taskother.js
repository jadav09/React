import { useState } from "react"

function Task()
{
    let d_tag =  document.querySelector(".x")
    
     let [edit,setedt] = useState(d_tag)
     console.log(edit)

     console.log(setedt)

    return(
        <>
        <div className="x"
        style={{
            background:"red",
            height:"200px",
            width:"200px"
        }}></div>
        <button>click me</button>
        </>
    )
}

export default Task