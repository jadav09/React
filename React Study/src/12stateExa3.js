import React from "react";
class StateExa3 extends React.Component {
    state = {
        bol: true,
        bol1: false
    }

    render() {
        return (
            <>

                <h1>{this.state.bol}</h1>
                {/* without condition boolean value body main print nahi hoti. */}

                {console.log(this.state.bol)} 
                {/* print in console */}



                <h1>{(this.state.bol) ? "true" : "false"}</h1>
                <h1>{(this.state.bol1) ? "true" : "false"}</h1>





            </>
        )
    }
}

export default StateExa3