import { makeAutoObservable } from 'mobx';
import { jwtDecode } from 'jwt-decode';



class UserStore {
    user = null;
    token ='';

    constructor() {
        makeAutoObservable(this);
    }

    setToken(token){
        this.token = token;
        sessionStorage.setItem('accessToken',token);

        const decoded = jwtDecode(token);
        const username = decoded.name;
        const email = decoded.username;

        this.user = {username, email};
    }

    logout() {
        this.user = null;
        this.token = '';
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
    }

    loadFromSession() {
        const token = sessionStorage.getItem('accessToken');
        if(token) {
            this.setToken(token);
        }
    }
}

const userStore = new UserStore();
export default userStore;