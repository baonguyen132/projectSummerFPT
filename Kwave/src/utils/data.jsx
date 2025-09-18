import Cookies from "js-cookie";
const linkAPI = "http://127.0.0.1:5000/";

function getToken() {
    const accessToken = Cookies.get("access_token");
    return accessToken
}
export {linkAPI};
export default getToken