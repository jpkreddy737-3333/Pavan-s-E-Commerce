import "./Signin.css";
import myContext from "../../components/contextapi/Contextdata";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Loginuser } from "./Signin.js";

function Signin() {

    const { login } = useContext(myContext);

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    function handleruserEmail(e) {
        setCredentials({ ...credentials, email: e.target.value });
    }

    function handleruserPassword(e) {
        setCredentials({ ...credentials, password: e.target.value });
    }

    return (
        <div>
            <div className="signin-data1">

                <h1 style={{ fontSize: "38px" }}>Sign-In</h1>

                <div className="signin-data">
                    <h1>Email:-</h1>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        onChange={handleruserEmail}
                    />
                </div>

                <div className="signin-data">
                    <h1>Password:-</h1>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={handleruserPassword}
                    />
                </div>

                <button onClick={() => Loginuser(credentials, login)}>
                    Login
                </button>

                <div className="signin-data2">
                    <Link to="/">Forgot password?</Link>
                    <Link to="/signup">Sign-Up</Link>
                </div>

            </div>
        </div>
    );
}

export default Signin;