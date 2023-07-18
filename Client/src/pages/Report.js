import Footer from '../components/Footer';
function Report(){
    return(
 
       <div className="container">
       <h1>Report</h1>
       <form>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="N.I.C"/>
      <input type="text" placeholder="Phone"/>
      <input type="text" placeholder="Select month"/>
      <input type="text" placeholder=" select paid or unpaid"/>
      <div className="hoverbutton">
               <button><b>Search</b></button>
               </div>
               <div className="hoverbutton">
               <button><b>Print</b></button>
               </div>

               <div className="hoverbutton">
               <button><b>Clear</b></button>
               <p>this is a error</p>
               </div>
               
      </form>
      <Footer/>
      </div>
    )
}

export default Report;