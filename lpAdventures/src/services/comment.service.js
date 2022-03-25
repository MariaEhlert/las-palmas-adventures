import axios from 'axios';
import {
  API_URL
} from './config';

const apiSettingsComment = {
    fetchAllComments: async () => {
        const endpoint = `${API_URL}/comments`;
        return await (await fetch(endpoint)).json();
    },
    fetchAllCommentsByPlace: async PlaceId  => {
        const endpoint = `${API_URL}/comments/place/${PlaceId}`;
        return await (await fetch(endpoint)).json();
    },
    createComment: async body => {
      const endpoint = `${API_URL}/comments`;
      return await (await axios.post(endpoint, body));
    },
    deleteComment:  async (idPlace,idUser) => {
      const endpoint = `${API_URL}/comments/${idPlace}/${idUser}`;
      return await (await axios.delete(endpoint));
    },
    updateComment: async (idPlace,idUser, body) => {
      const endpoint = `${API_URL}/comments/${idPlace}/${idUser}`;
      return await (await axios.put(endpoint, body));
    },
}



export default apiSettingsComment;