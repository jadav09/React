import Home from "./3.2home";
import Service from "./3.2Service";
import About from "./3.2About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Service1 from "./3.2service1";
import Service2 from "./3.2service2";
import Service3 from "./3.2service3";

function Rout()
{
    return(
        <>
        {/* <Home/> 
        <About/>
        <Service/> */}      {/* // direct call nahi karvana hia. call throght routing */}

        <BrowserRouter>
        <Link to={"/home"} target="_blank">Home</Link>  
        <Link to={"/about"} target="_blank"> About</Link>  
        <Link to={"/service"} target="_blank"> Service</Link>  

        <Routes>
            <Route path="/home" element={<Home/>}></Route>  
            <Route path="/about" element={<About/>}></Route> 

            <Route path="/service" element={<Service/>}>
                
            <Route path="service/service1" element={<Service1/>}></Route>  
            <Route path="service/service2" element={<Service2/>}></Route>  
            <Route path="service/service3" element={<Service3/>}></Route>  

                </Route>  



        </Routes>
        </BrowserRouter>
        </>
    )
    // call the Home insite  the Route component.
    // path Route ka  prob hai. je se key prob hota hai. ve se hi.  
    // home page pahle se dikhana hai.not use path
    // Route ka path or Link ke To main same name hone chahiye.
    // link component ke bich likho ge tab hi link banegi. 
    // link is same as work as ancer tag.
    // target blank link open to new page.

// ==> service ke under diffrent diffrent services hogi. so create another service components.
// ==> diffrent service le ke path parent service ke under se child service asha path dena padega.
// exa:- path="/service/service1"

// ==> parent service component main without Outlet render nahi karega.

}

export default Rout