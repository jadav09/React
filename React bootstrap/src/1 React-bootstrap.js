import { Col, Container, Row } from "react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

// index.html main bootstrap ki link attech karke bhi use kar sa te hai. or
// npm install bootstrap se bhi bootstrap ko file ke jariye access kar sak te hai.
// import bootstrap file on your node_modules folder after installation npm bootstrap.
// react-bootstrap se ap direct componnet call kar sak te hai.
// wihout react-bootstrap install component call nahi kar sak te hai.



function Bootstrap() {

    return ( 
        <>
            <div className="App">

                <h1 className='bg-primary'>hello Jadav</h1>
                <p className='text-success bg-warnign'>how are your?</p>

            </div>

{/* // call the component call */}

<Container className="bg-secondary" fluid>
<Row justify-content-center>

   <Col className="bg-danger" xl={2}>Hello</Col>
   <Col className="bg-warning" xl={3}>Jadav</Col>
   <Col className="bg-success" xl={1}>How</Col>
   <Col className="bg-primary" xl={1}>Are</Col>
   <Col className="bg-info"xl={2}>You</Col>
   <Col className=" text-white">?</Col>
   <Col className="bg-danger" xl={2}>vivek</Col>


</Row>
</Container>

<div>
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>kjsghdafh</option>
      <option>kjsghdafh</option>
      <option>kjsghdafh</option>
      <option>kjsghdafh</option>

      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

</div>



        </>
    )
}


export default Bootstrap