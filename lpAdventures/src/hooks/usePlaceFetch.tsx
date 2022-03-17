import { useState, useEffect } from "react";
// API
import API from '../services/place.service';

const initialState = { results: [] }

export const usePlaceFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchAllPlaces = async () => {
        try {
            setError(false);
            setLoading(true);
            const places = await API.fetchAllPlaces();

            if (places) {
                setState(prev => ({
                    ...places,
                    results:
                        [...places]
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
        fetchAllPlaces();
    }, []);

    return { state, loading, error };

}