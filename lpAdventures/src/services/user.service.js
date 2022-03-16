import axios from 'axios';
import {
  API_URL,
  USERS
} from './config';

const apiSettings = {
    fetchAllUsers: async () => {
        const endpoint = `${API_URL}/users`;
        return await (await fetch(endpoint)).json();
    }
}