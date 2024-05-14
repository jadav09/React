import { useEffect, useState } from "react"

function Counter()
{
    let [num,setnum] = useState(1)

    useEffect(()=>{
        setInterval(
            ()=>{
                setnum(num+1)
            },1000
        )

    })

    return(
        <>
        <h1>{num}</h1>
        </>
    )
}
export default Counter