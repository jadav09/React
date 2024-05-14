function Calc()

{

   function xyz()
   {

    let n1_tag = document.getElementById("n1")
    let n2_tag = document.getElementById("n2")
   let  b_tag = document.getElementById("b")
   let  op_tag = document.getElementById("op")

    switch (op_tag.value) {

        case "+": b_tag.innerHTML= Number(n1_tag.value) + Number(n2_tag.value)
        break;

        case "-": b_tag.innerHTML=n1_tag.value - n2_tag.value
        break;
 

        case "*":b_tag.innerHTML=n1_tag.value * n2_tag.value
        break;

        case "/":b_tag.innerHTML=n1_tag.value / n2_tag.value
        break;

        case "%": b_tag.innerHTML= n1_tag.value % n2_tag.value
            break;
    

    default: 
        break;
}

   }



    return(

        <>

        number =1<input type="number" id="n1"></input><br></br>
        number =2<input type="number" id="n2"></input><br></br>

        <input type="text" id="op"></input><br></br>

        <button onClick={xyz}>Calculate</button> <b id="b"></b>
        
    
        </>

    )
}


export default Calc