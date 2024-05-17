import { Link, useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from "react";


function Table2() {

    let [id, setid] = useState("")

    let navigete = useNavigate()


    useEffect(() => {

        fetch("http://localhost:4000/jadav")
            .then((res) => { return res.json() })
            .then((op) => {
                console.log(op)
                setid(op)
            })

    }, [])

    let hendlview = (id) => {
        console.log(id)
        navigete("/view/" + id)

    }

    let hendledit = (editid) => {
        console.log(editid)
        navigete("/edit/" + editid)

    }

    let hendledelete = (dlt)=>{
        fetch("http://localhost:4000/jadav/"+dlt,{
            method:"delete",
            headers:{"content-type":"application/json"}
        })
        
        window.location.reload()

    }

    return (
        <div>
            <Link to={"/form"} className=" btn btn-primary m-3">Add employ</Link>
            <table className="table w-50 m-auto">

                <thead className="table-dark ">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {id && id.map((v, i) => (
                        <tr key={i}>
                            <th scope="row">{i}</th>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.salary}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => { hendlview(v.id) }}>View</button>
                                <button className="btn btn-primary mx-2" onClick={() => { hendledit(v.id) }}>Edit</button>
                                <button className="btn btn-danger" onClick={()=>{hendledelete(v.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Table2;
