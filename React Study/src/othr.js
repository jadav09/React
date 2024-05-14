import { useState } from "react"
import { renderIntoDocument } from "react-dom/test-utils"

 
function Inpbtn({Onadd})
{
    let [val,setval] = useState("")

    return(
        <>
        <input type="text" value={val} onChange={(e)=>{
            setval(e.target.value)
        }}/>

        <button onClick={()=>{
        Onadd(val)
        }}>ADD</button>
        </>
    )
}

// ***********

 let nextID = 4;
    let arry = [
        {title:"Apple0",id:1},
        {title:"Apple1",id:2},
        {title:"Apple2",id:3},
    ]

function Stor()
{

    let [obj,setobj] = useState(arry)

    let hndladd = (x)=>{
        setobj(
            [
                ...obj,
                {
                    title:x,
                    id:nextID++
                }
            ]
        )

    }

    let hndlcng =(next)=>{
        setobj(
            obj.map((v)=>{

                if(v.id==next.id)
                {
                    return next
                    
                }
                else
                {
                    return v
                }
            })

        )

    }

    let hndldlt = (dlt)=>{
        setobj(    
            obj.filter((v1)=>{
                return v1.id !=dlt
            })
        )

    }



    return(
        <>
        <Inpbtn 
        Onadd={hndladd}/>
        <Pass
        xadd={obj}
        ycng={hndlcng}
        zdlt={hndldlt}
        />
        </>
    )
}


// *********

function Structur({objadd,objcng,objdlt})
{

    let [edit,setedit] = useState(false)

    if(edit)
    {
      var print =  

        <>
        <input type="" name="" value={objadd.title} onChange={(e)=>{
            objcng({
                ...objadd,
                title:e.target.value
                
            })
        }}/>

        <button onClick={()=>{setedit(false)}}>Save</button>
        </>

    }
    else
    {
       print =  
       <>
       {objadd.title}
        <button onClick={()=>{setedit(true)}}>Edit</button>
        </>

    }
    
    return(
        <>
        {print}
        <button onClick={()=>{objdlt(objadd.id)}}>Delete</button>
        </>
    )
}

// ************

function Pass({xadd,ycng,zdlt})
{
    return(
        <>
        <div>
            {xadd.map((v)=>(
                <div key={v.id}>
        <Structur
        objadd={v}
        objcng={ycng}
        objdlt={zdlt}/>
        </div>
            )

            )}

        </div>
        </>
    )

}
export default Stor



