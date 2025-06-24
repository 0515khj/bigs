import styled from 'styled-components';

export const MainWrap = styled.div`
padding: 200px 20px;
  text-align: center;

  .hero {
    margin-bottom: 60px;
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      color: #666;
    }
  }

  .services {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }

  .card {
    width: 280px;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background: #fff;
    transition: 0.3s;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }
    h2 {
      margin: 15px 0;
    }
    p {
      font-size: 14px;
      color: #555;
    }
    .icon {
      font-size: 40px;
      color: #00b0ff;
    }
  }

  @media (max-width:480px) {
      padding: 70px 20px;
      .hero {
        h1{font-size:30px}
      }
    } // 모바일
    
    @media (min-width:481px) and (max-width:768px) {
      padding: 140px 20px;
      .hero {
        h1{font-size:35px}
      }
    } // 태블릿

    @media (min-width:1024px) {
      
    } // 컴퓨터 

`