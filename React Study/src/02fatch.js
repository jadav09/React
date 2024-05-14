function Fetch1() {

   return (

      fetch("https://jsonplaceholder.typicode.com/comments")

         .then((res) => {
            return res.json()
         })

         .then((op) => {


            var headers = `<table border=1 style="color:green">
        <tr>

        <td>ID<td/>
        <td>postID<td/>
        <td>NAME<td/>
        <td>EMAIL<td/>
        <tr/>
       `

            op.map((v) => {



               headers = headers + `  <tr>

           <td>${v.id}<td/>
           <td>${v.postId}<td/>
           <td>${v.name}<td/>
           <td>${v.email}<td/>
           <tr/>`

            })
            document.write(headers + `<table/>`)

         })
   )
}

export default Fetch1;