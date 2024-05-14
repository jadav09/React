import img1 from './img1.jpeg' // call img:- import name img1 with file extension.


function Info1() {     // Expert function name always be capitalize.

  // x=12    //without variable show the arror and x is undefined.

  let x = 12   // {x} ==> call that x

  let obj =

  {
    background: "powderblue",
    fontSize: "50px",
    color: "blue",
    height: 200
  }

  return (

    // return khali dar diya to error show kardega.solve the eror to any enclosing tag in return

    // <h1>hello React</h1>  // run the code

    // <div>hello jadav</div>  next time creat a code with repeat error

    //  use HTML code without Perants you can show error.

    // JSX elements must be wrapped in a enclosing tag.

    // apply the internal stayle in tag.

    //sytax:- same as object

    // style={
    //   {
    //     property:value,
    //     property:value
    //   }
    // }

    // you can creat one style and call that any time.

    // use js code insde the {}

    <div>
      <h1 style={

        {
          "color": "red",
          "background": "green",
          "height": 100,
          width: 400
        }}>Well Come React {x}</h1>


      <p style={obj}>Helo jadav</p>


      <span style={obj}>call another style</span>

      {/* you can used any tag in enclosing tag. */}


      {/* get the images. */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6EX4WPmaAVwletgTXHT4voVUcuPiuVK13sulVm5Wcg&s"></img>


      {/* get images in path */}
      {/* save the images same locaion on app.js and import the file on app.js  */}
      <img src={img1} style={{ width: 400 }}></img>


      {/*without import and get the img. copy the images in public folder */}
      <img src='img1.jpeg'></img>


      {(1 == 1) ? "f" : "f"}

      {/* use js code inside the {} */}

      <Darshan />

    </div>

    //  HTML tag without endclosin tag show the error.
  )
}


function Darshan() {
  return (
    <>HOW ARE YOU JADAV im fine</>
  )
}

export default Info1;

// expert function name always capital.
// only for one time export file. you can not allow to one and more time export functon.
// call that one and more function inside the main function (ex :- insite App)
