import { useState, useEffect } from "react";
// API
import API from '../services/user.service';

const initialState = { results: [] }

export const useUserFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAllUsers = async () => {
    try {
      setError(false);
      setLoading(true);

      const users = await API.fetchAllUsers();


      if (users) {
        setState(prev => ({
          ...users,
          results:
            [...users]
        }))
      }
      

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    setState(initialState);
    fetchAllUsers();
  }, []);

  return { state, loading, error };

}
