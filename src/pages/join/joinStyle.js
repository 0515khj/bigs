import styled from "styled-components";


export const JoinWrap = styled.div`
     .inner {
    width: 100%;

    .all {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
    }

    .joinform {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 50px;
        font-weight: 300;
        margin-bottom: 30px;
        text-align: center;
      }

      .info.ok{color:green}
      .info.no{color:red}

      .back {
        background: #000;
        color: #fff;
        border: none;
        width: 60px;
        height: 30px;
        font-size: 17px;
        border-radius: 20px;
        line-height: 1.5;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
          background: #00b0ff;
        }
      }

      .row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        label {
          display: inline-block;
          width: 100px;
          position: relative;
          margin-right: 20px;

          &::after {
            content: ":";
            position: absolute;
            right: -10px;
          }
        }

        input {
          width: 250px;
          height: 30px;
          padding-left: 10px;
        }
      }

      .info {
        margin-bottom: 10px;
        font-size: 13px;
        color: #666;
        text-align: left;
        padding-left: 130px;
      }

      .btns {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;

        button {
          width: 150px;
          height: 40px;
          border: none;
          border-radius: 8px;
          background: #000;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s;

          &:hover {
            background: #00b0ff;
          }
        }
      }
    }
  }

`