import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
    "x-auth-token": userData.token
  }
});