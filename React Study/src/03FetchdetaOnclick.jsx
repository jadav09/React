// import React from 'react'      // fetchdataOnclick.jsx file creat and type rfce and get function syntax:-

// function FetchdetaOnclick() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default FetchdetaOnclick


import React from 'react'

function FetchdetaOnclick() {

  let getapi = ()=>{

    fetch("https://jsonplaceholder.typicode.com/comments")

    .then((res)=>{
       return res.json()
    })

    .then((op)=>{


       var  headers =`<table border=1 style="color:green">
       <tr>

       <td>ID<td/>
       <td>postID<td/>
       <td>NAME<td/>
       <td>EMAIL<td/>
       <tr/>
      `

       op.map((v)=>{

         
           
          headers = headers +`  <tr>

          <td>${v.id}<td/>
          <td>${v.postId}<td/>
          <td>${v.name}<td/>
          <td>${v.email}<td/>
          <tr/>`

          // console.log(v.id)
          
       })

       document.write(headers +` <table/>`)

      
    })

  }

  return (
    <div>
    Onclick get data on<button onClick={getapi}>Api</button>
    </div>
  )
}

export default FetchdetaOnclick
