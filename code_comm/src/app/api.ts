import axios, {AxiosInstance} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL:'http://localhost:8081',
    headers: {
        'Content-Type':'application/json'
    }
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


export default axiosInstance;