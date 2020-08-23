import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['AUTHORIZATION'] = 'AUTH TOKEN TAKEN FROM AXIOSINSTANCE';

//instance.interceptors.request ...

export default instance;

