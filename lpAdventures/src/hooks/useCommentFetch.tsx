import { useState, useEffect } from "react";
// API
import API from '../services/comment.service';

const initialState = { results: [] }

export const useCommentFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchAllcomments = async () => {
        try {
            setError(false);
            setLoading(true);

            const comments = await API.fetchAllComments();


            if (comments) {
                setState(prev => ({
                    ...comments,
                    results:
                        [...comments]
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
        fetchAllcomments();
    }, []);

    return { state, loading, error };

}
