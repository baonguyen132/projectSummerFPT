import { useEffect, useState } from "react";
import loadDataTests from "../services/admin/testService";

function useFetchTests({ accessToken, dependencies = [] }) {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchTests = async () => {
      setLoading(true);
      setError(null);

      try {
        const { tests, message } = await loadDataTests({
          access_token: accessToken,
        });
        
        if (!isCancelled) setTests(tests);
        // console.log(message);
      } catch (error) {
        if (!isCancelled) setError(error.message);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };
    fetchTests();
    return () => {
      isCancelled = true;
    };
  }, dependencies);

  return { tests, loading, error };
}

export default useFetchTests;
