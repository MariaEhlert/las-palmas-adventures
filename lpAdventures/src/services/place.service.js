import axios from 'axios';
import {
  API_URL,
  PLACES
} from './config';

const apiSettingsPlace = {
    fetchAllPlaces: async () => {
        const endpoint = `${API_URL}/places`;
        return await (await fetch(endpoint)).json();
    },
    fetchAllPlacesByOrder: async () => {
        const endpoint = `${API_URL}/order/name`;
        return await (await fetch(endpoint)).json();
    },
    fetchPlacesByName: async namePlace => {
        const endpoint = `${API_URL}/${namePlace}`;
        return await (await fetch(endpoint)).json();
    }
}



export default apiSettingsPlace;