import axios from 'axios';
import {
  API_URL,
  FAVOURITES
} from './config';

const apiSettingsFavourite = {
    fetchAllFavourites: async () => {
        const endpoint = `${API_URL}/favourites/${UserId}`;
        return await (await fetch(endpoint)).json();
    },
    createFavourite: async body => {
      const endpoint = `${API_URL}/favourites`;
      return await (await axios.post(endpoint, body));
    },
    deleteFavourite:  async body => {
      const endpoint = `${API_URL}/favourites/${PlaceId}/${UserId}`;
      return await (await axios.delete(endpoint, body));
    },
    updateFavourite: async (UserId, body) => {
      const endpoint = `${API_URL}/favourites/${PlaceId}/${UserId}`;
      return await (await axios.put(endpoint, body));
    },
}

export default apiSettingsFavourite;