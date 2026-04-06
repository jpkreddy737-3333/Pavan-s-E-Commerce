import "./Nav.css";
import myContext from "../contextapi/Contextdata";  
import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
function Nav(){
    const{logout} = useContext(myContext);
    const navigate = useNavigate();
    
    return <div className="container">
        <h2>BRO's Mart</h2>
        <nav>
            
            
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contactus">ContactUs</Link>
            <Link to="/cart">Cart</Link>
            <button onClick={()=>{
                logout();
                navigate("/");
            }}> LogOut</button>
        </nav>
    </div>
}
export default Nav;