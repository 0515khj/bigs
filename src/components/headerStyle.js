import styled from 'styled-components'

export const HeaderWrap = styled.header`


.headerAll{ 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    height: 70px;
    position: relative;

      

    .btn{ width:7%;
      button{ background: none;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          background: #000;
          color: #fff;
        }
      }
      .userInfo {
        text-align: center;
        line-height: 1.3;
        cursor: pointer;

        .userMenu {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border: 1px solid #ccc;
          padding: 10px;
          z-index: 99;
          margin-top: 5px;
        }
      }
      .username {
        font-weight: bold;
      }
      .email {
        font-size: 12px;
        color: gray;
      }
    }

    h1{
        img{ width:100px;}
    }
    span , p {
        font-size: 20px;
    }

    .centerBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

    .companyText {font-size:20px;}
    .menuBtn{
        position: relative;
        background: none;
        border: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          position: absolute;
          top: 8px;
          left: 0;
          font-size: 20px;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
    
        .hamburger {
          transform: rotate(0deg);
          opacity: 1;
        }
    
        .close {
          transform: rotate(90deg);
          opacity: 0;
        }
    
        &.open {
          .hamburger {
            transform: rotate(180deg);
            opacity: 0;
          }
      
          .close {
            transform: rotate(0deg);
            opacity: 1;
          }
        }
    
      }
    }
    }
    @media (max-width:480px) {

      .headerAll {
    height: 70px;
    padding-right: 30px;

  }
   h1 {
    img {
      width: 70px;
    }
  }
.centerBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .companyText {
      font-size: 10px; 
    }

    .menuBtn {
      width: 20px;
      height: 20px;

      .icon {
        font-size: 15px;
      }
    }
  }

  .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column; 
    button {
      width: 60px;
      font-size: 12px;
    }
    .userInfo {
        width: 80px ;
        display: flex;
        flex-direction: column;
      .username {
        font-size: 14px;
      }

      .email {
        color: #ccc;
        max-width: 100%;           
        word-break: break-word;    
        white-space: normal;      
        overflow-wrap: break-word;
      }
    }
  }

    } // 모바일

    @media (min-width:481px) and (max-width:768px) {
      .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

    button {
      width: 70px;
      font-size: 14px;
    }

    .userInfo {
      width: 90px;
      display: flex;
      flex-direction: column;

      .username {
        font-size: 14px;
      }

      .email {
        font-size: 12px;
        color: gray;
        word-break: break-word;
        white-space: normal;
        overflow-wrap: break-word;
      }
    }
  }
      .centerBtn {
        .companyText {
          font-size: 14px; 
        }
      }
    } // 태블릿

    @media (min-width:1024px) {
      
    } // 컴퓨터

`
export const DropWrap = styled.nav`

 position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%); // 가운데 정렬
  width: 100%;
  background: #f8f8f8;
  border-bottom: 1px solid #ccc;
  z-index: 999;


ul{
    display:flex; 
    gap:30px; 
    padding: 15px 30px; 
    margin: 0;
    list-style: none;
}
li {
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
    &:hover{
        color: royalblue;
    }
}

  @media (max-width:480px) {
      
    } // 모바일
    
    @media (max-width:768px) {
      
    } // 태블릿

    @media (min-width:1024px) {
      
    } // 컴퓨터

`