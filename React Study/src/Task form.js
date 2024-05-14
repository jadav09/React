import React from "react"


class Form1 extends React.Component {

  render() {

    function show()

    {
        
     let  inp1 = document.getElementById("inputEmail4")
     let  sp1 = document.getElementById("sp1")

      if(inp1.value=="")

      {
        sp1.innerHTML="Required!!!!"
        return ;
      }

      else
      {
        sp1.innerHTML=""
        return;

      }

    }



    return (
      <>
        <form>

          <div class="container">

            <div class="form-row">

              <div class="form-group col-md-6">
                <label for="inputEmail4">First name </label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="enter your name" onBlur={show}/> <span id="sp1"></span>
              </div>

              <div class="form-group col-md-6">
                <label for="inputPassword4">Last name</label>
                <input type="text" class="form-control" id="inputPassword4" placeholder=" enter your name"/> <span id="sp2"></span>
              </div> 

            </div>
            <br/>
            <button type="submit" class="btn btn-primary" onClick={show}>Sign in</button>

          </div>
        </form>

      </>
    )
  }
}



export default Form1