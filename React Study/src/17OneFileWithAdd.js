import { useState } from "react"

function Main() {
    return (
        <>
            <Ary />
        </>
    )
}


// ***inpbtn****

function Inpbtn({ Onadd }) {
    const [val, setval] = useState("")
    return (
        <>
            <input type="" name="" value={val} onChange={(e) => { setval(e.target.value) }} />
            <button onClick={() => {
                Onadd(val)
            }}>ADD</button>
        </>
    )
}


// ***Ary***

let nextID = 4
const arry = [
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Kiwi", id: 3 }
]

function Ary() {
    const [obj, setobj] = useState(arry)

    const hendaleadd = (x) => {
        // console.log(x)

        setobj(
            [
                ...obj,
                {
                    name: x,
                    id: nextID++
                }
            ]
        )
    }

    const hndlcng = (next) => {
        setobj(
            obj.map((old) => {
                if (old.id == next.id) {
                    return next
                }
                else {
                    return old
                }
            })

        )

    }
    const hndldlt = (dlt) => {
        setobj(

            obj.filter((v) => {
                return v.id != dlt
            })
        )
    }

    return (
        <>
            <Inpbtn Onadd={hendaleadd} />
            <Pass
                cnfmadd={obj}
                cnfmcng={hndlcng}
                cnfmdlt={hndldlt}
            />
        </>
    )
}

// *****Tasklist***

function Pass({ cnfmadd, cnfmcng, cnfmdlt }) {
    return (
        <>
            <div>
                {cnfmadd.map((v) => (

                    <ul key={v.id}>
                        <li>
                            <Tasklist
                                objadd={v}
                                objcng={cnfmcng}
                                objdlt={cnfmdlt}
                            />
                        </li>
                    </ul>
                ))}

            </div>

        </>
    )
}

// *****Tasklist****

function Tasklist({ objadd, objcng, objdlt }) {

    const [edit, setedit] = useState(false)

    if (edit) {
        var prnt =
            <>
                <input type="" name="" value={objadd.name}
                    onChange={(e) => {
                        objcng(
                            {
                                ...objadd,
                                name: e.target.value
                            }
                        )

                    }} />

                <button onClick={() => { setedit(false) }}>Save</button>
            </>

    }

    else {
        prnt =
            <>
                {objadd.name}
                <button onClick={() => { setedit(true) }}>Edit</button>
            </>

    }
    return (
        <>
            {prnt}
            <button onClick={() => { objdlt(objadd.id) }}>Detele</button>
        </>
    )
}

export default Main

