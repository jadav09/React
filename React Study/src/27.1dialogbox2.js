import { useEffect, useRef, useState } from "react"

function Dialogbox2()
{
    let [edit,setedit] = useState(false)

    return(
        <>
        <button onClick={()=>{setedit(true)}}>OpenBox</button>
        <Box2 x={edit}>
            <h1>HELLO ALER...!!!</h1>
            <button onClick={()=>{setedit(false)}}>X</button>
        </Box2>
        </>
    )
}

function Box2({children,x})
{
    let dialog = useRef()

    useEffect(()=>{
    console.log(dialog.current)  // get the dialog tag.
    let dialogdiv= dialog.current

    if(x)
    {
        dialogdiv.showModal()
    }

    return()=>{
    dialogdiv.close()
    }



    })
    
    return(
        <>
        <dialog ref={dialog}>
            {children}
        </dialog>

        </>
    )
}

export default Dialogbox2