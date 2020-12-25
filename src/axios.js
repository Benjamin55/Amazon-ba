import axios from 'axios';

const instance = axios.create ({
    baseURL: 'http://localhost:5001/ba-d4cd7/us-central1/api'
});

export default instance;