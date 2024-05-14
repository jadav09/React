import { useEffect, useState } from "react"

function CreatConnection()
{
    let [show,unshow] = useState(false)
    let [room,setroom] = useState("")

    return(
        <>
        <h1>Your Connection Room</h1>
        <select onChange={(e)=>{setroom(e.target.value)}}>
            <option hidden>choose you room</option>
            <option>General</option>
            <option>Music</option>
            <option>Travell</option>
        </select>

        <button onClick={()=>{unshow(!show)}}>
            {(show)? "Close chet":"Open chet"}
        </button>
        <Chetroom roomID={room}/>
        </>
    )
} 

export function creatroom(room,server)
{
    return{
        connect()
        {
            console.log("connected to "+ room +"at" +server)
            
        },
        disconect()
        {
            console.log("Disconnected to "+ room +"at" +server)

        }
    }
}


function Chetroom({roomID})
{
    let [serverurl,setservelrul] = useState("http://localhost:1234/")

useEffect(()=>{
    
    let x = creatroom(roomID,serverurl)

    x.connect()

    return ()=>{
    x.disconect()

    }
},[roomID,serverurl])
    return(
        <>
        <h1>you connected to {roomID}</h1>
        <b>server;</b> <input type="" name="" value={serverurl} onChange={(e)=>{setservelrul(e.target.value)}} />
        <creatoom/>
        </>
    )
}

export default CreatConnection