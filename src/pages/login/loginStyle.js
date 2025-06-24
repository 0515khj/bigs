import styled from 'styled-components';


export const LoginWrap = styled.div`
.inner {
    width: 100%;

    .all {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
    }

    .loginform {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 50px;
        font-weight: 300;
        margin-bottom: 30px;
        text-align: center;
      }

      .back {
        background: #000;
        color: #fff;
        border: none;
        width: 60px;
        height: 30px;
        text-align: center;
        font-size: 17px;
        border-radius: 20px;
        line-height: 1;
        cursor: pointer;
        margin-bottom: 20px;
        &:hover {
          background: #00b0ff;
        }
      }

      .loginbtn {
        width: 357px;
        height: 45px;
        font-size: 20px;
        background: #000;
        color: #fff;
        cursor: pointer;
        border: none;
        transition: 0.3s;
        &:hover {
          background: #00b0ff;
        }
      }

      #email,
      #password {
        width: 350px;
        height: 40px;
        margin-bottom: 10px;
        padding-left: 10px;
      }

      .gobtn {
        width: 65px;
        font-size: 13px;
        background: #fff;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        &:hover {
          color: #00b0ff;
        }
      }
    }
  }

`