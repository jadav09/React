import React from "react"


class Test extends React.Component {

    // class ke unde hame variable se difind nahi karna padega.

    test() {
        alert("click me1")
        document.getElementById("b1").style.color = "red"
        document.getElementById("b1").style.background = "blue"

    }

    render() {
        return (
            <>

                <button id="b1" onClick={this.test}>Click me1</button>
                <Test1 />

            </>
        )
    }
}


function Test1() {

    // function ke under hame test ko variable se difind karna pdega.

    let test = () => {
        alert("click me2")
        document.getElementById("b2").style.background = "blue"
        document.getElementById("b2").style.color = "red"

    }

    return (
        <>
            <button id="b2" onClick={test}>click me2</button>
        </>
    )
}

export default Test


