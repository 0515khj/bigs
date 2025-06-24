import styled from 'styled-components';

export const BoardWrap = styled.div`
height: calc(100vh - 150px);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
h2{ font-size:30px; }
.noList{
    font-size: 30px;
}
.btn{
    display: flex;
    gap: 10px;

    button{
        margin-top:20px ;
        border-radius: 8px;
        width: 100px; height: 30px; font-size:15px;
        background: none;
        border: 1px solid #64B5F6;
        cursor: pointer;
        &:hover{
            background: #64B5F6;
            color: #fff;
        }
    }
} 

.listBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
}
.boardList{
    width: 60%;
    height: 7%;
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;
    position: relative;
    cursor: pointer;

    &:last-child {
        border-bottom: 1px solid #ccc;
    }

    &:hover{
        background: #E3F2FD;
    }
    &:hover .title {
        border-bottom: 1.5px solid #000;
        
    }


    .category{
        padding-left: 5px;
        width: 12%;
        color: #999;
    }
    .title{
        font-weight: 500;
    }
    .date{position:absolute; right: 0;
    width: 10%;
    }
}

`
// -------------------------------------------

export const BoardCreateWrap = styled.div`
width: 100%;
  height: 800px;
display: flex;
flex-direction: column;
  h2{
    width: 100%;
    height: 20%;
    font-size:25px;
    display: flex;
    align-items: center;
    justify-content: center;
    }

  .boardcreate {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .titleBox {
    display: flex;
    width: 80%;
  }

  .category {
    width: 200px;
    height: 100px;
    border: 1px solid #000;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .title {
    border: 1px solid #000;
    padding-left: 10px;
    width: 100%;
    font-size: 20px;
  }

  .content {
    width: 80%;
    height: 400px;
    border: 1px solid #000;
    border-top: none;
    padding: 10px;
    font-size: 16px;
    resize: none;
  }

  .btns {
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 10px;

    button {
      width: 50px;
      height: 30px;
      border: 1px solid #64B5F6;
      background: none;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background: #64b5f6;
        color: #fff;
      }
    }
  }

`

// -------------------------------------------

export const BoardDetailWrap = styled.div`
width: 100%;
height: 800px;
display: flex;
.detailMain{
    width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    .titleBox{ display:flex;
        width: 80%;
    }
    .category{
        width: 200px; height: 100px;
        border: 1px solid #000;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;

    }
    .title{border: 1px solid #000;
        display: flex;
        align-items: center;
        padding-left: 10px;
       width : 100%;
    }
    .content{
        width: 80%;
        height: 400px;
        border: 1px solid #000;
        border-top : none;
        padding: 10px;
    }
    .dateBox{
        width: 80%;
        padding-top: 10px;
        display: flex;
        justify-content: flex-start;
        .date{

        }
    }
     .btns {
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 10px;

    button {
      width: 50px;
      height: 30px;
      border: 1px solid #64B5F6;
      background: none;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background: #64b5f6;
        color: #fff;
      }
    }
  }

}

`

// -------------------------------------------

export const BoardEditWrap = styled.div`

width: 100%;
  height: 800px;
display: flex;
flex-direction: column;
  h2{
    width: 100%;
    height: 20%;
    font-size:25px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 50px; */
    }

  .editMain {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .titleBox {
    display: flex;
    width: 80%;
  }

  .category {
    width: 200px;
    height: 100px;
    border: 1px solid #000;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .title {
    border: 1px solid #000;
    padding-left: 10px;
    width: 100%;
    font-size: 20px;
  }

  .content {
    width: 80%;
    height: 400px;
    border: 1px solid #000;
    border-top: none;
    padding: 10px;
    font-size: 16px;
    resize: none;
  }

  .btns {
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 10px;

    button {
      width: 50px;
      height: 30px;
      border: 1px solid #64B5F6;
      background: none;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background: #64b5f6;
        color: #fff;
      }
    }
  }

`