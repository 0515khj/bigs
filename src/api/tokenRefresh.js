import axios from "axios";
import { jwtDecode } from "jwt-decode";



// 액세스 끝나기 90초 전에 재발급
export const tokenRefresh = () =>{
    const token = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');

    if(!token || !refreshToken) return;
    
    const decode = jwtDecode(token);
    const exp = decode.exp;
    const now = Math.floor(Date.now() / 1000);
    const delay = Math.max((exp - now - 60) * 1000, 0);
    
    if (isNaN(delay) || delay <= 0) return;

        setTimeout(async() =>{
            try {
                const res = await axios.post('https://front-mission.bigs.or.kr/auth/refresh', { refreshToken });
                const newToken = res.data.accessToken;
                sessionStorage.setItem('accessToken',newToken);
                tokenRefresh(); // 재귀 호출
            } catch (error) {
                console.log('자동 리프레쉬 실패',error);
                sessionStorage.clear();
                window.location.href='/';
            }
        },delay);
}