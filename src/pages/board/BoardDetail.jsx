import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/axiosInterceptor';
import { BoardDetailWrap } from './boardStyle';

const BoardDetail = () => {
    
    const [data , setData] = useState(null);
    // const userId = sessionStorage.getItem('userId');

    const {id} = useParams();
    const navi = useNavigate();

    useEffect(()=>{
        const detail = async() =>{
            const res = await api.get(`/boards/${id}`);
            setData(res.data);
        }
        detail();
    },[id])

    const dataDelete = async() =>{
        const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
        if(!confirmDelete) return;

        try {
            await api.delete(`/boards/${id}`);
            console.log('삭제 완료')
            navi('/board')
        } catch (error) {
            console.log('삭제 오류',error);
        }
    }

    const koreanCategory = {
        NOTICE: "공지",
        FREE: "자유",
        QNA: "질문",
        ETC: "기타"
    };
    
    if (!data) return <p>로딩 중...</p>;


    return (
        <BoardDetailWrap>
            <div className='detailMain'>

                <div className="titleBox">
                    <p className='category'>{koreanCategory[data.boardCategory]}</p>
                    <p className='title'> {data.title}</p>
                </div>

                <p className='content'>{data.content}</p>

                <div className="dateBox">
                <p className='date'>작성일 {new Date(data.createdAt).toLocaleString('ko-KR', {
                    year:'numeric',
                    month:'2-digit',
                    day:'2-digit',
                    hour:'2-digit',
                    minute:'2-digit'
                })}</p>
                </div>

                <div className="btns">
                    <button onClick={()=> navi('/board')}>목록</button>
                    <button onClick={()=> navi(`/board/edit/${id}`,{state: data})}>수정</button>
                    <button onClick={dataDelete}>삭제</button>
                </div>

            </div>{/* Main end */}
        </BoardDetailWrap>
    );
};

export default BoardDetail;