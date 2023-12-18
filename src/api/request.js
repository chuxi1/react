
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from "../store/AuthContext.js";
const api = axios.create({
    baseURL: 'http://8.134.168.19:8093/sunshineFarm', // 替换成实际的 API 地址
});

// 请求拦截器
api.interceptors.request.use(
    (config) => {
        const { state } = useAuth();
        const token = Cookies.get('token') || state.token;
        if (token) {
            config.headers['token'] = token;
        }
        // 在发送请求之前做一些处理，比如添加 token，设置请求头等
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
api.interceptors.response.use(
    (response) => {
        // 对响应数据做一些处理，比如解析响应数据，检查错误等
        return response;
    },
    (error) => {
        // 对响应错误做些什么
        return Promise.reject(error);
    }
);

export default api;