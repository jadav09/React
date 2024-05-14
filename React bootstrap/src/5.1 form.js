import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { json, useNavigate } from 'react-router-dom';

function From1() {

  let [name, setname] = useState("")
  let [salary, setsalary] = useState("")

  let navigate = useNavigate()

  let handlsumbit = (e) => {

    e.preventDefault();
    // console.log(e)

    console.log({ name, salary })

    let data = { name, salary }  // object main data ko server pe lejana hai you can use secound peramiter in fetch.

    if(name=="" || salary=="")
    {
      alert("required")
    }

      // else if(name==name)
      // {
      //   alert("alrady name is exit")
      // }

    else
    {

      fetch("http://localhost:4000/employees", {

      method: "post",                                // post method se data server pe jayega.
      headers: { "content-type": "application/json" }, // data type json hai.server pe data object types jayega.
      body: JSON.stringify(data)                    // body main  data string main kanvert hoga.

      
    })

    navigate("/")

    }


    

    // second .then ki jarur nahi hai.kyu ki data alrady hamne body main print kar diya hai.
    // second then e data ko console kar sak te ho dekhana hai to
    // ager apko data condition wise print karna hai.you can use if-else if.

  }

  // form ki onclick de deta evrytime refresh hoga. to chala jayega. so use  SyntheticBaseEvent and data refresh nahi higa.

  return (
    <>
      <Container>
        <h3 className='text-center'>Employment Detalis</h3>

        <Form className='text-start w-50 m-auto' onSubmit={handlsumbit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label > Name</Form.Label>
            <Form.Control type="text"
              placeholder="Employment name"
              value={name}
              onChange={(e) => { setname(e.target.value) }} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Salary</Form.Label>
            <Form.Control type="text"
              placeholder="enter your salary"
              value={salary}
              onChange={(e) => { setsalary(e.target.value) }} />

          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )



}
export default From1