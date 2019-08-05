import axios from 'axios';

const instance = axios.create({
    baseURL:"https://burger-builder-da7f8.firebaseio.com",
    withCredentials: false
});

export default instance;