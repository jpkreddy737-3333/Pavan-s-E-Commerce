import "./Signup.css";
import { Link,useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import {toast} from "react-toastify";

const URL = "http://localhost:5001/auth/sign-up";
function Signup(){


    const navigate = useNavigate

    const nameRef = useRef(null);
    const cityRef = useRef(null);
    const genderRef = useRef(null);
    const emailRef = useRef(null);
    const phonenumRef = useRef(null);
    const passwordRef = useRef(null);

    const registerUser=()=>{
       var data = {
        name:nameRef.current.value,
        city:cityRef.current.value,
        gender:genderRef.current.value,
        email:emailRef.current.value,
        phone:phonenumRef.current.value,
        password:passwordRef.current.value
       }
        
        axios.post(URL,data).then(function(res){
            console.log(res.data);
            if(res.data.ok){
                toast("Registered Succefully",{
                    autoClose:1000,
                    className:"toastclass"
                });

                setTimeout(()=>{
                    navigate("/")
                },2000)

            nameRef.current.value="";
            cityRef.current.value="";
            genderRef.current.value="";
            emailRef.current.value="";
            phonenumRef.current.value="";
            passwordRef.current.value="";

            }else{
                throw Error(res.data.error);
            }
            

        }).catch(function(error){
            toast.error(error.message);
            console.log(error);
        })
    }

    return (
        <div className="signup-data">
            <h1>Sign-Up</h1>

            <div className="signup-data1">
                <h1>Name:-</h1>
                <input ref={nameRef} type="text" placeholder="Enter Your Name" />
                </div>

                <div className="signup-data1">
                    <h1>city:-</h1>
                <input ref={cityRef} type="text" placeholder="Enter Your City"/>
                </div>

                <div className="signup-data1">
                    <h1 ref={genderRef}>Gender:-</h1>
                     <select name="gender" required ref={genderRef}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
                </div>

                <div className="signup-data1">
                    <h1>E-Mail:-</h1>
                <input ref={emailRef} type="email" placeholder="Enter E-mail" />
                </div>

                <div className="signup-data1">
                    <h1>PhoneNumber:-</h1>
                <input ref={phonenumRef} type="number" placeholder="Enter Phone Number" />
                </div>

                <div className="signup-data1">
                    <h1>Password:-</h1>
                <input ref={passwordRef} type="password" placeholder="Enter Password" />
                </div>

            
            <button onClick={registerUser}>Register</button>

            <div className="link-data">
                <Link to="/">Have an Accoutn? Sign In</Link>
            </div>

        </div>
    )
}

export default Signup;