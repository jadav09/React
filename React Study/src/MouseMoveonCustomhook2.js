import React, { useState } from "react";
import { MouseMoveonCustomhook } from "./MouseMoveonCustomhook";

function MouseMoveonCustomhook2() {

   let [edit,seteidt] =  useState({x:0,y:0})

    let fun1 = (e)=>{
        console.log(e)
        seteidt
        (
            {
                x:e.clientX,
                y:e.clientY
            }
        )

    }
    MouseMoveonCustomhook("mousemove",fun1)
  return( 
  <div style={
    {   
        height:"20px",
        width:"20px",
        backgroundColor:"powderblue",
        translate:`${edit.x}px ${edit.y}px`
    }
  }>

  </div>
  );
}

export default MouseMoveonCustomhook2;
