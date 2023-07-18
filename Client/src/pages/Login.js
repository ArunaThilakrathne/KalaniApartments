import React from "react";
import Footer from '../components/Footer';
function Login  () {
    return(
        <div className="auth">
            <form>
            <h1><center>Login</center></h1>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password" />
                <div className="hoverbutton">
                <button><b>Login</b></button>
                </div>
                <p>this is an error</p>
            </form>
            <div className="segment twelve">
            <Footer/>
            </div>
        </div>
    )
}

export default Login;
