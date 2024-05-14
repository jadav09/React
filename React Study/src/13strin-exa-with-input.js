import React from "react";

class InpStr extends React.Component
{
    
state ={test:"kljk"}
    render()
    {
        return(
            <>
            <input type="text" value={this.state.test} onChange={(e)=>{this.setState({test:e.target.value})}}></input>

            {this.state.value} 

            </>
        )
    }
}


export default InpStr