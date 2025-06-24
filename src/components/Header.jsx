import React, { useContext, useEffect, useRef, useState } from 'react';
import { DropWrap, HeaderWrap } from './headerStyle';
import { Link, useNavigate } from 'react-router-dom';
import bigs from '../assets/images/bigs.jpg'
import { TfiAlignJustify } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { StoreContext } from '../main';

const Header = () => {
    const navi = useNavigate();
    const menuRef = useRef();
    const { userStore } = useContext(StoreContext);


    const [menu , setMenu] = useState(false);
    const [drop , setDrop] = useState(false);

    useEffect(()=>{
        const click = e =>{
            if(menuRef.current && !menuRef.current.contains(e.target) &&
            !e.target.closest('.centerBtn') &&
            !e.target.closest('.userInfo')&&
            !e.target.closest('.userMenu')
        ){
            setMenu(false);
            setDrop(false);
                }
        };
        document.addEventListener('mousedown',click);
        return () =>{
            document.removeEventListener('mousedown',click);
        }
    },[])

    const logoutMenu = () =>{
        if(window.confirm('정말 로그아웃 하시겠습니까?')){
            userStore.logout();
            navi('/')
        }
    };

    return (
        <>
        <HeaderWrap>
            <div className='headerAll'>

                <div className='logo'>
                    <h1>
                        <Link to={'/'}>
                        <img src={bigs} alt="빅스홀딩스 로고" />
                        </Link>
                    </h1>
                </div>

                {menu && (
                    <DropWrap ref={menuRef}>
                    <ul>
                        <li onClick={()=> {navi('/board'); setMenu(false)}}>게시판</li>
                    </ul>
                    </DropWrap>
                )}
                
                <div className={`centerBtn  ${menu ? 'open' : ''}` }  onClick={() => setMenu(!menu)}>
                    <button className="menuBtn">
                      <i className="icon hamburger"><TfiAlignJustify /></i>
                      <i className="icon close"><FiX /></i>
                    </button>
                    <span className="companyText">
                       {window.innerWidth <= 480 ? '홀딩스' : '빅스 홀딩스'}
                    </span>
                </div>

                <div className="btn">
                {!userStore.user ? (
                    <>
                    <button onClick={()=>navi('/login')} >로그인</button>
                    <button onClick={()=>navi('/join')}>회원가입</button>
                    </>
                ) : (
                    <div className='userInfo' onClick={()=>setDrop(!drop)}>
                    <p className='username'>{userStore.user.username}</p>
                    <p className='email'>{userStore.user.email}</p>
                    
                    {drop && (
                        <div className='userMenu'>
                            <button onClick={logoutMenu}>로그아웃</button>
                        </div>
                    )}
                    
                    </div>
                )}
                </div>
                
            </div> 
        </HeaderWrap>

       
      
        </>
    );
};

export default Header;