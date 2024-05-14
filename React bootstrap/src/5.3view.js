import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate, useParams, } from "react-router-dom"



function View() {

    let navigate = useNavigate()

    let { id } = useParams()
    console.log(id)
    // object milega. object main se data lene ke liye useparams main id object mian likana padega.==>{id}

    let [id1, setid1] = useState()
    let [name, setname] = useState()
    let [salary, setsalary] = useState()

    useEffect(() => {

        fetch("http://localhost:4000/employees/" + id)

            .then((res) => { return res.json() })

            .then((data) => {
                console.log(data)   // object milega.

                setid1(data.id)
                setname(data.name)
                setsalary(data.salary)
            })

    }, [])

    let hndlexit = () => {
        navigate("/")  // onclick pe home page pe jayega.
    }

    return (
        <>
            <div className="container row w-50 border m-auto">

                <div className="col-xl-5">
                    <img src="logo512.png" alt="" />
                </div>


                <div className="col-xl-5">
                    <h5> Id :{id1} </h5>
                    <h5> Name :{name} </h5>
                    <h5> Salary :{salary} </h5>
                    <Button className="bg-danger" onClick={hndlexit}>Exit</Button>

                </div>

            </div>
        </>
    )
}
export default View

// block of scop ke hisab se data direct retrun main nahi jayega.
// data ko usestate main stor karke maping karana padega.
// hame id vise data fetch karva nahi. other wise pura data ek hi view pe show kar dega.