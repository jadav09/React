import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit2() {

    let navigate = useNavigate()

    let { editid } = useParams()

    console.log(editid)

    let [id, setid] = useState()
    let [name, setname] = useState()
    let [salary, setsalary] = useState()

   let  data = {name,salary}

    useEffect(() => {

        fetch("http://localhost:4000/jadav/" + editid)
            .then((res) => { return res.json() })

            .then((op) => {
                console.log(op)
                setid(op.id)
                setname(op.name)
                setsalary(op.salary)

            })
    }, [])

    let hendeedit = (e) => {
        e.preventDefault();
     
        console.log(data)

        fetch("http://localhost:4000/jadav/" + editid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=>{
            if(res)
            {
                window.location.reload()
            }
        })
        navigate("/")


    }


    return (
        <div>
            <form className="w-50 text-start m-auto">

                <div className="form-group">
                    <label for="exampleInputEmail1">Id</label>
                    <input type="text" className="form-control"
                     disabled
                     value={id}
                    

                    />
                </div>


                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control"
                    value={name}
                    onChange={(e)=>{setname(e.target.value)}}

                    />
                </div>

                <div className="form-group mb-2">
                    <label for="exampleInputPassword1">Salary</label>
                    <input type="text" className="form-control"
                    value={salary}
                    onChange={(e)=>{setsalary(e.target.value)}}

                    />
                </div>

                <button type="submit" className="btn btn-primary"
                onClick={hendeedit}
                >Save</button>
            </form>
        </div>


    )
}

export default Edit2;
