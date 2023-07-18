import Footer from "../components/Footer";
function AccountManager(){
    return(
        <div className="container">
        <h1>Manage Accounts</h1>
        <form>
        <input type="text" placeholder="User name"/>
       <input type="text" placeholder="Old password"/>
       <input type="text" placeholder="New password"/>
       <input type="text" placeholder="Confirm password"/>
       <div className="hoverbutton">
                <button><b>Update</b></button>
                </div>
                <div className="hoverbutton">
                <p>this is a error</p>
                </div>
       </form>
       <h1>Add new account</h1>
       <form>
        
        <input type="text" placeholder="User name"/>
       <input type="text" placeholder="New password"/>
       <input type="text" placeholder="Confirm password"/>
       <div className="hoverbutton">
                <button><b>Add</b></button>
                </div>
                <div className="hoverbutton">
                <p>this is a error</p>
                </div>
       </form>
       <Footer/>
       </div>
    )
}
export default AccountManager;