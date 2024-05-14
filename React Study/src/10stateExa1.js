import React from "react"
// import img

class StateExa1 extends React.Component
{

    // state = {number:1}
    state ={str:"jadav"}
    render()
    {
        return(
            <>


            {/* <button onClick={()=>{this.setState({number:this.state.number+1})}}>+</button>
            <h1>{this.state.number}</h1>
            <button onClick={()=>{this.setState({number:this.state.number-1})}}>-</button> */}

            {/* string */}

            <button onClick={()=>{this.setState({str:this.state.str+"dharemsh"})}}>+</button>
            <h1>{this.state.str}</h1>
            <button onClick={()=>{this.setState({str:this.state.str+"rajeshbhai"})}}>+</button> 



            </>
        )
    }

}

export default StateExa1