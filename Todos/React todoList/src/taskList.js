import { useState } from "react"

function Task({onEditx,onchgy,ondltz}) {
    return (
        <>
       {onEditx.map((v)=>{

        return(

            <ul key={v.id}>
            <li>
            <SaveEditDelete
            onEdit={v}
            oncng={onchgy}
            ondlt={ondltz}
             /> 
             </li>
            

            </ul>
        )
       })}

           
        </>
    )
}

function SaveEditDelete({onEdit,oncng,ondlt}) {

    let [clk, setclk] = useState(false)

    if (clk) {
      var   prnt =
            <>
                <input type="" name="" value={onEdit.name} onChange={(e)=>{
                    oncng({
                        ...onEdit,
                        name:e.target.value
                    })
                }}/>

                <button onClick={() => { setclk(false) }}>Save</button>
            </>

    }
 
    else {

        prnt=
        <>
    {onEdit.name}
        
         <button onClick={() => { setclk(true) }}>Edit</button>
        </>

    }

    return (

        <div>

            {prnt}

            <button onClick={()=>{
                {ondlt(onEdit.id)}
            }}>Delete</button>

        </div>
    )
}

export default Task