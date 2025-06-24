import React, { useEffect, useRef, useState } from 'react';
import { JoinWrap } from './joinStyle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Join = () => {
    const [Jdata,setJdata] = useState({
        name:'',
        username:'',
        password:'',
        confirmPassword:''
    });
    const [pwCheck , setPwCheck] = useState(''); 
    const [pwLength, setPwLength] = useState(''); 
    const [colorCheck , setColorCheck] = useState(false);

    const usernameRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const navi = useNavigate();


  const JoinInfo = async() =>{

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailCheck.test(Jdata.username)){
        alert('이메일 형식으로 작성해주세요.')
        usernameRef.current.focus();
        return;
    };
    
    if(Jdata.name.trim() === ''){
        alert('이름을 입력해주세요.')
        nameRef.current.focus();
        return;
    }
    
    if(Jdata.password === '' || Jdata.confirmPassword === ''){
        alert('비밀번호를 입력해주세요.');
        passwordRef.current.focus();
        return;
    }

    try {
        await axios.post('https://front-mission.bigs.or.kr/auth/signup',{
            username:Jdata.username.trim(),
            name : Jdata.name.trim(),
            password : Jdata.password.trim(),
            confirmPassword: Jdata.confirmPassword.trim()
        });
        alert('회원가입이 되었습니다.')
        navi('/login')
    } catch (error) {
        console.log('에러',error);
    }

  } // JoinInfo end ------------

  useEffect(()=>{
    const pw = Jdata.password;
    const confirm = Jdata.confirmPassword;

    const pwCk = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!%*#?&])[A-Za-z\d!@%*#?&]{8,}$/.test(pw);

    if(pw){
        if(pwCk){
            setPwLength('비밀번호 사용가능');
        }else{
        setPwLength(' 8자 이상, 숫자, 영문자, 특수문자(! % * # ? &) 1개 이상의 조합')
      }
    }else{
        setPwLength('');
    }

    if(confirm){
        if(pw === confirm){
            setPwCheck('비밀번호가 일치합니다.');
            setColorCheck(true);
        }else{
            setPwCheck('비밀번호가 일치하지 않습니다.')
            setColorCheck(false);
        }
    }else{
        setPwCheck('');
    }
  },[Jdata.password , Jdata.confirmPassword]) // effect end -------------
  
  const InputInfo = e =>{
    const {name , value} = e.target;

    setJdata(data => ({
        ...data, [name] : value,
    }));

  }; // InputInfo end ------------


    return (
        <JoinWrap>
            <div className="inner">
                <div className="all">
                  <form className="joinform" onSubmit={e => { e.preventDefault(); JoinInfo(); }}>
                    <button type="button" className="back" onClick={() => navi(-1)}><FaArrowLeft /></button>

                    <h1>회원가입</h1>

                    <div className="row">
                        <label>아이디</label>
                        <input type="email" name="username" placeholder="developer@bigs.or.kr" ref={usernameRef} value={Jdata.username} onChange={InputInfo} />
                    </div>

                    <div className="row">
                        <label>이름</label>
                        <input type="text" name="name" placeholder="홀딩스" ref={nameRef} value={Jdata.name} onChange={InputInfo} />
                    </div>

                    <div className="row">
                        <label>비밀번호</label>
                        <input type="password" name="password" placeholder="비밀번호" ref={passwordRef} value={Jdata.password} onChange={InputInfo} />
                    </div>

                    <span className="info">{pwLength}</span>

                    <div className="row">
                        <label>비밀번호 확인</label>
                        <input type="password" name="confirmPassword" placeholder="비밀번호 확인" ref={confirmRef} value={Jdata.confirmPassword} onChange={InputInfo} />
                    </div>

                    <span className={`info ${colorCheck === true ? 'ok' : colorCheck === false ? 'no' : ''}`}>{pwCheck}</span>

                    <div className="btns">
                      <button type="submit">회원가입</button>
                      <button type="button" onClick={() => navi('/')}>취소</button>
                    </div>
                  </form>
                </div>
            </div>
        </JoinWrap>
    );
};

export default Join;