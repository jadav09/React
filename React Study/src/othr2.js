import { useEffect, useRef } from "react"

function Domeycontent()
{

    let divref = useRef()
    // console.log(divref.current)


    useEffect(()=>{

    let div = divref   // stor div

    let observe = new IntersectionObserver((x)=>{
        // let xyz = x[0]
        console.log(x)
        let jadav = x[0]

        if(jadav.isIntersecting)
        {
            document.body.style.background="black"
            document.body.style.color="white"
        }
        else
        {
            document.body.style.background="white"
            document.body.style.color="black"
        }

    },
    {
        threshold:1
    })

    observe.observe(div)
})

    function Content()
    {
        let x =[]
        for(let i=0;i<=50;i++)
        {
            // console.log(i)
            x.push(<li>{i} Items</li>)
        }

        return(
            <>
            {x}
            </>
        )

    }

    
    return(
        <>
        <Content/>
        <div ref={divref} style={
            {height:"200px",
            width:"200px",
            background:"powderblue",
            margin:"0px auto"
            }}>
            
        </div>
        <Content/>

        </>
    )
}
export default Domeycontent