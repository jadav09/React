import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function View2() {

    let { id } = useParams()
    console.log(id)
    let navigete = useNavigate()

    let [viewid,setviewid] = useState('')
    let [name,setname] = useState('')
    let [salary,setsalary] = useState('')

    useEffect(() => {

        fetch("http://localhost:4000/jadav/"+id)
            .then((res) => { return res.json() })
            .then((op) => {
                console.log(op)
                setviewid(op.id)
                setname(op.name)
                setsalary(op.salary)
                

            })

    }, [])
    return (
        <div>
            <h2>Id :{viewid}</h2>
            <h2>Name:{name}</h2>
            <h2>Salary:{salary}</h2>
            <button className="btn btn-danger" onClick={() => { navigete("/") }}>Exit</button>
        </div>
    )
}

export default View2;
