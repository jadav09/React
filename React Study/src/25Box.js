import { useEffect, useRef } from "react"

function Box()
{
       let divref= useRef()
    //    console.log(divref.current)

useEffect(()=>{

    let stor = divref.current     // stor main div milega.

    const observe = new IntersectionObserver((entries)=>{

     console.log(entries)

     let entry = entries[0]
     console.log(entry)

     if(entry.isIntersecting)
     {
        document.body.style.color="white"
        document.body.style.background="black"

     }
     else
     {
        document.body.style.color="black"
        document.body.style.background="white"
     }
     
    },
    {
        threshold:1    // mins pura div aye tab condition active ho.
    })

    observe.observe(stor)
})

    function Damicontent() 
    {
       let  data = [];
        for (let i = 0; i <=50; i++) {
            
            data.push(<li>{i}Items</li>)
        }
        return(
            <>
            <ul style={{textAlign:"center"}}>
                <li>{data}</li>
            </ul>
            </>
        )
    }

    return(
        <>
        <Damicontent/>
        <div ref={divref} style={
            {
                height:"200px",
                width:"200px",
                background:"powderblue",
                textAlign:"center",
                margin:"0px auto"
            }

        }>div</div>

<Damicontent/>
        </>
    )
}

// div pe work karna hai.scroll karne per div windows ke taskbar ko touch kre tab effect apply ho( ya fir koi chang ho).
// without IntersectionObserver ke bina hum work nahi kar sakte hai.



export default Box