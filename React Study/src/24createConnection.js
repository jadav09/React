import { useEffect, useState } from "react"

function Chatroom()
{
    let [room,setroom] = useState("")

    let [show,unshow] = useState(false)

    return(
        <>
        <h1>Choose your Favorite Connection</h1>

        <select onChange={(e)=>{setroom(e.target.value)}}>
            <option hidden>select room</option>
            <option>General</option>
            <option>Music</option>
            <option>Travell</option>
        </select>

        <button onClick={()=>{unshow(!show)}}>
            {(show) ? "Closechet":"Openchet"}
        </button>

        <h2> your are in this {room}</h2>
        <Chet roomID={room}/>
        </>
    )
}

 export function creatConnection(room,server)
{
    return{
        
        connect()
        {
            console.log("Connected to " + room + "at" + server)

        },
        disconnect()
        {
            console.log("Disnnected to " + room + "at" + server)


        }
    }
}


function Chet({roomID})
{
    let [serverurl,setservarurl] = useState("http://localhost:1234/")  // update this server you can usestate()

   useEffect(()=>{

    const connection= creatConnection(roomID,serverurl)   // creat connection ke pass id milgya. ab server string value main higa.

    connection.connect()
    


    return ()=>{

        connection.disconnect()    // always useeffect ke cleanup code main jayega. return ke under.
    }
 

   },[roomID,serverurl])

    return(
        <>
        <b>server :</b>
        <input type="text" name="" value={serverurl} onChange={(e)=>{setservarurl(e.target.value)}}/>
        <creatConnection/>
        </>
    )
}


export default Chatroom