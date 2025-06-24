import axios from "axios";

// 401 터지면 자동으로 refresh

const api = axios.create({
    baseURL:'https://front-mission.bigs.or.kr'
});

//accessToken 자동
api.interceptors.request.use(config => {
    const token = sessionStorage.getItem('accessToken');
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

//accessToken 만료 시 refresh로 자동 생성
api.interceptors.response.use(
    res => res, async error => {
        const request = error.config;

        if(error.response?.status === 401 && !request._retry){
            request._retry = true;
            const refreshToken = sessionStorage.getItem('refreshToken');

        try {
            const res = await axios.post('https://front-mission.bigs.or.kr/auth/refresh',{
                refreshToken
            });
            const newAccessToken = res.data.accessToken;
            sessionStorage.setItem('accessToken',newAccessToken);
            sessionStorage.setItem('refreshToken',res.data.refreshToken);

            request.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return api(request); // 다시 요청
        } catch (error) {
            console.log('토큰 갱신 실패',error);
            sessionStorage.clear();
            window.location.href = '/login';
        }
    }
    return Promise.reject(error);
    }
)

export default api;