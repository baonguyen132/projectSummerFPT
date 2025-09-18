import { useEffect, useState } from "react";
import { loadDataUsers } from "../services/admin/userService";

function useFetchUsers({ accessToken, dependencies = [] }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const { users, message } = await loadDataUsers({
          access_token: accessToken,
        });
        if (!isCancelled) setUsers(users);
        // console.log(message);
      } catch (error) {
        if (!isCancelled) setError(error.message);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };
    fetchUsers();
    return () => {
      isCancelled = true;
    };
  }, dependencies);

  return { users, loading, error };
}

export default useFetchUsers;
