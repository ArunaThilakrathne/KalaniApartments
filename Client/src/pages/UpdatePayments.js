import Footer  from "../components/Footer";
function updatepayments(){
    return(
       
       <div className="container">
        <h1>Payment</h1>
        <form>
       <input type="text" placeholder="Name"/>
       <input type="text" placeholder="N.I.C"/>
       <input type="text" placeholder="Select month"/>
       <input type="text" placeholder="Amount"/>
       <div className="hoverbutton">
                <button><b>Search</b></button>
                </div>
                <div className="hoverbutton">
                <button><b>Add</b></button>
                </div>
                <div className="hoverbutton">
                <button><b>Update</b></button>
                </div>
                <div className="hoverbutton">
                <button><b>Clear</b></button>
                </div>
                
       </form>
       <Footer/>
       </div>

    )
}

export default updatepayments;