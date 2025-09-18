
import { linkAPI } from "../../utils/data.jsx";

const loadDataMyInformation = async ({access_token}) => {
    const response = await fetch(
        linkAPI + "myInformation",
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`
            },
        }
    )
    
    const data = await response.json()

    const message = data.message
    const user = data.user
    return { user, message };
}

export const loadDataUsers = async ({access_token}) => {
    const response = await fetch(
        linkAPI + "users",
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`
            },
        }
    )

    const data = await response.json()
    const message = data.message
    const users = data.data
    return { users, message };
}


export default loadDataMyInformation;

