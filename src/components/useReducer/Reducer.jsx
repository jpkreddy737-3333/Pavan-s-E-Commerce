import { useReducer } from "react";
import "./Reducer.css";
import Count from "./Reducer.js";
function Reducer(){
    var [state,dispatch] = useReducer(Count,0);
    return (
        <div className="counter">
            <h1>Reducer component:- <span>{state}</span></h1>
            <br />
            <br />
            <button onClick={()=>{
                dispatch({type:"inc"});
            }}>Inc by 1</button>
            <button onClick={()=>{
                dispatch({type:"dec"})
            }}>Dec by 1</button>
            <button onClick={dispatch}>Reset</button>
        </div>
    )
}

export default Reducer;