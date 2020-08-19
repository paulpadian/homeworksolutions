import axios from 'axios'
const API_URL = 'http://localhost:5000/assignment/';

class AssignmentService {
    getAll() {
        return axios
          .get(API_URL + 'All', {
            
          })
          .then(response => {
            if (response.data.token) {
              localStorage.setItem('assignments', JSON.stringify(response.data));
            }
            console.log(response.data)
            return response.data;
          })
          .catch(err => {
            console.log('throwing')
              throw err
          })
      }
    
}

export default new AssignmentService();