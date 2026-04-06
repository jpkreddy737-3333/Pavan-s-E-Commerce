import Actiondata from "../actioncreator/Actiondata";
import { useRef } from "react";
import myStore from "../Store/store";
function Name(){
    const inputref = useRef(null);

    function myname(){
        var name = Actiondata(inputref.current.value);
        myStore.dispatch(name);
    }
    return (
        <div style={{padding:"50px"}}>
            <h1>Name Component</h1>
            <input ref={inputref} type="text" placeholder="enter name" />
            <button onClick={myname}>Submit</button>
        </div>
    )
}

export default Name;