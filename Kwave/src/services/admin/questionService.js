
import { linkAPI } from "../../utils/data.jsx";

const loadDataQuestions = async ({access_token , idTest}) => {
    const response = await fetch(
        linkAPI + `questions/${idTest}`,
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
    const questions = data.data

    return { questions, message };
}

export const handleCreateQuestion = async (
    {
        id_test,
        question ,
        point, 
        optionA ,
        optionB , 
        optionC , 
        optionD , 
        correctAnswer, 
        solution,
        type,
        accessToken, 
        handleSuccess
    }
) => {

    const response = await fetch(
        linkAPI + "questions",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(
                { 
                    question, 
                    point, 
                    optionA, 
                    optionB, 
                    optionC, 
                    optionD, 
                    correctAnswer, 
                    solution, 
                    type,
                    id_test
                }
            )
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    const message = data.message
    const dataQuestions = data.data

    handleSuccess({ dataQuestions, message });

}

export const handleDeleteQuestion = async ({ id, accessToken, handleSuccess }) => {
    const response = await fetch(
        linkAPI + "questions" ,
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


export default loadDataQuestions;