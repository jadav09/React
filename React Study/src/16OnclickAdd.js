import { useState } from "react"
import Pass from "./16.1tasklist"

function Inpbtn({Onadd})
{
    const [val,setval] = useState("")
    return(
        <>
        <input type="" name="" value={val} onChange={(e)=>{setval(e.target.value)}}/>
        <button onClick={()=>{
            Onadd(val)
        }}>ADD</button>
        </>
    )
}

let nextID =4
 let aryobj = [
    {name:"Apple",id:1},
    {name:"Banana",id:2},
    {name:"Kiwi",id:3}
]

function Ary()
{
    const [obj,setobj] = useState(aryobj)

    const hndladd =(x)=>{ 
    console.log(x)   // x= input ki value
    setobj(
        [
            ...obj,
            {
                name:x,
                id:nextID++
            }
        ]

    )
    }
    
    const hndlcng =(next)=>{
        setobj(
            obj.map((old)=>{
                if(old.id==next.id)
                {
                    return next
                }
                else
                {
                    return old
                }
            })
        )
        

    }

    const hndldlt =(dlt)=>{
        setobj(
            obj.filter((v)=>{
                return v.id !=dlt
            })
        )
        
    }
    
    return(
        <>
        <Inpbtn Onadd={hndladd}/>

<div>
    <Pass
    cnfmadd={obj}
    cnfmcng={hndlcng}
    cnfmdlt={hndldlt}
    />
</div>
        </>
    )
}

export default Ary