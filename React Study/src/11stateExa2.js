import React from "react";
class StateExa2 extends React.Component
{
    state={arry:[12,45,"it"]}

    render()
    {
        return(
            <>
            <h1 onClick={()=>{this.setState({arry:[1234,4567,"ited"]})}}>{this.state.arry.join(" ")}</h1>
            </>
        )
    }
}

export default StateExa2