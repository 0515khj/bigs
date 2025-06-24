import axios from 'axios';
import React, { useState } from 'react';
import { LoginWrap } from './loginStyle';
import { useNavigate } from 'react-router-dom';
import { tokenRefresh } from '../../api/tokenRefresh';
import userStore from '../../store/userStore';
import { FaArrowLeft } from 'react-icons/fa';

const Login = () => {

    const [user , setUser] = useState({
        username :'',
        password :''
    });
    const navi = useNavigate();

    const LoginValue = e =>{
        const {name , value} = e.target;

        setUser(data => ({
            ...data, [name] : value
        }));
    };


    const userInfo = async() =>{
        try {
            const response = await axios.post('https://front-mission.bigs.or.kr/auth/signin',{
                username : user.username,
                password : user.password
            })
            const token = response.data.accessToken;
            const refreshToken = response.data.accessToken;

            sessionStorage.setItem('refreshToken',refreshToken);
            
            userStore.setToken(token);
            
            tokenRefresh();

            navi('/');
        } catch (error) {
            console.log('에러',error)
        }
    }

    return (
        <LoginWrap>
        <div className="inner">
            <div className="all">
                <form className="loginform"
                onSubmit={e => {
                  e.preventDefault();
                  userInfo();
                }}>
                <button type="button" className="back" onClick={() => navi(-1)}>
                  <FaArrowLeft />
                </button>
                <h1>LOGIN</h1>
                <input
                  type="email"
                  name="username"
                  id="email"
                  placeholder="이메일"
                  value={user.username}
                  onChange={LoginValue}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="비밀번호"
                  value={user.password}
                  onChange={LoginValue}
                />
                <button type="submit" className="loginbtn">
                  빅스홀딩스 로그인
                </button>
                <button type="button" className="gobtn" onClick={() => navi('/join')}>
                  회원가입
                </button>
              </form>
            </div>
      </div>

        </LoginWrap>
    );
};

export default Login;