import axios from 'axios'
const API_URL = 'http://localhost:5000/submission/';
import authHeader from './auth-header'
class SubmissionService {
    getAll() {
        return axios
          .get(API_URL + 'All', {
            
          })
          .then(response => {
            if (response.data.token) {
              localStorage.setItem('submissions', JSON.stringify(response.data));
            }
            console.log(response.data)
            return response.data;
          })
          .catch(err => {
            console.log('throwing')
              throw err
          })
      }
    submitOne() {
        return axios 
            .post(API_URL + 'submit/', { headers : authHeader() }
            )
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }
}   

export default new SubmissionService();