import { useState } from "react"


 let intilial00 = {
    
    name:"jaydeep",
    age : 22,
    address : {
        city : "dhandhuka",
        area : {
            number : "7486843319",
            village : "gunjar",
            std : {
                std1 : "msc IT",
                nil : {
                    work : "hard",
                    dil : {
                        kam : "simpal task"
                    }

                }
            }
        }
    }
}

function Bhuro()
{

const [data,setdata] = useState(intilial00)

    return(
        <>
        <p >Click me to chagne the data</p>
        <button
         onClick={()=>{
            setdata({
                ...data,
                address:
                {
                    area:
                    {
                        std:
                        {
                            nil:
                            {
                                dil:
                                {
                                    kam:"almost done"
                                 }
                            }


                        }

                    }

                }
            })
        }}>kam</button>
        <p>{data.address.area.std.nil.dil.kam}</p>
        </>
    )

}

export default Bhuro