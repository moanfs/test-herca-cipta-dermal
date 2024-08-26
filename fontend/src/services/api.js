import axios from 'axios';

const authToken = localStorage.getItem('authToken');
axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

export default axios;
