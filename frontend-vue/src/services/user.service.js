import axios from 'axios';
//import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

}

export default new UserService();