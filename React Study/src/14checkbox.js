import React from "react";
class Check1 extends React.Component
{

    obj={
        display:"flex",
        justifyContent:"center",
        border:"2px solid red"
    }
    
    state ={bol:false}
    render()
    {
        return(
            <>
            <div style={this.obj}>

            {/* <input type="checkbox" onChange={(e)=>{console.log(e.target)}}></input> */}   {/*e.target input ke chekbox ko pint karega.*/}

            <input type="checkbox" onChange={(e)=>{this.setState({bol:e.target.checked})}}></input>

            <b>{this.state.bol}</b> {/*witout condition not print boolean value*/}

            <b>{(this.state.bol) ? "True" : "False"}</b>

            </div>
            </>

        )
    }
}

export default Check1