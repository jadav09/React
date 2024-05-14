import { useState } from "react"

// import { useState } from "react"



function Dtask()
{
    
    let obj = {
        height:"100px",
        width:"100px",
        background:"red"
    }
    
     let [efe,setefe] = useState(obj)

    let test = ()=>{
        setefe(
    {background:"green",
    height:"100px",
    width:"100px",
    color:"white"
    })
    }

    return(

        <>
    <div style={efe}>hello</div>
    <button onClick={test}>click</button>
        </>
    )
}

export default Dtask

