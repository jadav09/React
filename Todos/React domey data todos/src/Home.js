import React from 'react'
import { data } from './data'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Home() {

    let [data1, setdata1] = useState(data)
    let nav = useNavigate("")

    let hendleview = (vid) => {
        nav("/view/" + vid)

    }

    let hendledelete = (dlt) => {

        setdata1(
            data1.filter(v => v.id != dlt)
        )

    }

    let hendledit = (eid)=>{
        nav("/edit/" + eid)


    }
    return (
        <div>
            <h2>Export data crud in reactjs</h2>

            <h4>employes details</h4>
            <Link to={"/addemp"} className='btn btn-primary'>Addemp</Link>

            <div>
                <table className='table w-50 m-auto'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>salary</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data1.map((v) => (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.salary}</td>
                                <td>
                                    <button onClick={() => { hendleview(v.id) }}>view</button>
                                    <button onClick={() => { hendledit(v.id) }}>edit</button>
                                    <button onClick={() => { hendledelete(v.id) }}>delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home