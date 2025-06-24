import React from 'react';
import { FaLaptopCode, FaCogs, FaLightbulb } from 'react-icons/fa';
import { MainWrap } from './mainStyle';

const MainPage = () => {
    return (
        <MainWrap>
            <div className="hero">
              <h1>개발과 기술로 함께 성장하는  <strong>빅스홀딩스</strong></h1>
              <p>SI · ERP · CRM 등 전문 솔루션 개발 기업</p>
            </div>

            <section className="services">
              <div className="card">
                <FaLaptopCode className="icon" />
                <h2>정산/결제 백엔드</h2>
                <p>정산 및 결제 프로그램의 백엔드 시스템을 안정적으로 구축합니다.</p>
              </div>
              <div className="card">
                <FaCogs className="icon" />
                <h2>솔루션 유지보수</h2>
                <p>자사 솔루션 기반 프론트엔드 웹서비스 유지보수 및 개선 작업 수행.</p>
              </div>
              <div className="card">
                <FaLightbulb className="icon" />
                <h2>백엔드 프레임워크</h2>
                <p>최신 프레임워크를 활용한 고도화 백엔드 시스템 설계 및 개발.</p>
              </div>
            </section>
        </MainWrap>
    );
};

export default MainPage;