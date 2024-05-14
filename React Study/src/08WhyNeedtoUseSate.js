import React from "react";

class TestState extends React.Component
{
    x=12
    x=40

    state={num:29}     
    // state is built-in methos in React.
    // state is variable.it's stor value in object.
    // you can pass any value in object.ex:- number,string,buleean,fun,arry,obj ...etc

  ab =()=> {
    let   x=24

    this.setState({num:56})    
    //setState() it is a funcition.
    //you can pass any value in the funciton peramiters.ex:-number,boolian,objc..etc
    //onClick pe change the number in state.


    }
    // without state x ki value react update nahi kar sak ta hai.
    // javaScript kar sak ta hai.
    
    render() 
    {
        return(
            <> 
            <h1 onClick={this.ab}>class:{this.x}</h1>            
            <h1 onClick={this.ab}>State:{this.state.num}</h1>            
            </>
        )
    }
}

export default TestState