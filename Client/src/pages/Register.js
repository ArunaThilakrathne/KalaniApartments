function Register(){
    return(
        <div className="container">
        <h1>Register</h1>
        <form>
        <input type='text' placeholder="First Name"/>
        <input type='text' placeholder="Last Name"/>
        <input type='text' placeholder="N.I.C"/>
        <input type='text' placeholder="Phone number"/>
        <input type='text' placeholder="Address"/>
        <div className="hoverbutton">
            <p>this is a error</p>
        <button>Register</button>
        </div>
        </form>
        <datalist></datalist>
        </div>

        
    )
}

export default Register;