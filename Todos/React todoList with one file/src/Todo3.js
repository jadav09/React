import React, { useState } from "react";

let nextId = 3;

let ary =
    [
        { id: 1, item: "apple" },
        { id: 2, item: "banana" }
    ]

function Todo3() {

    let [obj, setobj] = useState(ary)

    let hendladd = (x) => {

        setobj(
            [
                ...obj,
                {
                    item: x,
                    id: nextId++
                }
            ]
        )
    }

    let hendlecng = (x) => {
        console.log(x)
        setobj(
            obj.map((v) => {
                if (v.id == x.id) {
                    return x
                }
                else {
                    return v
                }
            })
        )


    }

    let hendledlt = (deltid) => {
        console.log(deltid)

        setobj(
            obj.filter((v) => {
                return v.id != deltid
            })
        )

    }


    return (

        <div>
            <InpBtn onadd={hendladd} />
            <Pass
                addname={obj}
                oncng={hendlecng}
                ondelete={hendledlt}


            />

        </div>
    )
}

function InpBtn({ onadd }) {
    let [val, setval] = useState("")
    return (
        <>
            <input type="" name="" value={val} onChange={(e) => { setval(e.target.value) }} />
            <button onClick={() => { onadd(val) }}>Add Todos</button>


        </>
    )
}


function Pass({ addname, oncng, ondelete }) {
    return (
        <>
            {
                addname.map((v) => (
                    <Btn
                        name={v}
                        inpvalcng={oncng}
                        dlt={ondelete}

                    />
                ))
            }

        </>
    )
}

function Btn({ name, inpvalcng, dlt }) {

    let [edit, setedit] = useState(false)

    if (edit) {
        var prnt = <>

            <input type="" value={name.item}
                onChange={(e) => {
                    inpvalcng(
                        {
                            ...name,
                            item: e.target.value
                        }
                    )
                }}
            />
            <button onClick={() => { setedit(false) }}>Save</button>
        </>

    }

    else {
        prnt = <>
            {name.item}
            <button onClick={() => { setedit(true) }}>Edit</button>
        </>

    }

    return (
        <>

            <div>

                {prnt}
                <button onClick={() => { dlt(name.id) }}>Delete</button>
            </div>


        </>
    )
}

export default Todo3;
