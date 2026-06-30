import "./Contactus.css";


function Contactus(){
    return (
        <div className="contact-data">
            <h1 style={{fontSize:"38px"}}>Contact-Us</h1>
             <div className="contact">
                <h1>Full Name:-</h1>
            <input type="text" placeholder="Enter Your Name" />

             </div>
             <div className="contact">
                <h1>E-Mail:-</h1>
            <input type="email" placeholder="Enter Your E-Mail" /> <br /> <br />

             </div>
            <button>Contact-Us</button>

        </div>
    )
}
export default Contactus;