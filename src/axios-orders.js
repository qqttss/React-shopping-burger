import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c1da1.firebaseio.com/'
});

export default instance;