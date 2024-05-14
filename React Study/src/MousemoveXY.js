import React, { useState } from "react";




function MousemoveXY() {

let [edit,seteidt] = useState({x:0,y:0})

console.log(seteidt)

    let obj = {
        
        width:"20px",
        height:"20px",
        background:"powderblue",
        translate:`${edit.x}px ${edit.y}px`,
        position:"absolute",
        top:"-8px",
        left:"-8px"
    }

    let fun1 = (e)=>{

        console.log(e)
        seteidt(
            {
                x:e.clientX,
                y:e.clientY
            }
         
        )

    }
    
    window.addEventListener("mousemove",fun1)

  return (  
    <>
    <div style={obj}></div>
    </>
  );
}

export default MousemoveXY;
