import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            {/* 푸터 */}
        </div>
    );
};

export default Layout;