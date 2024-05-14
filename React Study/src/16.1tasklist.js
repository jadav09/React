import { useState } from "react"

function Task({ objadd, objcng, objdlt }) {
    let [edit, setedit] = useState(false)

    if (edit) {
        var prnt = <>
            <input type="" name="" value={objadd.name}
                onChange={(e) => {
                    objcng({
                        ...objadd,
                        name: e.target.value
                    }
                    )

                }} />
            <button onClick={() => { setedit(false) }}>Save</button>
        </>

    }
    else {
        prnt = <>
            {objadd.name}
            <button onClick={() => { setedit(true) }}>Edit</button>

        </>
    }
    return (
        <>
            {prnt}
            <button onClick={() => { objdlt(objadd.id) }}>delete</button>
        </>
    )
}

function Pass({ cnfmadd, cnfmcng, cnfmdlt }) {
    return (
        <>
            {cnfmadd.map((v) => (
                <div key={v.id}>
                    <li>
                        <Task
                            objadd={v}
                            objcng={cnfmcng}
                            objdlt={cnfmdlt} />
                    </li>

                </div>

            ))}


        </>
    )


}


export default Pass