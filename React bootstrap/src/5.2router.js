import { Link, Route, Routes } from "react-router-dom";
import Drowtable from "./5 dataFetchOnTable";
import From1 from "./5.1 form";
import View from "./5.3view";
import Edit from "./5.4edit";

function Links1()
{
    return(
        <>
        <div className="text-center">
        <Link to={"/"}>home</Link>
        <Routes>
            <Route path="/" element={<Drowtable></Drowtable>}></Route>
            <Route path="/addemp" element={<From1/>}></Route>
            <Route path="/view/:id" element={<View/>}></Route>
            <Route path="/edit/:edtid" element={<Edit/>}></Route>
        </Routes>
        </div>

        {/* "/" path ==> home page pehle se dikhega. navigate time pe direct back main show karega. */}
        {/* path="/view/:id" ===>: colan kara padega.*/}
       

        </>

    )
}
export default Links1