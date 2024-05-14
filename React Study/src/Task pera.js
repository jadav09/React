function Pera({x,y})    // Function component main pera value alway inside {}. 
{ 

    const a = ()=>{

        return(
            alert("hello")
        )
    }

return(

    <>

    <h1 onClick={a}>{x}</h1>
    <p onClick={()=>{alert("hello")}}>{y}</p>
    

    </>
)

}

// ==>pera x or y ki value App.js file main function call karva te time pass krenge.







export default Pera