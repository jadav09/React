import { Link, Outlet } from "react-router-dom"

function Service() {
  return (
    <div>

<Link to="service/service1">Service1</Link>
<Link to="service/service2">Service2</Link>
<Link to="service/service3">Service3</Link>
<Outlet/>

    </div>
  )
}

export default Service
