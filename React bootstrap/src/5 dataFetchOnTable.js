import { Button, Container } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import From1 from "./5.1 form";
import { useEffect, useState } from "react";


// react app or online change data dono ek server pe works nahi karte.
// hame alag local host creat karna padega.
// work with live data fech on server. so some command install form npm install in your react app

// => npm i react-bootstarap bootstrap
// => npm i react-router-dom
// => npm i -g json-server
// => json-server --watch anyname.json --port 4000   

// ( 3000 serise ko chod kar ana number port karan hai. )
// (anyname.json file create karni padegi.iske bad json server install hoga.)

function Drowtable() {

    let [edit, setedit] = useState()
    let navigate = useNavigate()


    useEffect(() => {

        fetch("http://localhost:4000/employees")

            .then((res) => {
                return res.json()
            })

            .then((data) => {

                setedit(data)

            })
    }, [])

    let handleview = (id) => {
        // console.log(id)

        navigate("/view/" + id)
    }

    let hendledit = (edtid) => {
        // console.log(edtid)

        navigate('/edit/' + edtid)
    }

    return (
        <div className="container">
            <div>
                <Link to={'/addemp'} className="btn btn-primary">Add employ</Link>
            </div>
            < table className="table" >
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SALARY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {edit && edit.map((v) => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.salary}</td>

                            <td>
                                <Button className="bg-success" onClick={() => { handleview(v.id) }}>view</Button>
                                <Button className="mx-2" onClick={() => { hendledit(v.id) }}>edit</Button>
                                <Button className="bg-danger">delete</Button>

                            </td>
                        </tr>
                    ))
                        // without && conditon error ayega.
                    }

                </tbody>
            </table>
        </div>

    )




}

export default Drowtable