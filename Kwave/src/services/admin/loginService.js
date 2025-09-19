import { linkAPI } from "../../utils/data.jsx";
import Cookies from "js-cookie";

const handleLogin = async ({email , password}) => {
    const response = await fetch(
        linkAPI + "loginAdmin",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    const accessToken = data.access_token
    const message = data.message
    return { accessToken, message };

}

export const handleLogout = () => {
    Cookies.remove("access_token");
    window.location.href = "/dashboard/login"; // Redirect to login after logout
}

export default handleLogin;