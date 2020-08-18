import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.username,
      email: user.email,
      password: user.password,
      passwordCheck: user.passwordCheck,
      bio: user.bio,
      roles: user.roles
    });
  }
}

export default new AuthService();