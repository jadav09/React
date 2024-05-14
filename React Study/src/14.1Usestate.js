import { useState } from "react"

function Use1()
{
    const [chk,setchek] = useState(false)

    return(
        
        <>
        {(chk)? "true":"false"}  

        <input type="checkbox" 
        onChange={(e)=>{setchek(e.target.checked)}}
        ></input>
        </>
    )
}

export default Use1