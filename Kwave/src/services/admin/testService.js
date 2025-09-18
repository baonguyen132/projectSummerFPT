
import { linkAPI } from "../../utils/data.jsx";

const loadDataTests = async ({access_token}) => {
    const response = await fetch(
        linkAPI + "tests",
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
    const tests = data.data

    return { tests, message };
}

export const handleCreateTest = async ({description , image  , name , time , accessToken , handleSucess}) => {
    const response = await fetch(
        linkAPI + "tests",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({ description, image, name, time })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    const message = data.message
    const dataTest = data.data

    handleSucess({ dataTest, message });
}

export const handleDeleteTest = async ({ id, accessToken, handleSuccess }) => {
    const response = await fetch(
        linkAPI + "tests",
        {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({ id })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    const message = data.message
    handleSuccess({  message });



}

export default loadDataTests;