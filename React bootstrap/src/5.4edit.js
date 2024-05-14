import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Edit() {

    let navigate=useNavigate()
    let { edtid } = useParams()
    // console.log(edtid)

    let [ids, setids] = useState()
    let [name, setname] = useState()
    let [salary, setsalary] = useState()

    useEffect(() => {

        fetch("http://localhost:4000/employees/" + edtid)
            // (link ke  end pe / karna padega.other wise object nahi milega.)

            .then((res) => { return res.json() })
            .then((data) => {
                // console.log(data)

                setids(data.id)
                setname(data.name)
                setsalary(data.salary)
            })
    }, [])

    

    let hendlesumbit = (e) => {
        // console.log(e)  // SyntheticBaseEvent fire ho rahi hia. vo form ke sumbit pe data ko reload karti hai.stop this event. otherwise data ko refresh karke khali kardega.

        navigate("/")
        e.preventDefault()

        let data1 = {name,salary}
        // console.log(data1)

        fetch("http://localhost:4000/employees/" + edtid,{

            method:"PUT",                          // data update PUT se hoga.
            headers: { "content-type": "application/json" },
            body:JSON.stringify(data1)
        })

    }

    return (
        <>
            <div className="container w-50 text-start">
                <form onSubmit={hendlesumbit}>
                    <div className="form-group">
                        <label >ID</label>
                        <input disabled type="email" className="form-control py-3" value={ids} />
                    </div>

                    <div className="form-group my-3">
                        <label >Name</label>
                        <input type="text" className="form-control py-3"
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <label >Salary</label>
                        <input type="text" className="form-control py-3"
                            value={salary}
                            onChange={(e) => { setsalary(e.target.value) }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>

            </div>

        </>
    )
}
export default Edit