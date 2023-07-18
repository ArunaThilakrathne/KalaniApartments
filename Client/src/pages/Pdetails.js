function Pdetails(){
    return(
        <div className="container">
       <h1> Personal Details</h1>
       <form>
        <input type='text' placeholder="First Name"/>
        <input type='text' placeholder="Last Name"/>
        <input type='text' placeholder="N.I.C"/>
        <input type='text' placeholder="Phone number"/>
        <input type='text' placeholder="Address"/>
        <div className="hoverbutton">
            <p>this is a error</p>
        <button>Search</button>
        <button>Update</button>
        <button>Delete</button>
        </div>
        </form>
       </div>
    )
}

export default Pdetails;