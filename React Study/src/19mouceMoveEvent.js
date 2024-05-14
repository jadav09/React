import { useState } from "react"
import "./19.1 mouceMoveEvent.css"

function MoveEvent()
{

    const [pos,setpos] = useState({x:0,y:0})

  let move1 =(e)=>
    {
        // console.log(e)
        setpos({
        x:e.clientX,
        y:e.clientY
        }
        )

    }

window.addEventListener("mousemove",move1)


    return(
        <>
        <div>

        <div className="move" style={{
            transform:`translate(${pos.x}px,${pos.y}px)`
        }}></div>
            
        </div>
        </>
    )
}

export default MoveEvent