import { useEffect, useRef, useState } from "react"

function Login()
{
    return(
        <> 
        <Inp/>
        </>
    )
}

function Inp()
{
    let [fname,setfname] = useState("")
    let [lname,setlname] = useState("")
    
    let candidate = fname.length!=0 && lname.length!=0

    let div = useRef()


    return(
        <>
        <div ref={div}>
            
        
        <h4 for="">Firstname: <input type="" name="" value={fname} onChange={(e)=>{
            setfname(e.target.value)
        }}/></h4>           

        <h4 for="">Lastname: <input type="" name="" value={lname} onChange={(e)=>{
            setlname(e.target.value)
        }}/></h4>            

        <Btn1 x={!candidate}></Btn1>
        </div>
 
        <Checkbox
        clr={div}/>
        </>
    )
}

function Btn1({x})
{
    console.log(x)   // true value
    return(
        <>
        <button disabled={x}>Login</button>
        </>
    )
}

function Checkbox({clr})
{
    let [show,unshow] = useState(true)
    useEffect(()=>{

    console.log(clr.current)


    if(!show)
    {
        clr.current.style.background="gray"
        clr.current.style.color="white"

    }
    else
    {
    clr.current.style.background=""
    clr.current.style.color=""


    }

    })

    return(
        <>
        <div>
            <input type="checkbox" name="" value="" onChange={()=>{unshow(!show)}} />
            {(show)? "LightMode" : "Darkmode"}
 
        </div>
        </>
    )
}
export default Login