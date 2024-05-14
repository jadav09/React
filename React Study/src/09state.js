import React from "react";

class Jadav1 extends React.Component

{
    // x="12"    

    // state = "123 "         // state as variable.ti's stor value in object.
    state = {n:1}           // state stor an object value.get the n value you can use  :- this.state.n  ==> this  way to same as object print

    inc = ()=>{

        this.setState({n:this.state.n+1})      // on click pe change the value. you can use this.setstate()
    }

    dec = ()=>{
        this.setState({n:this.state.n-1})
    }

    render()

    {
        return(

            <>

            <button onClick={this.inc}>+</button>   {/*  class not get inc function. you can use this key words */}
            <h1>{this.state.n}</h1>   {/*print state*/}
            <button onClick={this.dec}>-</button>
            </>
        )
    }
    
}

export default Jadav1