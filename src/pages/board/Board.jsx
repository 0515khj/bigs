import React, { useEffect, useState } from 'react';
import { BoardWrap } from './boardStyle';
import api from '../../api/axiosInterceptor';
import { useNavigate } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import BoardEdit from './BoardEdit';

const Board = () => {

    const [list , setList] = useState([]);
    const [page , setPage] = useState(1);

    const [totalPage , setTotalPage] = useState(1);
    const navi = useNavigate();

    const boardList = async() =>{
        try {
            const response = await api.get(`/boards?page=${page -1}&size=10`);
            setList(response.data.content);
            setTotalPage(response.data.totalPages)
            // console.log(response);
        } catch (error) {
            console.log('목록 불러오기 실패',error);
        }
    };
    
    const pagiNation = (pages , index) =>{
        setPage(index);
    }

    useEffect(()=>{
        boardList();
    },[page]);

    const koreanCategory = {
        NOTICE: "공지",
        FREE: "자유",
        QNA: "질문",
        ETC: "기타"
    };


    return (
        <BoardWrap>
            <h2> 게시판</h2>
            <div className='listBox'>

            {list.length === 0 ? (
                <p className='noList'>게시글이 없습니다.</p>
            ) : (
                list.map((lists,index)=>(
                    <ul className='boardList' key={index}>
                        <li className='category'>{koreanCategory[lists.category]}</li>
                        <li className='title' onClick={()=>navi(`/board/${lists.id}`)}>{lists.title}</li>
                        <li className='date'>
                            {new Date(lists.createdAt).toISOString().slice(0, 10).replace(/-/g, ".")}
                        </li>
                    </ul>
                ))
            )}
            </div> {/* listBox end */}

            <Stack spacing={2}>
                <Pagination 
                  count={totalPage} 
                  page={page} 
                  onChange={pagiNation} 
                  shape="rounded" 
                />
            </Stack>
            
            <div className="btn">
            <button onClick={()=>navi(-1)}>이전</button>
            <button onClick={()=>navi('/boardcreate')}>글쓰기</button>
            </div>
            
        </BoardWrap>
    );
};

export default Board;