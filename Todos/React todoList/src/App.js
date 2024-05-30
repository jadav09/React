import { useState } from "react"
import Task from "./taskList"
import Inp from "./inpbtn"

let nextid = 4

const Ary = [
  { name: "Apple", id: 1 },
  { name: "Banana", id: 2 },
  { name: "Kivi", id: 3 }

]


function App() {
  const [obj, setobj] = useState(Ary)

  function hendleOnAdd(x) {
    // console.log(x)   // input value

    setobj
      (
        [
          ...obj,
          {
            name: x,
            id: nextid++
          }
        ]
      )
  }

  const onchghndl = (cng) => {

    // console.log(cng)
    setobj(
      obj.map((v) => {
        // console.log(v)

        if (v.id == cng.id) {
          return cng
        }

        else {
          return v
        }


      })
    )

  }

  const ondlthndl = (nextid) => {

    setobj(

      obj.filter((v) => {

        console.log(v)

        return v.id != nextid

      })

    )

  }

  return (
    <>
      <Inp OnAdd={hendleOnAdd} />
      <Task
        onEditx={obj}
        onchgy={onchghndl}
        ondltz={ondlthndl}
      />
    </>
  )
}






export default App