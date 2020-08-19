import axios from 'axios';

const API_URL = 'http://localhost:5000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log(response.data)
        return response.data;
      })
      .catch(err => {
        console.log('throwing')
          throw err
      })
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.name,
      email: user.email,
      password: user.password,
      passwordCheck: user.passwordCheck,
      bio: user.bio,
      roles: user.roles
    });
  }
}

export default new AuthService();