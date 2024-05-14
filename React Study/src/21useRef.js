import { useRef } from "react"

function UseRfrnce() {

    const h1ref = useRef()     // without creat dom method hum tag ko get kar sak te hai.useRef() hook se
    const divref =useRef()   


    let test = ()=>
    {
            console.log(h1ref)             // useRef() is made a object type. check console h1ref is object
            console.log(h1ref.current)     // get h1 tag  object.anyname (check console h1 tag is current index pe hai.
             console.log(divref.current)      
    
            //  apply style :-
    
            h1ref.current.innerHTML="hello jadav how are you"
            h1ref.current.style.color="red"
            h1ref.current.style.background="black"
            divref.current.style.background="powderblue"

    console.log(divref.current)   // div milega.


    }

    return (
        <>
            <h1 ref={h1ref}>Hello</h1>

            <div ref={divref}>

                <div className="x" >div1</div>
                <div className="x" >div2</div>
                <div className="x" >div3</div>
                <div className="x" >div4</div>

            </div>

            <button onClick={test}>chang tag style</button>
        </>

    )
}

export default UseRfrnce

