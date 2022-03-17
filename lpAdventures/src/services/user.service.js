import axios from 'axios';
import {
  API_URL,
  USERS
} from './config';

const apiSettingsUser = {
    fetchAllUsers: async () => {
        const endpoint = `${API_URL}/users`;
        return await (await fetch(endpoint)).json();
    },
    createUser: async body => {
      const endpoint = `${API_URL}/users`;
      return await (await axios.post(endpoint, body));
    },
    deleteUser: async UserId => {
      const endpoint = `${API_URL}/users/${UserId}`;
      return await (await axios.delete(endpoint));
    },
    updateInfo: async (UserId, body) => {
      const endpoint = `${API_URL}/users/${UserId}`;
      return await (await axios.put(endpoint, body));
    },
}



export default apiSettingsUser;