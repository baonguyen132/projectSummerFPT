import { useEffect, useState } from "react";
import loadDataQuestions from "../services/admin/questionService";

function useFetchQuestion({ accessToken, idTest, dependencies = [] }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      try {
        const { questions, message } = await loadDataQuestions({
          access_token: accessToken,
          idTest: idTest,
        });

        if (!isCancelled) setQuestions(questions);
        // console.log(message);
      } catch (error) {
        if (!isCancelled) setError(error.message);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };
    fetchQuestions();
    return () => {
      isCancelled = true;
    };
  }, dependencies);

  return { questions, loading, error };
}

export default useFetchQuestion;
