import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="nav">
            <div>
                <div className="links">
                    <Link className="links" to="/home">Home</Link>
                    <Link className="links" to="/registration">Registration</Link>
                    <Link className="links" to="/payments">Payments</Link>
                    <span className="links">Aruna</span>
                    <span className="links">Logout</span>
                </div>
            </div>
        </div>
    );
}
export default Nav;