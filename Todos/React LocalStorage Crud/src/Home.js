import React from 'react'
import { json, useNavigate } from 'react-router-dom'

function Home() {
  let nav = useNavigate("")

  let store = JSON.parse(localStorage.getItem("storage"))

  console.log(store)


  let hendledelet = (dlt) => {

    let deleteddata = store.filter((v) => {

      return v.id != dlt
    })

    localStorage.setItem("storage", JSON.stringify(deleteddata))
    window.location.reload()

  }

  let hendleEdit = (eid) => {
    nav("/edit/"+eid)


  }


  return (
    <div>
      <h2>React local storage crud</h2>

      <button onClick={() => { nav("/add") }}>Add Employes</button>


      <table className='table w-50 m-auto mt-5'>
        <thead className='table-dark'>

          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {
            store.map((v, i) => (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name1}</td>
                <td>{v.salary}</td>
                <td>
                  <button className='btn btn-primary mx-2' onClick={() => { hendleEdit(v.id) }}>edit</button>
                  <button className='btn btn-danger' onClick={() => { hendledelet(v.id) }}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home