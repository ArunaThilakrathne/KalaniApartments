import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import '../grid.css';
import '../App.css';
function Home(){
    return(
        <div className='parent'>
              <span className="segment twelve">
                <h1 className="home">Good morning Aruna!</h1>
                </span>
            <Link  className="links segment four" to='/registration'>
            <div className="hcard">
            Register new person
            </div>
            </Link>
            <Link className="links segment eight" to='/personaldetails'>
            <div className="hcard">
            Personal details
            </div>
            </Link>
            <Link className="links segment ninetotwelve" to='/updatepayments'>
            <div className="hcard">
            Update Payment
            </div>
            </Link>
            <Link className="links segment center" to='/report'>
            <div className="hcard">
            Reports
            </div>
            </Link>
            <Link className="links segment fiveplusfour" to='/leaverecords'>
            <div className="hcard">
            Leave Records
            </div>
            </Link>
            <Link className="links segment g9to12-g3to4" to='/accmanager'>
            <div className="hcard">
            Manage Accounts
            </div>
            </Link>
            <div className="segment twelve">
            <Footer/>
            </div>
        </div>
    )
}
export default Home;