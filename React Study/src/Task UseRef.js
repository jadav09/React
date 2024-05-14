import { useEffect, useRef } from "react"



let Product=
[
    {title:"jadav1",price:200,id:1},
    {title:"jadav2",price:300,id:2},
    {title:"jadav3",price:500,id:3}
]


function UseRef()
{
    let divref = useRef()

    useEffect(()=>{
        let div = divref.current
        console.log(div)
        div.style.background="powderblue"

    })

    function jadav(x)
    {
        if(Product.length%2)
        {
            x.style.color="red"
        }


    }

    console.log(Product)

    return( 
        
        <div ref={divref}>

        {
            Product.map((v)=>(
                
                <div key={v.id}>
                
                <h1 >{v.title}</h1>
                <p>{v.price}</p>

                </div>

            ))
        }
                <button onClick={()=>{}}>click me</button>

        </div>
    )
}
export default UseRef