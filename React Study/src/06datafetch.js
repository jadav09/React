function Jadav() {

    let ohk = function xyz() {
        
        fetch("https://jsonplaceholder.typicode.com/users")

            .then((res) => {
                return res.json()
            })

            .then((op) => {

                // let  inp_tag = document.getElementById("inp")
                let l1_tag = document.getElementById("l1")

                var header = " "

                op.map((v) => {


                    header = header + `<li>${v.name}</li>`

                    l1_tag.innerHTML = header


                })



            })



    }

    return (

        <>
            <input type="text" id="inp" onKeyDown={ohk}></input>
            <br></br>
            <br></br>
            <li id="l1"></li>

        </>
    )
}

export default Jadav