// src/api/axiosInstance.js
import axios from 'axios';

// بنستخدم المتغير اللي حطيناه في ملف .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // لو فيه أي Headers تانية ثابتة لكل الـ Requests (زي Authorization) ممكن تتضاف هنا
    },
    timeout: 60000, // مهلة 60 ثواني للـ Request
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('userToken'); // جلب الـ Token من الـ Local Storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // إضافة الـ Token في الـ Header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// مثلاً: لو الـ Token صلاحيته انتهت، نعمل Logout تلقائي
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // هنا ممكن تعمل إعادة توجيه لصفحة تسجيل الدخول أو مسح الـ Token
            console.log('Authentication error, redirecting to login...');
            localStorage.removeItem('userToken');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;