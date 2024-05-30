import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from './data'

function View() {

    let { vid } = useParams("")
    let nav = useNavigate("")

   let viewdata =  data.filter((v) => {
        return v.id == vid

    })

    

    return (
        <div>
            <h1>id:{viewdata[0].id}</h1>
            <h1>name:{viewdata[0].name}</h1>
            <h1>salary:{viewdata[0].salary}</h1>
            <button onClick={() => { nav("/") }}>exit</button>
        </div>
    )
}

export default View