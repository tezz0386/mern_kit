import { Link } from "react-router-dom";
import {Outlet} from 'react-router-dom';
const LayoutPage = ()=>{
    return (
        <div className="container mt-5">
          <div className="row">
            <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-4 content">
              <Outlet />
            </main>
          </div>
      </div>
    )
}

export default LayoutPage;