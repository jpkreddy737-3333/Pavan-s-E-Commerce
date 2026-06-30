import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000";
const URL = `${BASE_URL}/api/auth/login`;

export function Loginuser(credentials, login) {
    axios.post(URL, credentials)
        .then((res) => {

            console.log("LOGIN RESPONSE:", res.data);

            if (res.data && res.data.token) {
                toast.success("Login Successful");
                login(res.data.token);
            } else {
                throw new Error(res.data?.message || "Invalid response");
            }

        })
        .catch((error) => {
            console.log("LOGIN ERROR:", error);

            toast.error(
                error.response?.data?.message || error.message
            );
        });
}