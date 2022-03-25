import { useState, useEffect } from "react";
// API
import API from '../services/favourite.service';

const initialState = { results: [] }

export const useFavouriteFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchAllFavourites = async () => {
        try {
            setError(false);
            setLoading(true);

            const favourites = await API.fetchAllFavourites();


            if (favourites) {
                setState(prev => ({
                    ...favourites,
                    results:
                        [...favourites]
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
        fetchAllFavourites();
    }, []);

    return { state, loading, error };

}
