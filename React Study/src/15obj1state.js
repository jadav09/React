import { useState } from "react"

function Obj1state() {

    const [data, setdata] = useState(
        {
            name: "jadav",
            "age": 23,
            address: {
                area: "SG ROAD",
                pin: 123456,
                xyz:
                {
                    info: "suspected",
                    war: "dangerous"

                }
            }
        })

    //object ki value destrucuring assingment se data main stor ki hai. data=objcet
    // secound peramitter satedate se hum uski value ko change karege.


    return (
        <>

            {/* onclick pe change the value of object .you can use secound peramiter in object setdata */}
            {/* you can pass the hole object insite The satdata. and chagne the value */}


            <h1
                onClick={() => {

                    setdata(

                        // {                      // =====> first mehod to change value
                        //     name:"dharmesh",
                        //     "age":23,
                        //     address:{
                        //         area:"SG ROAD",
                        //         pin:123456
                        //     }
                        // }   

                        {
                            ...data,             //===> use spread operator and copy data pura object copy karaga.and edit you choeses index
                            name: "dharmesh",
                            address:            // ==> object inside the object
                            {
                                // ...data.address,   

                                //pura address copy nahi kiya to vo click pe area ko change karega.lekin address ki under pin number ki value khali kardega.kyu ki app sirt area update kar rahe ho to vo area hi rakhega.and value rakhani hai to copy the holl of address

                                area: "C.G road",
                                xyz:
                                {
                                    war: "warning"
                                }

                            }


                        }

                    )

                }}>detalis:</h1>


            <p>name:{data.name}</p>
            <p>area:{data.address.area}</p>
            <p>pin:{data.address.pin}</p>
            <p>war:{data.address.xyz.war}</p>

        </>
    )
}

export default Obj1state