import { useEffect, useRef, useState } from "react"

function Dialogbox()
{

    let [edit,setedit] = useState(false)
    return(
        <>
        <button onClick={()=>{setedit(true)}}>OpenBox</button>
        <Btn x={edit} y={setedit}></Btn>
        </>
    )
}

function Btn({x,y})

{

    let dialogref = useRef()  // get the div 

    console.log(dialogref.current)  // so undefiend witout function. you insert inside useffect

    useEffect(()=>{

    let dialog = dialogref.current

    console.log(dialog)

    if(x)
    {
    dialog.showModal()
    }

    return ()=>{
    dialog.close()
    }

    })

return(
<>
<dialog ref={dialogref}>
    <h1>HELLO ALLERT....!</h1>
    <button onClick={()=>{y(false)}}>X</button>
</dialog>

</>

    )

    // dialog tag is object.ager apne dilog tag ki jagah div tag loge to vo phlese hi show karega.
    // or hame pahele se show nahi karna hai. click event pe show karana hai.

}

export default Dialogbox

