import { useEffect, useState } from "react"

let obj = {

    height:"200px",
    width:"200px",
    background:"red"
}

function Efe()
{
    let [edit,setedit] = useState(obj)

    useEffect(()=>{

            setedit({

                height:"200px",
                width:"200px",
                background:"green"
                
            })
        }
    
    )
  

    return(
        <>
        <div style={edit}>hello</div>
        <button>Click</button>
        </>
    )
}

export default Efe