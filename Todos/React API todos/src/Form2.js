import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form2() {

    let [name, setname] = useState("")
    let [salary, setsalary] = useState("")


    let navigete = useNavigate()

    let hendesumbit = (e) => {

        let data = { name, salary }
        console.log(data)

        e.preventDefault();

        if (name == "" || salary == "") {
            alert("required!!!")
        }
        else {
            fetch("http://localhost:4000/jadav", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            })
            navigete("/")
        }


    }

    return (
        <div>
            <form className="w-50 text-start m-auto" onSubmit={hendesumbit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />
                </div>

                <div className="form-group mb-2">
                    <label for="exampleInputPassword1">Salary</label>
                    <input type="text" className="form-control"
                        value={salary}
                        onChange={(e) => { setsalary(e.target.value) }}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form2;
