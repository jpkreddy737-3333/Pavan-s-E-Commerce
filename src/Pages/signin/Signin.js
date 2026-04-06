import axios from "axios";
import { toast } from "react-toastify";
const URL = "http://localhost:5001/auth/sign-in";

export function Loginuser(credentials,login){
    axios.post(URL,credentials).then((res)=>{
        if(res.data.ok){
           toast.success(res.data.result);
           login();
        }else{
            throw Error(res.data.error)
        }
    }).catch((error)=>{
        toast.error(error.message);
    })
        
    
}