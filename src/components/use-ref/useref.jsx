import { useRef } from "react";
import "./useref.css";


function Useref(){
    const count = useRef(null);
    const count2 = useRef(null);

    function counter(){
        count.current.style.color = "blue";


        count2.current.style.border = " 5px solid red";
        

    }
    return (
        <div className="useref-data">
            <h1 ref={count}>User Ref Dom Manipulation </h1>
            <button ref={count2}  onClick={counter}>Submit</button>
        </div>
    )
}

export default Useref;